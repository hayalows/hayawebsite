
(()=>{'use strict';
const BASE='/design/', app=document.querySelector('#archive-app'), themeButton=document.querySelector('#theme-toggle');
const categories=['All','Identity','Campaign','Print','Social','Education','Sketchbook'];
const featuredKeys=['iconka-identity','styled-couture','nabis-diary','food-maps','kente-pa','fries-haven','ldssa-colour-week','el-festin-elegante','actex-learning','picnic-palooza'];
const evidenceSummaries={
'iconka-identity':'Identity artwork for Iconka Designs, including a wordmark, a mockup and an apparel graphic.',
'styled-couture':'A brand identity design for Styled Couture.',
'kente-pa':'Two Kente Pa promotional designs: campaign artwork and a fabric collection piece.',
'fries-haven':'Fries Haven promotional work, including a launch design and a menu.',
'nabis-diary':'A Nabis Diary identity design and a graphic marking 70+ subscribers.',
'food-maps':'Brand identity artwork for Food Maps.',
'el-festin-elegante':'An event poster and a five-part countdown series for El Festín Elegante.',
'ldssa-colour-week':'Event artwork and activity information for LDSSA Colour Week.',
'annual-temple-trip':'A design for the annual temple trip.',
'hisok-journeys':'A campaign design for Hisok journeys to the West.',
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
{key:'el-festin-elegante',title:'El Festín Elegante',numbers:[7,57,58,61,59,60],category:'Campaign'},
{key:'ldssa-colour-week',title:'LDSSA Colour Week',numbers:[9,48,65],category:'Campaign'},
{key:'annual-temple-trip',title:'Annual temple trip',numbers:[15],category:'Campaign'},
{key:'hisok-journeys',title:'Hisok journeys to the West',numbers:[13],category:'Campaign'},
{key:'vaiv-launch',title:'VAIV launch',numbers:[32,33],category:'Campaign'},
{key:'just-be-kind',title:'Just be kind',numbers:[49,50,51],category:'Sketchbook'},
{key:'picnic-palooza',title:'Picnic Palooza',numbers:[1],category:'Campaign'},
{key:'food-maps',title:'Food Maps',numbers:[10],category:'Identity'},
{key:'actex-learning',title:'Actex Learning',numbers:[47],category:'Education'}
];
const sketchIndices=new Set([5,14,23,25,28,29,30,34,35,36,37,38,41,42,43,44,46,49,50,51,53,62]);
const text=(s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,55);
const imagePath=s=>'/'+String(s||'').replace(/^(?:\.\.\/)+/,'').replace(/^\/+/, '');
const image=(piece,size='preview')=>imagePath(piece[size]||piece.preview);
const url=p=>BASE+p.key+'/';
const mkPiece=(p)=>({title:p.title,preview:image(p),full:image(p,'full'),id:p.id,alt:p.alt||p.title});
let projects=[], byKey=new Map(), allPieces=[], currentProject=null, lightboxItems=[], lightboxIndex=0;
function group(data){
 const hiddenIds=new Set([data[16]?.id,data[66]?.id].filter(Boolean));
 const claimed=new Set(hiddenIds), output=[];
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
/* The portfolio opens with everything visible. Featured and category filters are optional. */
function renderIndex(sketch=false){
 const base=sketch?projects.filter(p=>p.category==='Sketchbook'):projects;
 const featured=new Set(featuredKeys);
 const filters=sketch?[]:[
  ['All',()=>true],
  ['Featured',p=>featured.has(p.key)],
  ['Identity',p=>p.category==='Identity'],
  ['Campaign',p=>p.category==='Campaign'],
  ['Other',p=>!['Identity','Campaign'].includes(p.category)]
 ];
 let selectedFilter='All';
 const params=new URLSearchParams(location.search);
 let view=params.get('view')==='grid'?'grid':sketch?'grid':'list';
 const description=sketch?'Smaller graphics and experiments I’ve worked on over the years.':"I’m Papa Kojo Mensah, a graphic designer based in Kumasi, Ghana. I create brand identities, event posters and campaign graphics, and I’m open to design projects in Accra and across Ghana.";
 app.innerHTML=heading(sketch?'ICONKA DESIGNS / SKETCHBOOK':'ICONKA DESIGNS / KUMASI, GHANA',sketch?'Sketchbook':'Graphic design work',description)+
 '<div class="tools" aria-label="Browse designs"><label class="sr-only" for="find-project">Search designs</label><input class="search" id="find-project" type="search" placeholder="Search designs…" autocomplete="off">'+
 (sketch?'':'<div class="filter-controls" role="group" aria-label="Filter designs">'+filters.map(([label,test])=>'<button type="button" class="filter-button" data-category="'+label+'" aria-pressed="'+(label==='All')+'">'+label+'</button>').join('')+'</div>')+
 '<div class="view-controls" role="group" aria-label="Choose how to browse">'+['list','grid'].map(v=>'<button type="button" class="view-button" data-view="'+v+'" aria-pressed="'+(v===view)+'">'+(v==='list'?'List':'Grid')+'</button>').join('')+'</div></div>'+
 '<div class="results-row"><span id="result-status" role="status" aria-live="polite"></span><button type="button" id="clear-search" hidden>Clear</button></div>'+
 '<div id="projects-results"></div>'+(sketch?'':"<section class=\"design-service-intro\" aria-labelledby=\"designer-ghana\"><div><p class=\"eyebrow\">WORKING TOGETHER</p><h2 id=\"designer-ghana\">Graphic design from Kumasi, Ghana</h2><p>I work on brand identities, event posters, promotional designs and social graphics. The aim is to make the message easy to understand, whether someone is discovering a business, checking event details or looking for a way to get in touch.</p><p>I'm based in Kumasi and can work with people in Accra and other parts of Ghana remotely. If you have a project in mind, tell me what you need and what the artwork should help people do.</p></div><a class=\"service-contact\" href=\"mailto:mpapakojo@gmail.com?subject=Graphic%20design%20enquiry\">Discuss a design project ↗</a></section>")+
 (sketch?'':'<div class="archive-bottom"><a class="text-link" href="/design/sketchbook">See the Sketchbook ↗</a></div>');
 const field=document.querySelector('#find-project'),target=document.querySelector('#projects-results'),status=document.querySelector('#result-status'),clear=document.querySelector('#clear-search');
 function thumb(p){return '<img src="'+text(p.pieces[0].preview)+'" alt="'+text(p.title)+' artwork" loading="lazy" decoding="async">';}
 function grid(items){return '<div class="archive-grid">'+items.map(p=>'<a class="index-card" href="'+url(p)+'"><div class="thumb">'+thumb(p)+'</div><div class="card-info"><h3>'+text(p.title)+'</h3></div><p class="mono">'+text(p.category)+'</p></a>').join('')+'</div>';}
 function list(items){
 return '<div class="index-list"><div class="rows">'+items.map(p=>'<article class="index-row" data-key="'+text(p.key)+'"><a href="'+url(p)+'" class="row-title">'+text(p.title)+'</a><span class="row-cat">'+text(p.category)+'</span><span class="row-arrow" aria-hidden="true">↗</span><button type="button" class="preview-toggle" aria-label="Preview '+text(p.title)+'" aria-expanded="false">+</button><div class="mobile-preview">'+thumb(p)+'</div></article>').join('')+'</div>'+
 '<aside class="index-preview" aria-hidden="true"><img id="index-preview-image" src="'+(items[0]?text(items[0].pieces[0].preview):'')+'" alt=""><span class="preview-label">VIEW PROJECT ↗</span></aside></div>';
 }
 function draw(){
  const terms=field.value.normalize('NFKD').toLowerCase().trim().split(/\s+/).filter(Boolean);
  const chosen=filters.find(x=>x[0]===selectedFilter);
  const matches=base.filter(p=>(!chosen||chosen[1](p))&&terms.every(term=>[p.title,p.key,p.category,p.client,p.year,p.keywords,(p.tags||[]).join(' ')].join(' ').normalize('NFKD').toLowerCase().includes(term)));
  status.textContent=matches.length+' design'+(matches.length===1?'':'s');
  clear.hidden=!terms.length&&selectedFilter==='All';
  document.querySelectorAll('[data-category]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===selectedFilter)));
  document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===view)));
  target.innerHTML=matches.length?(view==='list'?list(matches):grid(matches)):'<div class="no-results"><h2>No designs found</h2><p>Try another search or clear the filter.</p><button type="button" class="small-control" id="reset-now">Show all designs</button></div>';
  target.querySelector('#reset-now')?.addEventListener('click',reset);
  if(view==='list')target.querySelectorAll('.index-row').forEach(row=>{
   const p=byKey.get(row.dataset.key),toggle=row.querySelector('.preview-toggle');
   toggle.addEventListener('click',()=>{
    const willOpen=!row.classList.contains('is-peek');
    target.querySelectorAll('.index-row.is-peek').forEach(other=>{other.classList.remove('is-peek');other.querySelector('.preview-toggle')?.setAttribute('aria-expanded','false');other.querySelector('.preview-toggle').textContent='+';});
    row.classList.toggle('is-peek',willOpen);toggle.setAttribute('aria-expanded',String(willOpen));toggle.textContent=willOpen?'−':'+';
   });
  });
 }
 function reset(){field.value='';selectedFilter='All';draw();field.focus();}
 field.addEventListener('input',draw);
 clear.addEventListener('click',reset);
 document.querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>{selectedFilter=b.dataset.category;draw();}));
 document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{
  if(view===b.dataset.view)return;
  view=b.dataset.view;history.replaceState(null,'',location.pathname+(view==='grid'?'?view=grid':''));
  const render=()=>draw();
  if(document.startViewTransition&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.startViewTransition(render);else render();
 }));
 draw();
}
function detail(p){
 currentProject=p;const next=projects[(projects.indexOf(p)+1)%projects.length];
 const sourceTitle=p.type||p.category;
 const year=p.year||'';
 if(document.querySelector('meta[property="og:type"]')?.content!=='article'){document.title=p.title+' | Iconka Designs';setMeta('description',p.summary||p.title+' graphic design by Papa Kojo Mensah.');}
 app.innerHTML='<article class="detail"><div class="detail-head"><a class="text-link" href="/design/index">← All projects</a><p class="eyebrow" style="margin-top:36px">'+text(p.category.toUpperCase())+'</p><h1>'+text(p.title)+'</h1><dl class="meta-strip">'+
 '<div><dt>Project</dt><dd>'+text(p.title)+'</dd></div>'+(year?'<div><dt>Year</dt><dd>'+text(year)+'</dd></div>':'')+'<div><dt>Role</dt><dd>'+text(p.role)+'</dd></div><div><dt>Type</dt><dd>'+text(p.client||sourceTitle)+'</dd></div></dl></div>'+
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
 let active='index';
 if(!tail||tail==='index'||tail==='index.html'){renderIndex(false);}else if(tail==='sketchbook'){active='sketchbook';renderIndex(true);}else{const p=byKey.get(tail);if(p){active='index';detail(p);}else{document.title='Project not found — Iconka Index';app.innerHTML=heading('ARCHIVE / NOT FOUND','This project isn’t here.','The link may have changed. Browse the full index to find the work.')+'<div class="section-end"><a href="/design/index" class="button-primary">Open index ↗</a></div>';}}
 document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===active)a.setAttribute('aria-current','page');});const renderState={projects,byKey,active};window.__iconkaRenderState=renderState;document.dispatchEvent(new CustomEvent('iconka:rendered',{detail:renderState}));
}).catch(()=>{if(app.querySelector('.seo-preloaded,.seo-case')){app.insertAdjacentHTML('afterbegin','<p role="status" class="archive-load-notice">The interactive archive is unavailable right now. You can still browse the projects below.</p>');return;}app.innerHTML='<section class="no-results"><h2>The archive couldn’t load.</h2><p>Please reload the page or return to the portfolio.</p><a href="/" class="button-primary">Main portfolio ↗</a></section>';});
})();
