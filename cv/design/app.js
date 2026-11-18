/* Iconka Designs — progressive enhancement for the static pages.
   Every page works without this file. With it: theme, live Kumasi clock, copy-email, reveal,
   cursor label, hero previews and tilt, the draggable wall, lightbox, command palette and the
   browser-rendered /design/index with shareable filters. */
(()=>{'use strict';
const C=window.IconkaCore,doc=document,root=doc.documentElement,app=doc.querySelector('#archive-app');
const $=(s,c=doc)=>c.querySelector(s),$$=(s,c=doc)=>Array.from(c.querySelectorAll(s));
const reduce=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover: hover) and (pointer: fine)');
const isIndex=root.dataset.route==='index';
const path=location.pathname.replace(/\/+$/,'/');

/* ---------- data (fetched only when a feature needs it) ---------- */
let dataPromise=null;
function loadProjects(){
 if(!dataPromise)dataPromise=Promise.all([
  fetch('/design/catalog.json').then(r=>{if(!r.ok)throw Error('catalog');return r.json();}),
  fetch('/design/stories.json').then(r=>r.ok?r.json():{})
 ]).then(([catalog,stories])=>C.buildProjects(catalog,stories));
 return dataPromise;
}

/* ---------- theme ---------- */
const themeButton=$('#theme-toggle');
function syncTheme(){const light=root.dataset.theme==='light';themeButton?.setAttribute('aria-label','Switch to '+(light?'dark':'light')+' theme');const m=$('meta[name="theme-color"]');if(m)m.content=light?'#F4F2ED':'#080808';}
themeButton?.addEventListener('click',()=>{
 const next=root.dataset.theme==='light'?'dark':'light';
 const apply=()=>{root.dataset.theme=next;try{localStorage.setItem('iconka.theme',next);}catch{}syncTheme();};
 if(doc.startViewTransition&&!reduce.matches)doc.startViewTransition(apply);else apply();
});
syncTheme();

/* ---------- navigation state ---------- */
const active=isIndex?'index':path==='/design/'?'work':path.startsWith('/design/sketchbook')?'sketchbook':null;
if(active)$$('[data-nav="'+active+'"]').forEach(a=>a.setAttribute('aria-current','page'));
const topbar=$('.topbar');
const onScroll=()=>topbar?.classList.toggle('is-scrolled',scrollY>8);
addEventListener('scroll',onScroll,{passive:true});onScroll();

/* ---------- footer clock and year ---------- */
const clock=$('[data-clock]');
function tick(){if(!clock)return;try{const t=new Intl.DateTimeFormat('en-GB',{timeZone:'Africa/Accra',hour:'2-digit',minute:'2-digit'}).format(new Date());clock.textContent=t+' GMT';clock.dateTime=new Date().toISOString();}catch{}}
tick();setInterval(tick,30000);
$$('[data-year]').forEach(n=>n.textContent=new Date().getFullYear());

/* ---------- toast ---------- */
const toastEl=$('#toast');let toastTimer;
function toast(html){if(!toastEl)return;toastEl.innerHTML=html;toastEl.classList.add('is-on');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toastEl.classList.remove('is-on'),4200);}

/* ---------- copy email (falls back to the mail app) ---------- */
doc.addEventListener('click',async e=>{
 const el=e.target.closest('[data-copy-email]');if(!el)return;
 if(e.metaKey||e.ctrlKey||e.shiftKey)return;
 e.preventDefault();
 try{
  await navigator.clipboard.writeText(C.EMAIL);
  toast('<span>Email copied: <strong>'+C.EMAIL+'</strong></span><a href="'+C.MAILTO+'">Open mail app</a>');
  const label=el.querySelector('[data-copy-label]');if(label){label.textContent='Copied';setTimeout(()=>label.textContent='Copy',2400);}
 }catch{location.href=C.MAILTO;}
});

