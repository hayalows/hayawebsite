// Real browser -> actual portfolio/playground files. No application internals mocked.
// Run from repo root: PLAYGROUND_EVIDENCE_DIR=/tmp/pkm-playground node cv/tests/playground-flow.e2e.cjs
// Requires Playwright and /usr/bin/chromium. Disposable browser storage only.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const crypto = require('node:crypto');
const {execFileSync} = require('node:child_process');
const {chromium} = require('playwright');
const root = path.resolve(__dirname,'../..'), cv = path.join(root,'cv');
const evidence = process.env.PLAYGROUND_EVIDENCE_DIR || '/tmp/pkm-playground';
fs.mkdirSync(evidence,{recursive:true});
const revision = execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();
const hash = crypto.createHash('sha256');
for(const filename of fs.readdirSync(path.join(cv,'playground')).sort()) hash.update(fs.readFileSync(path.join(cv,'playground',filename)));
const report = {revision,timestamp:new Date().toISOString(),node:process.version,
  playgroundSha256:hash.digest('hex'),patchSha256:crypto.createHash('sha256').update(execFileSync('git',['diff','HEAD'],{cwd:root})).digest('hex'),
  testSha256:crypto.createHash('sha256').update(fs.readFileSync(__filename)).digest('hex'),
  boundaries:'Real static HTTP server and Chromium, native dialogs and actual PNG download. External network and unrelated /api calls blocked. Native WebMCP registration uses an AbortSignal-compatible browser fixture. Storage/export failure scenarios inject the named browser failures. No production data, CDN, assistive-technology or field-performance verification.',scenarios:[]};
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json','.webp':'image/webp','.xml':'application/xml','.txt':'text/plain'};
const server=http.createServer((req,res)=>{
  try{
    const url=new URL(req.url,'http://localhost');let relative=decodeURIComponent(url.pathname).replace(/^\/+/, '');
    if(!relative||relative.endsWith('/')) relative+='index.html';
    const filename=path.resolve(cv,relative);if(!filename.startsWith(cv+path.sep))throw Error('Outside fixture');
    res.setHeader('content-type',mime[path.extname(filename)]||'application/octet-stream');res.end(fs.readFileSync(filename));
  }catch{res.statusCode=404;res.end('Not found');}
});
let browser,origin; const contexts=[];let listeningRequests=0;
async function check(name,fn){
  const scenario={name,result:'not run'};report.scenarios.push(scenario);
  try{await fn();scenario.result='pass';}catch(error){scenario.result='fail';scenario.error=error.message;console.log(error.stack);
    // Restore the real UI after a failed check so independent scenarios can run.
    for(const ctx of contexts)for(const p of ctx.pages())await p.evaluate(()=>document.querySelectorAll('dialog[open]').forEach(dialog=>dialog.close())).catch(()=>{});
  }
  console.log(scenario.result.toUpperCase()+': '+name);
}
async function context(options={}){
  const ctx=await browser.newContext({viewport:{width:1280,height:960},acceptDownloads:true,...options});contexts.push(ctx);
  await ctx.route('**/*',route=>{
    const url=route.request().url();
    if(url.includes('/api/listening'))listeningRequests++;
    return url.startsWith(origin)&&!url.includes('/api/')?route.continue():route.fulfill({status:204,body:''});
  });
  await ctx.addInitScript(()=>{
    window.__registered=[];
    Object.defineProperty(navigator,'modelContext',{value:{registerTool(tool,options={}){
      if(options.signal?.aborted)return;
      if(window.__registered.includes(tool.name))throw Error('Duplicate registration');
      window.__registered.push(tool.name);
      options.signal?.addEventListener('abort',()=>{window.__registered=window.__registered.filter(name=>name!==tool.name);},{once:true});
    }}});
  });
  return ctx;
}
const corner=(page,name)=>page.locator('.room-objects [data-open="'+name+'"]');
async function open(page,name){await corner(page,name).click();await assertDialog(page,name);}
async function assertDialog(page,name){assert.equal(await page.locator('dialog[open]').count(),1);assert.equal(await page.locator('#'+name+'-dialog').evaluate(el=>el.open),true);}
async function png(page,file){
  const download=page.waitForEvent('download');await page.locator('#download-postcard').click();
  const saved=await download;assert.equal(saved.suggestedFilename(),'pkm-playground-postcard.png');await saved.saveAs(file);
  const bytes=fs.readFileSync(file);assert.equal(bytes.subarray(0,8).toString('hex'),'89504e470d0a1a0a');
  assert.equal(bytes.readUInt32BE(16),1600);assert.equal(bytes.readUInt32BE(20),1000);
  const dimensions=await page.evaluate(async raw=>{
    const url=URL.createObjectURL(new Blob([new Uint8Array(raw)],{type:'image/png'}));
    const img=new Image();img.src=url;await img.decode();const result=[img.naturalWidth,img.naturalHeight];URL.revokeObjectURL(url);return result;
  },Array.from(bytes));assert.deepEqual(dimensions,[1600,1000]);
}
(async()=>{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));origin='http://127.0.0.1:'+server.address().port;
  browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']});report.chromium=browser.version();
  const ctx=await context(), page=await ctx.newPage();page.setDefaultTimeout(5000);const errors=[];page.on('pageerror',e=>errors.push(e.message));const requests=[];page.on('request',req=>requests.push(req.url()));
  await check('Portfolio invitation is discoverable and loads playground only on navigation',async()=>{
    await page.goto(origin);assert.equal(requests.some(url=>url.includes('/playground/')),false);
    assert.equal(await page.locator('.hero-actions a[href="resume/"]').count(),1);
    assert.equal(await page.locator('.hero-actions a[href="mailto:mpapakojo@gmail.com"]').count(),1);
    await page.locator('.playground-invitation').click();await page.waitForURL('**/playground/');
    await page.waitForFunction(()=>!document.querySelector('.room-object').disabled);
    assert.equal(await page.locator('.room-object').count(),4);
    await page.screenshot({path:path.join(evidence,'room-desktop.png'),fullPage:true});
  });
  await check('Four named corners and six WebMCP tools work without listening requests or browser errors',async()=>{
    await page.waitForFunction(()=>window.__registered.length===6);
    assert.equal(await page.evaluate(()=>new Set(window.__registered).size),6);
    for(const name of ['lab','map','music','postcard'])assert.ok(await corner(page,name).getAttribute('data-open'));
    assert.equal(listeningRequests,0);assert.deepEqual(errors,[]);
  });
  await check('Dialogs contain keyboard focus and Escape restores the exact opener',async()=>{
    for(const name of ['lab','map','music','postcard']){
      await open(page,name);
      for(let i=0;i<14;i++){
        await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.querySelector('dialog[open]').contains(document.activeElement)),true,'Focus escaped '+name+' at Tab '+i+' to '+await page.evaluate(()=>document.activeElement.tagName+'#'+document.activeElement.id));
      }
      for(let i=0;i<14;i++){
        await page.keyboard.press('Shift+Tab');assert.equal(await page.evaluate(()=>document.querySelector('dialog[open]').contains(document.activeElement)),true,'Reverse focus escaped '+name);
      }
      await page.keyboard.press('Escape');await page.waitForFunction(()=>!document.querySelector('dialog[open]'));
      assert.equal(await corner(page,name).evaluate(el=>el===document.activeElement),true);
    }
    assert.equal(await page.locator('#room-progress').textContent(),'4 of 4 corners explored');
  });
  await check('Postcard before completion has no earned stamp and exports a real PNG',async()=>{
    await open(page,'postcard');assert.match(await page.locator('#card-stamp').textContent(),/postcard from/i);
    await png(page,path.join(evidence,'postcard-before.png'));await page.keyboard.press('Escape');
  });
  await check('Specific feedback and reversible filters narrow eight sessions to one correct answer',async()=>{
    await open(page,'lab');assert.equal(await page.locator('[data-session]').count(),8);
    await page.locator('[data-session="mina"]').click();assert.match(await page.locator('#lab-feedback').textContent(),/Tuesday.*Thursday/);
    await page.locator('[data-filter="day"]').click();assert.equal(await page.locator('[data-session]').count(),6);
    await page.locator('[data-filter="window"]').click();assert.equal(await page.locator('[data-session]').count(),2);
    await page.locator('[data-session="lina"]').click();assert.match(await page.locator('#lab-feedback').textContent(),/30 minutes/);
    await page.locator('[data-filter="duration"]').click();assert.equal(await page.locator('[data-session]').count(),1);
    await page.locator('[data-filter="duration"]').click();assert.equal(await page.locator('[data-session]').count(),2);
    await page.locator('[data-filter="duration"]').click();await page.locator('#lab-dialog').screenshot({path:path.join(evidence,'lab-filtered.png')});
    await page.locator('[data-session="ayo"]').click();assert.equal(await page.locator('#lab-result').isVisible(),true);
    assert.equal(await page.locator('#lab-result a').getAttribute('href'),'../projects/#english-chat');
    await page.locator('#lab-dialog').screenshot({path:path.join(evidence,'lab-complete.png')});
  });
  await check('Win opens one postcard dialog with safe personalisation and a decodable earned PNG',async()=>{
    await page.locator('#lab-result [data-open="postcard"]').click();await assertDialog(page,'postcard');
    await page.locator('#postcard-name').fill('A curious visitor');await page.locator('[data-palette="ocean"]').click();
    assert.equal(await page.locator('#card-recipient').textContent(),'For A curious visitor');assert.match(await page.locator('#card-stamp').textContent(),/untangled/);
    await page.locator('#postcard-message').selectOption('curiosity');assert.match(await page.locator('#card-message').textContent(),/curiosity/);
    await page.locator('#postcard-message').selectOption('default');
    await page.locator('#postcard-dialog').screenshot({path:path.join(evidence,'postcard-desktop.png')});
    await png(page,path.join(evidence,'postcard-earned.png'));
    assert.match(await page.locator('#export-status').textContent(),/ready/);
    const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('pkm.playground.v1')));assert.equal(saved.completed,true);assert.equal(saved.palette,'ocean');assert.equal(JSON.stringify(saved).includes('curious visitor'),false);
    await page.locator('#postcard-name').fill('<svg onload=alert(1)>');assert.match(await page.locator('#card-recipient').textContent(),/<svg/);assert.equal(await page.locator('#card-recipient svg').count(),0);
    await page.keyboard.press('Escape');
  });
  await check('Completion and palette survive reload, name stays ephemeral, replay remains usable',async()=>{
    await page.reload();assert.equal(await page.locator('dialog[open]').count(),0);assert.match(await corner(page,'lab').textContent(),/completed/);
    await open(page,'postcard');assert.equal(await page.locator('#postcard-name').inputValue(),'');assert.equal(await page.locator('[data-palette="ocean"]').getAttribute('aria-pressed'),'true');await page.keyboard.press('Escape');
    await open(page,'lab');assert.equal(await page.locator('#lab-result').isVisible(),true);await page.locator('[data-replay]').click();assert.equal(await page.locator('[data-session]').count(),8);
    await page.locator('[data-session="ayo"]').click();assert.equal(await page.locator('#lab-result').isVisible(),true);await page.keyboard.press('Escape');
  });
  await check('Phone, tablet and desktop dialogs reflow without horizontal overflow',async()=>{
    for(const width of [320,375,620,768,1280]){
      await page.setViewportSize({width,height:812});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
      await open(page,'lab');if(await page.locator('#lab-result').isVisible())await page.locator('[data-replay]').click();
      assert.equal(await page.locator('[data-session]').count(),8);assert.equal(await page.locator('#lab-dialog').evaluate(el=>el.scrollWidth<=el.clientWidth),true);
      if(width===375)await page.screenshot({path:path.join(evidence,'lab-mobile.png')});
      await page.keyboard.press('Escape');await open(page,'postcard');assert.equal(await page.locator('#postcard-dialog').evaluate(el=>el.scrollWidth<=el.clientWidth),true);
      await page.locator('#postcard-dialog').evaluate(el=>{el.scrollTop=el.scrollHeight;});
      const closeBox=await page.locator('#postcard-dialog [data-close]').boundingBox();assert.ok(closeBox.y>=0&&closeBox.y+closeBox.height<=812,'Close control remains visible while scrolling');
      await page.locator('#postcard-dialog [data-close]').click();await open(page,'postcard');
      assert.equal(await page.locator('#postcard-dialog').evaluate(el=>el.scrollTop),0);
      if(width===375)await page.screenshot({path:path.join(evidence,'postcard-mobile.png')});await page.keyboard.press('Escape');
      if(width===375)await page.screenshot({path:path.join(evidence,'room-mobile.png'),fullPage:true});
    }
  });
  await check('Export failure preserves preview, gives feedback and permits a successful retry',async()=>{
    await open(page,'postcard');await page.evaluate(()=>{window.__toBlob=HTMLCanvasElement.prototype.toBlob;HTMLCanvasElement.prototype.toBlob=function(callback){callback(null);};});
    await page.locator('#download-postcard').click();assert.match(await page.locator('#export-status').textContent(),/couldn’t save/);assert.equal(await page.locator('#download-postcard').isDisabled(),false);
    await page.evaluate(()=>{HTMLCanvasElement.prototype.toBlob=window.__toBlob;});await png(page,path.join(evidence,'postcard-retry.png'));await page.keyboard.press('Escape');
  });
  await check('In-flight download disables repeated clicks and produces one image',async()=>{
    await open(page,'postcard');await page.evaluate(()=>{
      window.__nativeBlob=HTMLCanvasElement.prototype.toBlob;window.__exportCalls=0;
      HTMLCanvasElement.prototype.toBlob=function(...args){window.__exportCalls++;window.__finishExport=()=>window.__nativeBlob.apply(this,args);};
    });
    const downloaded=page.waitForEvent('download');await page.locator('#download-postcard').click();assert.equal(await page.locator('#download-postcard').isDisabled(),true);
    await page.locator('#download-postcard').evaluate(el=>{el.click();el.click();});assert.equal(await page.evaluate(()=>window.__exportCalls),1);
    await page.evaluate(()=>window.__finishExport());const download=await downloaded;await download.saveAs(path.join(evidence,'postcard-single-export.png'));
    assert.equal(await page.locator('#download-postcard').isDisabled(),false);await page.evaluate(()=>{HTMLCanvasElement.prototype.toBlob=window.__nativeBlob;});await page.keyboard.press('Escape');
  });
  await check('Corrupt and unavailable storage leave the challenge and postcard usable with reduced motion',async()=>{
    for(const failure of ['corrupt','unavailable']){
      const isolated=await context({reducedMotion:'reduce'});await isolated.addInitScript(mode=>{
        if(mode==='corrupt')localStorage.setItem('pkm.playground.v1','{not json');
        else {Storage.prototype.getItem=()=>{throw Error('Fixture blocked storage');};Storage.prototype.setItem=()=>{throw Error('Fixture blocked storage');};}
      },failure);
      const isolatedPage=await isolated.newPage();const failures=[];isolatedPage.on('pageerror',e=>failures.push(e.message));await isolatedPage.goto(origin+'/playground/');
      await open(isolatedPage,'lab');await isolatedPage.locator('[data-session="ayo"]').click();assert.equal(await isolatedPage.locator('#lab-result').isVisible(),true);
      await isolatedPage.locator('#lab-result [data-open="postcard"]').click();assert.match(await isolatedPage.locator('#card-stamp').textContent(),/untangled/);
      assert.equal(await isolatedPage.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches),true);assert.deepEqual(failures,[]);await isolated.close();
    }
  });
  await check('Listening corner reads saved metadata honestly, rejects unsafe links and performs zero API calls',async()=>{
    await page.evaluate(()=>localStorage.setItem('pkm.spotify.snapshot.v2',JSON.stringify({snapshot:{isPlaying:true,track:{name:'Saved fixture song',artists:['Fixture artist'],url:'javascript:alert(1)'}}})));
    await open(page,'music');assert.equal(await page.locator('#saved-track-title').textContent(),'Saved fixture song');assert.equal(await page.locator('#saved-track-link').isHidden(),true);assert.match(await page.locator('#saved-music').textContent(),/Last saved listening/);await page.keyboard.press('Escape');
    await page.evaluate(()=>localStorage.setItem('pkm.spotify.snapshot.v2',JSON.stringify({snapshot:{track:{name:'Saved fixture song',url:'https://open.spotify.com/track/fixture'}}})));
    await open(page,'music');assert.equal(await page.locator('#saved-track-link').getAttribute('href'),'https://open.spotify.com/track/fixture');await page.keyboard.press('Escape');
    assert.equal(listeningRequests,0);assert.deepEqual(errors,[]);
  });
})().catch(error=>{report.fatal=error.stack;process.exitCode=1;}).finally(async()=>{
  for(const ctx of contexts)await ctx.close().catch(()=>{});if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));
  fs.writeFileSync(path.join(evidence,'report.json'),JSON.stringify(report,null,2));if(report.scenarios.some(s=>s.result!=='pass'))process.exitCode=1;
  console.log('Evidence: '+evidence);
});
