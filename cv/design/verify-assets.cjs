'use strict';
// Offline build verification for the PKM design portfolio. Node 20+; no dependencies.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),origin='https://pkm.hayalows.com';
const archive=fs.readFileSync(path.join(__dirname,'index.html'),'utf8');
const sketch=fs.readFileSync(path.join(__dirname,'sketchbook/index.html'),'utf8');
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const catalog=JSON.parse(fs.readFileSync(path.join(__dirname,'catalog.json'),'utf8'));
const stories=JSON.parse(fs.readFileSync(path.join(__dirname,'stories.json'),'utf8'));
const projectFolders=fs.readdirSync(__dirname,{withFileTypes:true})
  .filter(entry=>entry.isDirectory()&&entry.name!=='sketchbook'&&fs.existsSync(path.join(__dirname,entry.name,'index.html')))
  .map(entry=>entry.name);
const sitemapURLs=(sitemap.match(/<url>[\s\S]*?<\/url>/g)||[]).map(entry=>{
  const url=entry.match(/<loc>([^<]+)<\/loc>/);
  assert(url,'Sitemap URL entry missing loc');
  return url[1];
});
function validateImage(value,source){
  assert(!value.startsWith('//'),source+': protocol-relative path: '+value);
  assert(!value.includes(origin+'//'),source+': repeated slash: '+value);
  const u=new URL(value,origin);
  assert.equal(u.origin,origin,source+': artwork points to another host: '+value);
  assert(u.pathname.startsWith('/assets/design/'),source+': artwork outside design folder: '+value);
  assert(!u.pathname.startsWith('//'),source+': repeated slash in path: '+value);
  assert(fs.existsSync(path.join(root,u.pathname.slice(1))),source+': image file missing: '+u.pathname);
}
function inspectPage(content,source){
  assert(!content.includes('//assets/'),source+': protocol-relative image URL found');
  assert(!content.includes(origin+'//assets/'),source+': invalid absolute image URL found');
  for(const match of content.matchAll(/(?:src|href|content)="([^"]+)"/g)){
    if(match[1].includes('assets/design/'))validateImage(match[1],source);
  }
  for(const match of content.matchAll(/"(https:\/\/pkm\.hayalows\.com\/assets\/design\/[^"]+)"/g)){
    validateImage(match[1],source+' structured data');
  }
}
assert.equal(catalog.length,67,'Expected 67 catalog records');
for(const item of catalog){
  for(const kind of ['preview','full']){
    const url='/'+String(item[kind]).replace(/^(?:\.\.\/)+/,'').replace(/^\/+/, '');
    validateImage(url,'catalog '+item.id);
  }
}
inspectPage(archive,'All Designs');
inspectPage(sketch,'Sketchbook');
const archiveCards=(archive.match(/<div class="seo-preloaded__projects">[\s\S]*?<\/div>/)||[''])[0];
assert.equal((archiveCards.match(/<img src="\/assets\/design\//g)||[]).length,50,'Expected 50 safe archive thumbnails');
assert.equal((sketch.match(/<img src="\/assets\/design\//g)||[]).length,20,'Expected 20 safe Sketchbook thumbnails');
assert.equal(projectFolders.length,50,'Expected 50 project pages');
assert.equal(new Set(sitemapURLs).size,sitemapURLs.length,'Duplicate sitemap locations');
assert(sitemapURLs.includes(origin+'/'),'Homepage absent from sitemap');
assert(sitemapURLs.includes(origin+'/design/'),'All Designs absent from sitemap');
assert(sitemapURLs.includes(origin+'/design/sketchbook'),'Sketchbook absent from sitemap');
const indexed=new Set(Object.keys(stories));
for(const name of projectFolders){
  const content=fs.readFileSync(path.join(__dirname,name,'index.html'),'utf8');
  inspectPage(content,'project '+name);
  const robots=content.match(/<meta name="robots" content="([^"]+)"/)?.[1];
  assert(robots,'Missing robots directive for '+name);
  const loc=origin+'/design/'+name+'/';
  const expected=indexed.has(name);
  assert.equal(!robots.includes('noindex'),expected,'Wrong index directive for '+name);
  assert.equal(sitemapURLs.includes(loc),expected,'Sitemap disagrees with robots for '+name);
  assert.equal(content.match(/<link rel="canonical" href="([^"]+)"/)?.[1],loc,'Wrong canonical for '+name);
}
for(const match of sitemap.matchAll(/<image:loc>([^<]+)<\/image:loc>/g))validateImage(match[1],'sitemap');
assert.equal(indexed.size,10,'Expected ten detailed/indexable case studies');
assert.equal(sitemapURLs.length,16,'Expected homepage, 3 regular pages, 2 archive pages and 10 case studies');
console.log('PASS: '+catalog.length+' catalog records, '+catalog.length*2+' image files, '+projectFolders.length+' project pages, '+sitemapURLs.length+' sitemap URLs, all artwork paths valid.');
