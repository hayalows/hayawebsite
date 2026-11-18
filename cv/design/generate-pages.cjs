'use strict';
// Build the static Iconka Designs pages from template.html and the shared views in core.js.
// Writes design/index.html (selected work), design/sketchbook/index.html, one page per project
// and the design entries of the canonical sitemap. The browser runs the same core.js, so
// static and interactive pages never drift apart. Output is deterministic: CI regenerates
// and expects no diff. Keep dates accurate: an unchanged page keeps its previous lastmod.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const dir=__dirname,root=path.resolve(dir,'..'),domain='https://pkm.hayalows.com';
const C=require('./core.js');
const template=fs.readFileSync(path.join(dir,'template.html'),'utf8');
const catalog=JSON.parse(fs.readFileSync(path.join(dir,'catalog.json'),'utf8'));
const stories=JSON.parse(fs.readFileSync(path.join(dir,'stories.json'),'utf8'));
const projects=C.buildProjects(catalog,stories);
// Cache-busting version derived from the runtime files themselves.
const VERSION=crypto.createHash('sha1').update(['core.js','app.js','site.css'].map(f=>fs.readFileSync(path.join(dir,f),'utf8')).join('\n')).digest('hex').slice(0,10);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]||c));
const abs=s=>{const relative=String(s||'').replace(/^(?:\.\.\/)+/,'').replace(/^\/+/, '');if(!/^assets\/design\/[\w.-]+\.webp$/.test(relative))throw Error('Unexpected design image path: '+s);return domain+'/'+relative;};
const identity=domain+'/#papa-kojo-mensah';

function page({content,jsonld,meta}){
 let html=template.split('{{VERSION}}').join(VERSION).replace('{{JSONLD}}',()=>JSON.stringify(jsonld).replace(/</g,'\\u003c')).replace('{{CONTENT}}',()=>content);
 if(meta){
  const tags=[
   [/<title>[^<]*<\/title>/,'<title>'+esc(meta.title)+'</title>'],
   [/<meta name="description" content="[^"]*">/,'<meta name="description" content="'+esc(meta.description)+'">'],
   [/<meta name="robots" content="[^"]*">/,'<meta name="robots" content="'+meta.robots+'">'],
   [/<link rel="canonical" href="[^"]*">/,'<link rel="canonical" href="'+meta.url+'">'],
   [/<meta property="og:type" content="[^"]*">/,'<meta property="og:type" content="'+meta.type+'">'],
   [/<meta property="og:url" content="[^"]*">/,'<meta property="og:url" content="'+meta.url+'">'],
   [/<meta property="og:title" content="[^"]*">/,'<meta property="og:title" content="'+esc(meta.socialTitle)+'">'],
   [/<meta property="og:description" content="[^"]*">/,'<meta property="og:description" content="'+esc(meta.socialDescription||meta.description)+'">'],
   [/<meta property="og:image" content="[^"]*">/,'<meta property="og:image" content="'+meta.image+'">'],
   [/<meta name="twitter:title" content="[^"]*">/,'<meta name="twitter:title" content="'+esc(meta.socialTitle)+'">']
  ];
  for(const [re,repl] of tags){if(!re.test(html))throw Error('Template tag missing: '+re);html=html.replace(re,()=>repl);}
 }
 return html;
}
const modifiedPages=new Set();
function write(rel,html,loc){
 const dest=path.join(dir,rel);
 if(!fs.existsSync(dest)||fs.readFileSync(dest,'utf8')!==html){if(loc)modifiedPages.add(loc);}
 fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,html);
}

/* Selected work (also served for /design/index, which the browser renders from the same data). */
write('index.html',page({content:C.landing(projects),jsonld:{'@context':'https://schema.org','@graph':[{'@type':'CollectionPage','@id':domain+'/design/#portfolio',name:'Iconka Designs | Graphic design work',url:domain+'/design/',description:'Selected brand identities, campaigns and event graphics by Papa Kojo Mensah of Iconka Designs in Kumasi, Ghana. The complete '+projects.length+'-project archive is available at /design/index.',inLanguage:'en-GH',creator:{'@id':identity},mainEntity:{'@type':'ItemList',name:'Graphic design portfolio',numberOfItems:projects.length,itemListElement:projects.map((p,i)=>({'@type':'ListItem',position:i+1,name:p.title,url:domain+C.url(p)}))}}]}}),domain+'/design/');