/* ---------- reveal on scroll ---------- */
function observeReveal(scope=doc){
 const items=$$('.reveal:not(.is-in)',scope);
 if(reduce.matches||!('IntersectionObserver' in window)){items.forEach(n=>n.classList.add('is-in'));return;}
 const io=new IntersectionObserver(entries=>entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('is-in');io.unobserve(en.target);}}),{rootMargin:'0px 0px -8% 0px',threshold:.06});
 items.forEach(n=>io.observe(n));
}
observeReveal();

/* ---------- cursor label (fine pointers only) ---------- */
const cursor=$('.cursor'),cursorLabel=$('.cursor__label');
let cx=-200,cy=-200,cursorFrame=0;
function moveCursor(){cursor.style.setProperty('--cx',cx+'px');cursor.style.setProperty('--cy',cy+'px');cursorFrame=0;}
if(cursor&&fine.matches&&!reduce.matches){
 doc.addEventListener('pointermove',e=>{cx=e.clientX;cy=e.clientY;if(!cursorFrame)cursorFrame=requestAnimationFrame(moveCursor);},{passive:true});
 doc.addEventListener('pointerover',e=>{const t=e.target.closest('[data-cursor]');if(t&&!t.closest('.wall.is-dragging')){cursorLabel.textContent=t.dataset.cursor;cursor.classList.add('is-on');}});
 doc.addEventListener('pointerout',e=>{const t=e.target.closest('[data-cursor]');if(t&&!t.contains(e.relatedTarget))cursor.classList.remove('is-on');});
 addEventListener('blur',()=>cursor.classList.remove('is-on'));
}

/* ---------- hero: keyword previews and the tilting stack ---------- */
const preview=$('.kw-preview'),hero=$('.hero');
if(preview&&fine.matches&&matchMedia('(min-width: 921px)').matches){
 const show=kw=>{$$('.kw').forEach(k=>k.classList.toggle('is-active',k===kw));$$('.kw-preview__set',preview).forEach(s=>s.classList.toggle('is-on',s.dataset.kwSet===kw.dataset.kw));hero.classList.add('is-previewing');};
 const hide=()=>{hero.classList.remove('is-previewing');$$('.kw').forEach(k=>k.classList.remove('is-active'));$$('.kw-preview__set',preview).forEach(s=>s.classList.remove('is-on'));};
 $$('.kw').forEach(kw=>{kw.addEventListener('pointerenter',()=>show(kw));kw.addEventListener('pointerleave',hide);kw.addEventListener('focus',()=>show(kw));kw.addEventListener('blur',hide);});
 // warm the preview images so the swap is instant
 setTimeout(()=>$$('img',preview).forEach(i=>{i.loading='eager';}),1200);
}
const stack=$('[data-stack]');
if(stack&&fine.matches&&!reduce.matches){
 let frame=0,rx=0,ry=0;
 stack.addEventListener('pointermove',e=>{const r=stack.getBoundingClientRect();ry=((e.clientX-r.left)/r.width-.5)*14;rx=-((e.clientY-r.top)/r.height-.5)*12;if(!frame)frame=requestAnimationFrame(()=>{stack.style.setProperty('--rx',rx.toFixed(2)+'deg');stack.style.setProperty('--ry',ry.toFixed(2)+'deg');frame=0;});});
 stack.addEventListener('pointerleave',()=>{stack.style.setProperty('--rx','0deg');stack.style.setProperty('--ry','0deg');});
}

