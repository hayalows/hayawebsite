
(()=>{'use strict';
const BASE='/design/', app=document.querySelector('#archive-app'), themeButton=document.querySelector('#theme-toggle');
const categories=['All','Identity','Campaign','Print','Social','Education','Sketchbook'];
const featuredKeys=['iconka-identity','styled-couture','kente-pa','fries-haven','nabis-diary','food-maps','el-festin-elegante','actex-learning','ldssa-colour-week','picnic-palooza'];
const evidenceSummaries={
'iconka-identity':'Identity artwork for Iconka Designs, including a wordmark, a mockup and an apparel graphic.',
'styled-couture':'A brand identity design for Styled Couture.',
'kente-pa':'Two Kente Pa promotional designs: campaign artwork and a fabric collection piece.',
'fries-haven':'Fries Haven promotional work, including a launch design and a menu.',
'nabis-diary':'A Nabis Diary identity design and a graphic marking 70+ subscribers.',
'food-maps':'Brand identity artwork for Food Maps.',
'el-festin-elegante':'An event poster and a five-part countdown series for El Festín Elegante.',
'ldssa-colour-week':'Event artwork and activity information for LDSSA Colour Week.',
'annual-temple-trip':'Two related designs for the annual temple trip.',
'hisok-journeys':'Two versions of the Hisok journeys to the West campaign.',
'vaiv-launch':'Two VAIV launch promotion graphics.',
'just-be-kind':'Three variations of the Just be kind graphic.',
'actex-learning':'Educational artwork for Actex Learning.',
'picnic-palooza':'Campaign artwork for Picnic Palooza.'
};
const mappings=[
{key:'iconka-identity',title:'Iconka identity',numbers:[0,12,56],category:'Identity',client:'Iconka Designs',type:'Personal brand'},
{key:'styled-couture',title:'Styled Couture',numbers:[3],category:'Identity'},
{key:'kente-pa',title:'Kente Pa',numbers:[4,54],category:'Campaign'},
{key:'fries-haven',title:'Fries Haven',numbers:[2,52],category:'Campaign'},
{key:'nabis-diary',title:'Nabis Diary',numbers:[11,27],category:'Identity'},
{key:'el-festin-elegante',title:'El Festín Elegante',numbers:[7,57,58,59,60,61],category:'Campaign'},
{key:'ldssa-colour-week',title:'LDSSA Colour Week',numbers:[9,48,65],category:'Campaign'},
{key:'annual-temple-trip',title:'Annual temple trip',numbers:[15,66],category:'Campaign'},
{key:'hisok-journeys',title:'Hisok journeys to the West',numbers:[13,16],category:'Campaign'},
{key:'vaiv-launch',title:'VAIV launch',numbers:[32,33],category:'Campaign'},
{key:'just-be-kind',title:'Just be kind',numbers:[49,50,51],category:'Sketchbook'},
{key:'picnic-palooza',title:'Picnic Palooza',numbers:[1],category:'Campaign'},
{key:'food-maps',title:'Food Maps',numbers:[10],category:'Identity'},
{key:'actex-learning',title:'Actex Learning',numbers:[47],category:'Education'}
];
const sketchIndices=new Set([5,14,23,25,28,29,30,34,35,36,37,38,41,42,43,44,46,49,50,51,53,62]);
const text=(s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,55);
const imagePath=s=>'/'+String(s||'').replace(/^(\.\.\/)+/,'');
const image=(piece,size='preview')=>imagePath(piece[size]||piece.preview);
const url=p=>BASE+p.key+'/';
const mkPiece=(p)=>({title:p.title,preview:image(p),full:image(p,'full'),id:p.id,alt:p.alt||p.title});
let projects=[], byKey=new Map(), allPieces=[], currentProject=null, lightboxItems=[], lightboxIndex=0;
function group(data){
 const claimed=new Set(), output=[];
 const make=(config,idx,items)=>{
  const first=items[0], typed=config.category||(sketchIndices.has(idx)?'Sketchbook':idx===31?'Print':first.category==='Brand identities'?'Identity':first.category==='Education'?'Education':first.category==='Social & editorial'?'Social':'Campaign');
  const key=config.key||slug(first.title.replace(/\s*[·:].*$/,''));
  const names=items.map(i=>i.title);
  const exactYear=names.join(' ').match(/\b(20[1-3][0-9])\b/);
  return {key,title:config.title||first.title,category:typed,client:config.client||'',type:config.type||'',year:exactYear?exactYear[1]:'',role:'Graphic design',pieces:items.map(mkPiece),keywords:names.join(' '),summary:evidenceSummaries[key]||'',number:0};
 };
 for(const entry of mappings){let items=entry.numbers.map(n=>data[n]).filter(Boolean);items.forEach(i=>claimed.add(i.id));if(items.length)output.push(make(entry,entry.numbers[0],items));}
 data.forEach((p,i)=>{if(!claimed.has(p.id))output.push(make({},i,[p]));});
 // Make URL slugs unique without changing any original file or image ID.
 const taken=new Set();output.forEach(p=>{let base=p.key,n=2;while(taken.has(p.key)){p.key=base+'-'+n++;}taken.add(p.key);});
 output.sort((a,b)=>{
  const af=featuredKeys.indexOf(a.key), bf=featuredKeys.indexOf(b.key);
  if(af>=0||bf>=0)return (af<0?999:af)-(bf<0?999:bf);
  const order=['Identity','Campaign','Print','Education','Social','Sketchbook'];
  return order.indexOf(a.category)-order.indexOf(b.category);
 });
 output.forEach((p,i)=>p.number='IC-'+String(i+1).padStart(3,'0'));
 return output;
}
function heroImage(p,loading='lazy'){return '<img src="'+text(p.pieces[0].preview)+'" alt="'+text(p.pieces[0].alt)+'" loading="'+loading+'" decoding="async">';}
function heading(label,title,description){return '<section class="archive-heading"><p class="eyebrow">'+text(label)+'</p><h1>'+text(title)+'</h1><p class="lede">'+text(description)+'</p></section>';}
function selected(){
 const chosen=['iconka-identity','styled-couture','nabis-diary','food-maps','kente-pa','fries-haven','ldssa-colour-week','el-festin-elegante','actex-learning','picnic-palooza'].map(key=>byKey.get(key)).filter(Boolean);
 app.innerHTML='<section class="intro"><p class="eyebrow">PAPA KOJO MENSAH / ICONKA DESIGNS / GHANA</p><h1>Ideas made <span>visible.</span></h1><p class="lede">Here’s some design work I’ve done, from brand identities to event graphics. Open a project to see how I approached it.</p><div class="intro-bottom"><a href="#selected" class="button-primary">See my work <span aria-hidden="true">↓</span></a><a href="/design/index" class="text-link">Browse all designs ↗</a></div></section>'+
 '<section id="selected"><div class="section-heading"><h2>Selected work</h2><span>'+String(chosen.length)+' PROJECTS</span></div><div class="selected-grid">'+chosen.map(p=>'<article class="selected-card"><a href="'+url(p)+'"><div class="selected-media">'+heroImage(p,chosen.indexOf(p)<2?'eager':'lazy')+'</div><div class="selected-meta"><h3>'+text(p.title)+' ↗</h3><span>'+text(p.category)+(p.pieces.length>1?' · '+p.pieces.length+' pieces':'')+'</span></div></a></article>').join('')+'</div></section>'+
 '<section class="section-end"><div class="section-heading"><h2>More design work</h2><span>FULL ARCHIVE / '+projects.length+' PROJECTS</span></div><p class="lede">There are more flyers, graphics and ideas in the collection. Browse them by type or see the smaller pieces in my Sketchbook.</p><a href="/design/index" class="button-primary">See all designs ↗</a></section>';
}
function renderIndex(sketch=false){
 const base=sketch?projects.filter(p=>p.category==='Sketchbook'):projects.filter(p=>p.category!=='Sketchbook');
 let filter='All', view=sketch?'grid':(new URLSearchParams(location.search).get('view')||'list');if(!['list','grid','wall'].includes(view))view='list';
 app.innerHTML=heading(sketch?'SMALLER DESIGNS':'MY DESIGN WORK',sketch?'Sketchbook':'All designs',sketch?'Smaller graphics, experiments and ideas I’ve worked on over the years.':'Browse my designs by category, search for something specific, or choose the view you prefer.')+
 '<div class="archive-stats"><span>'+base.length+' PROJECTS</span><span>'+base.reduce((n,p)=>n+p.pieces.length,0)+' DESIGNS</span></div></section>'.replace('</section></section>','</section>')+
 '<div class="kente-line" aria-hidden="true"></div><div class="tools"><label class="mono" for="find-project" style="position:absolute;left:-9999px">Search all projects</label><input id="find-project" class="search" type="search" placeholder="Search designs…" autocomplete="off">'+
 '<div class="filter-controls" aria-label="Filter by discipline" role="group">'+(sketch?'':categories.filter(c=>c!=='Sketchbook'&&(c==='All'||base.some(p=>p.category===c))).map(c=>'<button class="filter-button" type="button" aria-pressed="'+(c==='All')+'" data-category="'+c+'">'+c+' <span class="filter-count">'+(c==='All'?base.length:base.filter(p=>p.category===c).length)+'</span></button>').join(''))+'</div>'+
 '<div class="view-controls" role="group" aria-label="Choose archive view">'+['list','grid','wall'].map(v=>'<button type="button" class="view-button" data-view="'+v+'" aria-pressed="'+(v===view)+'">'+v[0].toUpperCase()+v.slice(1)+'</button>').join('')+'</div></div><div class="results-row"><span id="result-status" role="status" aria-live="polite"></span><button id="clear-search" type="button" hidden>Clear filters</button></div><div id="projects-results"></div><div class="archive-bottom"><a class="text-link" href="'+(sketch?'/design/index':'/design/sketchbook')+'">'+(sketch?'Browse the complete index':'Open the Sketchbook')+' ↗</a></div>';
 const search=document.querySelector('#find-project'), target=document.querySelector('#projects-results'), status=document.querySelector('#result-status'), clear=document.querySelector('#clear-search');
 function cards(list,wall=false){return (wall?'<div class="wall-shell"><div class="wall-tools"><span class="mono">SPATIAL VIEW · DRAG THE EMPTY SPACE</span><button type="button" data-wall-zoom="out" aria-label="Zoom out">−</button><output id="wall-scale">100%</output><button type="button" data-wall-zoom="in" aria-label="Zoom in">+</button><button type="button" data-wall-reset>Reset view</button></div><div class="wall-viewport" tabindex="0" aria-label="Artwork wall, pan with arrow keys or drag empty space">':'')+'<div class="'+(wall?'archive-wall':'archive-grid')+'">'+list.map(p=>'<a class="index-card" href="'+url(p)+'"><div class="thumb">'+heroImage(p)+'</div><div class="card-info"><h3>'+text(p.title)+'</h3></div><p class="mono">'+text(p.category)+(p.pieces.length>1?' · '+p.pieces.length+' files':'')+'</p></a>').join('')+'</div>'+(wall?'</div></div>':'');}
 function rows(list){return '<div class="index-list"><div class="rows">'+list.map(p=>'<div class="index-row" data-key="'+text(p.key)+'"><a href="'+url(p)+'" class="row-title">'+text(p.title)+'</a><span class="row-cat">'+text(p.category)+'</span><span class="row-arrow" aria-hidden="true">↗</span><button type="button" class="preview-toggle" aria-label="Preview '+text(p.title)+'" aria-expanded="false">+</button><div class="mobile-preview">'+heroImage(p)+'</div></div>').join('')+'</div><aside class="index-preview" aria-hidden="true"><img id="index-preview-image" src="'+(list[0]?text(list[0].pieces[0].preview):'')+'" alt=""><span class="preview-label">OPEN PROJECT ↗</span></aside></div>';}
 function setupWall(){
 const viewport=target.querySelector('.wall-viewport'), wall=target.querySelector('.archive-wall');
 if(!viewport||!wall)return;
 let zoom=1,x=0,y=0,drag=null;
 const output=target.querySelector('#wall-scale');
 const update=()=>{wall.style.transform='translate('+x+'px,'+y+'px) scale('+zoom+')';output.textContent=Math.round(zoom*100)+'%';};
 const clamp=n=>Math.max(.65,Math.min(1.6,n));
 const setZoom=delta=>{zoom=clamp(Math.round((zoom+delta)*100)/100);update();};
 target.querySelectorAll('[data-wall-zoom]').forEach(button=>button.addEventListener('click',()=>setZoom(button.dataset.wallZoom==='in'?.1:-.1)));
 target.querySelector('[data-wall-reset]').addEventListener('click',()=>{zoom=1;x=0;y=0;update();viewport.focus();});
 viewport.addEventListener('pointerdown',event=>{if(event.target.closest('a,button')||event.pointerType==='touch'||matchMedia('(max-width:650px)').matches)return;drag={id:event.pointerId,x:event.clientX,y:event.clientY,sx:x,sy:y};viewport.setPointerCapture(event.pointerId);viewport.classList.add('is-panning');});
 viewport.addEventListener('pointermove',event=>{if(!drag||drag.id!==event.pointerId)return;x=drag.sx+event.clientX-drag.x;y=drag.sy+event.clientY-drag.y;update();});
 const end=()=>{drag=null;viewport.classList.remove('is-panning');};viewport.addEventListener('pointerup',end);viewport.addEventListener('pointercancel',end);
 viewport.addEventListener('keydown',event=>{const moves={ArrowLeft:[-30,0],ArrowRight:[30,0],ArrowUp:[0,-30],ArrowDown:[0,30]};if(moves[event.key]){event.preventDefault();x+=moves[event.key][0];y+=moves[event.key][1];update();}if(event.key==='+'||event.key==='='){event.preventDefault();setZoom(.1);}if(event.key==='-'){event.preventDefault();setZoom(-.1);}});
 update();
 }
 function draw(){
  const terms=search.value.trim().normalize('NFKD').toLowerCase().split(/\s+/).filter(Boolean), matched=base.filter(p=>(filter==='All'||p.category===filter)&&terms.every(t=>[p.title,p.key,p.category,p.keywords,p.client,p.year,p.kind,(p.tags||[]).join(' ')].join(' ').normalize('NFKD').toLowerCase().includes(t))), q=terms.join(' ');
  status.textContent=matched.length+' of '+base.length+' designs';
  clear.hidden=!q&&filter==='All';document.querySelectorAll('[data-category]').forEach(b=>b.setAttribute('aria-pressed',String(filter===b.dataset.category)));
  document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(view===b.dataset.view)));
  target.innerHTML=matched.length?(view==='list'?rows(matched):cards(matched,view==='wall')):'<div class="no-results"><h2>No designs found.</h2><p>Try a different search or clear your filters.</p><button class="small-control" id="reset-now">Show all projects ↗</button></div>';
  const reset=target.querySelector('#reset-now');if(reset)reset.addEventListener('click',()=>{filter='All';search.value='';draw();search.focus();});
  if(view==='wall')setupWall();
  if(view==='list'){const preview=target.querySelector('#index-preview-image');target.querySelectorAll('.index-row').forEach(row=>{const p=byKey.get(row.dataset.key);const show=()=>{if(preview)preview.src=p.pieces[0].preview;};row.addEventListener('pointerenter',show);row.querySelector('.row-title').addEventListener('focus',show);const button=row.querySelector('.preview-toggle');button.addEventListener('click',()=>{const expanded=row.classList.toggle('is-peek');button.setAttribute('aria-expanded',String(expanded));button.textContent=expanded?'−':'+';});});}
 }
 search.addEventListener('input',draw);clear.addEventListener('click',()=>{search.value='';filter='All';draw();search.focus();});
 document.querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.category;search.value='';draw();}));
 document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{if(view===b.dataset.view)return;view=b.dataset.view;const switchView=()=>{history.replaceState(null,'',location.pathname+'?view='+view);draw();};if(document.startViewTransition&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.startViewTransition(switchView);else switchView();}));
 draw();
}
function detail(p){
 currentProject=p;const next=projects[(projects.indexOf(p)+1)%projects.length];
 const sourceTitle=p.type||p.category;
 const year=p.year||'';
 document.title=p.title+' — Iconka Index';setMeta('description',p.title+' — '+p.category+' artwork from Iconka Designs by Papa Kojo Mensah.');
 app.innerHTML='<article class="detail"><div class="detail-head"><a class="text-link" href="/design/index">← All projects</a><p class="eyebrow" style="margin-top:36px">'+text(p.category.toUpperCase())+'</p><h1>'+text(p.title)+'</h1><dl class="meta-strip">'+
 '<div><dt>Project</dt><dd>'+text(p.title)+'</dd></div>'+(year?'<div><dt>Year</dt><dd>'+text(year)+'</dd></div>':'')+'<div><dt>Role</dt><dd>'+text(p.role)+'</dd></div><div><dt>Client / type</dt><dd>'+text(p.client||sourceTitle)+'</dd></div></dl></div>'+
 '<div class="detail-explainer"><h2>The work.</h2><p>'+text(p.summary||(p.pieces.length>1?'Several pieces from the same project.':'One design from my collection.'))+'</p></div>'+
 '<div class="detail-gallery">'+p.pieces.map((i,n)=>'<button type="button" data-image="'+n+'" aria-label="View '+text(i.title)+' at full size"><img src="'+text(i.preview)+'" alt="'+text(i.alt)+'" loading="'+(n===0?'eager':'lazy')+'" decoding="async"><span>VIEW '+String(n+1).padStart(2,'0')+' ↗</span></button>').join('')+'</div>'+
 '<div class="detail-note"><p>More about this design will be added as the project comes together.</p></div>'+
 '<div class="detail-actions"><button id="copy-project" type="button">Copy project link ↗</button></div>'+
 '<a class="next-project" href="'+url(next)+'"><span><span class="mono">UP NEXT</span><strong>'+text(next.title)+'</strong></span><span class="arrow" aria-hidden="true">↗</span></a></article>';
 document.querySelectorAll('[data-image]').forEach(b=>b.addEventListener('click',()=>openLightbox(p.pieces,Number(b.dataset.image),p.title)));
 document.querySelector('#copy-project').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);document.querySelector('#copy-project').textContent='Link copied ✓';}catch{document.querySelector('#copy-project').textContent='Copy from address bar';}});
}
const box=document.querySelector('#lightbox');
function displayLightbox(){let p=lightboxItems[lightboxIndex];document.querySelector('#lightbox-image').src=p.full;document.querySelector('#lightbox-image').alt=p.alt;document.querySelector('#lightbox-title').textContent=p.title;document.querySelector('#lightbox-count').textContent=(lightboxIndex+1)+' of '+lightboxItems.length;document.querySelector('#lightbox-image').hidden=false;document.querySelector('#lightbox-error').hidden=true;}
function openLightbox(items,i,title){lightboxItems=items;lightboxIndex=i;box.showModal();document.body.style.overflow='hidden';displayLightbox();}
function move(n){lightboxIndex=(lightboxIndex+n+lightboxItems.length)%lightboxItems.length;displayLightbox();}
document.querySelector('#lightbox-close').addEventListener('click',()=>box.close());document.querySelector('#lightbox-prev').addEventListener('click',()=>move(-1));document.querySelector('#lightbox-next').addEventListener('click',()=>move(1));
document.querySelector('#lightbox-zoom').addEventListener('click',()=>{const stage=document.querySelector('.lightbox-stage');let active=stage.classList.toggle('is-zoomed');document.querySelector('#lightbox-zoom').setAttribute('aria-pressed',String(active));});
document.querySelector('#lightbox-image').addEventListener('error',()=>{document.querySelector('#lightbox-image').hidden=true;document.querySelector('#lightbox-error').hidden=false;});
box.addEventListener('close',()=>{document.body.style.overflow='';document.querySelector('.lightbox-stage').classList.remove('is-zoomed');document.querySelector('#lightbox-zoom').setAttribute('aria-pressed','false');});
box.addEventListener('click',e=>{if(e.target===box)box.close();});
box.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();move(1);}if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}});
function setMeta(name,value){const el=document.querySelector('meta[name="'+name+'"]');if(el)el.setAttribute('content',value);}
function themeUpdate(){const light=document.documentElement.dataset.theme==='light';themeButton.setAttribute('aria-label','Switch to '+(light?'dark':'light')+' theme');document.querySelector('#theme-name').textContent=light?'Dark':'Light';document.querySelector('.theme-glyph').textContent=light?'☾':'☀';document.querySelector('meta[name="theme-color"]').content=light?'#f5f3ee':'#111111';}
themeButton.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;try{localStorage.setItem('iconka.theme',next);}catch{}themeUpdate();});themeUpdate();document.querySelector('#year').textContent=new Date().getFullYear();
Promise.all([fetch('/design/catalog.json').then(response=>{if(!response.ok)throw Error('Catalogue unavailable');return response.json();}),fetch('/design/stories.json').then(response=>response.ok?response.json():{})]).then(([data,stories])=>{
 allPieces=data;projects=group(data);projects.forEach(p=>{const story=stories[p.key];if(story){p.title=story.title||p.title;p.year=story.period||'';p.client=story.client||'';p.kind=story.kind||p.category;p.tags=story.tags||[];p.story=story;p.summary=story.brief||p.summary;}});byKey=new Map(projects.map(p=>[p.key,p]));
 const hash=new URLSearchParams(location.hash.replace(/^#/,''));const legacyId=hash.get('view');if(legacyId){const match=projects.find(p=>p.pieces.some(i=>i.id===legacyId));if(match){location.replace(url(match));return;}}
 const tail=decodeURIComponent(location.pathname.replace(/^\/design\/?/,'').replace(/\/+$/,''));
 let active='selected';
 if(tail==='index'){active='index';renderIndex(false);}else if(tail==='sketchbook'){active='sketchbook';renderIndex(true);}else if(!tail||tail==='index.html'){selected();}else{const p=byKey.get(tail);if(p){active='index';detail(p);}else{document.title='Project not found — Iconka Index';app.innerHTML=heading('ARCHIVE / NOT FOUND','This project isn’t here.','The link may have changed. Browse the full index to find the work.')+'<div class="section-end"><a href="/design/index" class="button-primary">Open index ↗</a></div>';}}
 document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===active)a.setAttribute('aria-current','page');});document.dispatchEvent(new CustomEvent('iconka:rendered',{detail:{projects,byKey,active}}));
}).catch(()=>{app.innerHTML='<section class="no-results"><h2>The archive couldn’t load.</h2><p>Please reload the page or return to the portfolio.</p><a href="/" class="button-primary">Main portfolio ↗</a></section>';});
})();
