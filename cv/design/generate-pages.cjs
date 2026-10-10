'use strict';
// Regenerate crawlable project HTML and the canonical sitemap after an archive update.
// Use the repository's release workflow to generate new pages and inspect before publishing.
// Keep dates accurate: changing only the copyright year does not justify an updated sitemap lastmod.
const fs=require('node:fs'),path=require('node:path');
const dir=__dirname,root=path.resolve(dir,'..'),domain='https://pkm.hayalows.com';
const js=fs.readFileSync(path.join(dir,'archive.js'),'utf8');
const template=fs.readFileSync(path.join(dir,'index.html'),'utf8');
const catalog=JSON.parse(fs.readFileSync(path.join(dir,'catalog.json'),'utf8'));
const stories=JSON.parse(fs.readFileSync(path.join(dir,'stories.json'),'utf8'));
const code=js.slice(js.indexOf('const featuredKeys='),js.indexOf('let projects='))+js.slice(js.indexOf('function group(data){'),js.indexOf('function heroImage('));
const projects=new Function('data',code+'return group(data);')(catalog);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const abs=s=>{const relative=String(s||'').replace(/^(?:\.\.\/)+/,'').replace(/^\/+/, '');if(!/^assets\/design\/[\w.-]+\.webp$/.test(relative))throw Error('Unexpected design image path: '+s);return domain+'/'+relative;};
const metadata=(html,p,story,loc,img)=>{
const title=story.title||p.title,summary=(story.brief||p.summary||'Original graphic design by Papa Kojo Mensah.').slice(0,285);
const tags=[[/<title>[^<]*<\/title>/,'<title>'+esc(title)+' | Iconka Designs Graphic Design Portfolio</title>'],[/<meta name="description" content="[^"]*">/,'<meta name="description" content="'+esc(summary)+'">'],[/<meta name="robots" content="[^"]*">/,'<meta name="robots" content="'+(stories[p.key]?'index, follow, max-image-preview:large, max-snippet:-1':'noindex, follow, max-image-preview:large')+'">'],[/<link rel="canonical" href="[^"]*">/,'<link rel="canonical" href="'+loc+'">'],[/<meta property="og:type" content="[^"]*">/,'<meta property="og:type" content="article">'],[/<meta property="og:title" content="[^"]*">/,'<meta property="og:title" content="'+esc(title)+' | Iconka Designs">'],[/<meta property="og:description" content="[^"]*">/,'<meta property="og:description" content="'+esc(summary)+'">'],[/<meta property="og:image" content="[^"]*">/,'<meta property="og:image" content="'+img+'">'],[/<meta name="twitter:card" content="[^"]*">/,'<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="'+esc(title)+' | Iconka Designs"><meta name="twitter:description" content="'+esc(summary)+'"><meta name="twitter:image" content="'+img+'">']];
for(const [re,repl] of tags)html=html.replace(re,repl);
html=html.replace('<meta property="og:url" content="'+domain+'/design/">','<meta property="og:url" content="'+loc+'">');
const identity=domain+'/#papa-kojo-mensah';
const schema={'@context':'https://schema.org','@graph':[
{'@type':'WebPage','@id':loc+'#page',url:loc,name:title+' | Iconka Designs',description:summary,inLanguage:'en-GH',mainEntity:{'@id':loc+'#work'},isPartOf:{'@id':domain+'/design/#portfolio'}},
{'@type':'CreativeWork','@id':loc+'#work',name:title,description:summary,url:loc,image:p.pieces.map(x=>abs(x.preview)),creator:{'@id':identity},genre:story.kind||p.category,isPartOf:{'@id':domain+'/design/#portfolio'}},
{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'PKM portfolio',item:domain+'/'},{'@type':'ListItem',position:2,name:'Graphic design',item:domain+'/design/'},{'@type':'ListItem',position:3,name:title,item:loc}]}]};
html=html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,'<script type="application/ld+json">'+JSON.stringify(schema).replace(/</g,'\\u003c')+'</script>');
return html;};
const projectBody=(p,story)=>{
 const title=story.title||p.title;
 const images=p.pieces.map((piece,i)=>'<figure><img src="'+esc(abs(piece.preview))+'" width="640" height="800" loading="'+(i?'lazy':'eager')+'" alt="'+esc(title+' — '+piece.title)+'"><figcaption>'+esc((story.applications||[])[i]||piece.title)+'</figcaption></figure>').join('\n');
 return '<article class="seo-case" aria-labelledby="seo-project-title"><nav aria-label="Project breadcrumb"><a href="/">Portfolio</a> / <a href="/design/">Graphic design work</a></nav><header><p class="eyebrow">'+esc(story.kind||p.category)+'</p><h1 id="seo-project-title">'+esc(title)+'</h1><p class="lede">'+esc(story.brief||p.summary||'A graphic design project by Papa Kojo Mensah.')+'</p></header>'+
 (story.approach?'<section><h2>The design decisions</h2><p>'+esc(story.approach)+'</p></section>':'')+
 '<div class="seo-case__images">'+images+'</div>'+
 (story.note?'<section><h2>Designer\'s note</h2><p>'+esc(story.note)+'</p></section>':'')+
 (story.effect?'<section><h2>Looking at the finished work</h2><p>'+esc(story.effect)+'</p></section>':'')+
 '<p class="seo-case__links"><a href="mailto:mpapakojo@gmail.com?subject='+encodeURIComponent('Design enquiry — '+title)+'">Discuss a design project ↗</a> <a href="/design/">Explore more graphic design work ↗</a></p></article>';
};
const oldMap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const oldDates=new Map([...oldMap.matchAll(/<url><loc>([^<]+)<\/loc>(?:<lastmod>([^<]+)<\/lastmod>)?/g)].map(x=>[x[1],x[2]]));
const modifiedPages=new Set();
for(const p of projects){
 const story=stories[p.key]||{},loc=domain+'/design/'+p.key+'/',pic=abs(p.pieces[0].preview);
 let html=metadata(template,p,story,loc,pic);
 html=html.replace(/<div id="archive-app">[\s\S]*?<\/div><\/main>/,'<div id="archive-app">'+projectBody(p,story)+'</div></main>');
 const dest=path.join(dir,p.key,'index.html');if(!fs.existsSync(dest)||fs.readFileSync(dest,'utf8')!==html)modifiedPages.add(loc);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,html);
}
const keep=(oldMap.match(/<url>[\s\S]*?<\/url>/g)||[]).filter(x=>!x.includes('/design/'));
const today=new Date().toISOString().slice(0,10),feat=projects.filter(p=>stories[p.key]);
const entry=(loc,images=[])=>{const lastmod=modifiedPages.has(loc)?today:(oldDates.get(loc)||today);return '<url><loc>'+loc+'</loc><lastmod>'+lastmod+'</lastmod>'+images.map(i=>'<image:image><image:loc>'+i+'</image:loc></image:image>').join('')+'</url>';};
const others=keep.map(x=>x.replace(/<priority>[^<]*<\/priority>/g,''));
const vals=[entry(domain+'/design/',feat.slice(0,8).map(p=>abs(p.pieces[0].preview))),entry(domain+'/design/sketchbook'),...feat.map(p=>entry(domain+'/design/'+p.key+'/',p.pieces.map(x=>abs(x.preview))))];
fs.writeFileSync(path.join(root,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n'+others.concat(vals).join('\n')+'\n</urlset>\n');
console.log('Generated '+projects.length+' project pages; '+feat.length+' detailed case studies remain indexable. Run `node cv/design/verify-assets.cjs` before publishing.');