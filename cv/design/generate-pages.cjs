'use strict';
/* Run: node cv/design/generate-pages.cjs */
const fs=require('node:fs'),path=require('node:path');
const dir=__dirname, root=path.join(dir,'..'), domain='https://pkm.hayalows.com';
const read=p=>fs.readFileSync(path.join(dir,p),'utf8');
const catalog=JSON.parse(read('catalog.json')),stories=JSON.parse(read('stories.json'));
const script=read('archive.js'),base=read('index.html');
const groupCode=script.slice(script.indexOf('const featuredKeys='),script.indexOf('let projects='))+script.slice(script.indexOf('function group(data){'),script.indexOf('function heroImage('));
const projects=new Function('data',groupCode+'return group(data);')(catalog);
if(new Set(projects.map(p=>p.key)).size!==projects.length)throw Error('Duplicate project slugs');
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const cover=s=>domain+'/'+String(s).replace(/^(\.\.\/)+/,'');
for(const p of projects){
 const info=stories[p.key]||{},title=info.title||p.title;
 const summary=(info.brief||title+' — design by Papa Kojo Mensah.').slice(0,290);
 const href=domain+'/design/'+p.key+'/',img=cover(p.pieces[0].preview);
 let html=base.replace(/<title>[^<]*<\/title>/,'<title>'+esc(title)+' — Iconka Designs | Papa Kojo Mensah</title>')
 .replace(/<meta name="description" content="[^"]*">/,'<meta name="description" content="'+esc(summary)+'">')
 .replace(/<link rel="canonical" href="[^"]*">/,'<link rel="canonical" href="'+href+'">')
 .replace(/<meta property="og:type" content="[^"]*">/,'<meta property="og:url" content="'+href+'"><meta property="og:type" content="article">')
 .replace(/<meta property="og:title" content="[^"]*">/,'<meta property="og:title" content="'+esc(title)+' — Iconka Designs">')
 .replace(/<meta property="og:description" content="[^"]*">/,'<meta property="og:description" content="'+esc(summary)+'">')
 .replace(/<meta property="og:image" content="[^"]*">/,'<meta property="og:image" content="'+img+'"><meta property="og:image:alt" content="'+esc(title+' artwork')+'">')
 .replace(/<meta name="twitter:card" content="[^"]*">/,'<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="'+esc(title)+' — Iconka Designs"><meta name="twitter:image" content="'+img+'">');
 const schema={"@context":"https://schema.org","@type":"CreativeWork",name:title,description:summary,url:href,creator:{"@type":"Person",name:"Papa Kojo Mensah"},image:img};
 html=html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,'<script type="application/ld+json">'+JSON.stringify(schema).replace(/</g,'\\u003c')+'</script>');
 const output=path.join(dir,p.key,'index.html');fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,html);
}
const sitemap=path.join(root,'sitemap.xml'),initial=fs.readFileSync(sitemap,'utf8').split('\n').filter(line=>!line.includes('<loc>'+domain+'/design/')).join('\n');
const urls=['/design/','/design/index','/design/sketchbook',...projects.map(p=>'/design/'+p.key+'/')];
const date=new Date().toISOString().slice(0,10);
const xml=initial.replace('</urlset>',urls.map(u=>'  <url><loc>'+domain+u+'</loc><lastmod>'+date+'</lastmod></url>').join('\n')+'\n</urlset>');
fs.writeFileSync(sitemap,xml);
console.log('Generated '+projects.length+' project share pages and sitemap.');