/* Sketchbook */
write('sketchbook/index.html',page({content:C.sketchbook(projects),jsonld:{'@context':'https://schema.org','@type':'CollectionPage',name:'Sketchbook | Iconka Designs',url:domain+'/design/sketchbook',creator:{'@id':identity},isPartOf:{'@id':domain+'/design/#portfolio'}},meta:{
 title:'Sketchbook | Smaller Graphic Design Work | Iconka Designs',description:'A sketchbook of smaller graphic design pieces and visual experiments by Papa Kojo Mensah of Iconka Designs, based in Kumasi, Ghana.',robots:'index, follow, max-image-preview:large, max-snippet:-1',url:domain+'/design/sketchbook',type:'website',socialTitle:'Iconka Sketchbook | Graphic Design by Papa Kojo Mensah',socialDescription:'Smaller posters, social graphics and experiments from the Iconka Designs archive.',image:abs(projects.find(p=>p.key==='iconka-identity').pieces[0].preview)}}),domain+'/design/sketchbook');

/* One page per project. Only projects with verified case-study notes are indexable. */
for(const p of projects){
 const story=stories[p.key]||{},loc=domain+'/design/'+p.key+'/',title=story.title||p.title;
 const summary=(story.brief||p.summary||'Original graphic design by Papa Kojo Mensah.').slice(0,285);
 const jsonld={'@context':'https://schema.org','@graph':[
  {'@type':'WebPage','@id':loc+'#page',url:loc,name:title+' | Iconka Designs',description:summary,inLanguage:'en-GH',mainEntity:{'@id':loc+'#work'},isPartOf:{'@id':domain+'/design/#portfolio'}},
  {'@type':'CreativeWork','@id':loc+'#work',name:title,description:summary,url:loc,image:p.pieces.map(x=>abs(x.preview)),creator:{'@id':identity},genre:story.kind||p.category,isPartOf:{'@id':domain+'/design/#portfolio'}},
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'PKM portfolio',item:domain+'/'},{'@type':'ListItem',position:2,name:'Graphic design',item:domain+'/design/'},{'@type':'ListItem',position:3,name:title,item:loc}]}]};
 write(p.key+'/index.html',page({content:C.detail(p,projects),jsonld,meta:{title:title+' | Iconka Designs Graphic Design Portfolio',description:summary,robots:stories[p.key]?'index, follow, max-image-preview:large, max-snippet:-1':'noindex, follow, max-image-preview:large',url:loc,type:'article',socialTitle:title+' | Iconka Designs',image:abs(p.pieces[0].preview)}}),loc);
}

/* Sitemap: keep every non-design entry, then list the design pages that are meant to be indexed. */
const oldMap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const oldDates=new Map([...oldMap.matchAll(/<url><loc>([^<]+)<\/loc>(?:<lastmod>([^<]+)<\/lastmod>)?/g)].map(x=>[x[1],x[2]]));
const keep=(oldMap.match(/<url>[\s\S]*?<\/url>/g)||[]).filter(x=>!x.includes('/design/'));
const today=new Date().toISOString().slice(0,10),feat=projects.filter(p=>stories[p.key]);
const entry=(loc,images=[])=>{const lastmod=modifiedPages.has(loc)?today:(oldDates.get(loc)||today);return '<url><loc>'+loc+'</loc><lastmod>'+lastmod+'</lastmod>'+images.map(i=>'<image:image><image:loc>'+i+'</image:loc></image:image>').join('')+'</url>';};
const others=keep.map(x=>x.replace(/<priority>[^<]*<\/priority>/g,''));
const vals=[entry(domain+'/design/',feat.slice(0,8).map(p=>abs(p.pieces[0].preview))),entry(domain+'/design/sketchbook'),...feat.map(p=>entry(domain+'/design/'+p.key+'/',p.pieces.map(x=>abs(x.preview))))];
fs.writeFileSync(path.join(root,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n'+others.concat(vals).join('\n')+'\n</urlset>\n');
console.log('Generated the selected-work page, Sketchbook and '+projects.length+' project pages (v'+VERSION+'); '+feat.length+' case studies are indexable. Run `node cv/design/verify-assets.cjs` before publishing.');