/* ---------- the wall: drag to look around (mouse), native swipe on touch ---------- */
const wall=$('[data-wall]');
if(wall){
 const bar=$('[data-wall-bar]'),hint=$('[data-wall-hint]');
 const syncBar=()=>{if(!bar)return;const track=bar.parentElement.clientWidth,max=wall.scrollWidth-wall.clientWidth,w=Math.max(24,track*wall.clientWidth/wall.scrollWidth);bar.style.width=w+'px';bar.style.transform='translateX('+((track-w)*(max>0?wall.scrollLeft/max:0))+'px)';};
 wall.addEventListener('scroll',syncBar,{passive:true});addEventListener('resize',syncBar);syncBar();
 let down=false,dragged=false,startX=0,startLeft=0,lastX=0,lastT=0,vel=0,raf=0;
 wall.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'||e.button!==0)return;down=true;dragged=false;startX=lastX=e.clientX;startLeft=wall.scrollLeft;lastT=performance.now();vel=0;cancelAnimationFrame(raf);});
 addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-startX;if(!dragged&&Math.abs(dx)>5){dragged=true;wall.classList.add('is-dragging');cursor?.classList.remove('is-on');}if(!dragged)return;wall.scrollLeft=startLeft-dx;const now=performance.now();vel=(e.clientX-lastX)/Math.max(1,now-lastT);lastX=e.clientX;lastT=now;});
 addEventListener('pointerup',()=>{if(!down)return;down=false;wall.classList.remove('is-dragging');if(dragged&&!reduce.matches){let v=-vel*16;const glide=()=>{wall.scrollLeft+=v;v*=.94;if(Math.abs(v)>.4)raf=requestAnimationFrame(glide);};raf=requestAnimationFrame(glide);}});
 wall.addEventListener('click',e=>{if(dragged){e.preventDefault();e.stopPropagation();dragged=false;}},true);
 wall.addEventListener('dragstart',e=>e.preventDefault());
 wall.addEventListener('keydown',e=>{if(e.key!=='ArrowRight'&&e.key!=='ArrowLeft')return;e.preventDefault();const tiles=$$('.tile',wall),i=tiles.indexOf(doc.activeElement);const next=tiles[Math.max(0,Math.min(tiles.length-1,(i<0?0:i)+(e.key==='ArrowRight'?1:-1)))];next?.focus();next?.scrollIntoView({behavior:reduce.matches?'auto':'smooth',inline:'center',block:'nearest'});});
 if(hint&&!fine.matches)hint.textContent='Swipe sideways to look around';
 const shuffle=$('[data-wall-shuffle]');
 if(shuffle){
  shuffle.hidden=false;
  shuffle.addEventListener('click',()=>{
   const plane=$('.seo-preloaded__projects',wall),rows=$$('.wall__row',plane),tiles=$$('.tile',plane);
   for(let i=tiles.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[tiles[i],tiles[j]]=[tiles[j],tiles[i]];}
   const apply=()=>{const widths=rows.map(()=>0);tiles.forEach(t=>{const k=widths.indexOf(Math.min(...widths));rows[k].appendChild(t);widths[k]+=parseFloat(t.style.getPropertyValue('--ar'))+.08;});wall.scrollLeft=0;syncBar();};
   if(doc.startViewTransition&&!reduce.matches)doc.startViewTransition(apply);else apply();
   toast('<span>Shuffled. Every piece found a new spot on the wall.</span>');
  });
 }
}

