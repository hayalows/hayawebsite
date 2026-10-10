'use strict';
// Optional post-deployment smoke test, run only after the correct production SHA is READY.
// Usage: node cv/design/smoke-live.cjs [https://pkm.hayalows.com]
const assert=require('node:assert/strict');
const base=new URL(process.argv[2]||'https://pkm.hayalows.com');
const targets=[
 {path:'/',kind:'html'},
 {path:'/design/',kind:'html'},
 {path:'/design/sketchbook',kind:'html'},
 {path:'/design/iconka-identity/',kind:'html'},
 {path:'/design/a-work-in-progress/',kind:'html'},
 {path:'/sitemap.xml',kind:'sitemap'},
 {path:'/assets/design/1-1ap-jkSOm_h4CdCtChG3ZYLMdCUkIq2-640.webp',kind:'image'}
];
(async()=>{
 for(const {path,kind} of targets){
  const target=new URL(path,base);
  const response=await fetch(target,{signal:AbortSignal.timeout(12000),redirect:'follow',headers:{'user-agent':'pkm-portfolio-smoke/1.0'}});
  assert.equal(response.status,200,target+' returned '+response.status);
  assert.equal(new URL(response.url).origin,base.origin,target+' redirected off-origin');
  if(kind==='html'){
   const page=await response.text();
   assert(!page.includes('src="//assets/'),target+' has invalid preload images');
   assert(!page.includes(base.origin+'//assets/'),target+' has malformed absolute images');
   assert(page.includes('<link rel="canonical"'),target+' lacks canonical URL');
  }else if(kind==='sitemap'){
   const xml=await response.text();
   assert(xml.includes('<loc>'+base.origin+'/</loc>'),'Sitemap lacks homepage');
   assert(!xml.includes(base.origin+'//assets/'),'Sitemap has malformed image URLs');
  }else{
   assert((response.headers.get('content-type')||'').startsWith('image/'),'Artwork not served as image');
  }
  console.log('PASS '+kind+' '+target.pathname);
 }
})().catch(error=>{console.error(error);process.exitCode=1;});
