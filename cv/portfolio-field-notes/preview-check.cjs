const { chromium } = require('playwright');
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
(async () => {
 const root=path.resolve('cv'); const out='/tmp/fieldnotes-preview'; fs.mkdirSync(out,{recursive:true});
 const server=http.createServer((req,res)=>{let p=decodeURIComponent(new URL(req.url,'http://localhost').pathname); let file=path.join(root,p); if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return} if(p.endsWith('/'))file=path.join(file,'index.html'); fs.readFile(file,(e,data)=>{if(e){res.writeHead(404).end();return} let ext=path.extname(file);res.setHeader('content-type',({'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.webp':'image/webp'}[ext]||'application/octet-stream'));res.end(data)})}).listen(8123,'127.0.0.1');
 const b=await chromium.launch({headless:true, ...(process.env.PLAYWRIGHT_BROWSER ? {channel:process.env.PLAYWRIGHT_BROWSER} : {})});let errors=[];
 try{for(const width of [320,390,768,1440]){
 const page=await b.newPage({viewport:{width,height:900},reducedMotion:'reduce'});page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:8123/portfolio-field-notes/',{waitUntil:'domcontentloaded'});await page.locator('#search').waitFor();
 await page.locator('#component-preview a').first().waitFor();
 if(await page.locator('#component-preview a').count()!==6)errors.push('gallery links '+width);
 if((await page.locator('#component-preview a').first().getAttribute('href'))!=='ux-derrick/')errors.push('gallery route '+width);
 if((await page.locator('#component-preview a').first().getAttribute('aria-label'))!=='Read about UX Derrick')errors.push('gallery name '+width);
 await page.screenshot({path:out+'/archive-'+width+'.png',fullPage:false});
 const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1); if(overflow)errors.push('overflow '+width);
 await page.locator('#search').fill('UX Derrick'); if(await page.locator('.portfolio-card:visible').count()!==1)errors.push('search '+width);
 await page.locator('#index').scrollIntoViewIfNeeded(); await page.screenshot({path:out+'/index-'+width+'.png'});
 await page.locator('[data-save="ux-derrick"]').click(); if(await page.locator('[data-save="ux-derrick"]').getAttribute('aria-pressed')!=='true')errors.push('save '+width);
 await page.locator('#search').fill(''); await page.locator('[data-filter="saved"]').click(); if(await page.locator('.portfolio-card:visible').count()!==1)errors.push('saved filter '+width);
 await page.locator('[data-filter="all"]').click(); await page.locator('#search').fill('UX Derrick'); await page.locator('[data-save="ux-derrick"]').click();

 await page.locator('#search').fill('not-a-real-portfolio-xyz');if(!await page.locator('#empty').isVisible())errors.push('empty '+width);
 await page.locator('.fn-clear button').click(); if(await page.locator('#search').inputValue()!=='')errors.push('clear search '+width);
 await page.locator('.fn-discrete button[aria-label="List view"]').click(); if(!await page.locator('#portfolio-grid').evaluate(el=>el.classList.contains('is-list')))errors.push('list view '+width);
 await page.locator('.fn-discrete button[aria-label="Grid view"]').click(); if(await page.locator('#portfolio-grid').evaluate(el=>el.classList.contains('is-list')))errors.push('grid view '+width);
 const previousTheme=await page.locator('html').getAttribute('data-theme'); await page.locator('.fn-theme input').check({force:true}).catch(()=>{});
 if(previousTheme==='dark') { await page.locator('.fn-theme input').uncheck({force:true}); if(await page.locator('html').getAttribute('data-theme')!=='light')errors.push('theme '+width); }

 await page.goto('http://127.0.0.1:8123/portfolio-field-notes/ux-derrick/',{waitUntil:'domcontentloaded'});
 await page.screenshot({path:out+'/detail-'+width+'.png',fullPage:false});
 if(!await page.locator('a.visit').count())errors.push('visit '+width);
 if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))errors.push('detail overflow '+width);
 await page.close();
 } const noScript=await b.newPage({javaScriptEnabled:false,viewport:{width:390,height:900}}); await noScript.goto('http://127.0.0.1:8123/portfolio-field-notes/'); if(await noScript.locator('#portfolio-grid .portfolio-card').count()!==150)errors.push('no-JS archive'); if(await noScript.locator('#featured-list a').count()!==12)errors.push('no-JS selected'); await noScript.close(); fs.writeFileSync(out+'/result.json',JSON.stringify({errors},null,2)); if(errors.length)throw Error(errors.join('; '));
 }finally{await b.close();server.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