/* ---------- lightbox ---------- */
const box=$('#lightbox'),boxImg=$('#lightbox-image'),boxStage=$('.lightbox__stage'),boxOpen=$('#lightbox-open'),boxZoom=$('#lightbox-zoom');
let items=[],index=0,returnFocus=null;
function showItem(){
 const it=items[index];if(!it)return;
 boxImg.hidden=false;$('#lightbox-error').hidden=true;boxImg.classList.add('is-loading');
 boxImg.onload=()=>boxImg.classList.remove('is-loading');
 boxImg.src=it.src;boxImg.alt=it.alt||it.title;
 $('#lightbox-title').textContent=it.title;$('#lightbox-count').textContent=items.length>1?(index+1)+' of '+items.length:'';
 if(it.href&&location.pathname!==it.href){boxOpen.hidden=false;boxOpen.href=it.href;}else boxOpen.hidden=true;
 $('#lightbox-prev').hidden=$('#lightbox-next').hidden=items.length<2;
 const next=items[(index+1)%items.length];if(next&&next!==it){const pre=new Image();pre.src=next.src;}
}
function openBox(list,i,from){if(!box)return;items=list;index=i;returnFocus=from||doc.activeElement;setZoom(false);box.showModal();root.style.overflow='hidden';showItem();}
function step(n){index=(index+n+items.length)%items.length;setZoom(false);showItem();}
function setZoom(on){boxStage?.classList.toggle('is-zoomed',on);boxZoom?.setAttribute('aria-pressed',String(on));}
if(box){
 boxImg.addEventListener('error',()=>{boxImg.hidden=true;$('#lightbox-error').hidden=false;});
 $('#lightbox-close').addEventListener('click',()=>box.close());
 $('#lightbox-prev').addEventListener('click',()=>step(-1));$('#lightbox-next').addEventListener('click',()=>step(1));
 boxZoom.addEventListener('click',()=>setZoom(!boxStage.classList.contains('is-zoomed')));
 boxImg.addEventListener('click',()=>setZoom(!boxStage.classList.contains('is-zoomed')));
 box.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();step(1);}else if(e.key==='ArrowLeft'){e.preventDefault();step(-1);}});
 box.addEventListener('close',()=>{root.style.overflow='';setZoom(false);returnFocus?.focus?.();});
 box.addEventListener('click',e=>{if(e.target===box||e.target===boxStage)box.close();});
 let sx=0,sy=0;
 boxStage.addEventListener('pointerdown',e=>{sx=e.clientX;sy=e.clientY;});
 boxStage.addEventListener('pointerup',e=>{if(boxStage.classList.contains('is-zoomed'))return;const dx=e.clientX-sx,dy=e.clientY-sy;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.4)step(dx<0?1:-1);});
}
// Project pages: every piece in the gallery.
doc.addEventListener('click',e=>{
 const link=e.target.closest('[data-lightbox]');if(!link||!box||e.metaKey||e.ctrlKey)return;e.preventDefault();
 const project=link.closest('[data-project]'),title=$('.project__head h1')?.textContent||'';
 const list=$$('[data-lightbox]',project).map(a=>({src:a.getAttribute('href'),alt:a.querySelector('img')?.alt,title:title+' · '+(a.closest('figure').querySelector('figcaption')?.textContent.replace(/^\d+/,'').trim()||'')}));
 openBox(list,Number(link.dataset.lightbox),link);
});
// Sketchbook: browse every sketch without leaving the page.
doc.addEventListener('click',e=>{
 const link=e.target.closest('[data-sketch]');if(!link||!box||e.metaKey||e.ctrlKey)return;e.preventDefault();
 const all=$$('[data-sketch]');
 openBox(all.map(a=>({src:a.dataset.full,alt:a.querySelector('img')?.alt,title:a.querySelector('img')?.alt||'',href:a.getAttribute('href')})),all.indexOf(link),link);
});

