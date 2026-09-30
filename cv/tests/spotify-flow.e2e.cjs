// Browser -> local Vercel-compatible HTTP adapter -> real listening handler.
// Only Spotify/OAuth and unrelated outbound analytics/image requests are mocked.
// Run: node cv/tests/spotify-flow.e2e.cjs [--baseline]
// Prerequisites: Playwright available to Node, Chromium at /usr/bin/chromium.
// Evidence: SPOTIFY_EVIDENCE_DIR (default /tmp/spotify-flow-evidence).
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '../..');
const baseline = process.argv.includes('--baseline');
const revision = baseline ? '773c38e' : execFileSync('git', ['rev-parse', 'HEAD'], {cwd: root, encoding:'utf8'}).trim();
const evidence = process.env.SPOTIFY_EVIDENCE_DIR || '/tmp/spotify-flow-evidence';
fs.mkdirSync(evidence, {recursive:true});
const report = {revision, baseline, timestamp:new Date().toISOString(), node:process.version,
  patchSha256:crypto.createHash('sha256').update(execFileSync('git',['diff','HEAD'],{cwd:root})).digest('hex'),
  testSha256:crypto.createHash('sha256').update(fs.readFileSync(__filename)).digest('hex'),
  boundaries:'Real browser and HTTP API; Spotify/OAuth fixtures, no production data or credentials; local adapter does not simulate Vercel CDN or multiple workers.', scenarios:[]};
const realFetch = global.fetch;
let mode = 'playing', calls = [], browserRequests = [], handler;
const fixtureTrack = (id, name) => ({id, type:'track', name, artists:[{name:'Fixture Artist'}],
  album:{name:'Fixture Album', images:[], external_urls:{spotify:'https://open.spotify.com/album/fixture'}},
  duration_ms:240000, external_urls:{spotify:'https://open.spotify.com/track/'+id}});
