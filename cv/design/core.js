/* Iconka Designs — shared data model and HTML views.
   Runs in the browser (window.IconkaCore) and in Node (require) so that the
   static pages written by generate-pages.cjs and the pages rendered in the
   browser come from one source. Keep this file free of DOM access. */
(function(root){'use strict';
const BASE='/design/';
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
const mkPiece=(p)=>({title:p.title,preview:image(p),full:image(p,'full'),id:p.id,alt:p.alt||p.title,w:p.width||1080,h:p.height||1080,mount:p.mount||'#1b1a18'});
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

/* ---------- shared content ---------- */
const EMAIL='mpapakojo@gmail.com';
const MAILTO='mailto:'+EMAIL+'?subject='+encodeURIComponent('Graphic design project');
// Case studies in the order the landing presents them (strongest visuals first).
const SHOWCASE=['kente-pa','el-festin-elegante','ldssa-colour-week','styled-couture','iconka-identity','fries-haven','nabis-diary','food-maps','actex-learning','picnic-palooza'];
const CASE_SPANS=[7,5,5,7,4,4,4,4,4,4];
// Words in the hero that preview real work on hover and link to a filtered index.
const KEYWORDS=[
 {id:'identity',label:'brand identities',filter:'identity',keys:['iconka-identity','styled-couture','food-maps']},
 {id:'campaign',label:'event campaigns',filter:'campaign',keys:['el-festin-elegante','ldssa-colour-week','picnic-palooza']},
 {id:'information',label:'information graphics',filter:'education',keys:['actex-learning','e-zwich-card-registration','assa-passport-registration']}
];
const FILTERS=[
 {id:'all',label:'All',test:()=>true},
 {id:'case-studies',label:'Case studies',test:p=>!!p.story},
 {id:'identity',label:'Identity',test:p=>p.category==='Identity'},
 {id:'campaign',label:'Campaigns',test:p=>p.category==='Campaign'},
 {id:'education',label:'Education',test:p=>p.category==='Education'},
 {id:'print',label:'Print',test:p=>p.category==='Print'},
 {id:'sketchbook',label:'Sketchbook',test:p=>p.category==='Sketchbook'}
];
const CATEGORY_LABEL={Identity:'Identity',Campaign:'Campaign',Education:'Education',Print:'Print',Social:'Social',Sketchbook:'Sketchbook'};

/* ---------- icons (inline, decorative) ---------- */
const ic=(d,extra='')=>'<svg class="icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'+extra+'>'+d+'</svg>';
const ICON={
 upRight:ic('<path d="M7 17 17 7M8 7h9v9"/>'),
 right:ic('<path d="M5 12h14M13 6l6 6-6 6"/>'),
 left:ic('<path d="M19 12H5M11 18l-6-6 6-6"/>'),
 down:ic('<path d="M12 5v14M6 13l6 6 6-6"/>'),
 search:ic('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
 sun:ic('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
 moon:ic('<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/>'),
 copy:ic('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>'),
 mail:ic('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
 grid:ic('<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>'),
 list:ic('<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>'),
 shuffle:ic('<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>'),
 close:ic('<path d="M6 6l12 12M18 6 6 18"/>'),
 zoom:ic('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/>'),
 home:ic('<path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z"/>'),
 index:ic('<path d="M4 6h16M4 12h16M4 18h10"/>'),
 book:ic('<path d="M5 4h10a4 4 0 0 1 4 4v12H9a4 4 0 0 1-4-4z"/><path d="M5 16a4 4 0 0 1 4-4h10"/>'),
 user:ic('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>')
};

/* ---------- small helpers ---------- */
const plural=(n,one,many)=>n+' '+(n===1?one:(many||one+'s'));
const pad=n=>String(n).padStart(2,'0');
const dims=(piece,width)=>{const w=width||640;return ' width="'+w+'" height="'+Math.round(w*piece.h/piece.w)+'"';};
const img=(piece,o={})=>'<img src="'+text(piece.preview)+'" alt="'+text(o.alt!==undefined?o.alt:piece.alt)+'"'+dims(piece)+' loading="'+(o.eager?'eager':'lazy')+'" decoding="async"'+(o.eager?' fetchpriority="high"':'')+'>';
const kindOf=p=>p.kind||CATEGORY_LABEL[p.category]||p.category;
const accentOf=p=>(p.story&&p.story.accent)||'#bba783';

/** Merge verified case-study notes into grouped projects (same rules the archive always used). */
function buildProjects(catalog,stories){
 const projects=group(catalog);
 projects.forEach(p=>{const story=stories&&stories[p.key];if(story){p.title=story.title||p.title;p.year=story.period||'';p.client=story.client||'';p.kind=story.kind||p.category;p.tags=story.tags||[];p.story=story;p.summary=story.brief||p.summary;}});
 return projects;
}
function stats(projects){
 return {projects:projects.length,pieces:projects.reduce((n,p)=>n+p.pieces.length,0),cases:projects.filter(p=>p.story).length};
}

/* ---------- landing ---------- */
function heroStack(byKey){
 const keys=['kente-pa','el-festin-elegante','styled-couture','ldssa-colour-week','fries-haven'];
 return '<div class="stack" data-stack aria-label="A few pieces from the portfolio">'+keys.map((k,i)=>{const p=byKey.get(k);if(!p)return '';const piece=p.pieces[0];
  return '<a class="stack__card" href="'+url(p)+'" style="--i:'+i+';--mount:'+text(piece.mount)+';--ar:'+(piece.w/piece.h).toFixed(3)+'" data-cursor="Open">'+img(piece,{eager:i<2,alt:p.title+' — '+piece.title})+'<span class="stack__label">'+text(p.title)+'</span></a>';}).join('')+'</div>';
}
function keywordPreviews(byKey){
 return '<div class="kw-preview" aria-hidden="true">'+KEYWORDS.map(k=>'<span class="kw-preview__set" data-kw-set="'+k.id+'">'+k.keys.map((key,i)=>{const p=byKey.get(key);if(!p)return '';const piece=p.pieces[0];return '<span class="kw-preview__card" style="--i:'+i+';--mount:'+text(piece.mount)+';--ar:'+(piece.w/piece.h).toFixed(3)+'"><img src="'+text(piece.preview)+'" alt=""'+dims(piece,320)+' loading="lazy" decoding="async"><span class="kw-preview__name">'+text(p.title)+'</span></span>';}).join('')+'</span>').join('')+'</div>';
}
function caseCard(p,i){
 const piece=p.pieces[0],span=CASE_SPANS[i]||4,wide=span>=6;
 return '<li class="case reveal" style="--span:'+span+';--accent-c:'+text(accentOf(p))+';--mount:'+text(piece.mount)+'"><a class="case__link" href="'+url(p)+'" data-cursor="View case"><div class="case__media'+(wide?' case__media--wide':'')+'">'+img(piece,{alt:p.title+' — '+piece.title})+'</div><div class="case__meta"><span class="case__no">'+pad(i+1)+'</span><div class="case__text"><h3 class="case__title">'+text(p.title)+'</h3><span class="case__kind">'+text(kindOf(p))+(p.year?' · '+text(p.year):'')+'</span></div><span class="case__arrow">'+ICON.upRight+'</span></div></a>'+(p.summary?'<p class="case__brief">'+text(p.summary)+'</p>':'')+'</li>';
}
/** Balance tiles into rows by their real aspect ratio (a justified wall). */
function wallRows(list,rows){
 const out=Array.from({length:rows},()=>({w:0,items:[]}));
 list.forEach(p=>{const piece=p.pieces[0],ar=piece.w/piece.h;const row=out.reduce((a,b)=>b.w<a.w?b:a);row.items.push(p);row.w+=ar+0.08;});
 return out.map(r=>r.items);
}
function wallTile(p){
 const piece=p.pieces[0];
 return '<a class="tile" href="'+url(p)+'" style="--ar:'+(piece.w/piece.h).toFixed(3)+';--mount:'+text(piece.mount)+'" data-key="'+text(p.key)+'" data-cursor="Open"><img src="'+text(piece.preview)+'" alt="'+text(p.title)+'"'+dims(piece,320)+' loading="lazy" decoding="async"><span class="tile__label">'+text(p.title)+'</span></a>';
}
function landing(projects){
 const byKey=new Map(projects.map(p=>[p.key,p])),s=stats(projects);
 const cases=SHOWCASE.map(k=>byKey.get(k)).filter(Boolean);
 const kw=k=>'<a class="kw" href="/design/index?filter='+k.filter+'" data-kw="'+k.id+'">'+text(k.label)+'</a>';
 // The wall interleaves case studies with everything else so each row has range.
 const order=projects.slice();
 const rows=wallRows(order,3);
 return '<div class="landing">'+
 '<section class="hero" aria-labelledby="hero-title"><div class="hero__copy">'+
  '<p class="eyebrow"><i aria-hidden="true"></i>Iconka Designs · Kumasi, Ghana</p>'+
  '<h1 id="hero-title" class="hero__title"><span class="hero__lead">I’m Papa Kojo, a graphic designer.</span> <span class="hero__line">I make '+kw(KEYWORDS[0])+', '+kw(KEYWORDS[1])+' and '+kw(KEYWORDS[2])+' that people understand at a glance.</span></h1>'+
  '<div class="hero__actions"><a class="btn btn--primary" href="'+MAILTO+'" data-copy-email>'+'<span>Start a project</span>'+ICON.copy+'</a><a class="btn btn--ghost" href="#work"><span>See selected work</span>'+ICON.down+'</a></div>'+
  '<dl class="facts"><div><dt>Projects</dt><dd>'+s.projects+'</dd></div><div><dt>Pieces</dt><dd>'+s.pieces+'</dd></div><div><dt>Case studies</dt><dd>'+s.cases+'</dd></div><div><dt>Designing since</dt><dd>2022</dd></div></dl>'+
 '</div><div class="hero__art"><div class="hero__stage">'+heroStack(byKey)+keywordPreviews(byKey)+'</div><p class="hero__caption"><span class="dot" aria-hidden="true"></span>Hover the stack, or the underlined words, to preview work.</p></div></section>'+
 '<section class="work" id="work" aria-labelledby="work-title"><header class="section-head reveal"><div><p class="eyebrow"><i aria-hidden="true"></i>Selected work</p><h2 id="work-title">Ten projects, with the thinking behind them.</h2></div><a class="link" href="/design/index?filter=case-studies"><span>All case studies</span>'+ICON.right+'</a></header>'+
  '<ol class="cases">'+cases.map(caseCard).join('')+'</ol></section>'+
 '<section class="wall-section" id="archive" aria-labelledby="wall-title"><header class="section-head reveal"><div><p class="eyebrow"><i aria-hidden="true"></i>The archive</p><h2 id="wall-title">Every project, on one wall.</h2><p class="section-head__sub">'+s.projects+' projects, from brand marks to countdown posters. Drag sideways to look around.</p></div><div class="section-head__tools"><button type="button" class="btn btn--ghost btn--small" data-wall-shuffle hidden>'+ICON.shuffle+'<span>Shuffle</span></button><a class="btn btn--ghost btn--small" href="/design/index">'+ICON.list+'<span>Open the index</span></a></div></header>'+
  '<div class="wall" data-wall><div class="seo-preloaded__projects">'+rows.map(r=>'<span class="wall__row">'+r.map(wallTile).join('')+'</span>').join('')+'</div></div>'+
  '<div class="wall__foot"><span class="wall__progress" aria-hidden="true"><i data-wall-bar></i></span><span class="wall__hint" data-wall-hint>Drag, swipe or use the arrow keys</span></div></section>'+
 aboutSection()+
 '</div>';
}
function aboutSection(){
 return '<section class="about" id="about" aria-labelledby="about-title"><div class="about__grid">'+
 '<figure class="about__portrait reveal"><img src="/assets/papa-kojo-portrait.webp" alt="Portrait of Papa Kojo Mensah" width="512" height="512" loading="lazy" decoding="async"><figcaption>Papa Kojo Mensah<br><span>Kumasi, Ghana</span></figcaption></figure>'+
 '<div class="about__body reveal"><p class="eyebrow"><i aria-hidden="true"></i>About</p><h2 id="about-title">Clear first. Then memorable.</h2>'+
 '<p>Since 2022 I have run Iconka Designs from Kumasi, making brand identities, event campaigns and social graphics for small businesses, student associations and community events.</p>'+
 '<p>I design for the person reading the work: what they notice first, what they need to understand, and what they should do next. Most of my projects start with a message that has to land quickly, on a phone screen or a printed poster.</p>'+
 '<ul class="chips" aria-label="What I design"><li>Brand identities</li><li>Event campaigns and countdowns</li><li>Posters and information graphics</li><li>Social media graphics</li></ul></div>'+
 '<aside class="contact-card reveal" aria-labelledby="contact-title"><p class="eyebrow"><i aria-hidden="true"></i>Work with me</p><h3 id="contact-title">Have a project in mind?</h3><p>Tell me what the design should help people do, where it will appear and when you need it.</p>'+
 '<button type="button" class="email-copy" data-copy-email><span class="email-copy__addr">'+EMAIL+'</span><span class="email-copy__act">'+ICON.copy+'<span data-copy-label>Copy</span></span></button>'+
 '<div class="contact-card__links"><a class="btn btn--primary btn--small" href="'+MAILTO+'">'+ICON.mail+'<span>Email me</span></a><a class="link" href="/resume/"><span>One-page CV</span>'+ICON.upRight+'</a><a class="link" href="/"><span>Main portfolio</span>'+ICON.upRight+'</a></div></aside>'+
 '</div></section>';
}

/* ---------- index (rendered in the browser) ---------- */
function filterCounts(projects){return FILTERS.map(f=>({id:f.id,label:f.label,count:projects.filter(f.test).length}));}
function indexShell(projects,state){
 const counts=filterCounts(projects),s=stats(projects);
 return '<div class="index-page"><header class="page-head"><p class="eyebrow"><i aria-hidden="true"></i>Index</p><h1>All work</h1><p class="page-head__sub">'+s.projects+' projects and '+s.pieces+' pieces. Search by name, filter by type, or switch to a list.</p></header>'+
 '<div class="toolbar" role="search"><div class="search-field">'+ICON.search+'<label class="sr-only" for="find-project">Search projects</label><input id="find-project" type="search" placeholder="Search projects" autocomplete="off" value="'+text(state.q||'')+'"><kbd aria-hidden="true">/</kbd></div>'+
 '<div class="chips chips--filters" role="group" aria-label="Filter projects">'+counts.filter(c=>c.count).map(c=>'<button type="button" class="chip" data-filter="'+c.id+'" aria-pressed="'+(c.id===state.filter)+'">'+text(c.label)+'<span class="chip__count">'+c.count+'</span></button>').join('')+'</div>'+
 '<div class="segmented" role="group" aria-label="Layout"><button type="button" data-layout="grid" aria-pressed="'+(state.view!=='list')+'" aria-label="Grid">'+ICON.grid+'</button><button type="button" data-layout="list" aria-pressed="'+(state.view==='list')+'" aria-label="List">'+ICON.list+'</button></div></div>'+
 '<p class="results-status" id="result-status" role="status" aria-live="polite"></p><div id="projects-results"></div></div>';
}
function indexGrid(items){
 return '<ul class="grid">'+items.map(p=>{const piece=p.pieces[0];return '<li><a class="card" href="'+url(p)+'" style="--mount:'+text(piece.mount)+';--accent-c:'+text(accentOf(p))+'" data-cursor="Open"><span class="card__media">'+img(piece,{alt:p.title+' — '+piece.title})+(p.story?'<span class="card__badge">Case study</span>':'')+'</span><span class="card__meta"><span class="card__title">'+text(p.title)+'</span><span class="card__kind">'+text(kindOf(p))+(p.pieces.length>1?' · '+p.pieces.length+' pieces':'')+'</span></span></a></li>';}).join('')+'</ul>';
}
function indexList(items){
 return '<ol class="rows">'+items.map(p=>{const piece=p.pieces[0];return '<li class="row" data-key="'+text(p.key)+'"><a class="row__link" href="'+url(p)+'" data-preview="'+text(piece.preview)+'" data-mount="'+text(piece.mount)+'"><span class="row__no">'+text(p.number)+'</span><span class="row__title">'+text(p.title)+(p.story?'<span class="row__badge">Case study</span>':'')+'</span><span class="row__kind">'+text(kindOf(p))+'</span><span class="row__year">'+text(p.year||'—')+'</span><span class="row__count">'+p.pieces.length+'</span><span class="row__arrow">'+ICON.upRight+'</span></a><button type="button" class="row__peek" aria-expanded="false" aria-label="Preview '+text(p.title)+'">+</button><span class="row__thumb" hidden><img src="'+text(piece.preview)+'" alt=""'+dims(piece,320)+' loading="lazy" decoding="async"></span></li>';}).join('')+'</ol>';
}
function emptyState(){return '<div class="empty"><h2>No projects match that.</h2><p>Try a shorter word, or show everything again.</p><button type="button" class="btn btn--ghost" data-reset>Show all projects</button></div>';}

/* ---------- project detail ---------- */
function detail(project,projects){
 const p=project,i=projects.indexOf(p),prev=projects[(i-1+projects.length)%projects.length],next=projects[(i+1)%projects.length],story=p.story||{};
 const meta=[['Client',p.client||story.client],['Type',kindOf(p)],['Period',p.year],['Pieces',String(p.pieces.length)],['Role','Graphic design']].filter(x=>x[1]);
 const figures=p.pieces.map((piece,n)=>'<figure class="piece reveal" style="--mount:'+text(piece.mount)+';--ar:'+(piece.w/piece.h).toFixed(3)+'"><a class="piece__frame" href="'+text(piece.full)+'" data-lightbox="'+n+'" data-cursor="Zoom" aria-label="View '+text(piece.title)+' at full size">'+img(piece,{eager:n===0,alt:p.title+' — '+piece.title})+'</a><figcaption><span>'+pad(n+1)+'</span>'+text((story.applications||[])[n]||piece.title)+'</figcaption></figure>').join('');
 const blocks=[['The brief',story.brief],['The design decisions',story.approach],['Designer’s note',story.note],['Looking at the finished work',story.effect]].filter(x=>x[1]);
 const pager=(q,dir)=>'<a class="pager__item pager__item--'+dir+'" href="'+url(q)+'" rel="'+dir+'"><span class="pager__img" style="--mount:'+text(q.pieces[0].mount)+'"><img src="'+text(q.pieces[0].preview)+'" alt=""'+dims(q.pieces[0],320)+' loading="lazy" decoding="async"></span><span class="pager__text"><span class="pager__dir">'+(dir==='prev'?'Previous':'Next')+'</span><span class="pager__title">'+text(q.title)+'</span></span>'+(dir==='prev'?ICON.left:ICON.right)+'</a>';
 return '<article class="project" style="--accent-c:'+text(accentOf(p))+'" data-project="'+text(p.key)+'">'+
 '<nav class="crumbs" aria-label="Breadcrumb"><a href="/design/">Work</a><span aria-hidden="true">/</span><a href="/design/index">Index</a><span aria-hidden="true">/</span><span aria-current="page">'+text(p.title)+'</span></nav>'+
 '<header class="project__head"><div><p class="eyebrow"><i aria-hidden="true"></i>'+text(kindOf(p))+'</p><h1>'+text(p.title)+'</h1>'+(p.summary?'<p class="project__lede">'+text(p.summary)+'</p>':'')+'</div><dl class="meta">'+meta.map(([k,v])=>'<div><dt>'+k+'</dt><dd>'+text(v)+'</dd></div>').join('')+'</dl></header>'+
 '<div class="project__gallery'+(p.pieces.length===1?' project__gallery--single':'')+'">'+figures+'</div>'+
 (blocks.length?'<section class="story" aria-label="About this project">'+blocks.map(([h,t])=>'<div class="story__block reveal"><h2>'+h+'</h2><p>'+text(t)+'</p></div>').join('')+'</section>':'<p class="project__note">This is an image-led project. I’ll add notes about the brief and decisions once I can confirm the details.</p>')+
 '<div class="project__cta"><p>Need something like this?</p><a class="btn btn--primary btn--small" href="mailto:'+EMAIL+'?subject='+encodeURIComponent('Design enquiry — '+p.title)+'">'+ICON.mail+'<span>Discuss a design project</span></a><a class="link" href="/design/index"><span>Back to the index</span>'+ICON.right+'</a></div>'+
 '<nav class="pager" aria-label="More projects">'+pager(prev,'prev')+pager(next,'next')+'</nav></article>';
}

/* ---------- sketchbook ---------- */
function sketchbook(projects){
 const items=projects.filter(p=>p.category==='Sketchbook');
 return '<div class="sketchbook"><header class="page-head"><p class="eyebrow"><i aria-hidden="true"></i>Sketchbook</p><h1>Smaller pieces, made to practise.</h1><p class="page-head__sub">'+plural(items.length,'piece')+' of daily graphics, seasonal posts and type experiments. Select one to see it larger.</p></header>'+
 '<ul class="masonry">'+items.map(p=>{const piece=p.pieces[0];return '<li class="masonry__item reveal"><a class="sketch" href="'+url(p)+'" style="--mount:'+text(piece.mount)+'" data-sketch="'+text(p.key)+'" data-full="'+text(piece.full)+'" data-cursor="View"><img src="'+text(piece.preview)+'" alt="'+text(p.title)+'"'+dims(piece)+' loading="lazy" decoding="async"><span class="sketch__label">'+text(p.title)+(p.pieces.length>1?' · '+p.pieces.length:'')+'</span></a></li>';}).join('')+'</ul></div>';
}

/* ---------- command palette entries ---------- */
function paletteEntries(projects){
 const pages=[{title:'Selected work',hint:'Page',href:'/design/'},{title:'Index of all work',hint:'Page',href:'/design/index'},{title:'Sketchbook',hint:'Page',href:'/design/sketchbook'},{title:'About and contact',hint:'Page',href:'/design/#about'},{title:'Main portfolio',hint:'PKM',href:'/'}];
 return pages.concat(projects.map(p=>({title:p.title,hint:kindOf(p),href:url(p),thumb:p.pieces[0].preview,mount:p.pieces[0].mount,terms:[p.key,p.category,p.client,p.year,p.keywords,(p.tags||[]).join(' ')].join(' ')})));
}

const api={BASE,EMAIL,MAILTO,SHOWCASE,KEYWORDS,FILTERS,ICON,group,buildProjects,stats,url,text,slug,landing,indexShell,indexGrid,indexList,emptyState,detail,sketchbook,paletteEntries,featuredKeys};
root.IconkaCore=api;
if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:this);