/* ---------- command palette ---------- */
const palette=$('#palette'),pInput=$('#palette-input'),pList=$('#palette-list');
let entries=null,matches=[],sel=0;
function renderPalette(){
 const q=pInput.value.normalize('NFKD').replace(/[̀-ͯ]/g,'').toLowerCase().trim();
 const words=q.split(/\s+/).filter(Boolean);
 matches=(entries||[]).filter(it=>{const hay=(it.title+' '+it.hint+' '+(it.terms||'')).normalize('NFKD').replace(/[̀-ͯ]/g,'').toLowerCase();return words.every(w=>hay.includes(w));}).slice(0,40);
 sel=Math.min(sel,Math.max(0,matches.length-1));
 if(!entries){pList.innerHTML='<li class="palette__empty">Loading projects…</li>';return;}
 pList.innerHTML=matches.length?matches.map((it,i)=>'<li id="pal-'+i+'" class="palette__item" role="option" aria-selected="'+(i===sel)+'" data-i="'+i+'">'+(it.thumb?'<span class="palette__thumb" style="--mount:'+C.text(it.mount)+'"><img src="'+C.text(it.thumb)+'" alt="" loading="lazy"></span>':'<span class="palette__thumb palette__thumb--page">'+C.ICON.right+'</span>')+'<span class="palette__title">'+C.text(it.title)+'</span><span class="palette__hint">'+C.text(it.hint)+'</span></li>').join(''):'<li class="palette__empty">Nothing matches “'+C.text(pInput.value)+'”.</li>';
 pInput.setAttribute('aria-activedescendant',matches.length?'pal-'+sel:'');
 $('#pal-'+sel)?.scrollIntoView({block:'nearest'});
}
function openPalette(){
 if(!palette)return;returnFocus=doc.activeElement;pInput.value='';sel=0;palette.showModal();pInput.focus();renderPalette();
 if(!entries)loadProjects().then(p=>{entries=C.paletteEntries(p);renderPalette();}).catch(()=>{pList.innerHTML='<li class="palette__empty">Projects couldn’t load. Try the <a href="/design/index">index</a>.</li>';});
}
function go(it){if(it)location.href=it.href;}
if(palette){
 $$('[data-open-palette]').forEach(b=>b.addEventListener('click',openPalette));
 pInput.addEventListener('input',()=>{sel=0;renderPalette();});
 pInput.addEventListener('keydown',e=>{
  if(e.key==='ArrowDown'){e.preventDefault();sel=(sel+1)%Math.max(1,matches.length);renderPalette();}
  else if(e.key==='ArrowUp'){e.preventDefault();sel=(sel-1+matches.length)%Math.max(1,matches.length);renderPalette();}
  else if(e.key==='Enter'){e.preventDefault();go(matches[sel]);}
 });
 pList.addEventListener('click',e=>{const li=e.target.closest('[data-i]');if(li)go(matches[Number(li.dataset.i)]);});
 pList.addEventListener('pointermove',e=>{const li=e.target.closest('[data-i]');if(li&&Number(li.dataset.i)!==sel){sel=Number(li.dataset.i);$$('.palette__item',pList).forEach((n,i)=>n.setAttribute('aria-selected',String(i===sel)));pInput.setAttribute('aria-activedescendant','pal-'+sel);}});
 palette.addEventListener('click',e=>{if(e.target===palette)palette.close();});
 palette.addEventListener('close',()=>returnFocus?.focus?.());
}
addEventListener('keydown',e=>{
 const typing=/^(INPUT|TEXTAREA|SELECT)$/.test(doc.activeElement?.tagName)||doc.activeElement?.isContentEditable;
 if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();palette?.open?palette.close():openPalette();}
 else if(e.key==='/'&&!typing&&!box?.open&&!palette?.open){e.preventDefault();const search=$('#find-project');if(search)search.focus();else openPalette();}
});