const json = (body, status=200, headers={}) => new Response(JSON.stringify(body), {status, headers:{'content-type':'application/json', ...headers}});
function reset(next) {
  mode=next; calls=[];
  for (const name of ['../api/listening', '../lib/spotify']) delete require.cache[require.resolve(name)];
  process.env.SPOTIFY_CLIENT_ID='fixture-client'; process.env.SPOTIFY_CLIENT_SECRET='fixture-secret';
  process.env.SPOTIFY_REDIRECT_URI='https://example.com/callback'; process.env.SPOTIFY_REFRESH_TOKEN='fixture-refresh';
  handler=require('../api/listening');
}
global.fetch = async (url) => {
  const href=String(url); calls.push(href);
  if(href.includes('accounts.spotify.com/api/token')) return json({access_token:'fixture-access', expires_in:3600});
  if(href.includes('currently-playing')) {
    if(mode==='limited') return json({error:{status:429}},429,{'retry-after':'7200'});
    if(mode==='idle') return new Response(null,{status:204});
    if(mode==='failure') throw new Error('fixture network unavailable');
    return json({is_playing:mode!=='paused', progress_ms:60000, item:fixtureTrack('live','Live Fixture Song')});
  }
  if(href.includes('recently-played')) return json({items:[
    {track:fixtureTrack('recent','Last Fixture Song'), played_at:'2026-09-29T10:00:00Z'},
    {track:fixtureTrack('recent','Last Fixture Song'), played_at:'2026-09-29T09:00:00Z'},
  ]});
  throw new Error('Unexpected upstream request');
};
const count = (part) => calls.filter(url=>url.includes(part)).length;
const mime = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.woff2':'font/woff2','.webp':'image/webp'};
const server=http.createServer(async(req,res)=>{
  const url=new URL(req.url,'http://localhost');
  if(url.pathname==='/api/listening'){
    browserRequests.push(url.search);
    req.query=Object.fromEntries(url.searchParams);
    res.status=function(code){res.statusCode=code;return res;};
    res.json=function(value){res.setHeader('content-type','application/json');res.end(JSON.stringify(value));};
    await handler(req,res);return;
  }
  try {
    let relative=decodeURIComponent(url.pathname).replace(/^\/+/, '');
    if(!relative||relative.endsWith('/')) relative+='index.html';
    const filename=path.resolve(root,'cv',relative);
    if(!filename.startsWith(path.join(root,'cv')+path.sep)) throw new Error('Invalid path');
    const bytes=baseline ? execFileSync('git',['show',revision+':cv/'+relative],{cwd:root,stdio:['ignore','pipe','ignore']}) : fs.readFileSync(filename);
    res.setHeader('content-type',mime[path.extname(filename)]||'application/octet-stream');res.end(bytes);
  }catch{res.statusCode=404;res.end('Not found');}
});
let origin, browser;
async function check(name, run) {
  const item={name, result:'not run'};report.scenarios.push(item);
  try{await run();item.result='pass';}catch(error){item.result='fail';item.error=error.message;}
  console.log(item.result.toUpperCase()+': '+name);
}
async function api(view='') {
  const response=await realFetch(origin+'/api/listening'+(view?'?view='+view:''));
  return {response, body:await response.json()};
}
(async()=>{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));origin='http://127.0.0.1:'+server.address().port;
  reset('playing');
  await check('Concurrent public requests share playback, history, and OAuth work',async()=>{
    const results=await Promise.all(Array.from({length:8},()=>api()));
    assert.ok(results.every(x=>x.body.track?.name==='Live Fixture Song'));
    assert.equal(count('currently-playing'),1);assert.equal(count('recently-played'),1);assert.equal(count('/api/token'),1);
  });
  reset('idle');
  await check('Current-only idle request does not fetch history',async()=>{
    const {body}=await api('current');assert.equal(body.status,'offline');assert.equal(count('recently-played'),0);
  });
  reset('idle');
  await check('Idle combined snapshot retains last played song and is cached for five minutes',async()=>{
    const first=await api();await api();assert.equal(first.body.track.name,'Last Fixture Song');
    assert.match(first.response.headers.get('vercel-cdn-cache-control'),/s-maxage=300/);
    assert.equal(count('currently-playing'),1);assert.equal(count('recently-played'),1);
  });
  reset('limited');
  await check('Two-hour cooldown is shared by API views and returned as a cacheable snapshot',async()=>{
    const first=await api('current');await api('recent');await api();
    assert.equal(first.response.status,200);assert.equal(first.body.status,'rate_limited');
    assert.ok(first.body.retryAt>Date.now()+7100000);assert.match(first.response.headers.get('vercel-cdn-cache-control'),/s-maxage=7200/);
    assert.equal(count('currently-playing'),1);assert.equal(count('recently-played'),0);
  });
  browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
  report.chromium=browser.version();
  const context=await browser.newContext({viewport:{width:1280,height:900}});
  await context.route('**/*',route=>route.request().url().startsWith(origin)?route.continue():route.fulfill({status:204,body:''}));
  await context.addInitScript(()=>{
    window.__registered=[];
    // Native WebMCP registration uses an AbortSignal for removal (spec
    // webmachinelearning/webmcp index.bs, RegisterToolOptions), as does the SDK.
    Object.defineProperty(navigator,'modelContext',{value:{registerTool(tool,options={}){
      if(options.signal?.aborted) return;
      if(window.__registered.includes(tool.name)) throw new Error('Duplicate tool registration');
      window.__registered.push(tool.name);
      options.signal?.addEventListener('abort',()=>{
        window.__registered=window.__registered.filter(name=>name!==tool.name);
      },{once:true});
    }}});
  });
  const page=await context.newPage();const errors=[];page.on('pageerror',error=>errors.push(error.message));
  page.setDefaultTimeout(5000);
  await page.clock.install();
  reset('idle');browserRequests=[];
  await check('Panel waits until near viewport and uses one canonical request',async()=>{
    await page.goto(origin);await page.clock.runFor(11000);
    assert.equal(browserRequests.length,0,'Offscreen Spotify must not poll');
    await page.locator('[data-listening]').scrollIntoViewIfNeeded();
    await page.waitForFunction(()=>document.querySelector('[data-listening-current-title]').textContent==='Last Fixture Song');
    assert.deepEqual(browserRequests,['']);
    await page.clock.runFor(60000);assert.equal(browserRequests.length,1,'Idle panel must not poll every few seconds');
    assert.equal(await page.locator('[data-listening-current-label]').textContent(),'Last played');
    await page.locator('[data-listening-history]').evaluate(el=>el.open=true);
    await page.screenshot({path:path.join(evidence,'idle-desktop.png'),fullPage:true});
    await page.locator('[data-listening]').screenshot({path:path.join(evidence,'idle-panel-desktop.png')});
  });
  await check('Refresh and cooldown survive reload without duplicate requests or live labels',async()=>{
    reset('limited');await page.clock.runFor(300000);
    await page.waitForFunction(()=>document.querySelector('[data-listening-status]').textContent==='saved');
    const before=browserRequests.length;
    await page.locator('[data-listening-refresh]').evaluate(el=>el.click());
    await page.clock.runFor(60000);assert.equal(browserRequests.length,before);
    await page.reload();await page.locator('[data-listening]').scrollIntoViewIfNeeded();await page.clock.runFor(10000);
    assert.equal(browserRequests.length,before,'Reload must preserve cooldown');
    assert.equal(await page.locator('[data-listening-current-title]').textContent(),'Last Fixture Song');
    assert.notEqual(await page.locator('[data-listening-current-label]').textContent(),'Playing now');
    assert.equal(await page.locator('[data-listening-note]').isVisible(),true);
    assert.equal(await page.locator('[data-listening-refresh]').isDisabled(),true);
  });
  await check('Mobile saved state fits and all six WebMCP tools register without browser errors',async()=>{
    await page.setViewportSize({width:375,height:812});await page.locator('[data-listening]').scrollIntoViewIfNeeded();
    assert.equal(await page.evaluate(()=>window.__registered.length),6);
    assert.deepEqual(errors,[]);
    const fits=await page.locator('[data-listening]').evaluate(el=>el.scrollWidth<=el.clientWidth);assert.equal(fits,true);
    await page.screenshot({path:path.join(evidence,'saved-mobile.png'),fullPage:true});
    await page.locator('[data-listening]').screenshot({path:path.join(evidence,'saved-panel-mobile.png')});
  });
  await check('WebMCP restoration lifecycle registers six unique tools again',async()=>{
    await page.evaluate(()=>window.dispatchEvent(new PageTransitionEvent('pagehide',{persisted:true})));
    await page.waitForFunction(()=>window.__registered.length===0);
    await page.evaluate(()=>window.dispatchEvent(new PageTransitionEvent('pageshow',{persisted:true})));
    await page.waitForFunction(()=>window.__registered.length===6);
    assert.equal(await page.evaluate(()=>new Set(window.__registered).size),6);
  });
  await context.close();
  const liveContext=await browser.newContext({viewport:{width:1280,height:900}});
  await liveContext.route('**/*',route=>route.request().url().startsWith(origin)?route.continue():route.fulfill({status:204,body:''}));
  const livePage=await liveContext.newPage();livePage.setDefaultTimeout(5000);
  await livePage.clock.install();reset('playing');
  await check('Playing progress advances locally and offline lifecycle stays saved',async()=>{
    await livePage.goto(origin);await livePage.locator('[data-listening]').scrollIntoViewIfNeeded();
    await livePage.waitForFunction(()=>document.querySelector('[data-listening-current-label]').textContent==='Playing now');
    const before=browserRequests.length;
    const initial=await livePage.locator('[data-listening-progress]').evaluate(el=>parseFloat(el.style.width));
    await livePage.clock.runFor(1000);
    assert.ok(await livePage.locator('[data-listening-progress]').evaluate(el=>parseFloat(el.style.width))>initial);
    assert.equal(browserRequests.length,before);
    await livePage.locator('[data-listening]').screenshot({path:path.join(evidence,'playing-panel-desktop.png')});
    await liveContext.setOffline(true);
    await livePage.evaluate(()=>document.dispatchEvent(new Event('visibilitychange')));
    assert.equal(await livePage.locator('[data-listening-current-label]').textContent(),'Last played');
    assert.notEqual(await livePage.locator('[data-listening-status]').textContent(),'live');
    assert.equal(await livePage.locator('[data-listening-progress-wrap]').isHidden(),true);
  });
  await liveContext.setOffline(false);
  await check('An older response cannot erase another tab cooldown',async()=>{
    let release;const held=new Promise(resolve=>release=resolve);
    await livePage.route('**/api/listening',async route=>{
      const response=await route.fetch();await held;await route.fulfill({response});
    });
    const requested=livePage.waitForRequest(req=>req.url()===origin+'/api/listening',{timeout:15000});
    requested.catch(()=>{});
    await livePage.clock.fastForward(31000);await requested;
    const otherTab=await liveContext.newPage();await otherTab.goto(origin+'/privacy/');
    const cooldown=await otherTab.evaluate(()=>{
      const key='pkm.spotify.snapshot.v2', saved=JSON.parse(localStorage.getItem(key));
      saved.retryAt=Date.now()+7200000;saved.nextCheckAt=saved.retryAt;
      localStorage.setItem(key,JSON.stringify(saved));return saved.retryAt;
    });
    await livePage.waitForFunction(()=>document.querySelector('[data-listening-status]').textContent==='saved');
    release();await livePage.waitForFunction(()=>document.querySelector('[data-listening]').getAttribute('aria-busy')==='false');
    const stored=await livePage.evaluate(()=>JSON.parse(localStorage.getItem('pkm.spotify.snapshot.v2')));
    assert.ok(stored.retryAt>=cooldown);
    assert.notEqual(await livePage.locator('[data-listening-status]').textContent(),'live');
    await otherTab.close();
  });
  await liveContext.close();
})().catch(error=>{report.fatal=error.stack;process.exitCode=1;}).finally(async()=>{
  if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));global.fetch=realFetch;
  fs.writeFileSync(path.join(evidence,'report.json'),JSON.stringify(report,null,2));
  if(report.scenarios.some(item=>item.result!=='pass'))process.exitCode=1;
  console.log('Evidence: '+evidence);
});