/* ---------- /design/index: rendered here from the same data and views ---------- */
function setHead(){
 doc.title='All Graphic Design Work | Iconka Designs';
 const set=(sel,attr,val)=>{const n=$(sel);if(n)n.setAttribute(attr,val);};
 set('meta[name="description"]','content','Browse all 50 graphic design project groups by Papa Kojo Mensah of Iconka Designs. Search and filter brand identities, campaigns, event and information design.');
 set('link[rel="canonical"]','href','https://pkm.hayalows.com/design/index');set('meta[property="og:url"]','content','https://pkm.hayalows.com/design/index');
 set('meta[property="og:title"]','content','All Graphic Design Work | Iconka Designs');set('meta[name="twitter:title"]','content','All Graphic Design Work | Iconka Designs');
}
function renderIndex(projects){
 const params=new URLSearchParams(location.search);
 const valid=new Set(C.FILTERS.map(f=>f.id));
 const state={filter:valid.has(params.get('filter'))?params.get('filter'):'all',q:params.get('q')||'',view:params.get('view')==='list'?'list':'grid'};
 app.innerHTML=C.indexShell(projects,state);
 const field=$('#find-project'),target=$('#projects-results'),status=$('#result-status');
 let previewEl=null,frame=0,px=0,py=0;
 if(fine.matches){previewEl=doc.createElement('div');previewEl.className='row-preview';previewEl.setAttribute('aria-hidden','true');previewEl.innerHTML='<img alt="">';doc.body.appendChild(previewEl);}
 function syncURL(){const p=new URLSearchParams();if(state.filter!=='all')p.set('filter',state.filter);if(state.q)p.set('q',state.q);if(state.view==='list')p.set('view','list');history.replaceState(null,'',location.pathname+(p.toString()?'?'+p:''));}
 function draw(){
  const f=C.FILTERS.find(x=>x.id===state.filter)||C.FILTERS[0];
  const terms=state.q.normalize('NFKD').replace(/[̀-ͯ]/g,'').toLowerCase().split(/\s+/).filter(Boolean);
  const list=projects.filter(p=>f.test(p)&&terms.every(t=>[p.title,p.key,p.category,p.client,p.year,p.kind,p.keywords,(p.tags||[]).join(' ')].join(' ').normalize('NFKD').replace(/[̀-ͯ]/g,'').toLowerCase().includes(t)));
  status.textContent=list.length+(list.length===1?' project':' projects')+(state.filter!=='all'?' in '+f.label.toLowerCase():'')+(state.q?' matching “'+state.q+'”':'');
  $$('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===state.filter)));
  $$('[data-layout]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.layout===state.view)));
  target.innerHTML=list.length?(state.view==='list'?C.indexList(list):C.indexGrid(list)):C.emptyState();
  syncURL();
 }
 const redraw=()=>{if(doc.startViewTransition&&!reduce.matches)doc.startViewTransition(draw);else draw();};
 field.addEventListener('input',()=>{state.q=field.value.trim();draw();});
 field.addEventListener('keydown',e=>{if(e.key==='Escape'&&field.value){field.value='';state.q='';draw();}});
 app.addEventListener('click',e=>{
  const fb=e.target.closest('[data-filter]');if(fb){state.filter=fb.dataset.filter;redraw();return;}
  const lb=e.target.closest('[data-layout]');if(lb&&lb.dataset.layout!==state.view){state.view=lb.dataset.layout;redraw();return;}
  if(e.target.closest('[data-reset]')){state.filter='all';state.q='';field.value='';draw();field.focus();return;}
  const peek=e.target.closest('.row__peek');if(peek){const row=peek.closest('.row'),thumb=$('.row__thumb',row),open=thumb.hidden;thumb.hidden=!open;peek.setAttribute('aria-expanded',String(open));peek.textContent=open?'−':'+';}
 });
 if(previewEl){
  const place=()=>{previewEl.style.setProperty('--px',(px+24)+'px');previewEl.style.setProperty('--py',(py-120)+'px');frame=0;};
  target.addEventListener('pointerover',e=>{const a=e.target.closest('.row__link');if(!a)return;$('img',previewEl).src=a.dataset.preview;previewEl.style.setProperty('--mount',a.dataset.mount);previewEl.classList.add('is-on');});
  target.addEventListener('pointerout',e=>{const a=e.target.closest('.row__link');if(a&&!a.contains(e.relatedTarget))previewEl.classList.remove('is-on');});
  target.addEventListener('pointermove',e=>{px=e.clientX;py=e.clientY;if(!frame)frame=requestAnimationFrame(place);},{passive:true});
 }
 draw();
}
if(isIndex){
 setHead();
 loadProjects().then(renderIndex).catch(()=>{delete root.dataset.route;app.insertAdjacentHTML('afterbegin','<p class="project__note" role="status">The searchable index couldn’t load. Every project is still on the wall below.</p>');});
}

/* ---------- old links: /design/#view=<image-id> → its project ---------- */
const legacy=new URLSearchParams(location.hash.replace(/^#/,'')).get('view');
if(legacy)loadProjects().then(projects=>{const p=projects.find(x=>x.pieces.some(i=>i.id===legacy));if(p)location.replace(C.url(p));}).catch(()=>{});
})();
