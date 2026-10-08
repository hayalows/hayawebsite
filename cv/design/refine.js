/* Iconka enhancements: content-led case studies and UseLayouts-inspired artwork carousel. */
(()=>{'use strict';
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const fine=matchMedia('(hover:hover) and (pointer:fine)');
const HOME='/design/';let lastViewerTrigger=null;
function cardHead(label,body){return '<div class="case-prose"><p class="eyebrow">'+label+'</p><p>'+escape(body)+'</p></div>';}
function enhanceCase(project){
 const doc=document.querySelector('.detail');if(!doc||doc.dataset.enriched)return;doc.dataset.enriched='true';
 const story=project.story||{},pictures=project.pieces;
 document.documentElement.style.setProperty('--case-accent',story.accent||'#e0a100');
 const head=doc.querySelector('.detail-head'),metadata=head.querySelector('.meta-strip');
 const fields=[['Project',project.title],['Role','Graphic design'],...(story.period?[['Period',story.period]]:project.year?[['Year',project.year]]:[]),...(story.client?[['For',story.client]]:[]),...(story.relation?[['Type',story.relation]]:[])];
 metadata.innerHTML=fields.map(([label,val])=>'<div><dt>'+escape(label)+'</dt><dd>'+escape(val)+'</dd></div>').join('');
 head.querySelector('h1').textContent=project.title;
 const old=doc.querySelector('.detail-explainer');
 const intro=document.createElement('section');intro.className='case-brief';
 intro.innerHTML='<div>'+cardHead('THE BRIEF',story.brief||'A graphic design piece from my archive. I’m still adding the background to this project.')+'</div><div>'+cardHead('THE APPROACH',story.approach||'The original artwork is presented below. I’ll add the decisions and process behind it as I organise more of the project material.')+'</div>';
 old.replaceWith(intro);
 const gallery=doc.querySelector('.detail-gallery');
 gallery.classList.add('case-original-gallery');
 const hero=document.createElement('section');hero.className='case-hero';
 hero.innerHTML='<button type="button" class="case-hero__open" aria-label="View '+escape(project.title)+' in the image viewer"><img src="'+escape(pictures[0].full)+'" alt="'+escape(project.title)+' '+escape(project.category.toLowerCase())+' artwork" decoding="async"><span>VIEW LARGE ↗</span></button><p class="mono">'+project.number+' / '+escape(pictures[0].title)+'</p>';
 gallery.before(hero);
 hero.querySelector('button').addEventListener('click',event=>{lastViewerTrigger=event.currentTarget;gallery.querySelector('[data-image="0"]')?.click();});
 if(pictures.length>1){
  const carousel=document.createElement('section');carousel.className='feature-carousel';carousel.setAttribute('aria-label','Project applications');
  carousel.innerHTML='<div class="section-heading"><h2>Applications and variations</h2><span>'+pictures.length+' PIECES</span></div>'+
  '<div class="feature-carousel__layout"><div class="feature-carousel__choices" role="group" aria-label="Choose a design">'+pictures.map((piece,i)=>'<button class="feature-carousel__choice" type="button" data-feature="'+i+'" aria-pressed="'+(i===0)+'"><span class="mono">'+String(i+1).padStart(2,'0')+'</span><span>'+escape((story.applications||[])[i]||piece.title)+'</span><span aria-hidden="true">↗</span></button>').join('')+'</div>'+
  '<div class="feature-carousel__preview"><button class="feature-carousel__image" type="button" aria-label="Open this design at full size"><img src="'+escape(pictures[0].preview)+'" alt="'+escape(project.title)+' design preview" loading="lazy" decoding="async"><span class="preview-label">VIEW LARGE ↗</span></button><div class="feature-carousel__footer"><p id="feature-label" role="status">'+escape((story.applications||[])[0]||pictures[0].title)+'</p><div><button type="button" data-feature-prev aria-label="Previous design">←</button><output id="feature-total">1 / '+pictures.length+'</output><button type="button" data-feature-next aria-label="Next design">→</button></div></div></div></div>';
  gallery.before(carousel);
  let active=0,initialTouch=null;
  const image=carousel.querySelector('.feature-carousel__image img'),label=carousel.querySelector('#feature-label'),counter=carousel.querySelector('#feature-total');
  const draw=()=>{image.src=pictures[active].preview;image.alt=project.title+': '+pictures[active].title;label.textContent=(story.applications||[])[active]||pictures[active].title;counter.textContent=(active+1)+' / '+pictures.length;carousel.querySelectorAll('[data-feature]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.feature)===active)));};
  const move=delta=>{active=(active+delta+pictures.length)%pictures.length;draw();};
  carousel.querySelectorAll('[data-feature]').forEach(btn=>btn.addEventListener('click',()=>{active=Number(btn.dataset.feature);draw();}));
  carousel.querySelector('[data-feature-prev]').addEventListener('click',()=>move(-1));carousel.querySelector('[data-feature-next]').addEventListener('click',()=>move(1));
  carousel.querySelector('.feature-carousel__image').addEventListener('click',event=>{lastViewerTrigger=event.currentTarget;gallery.querySelector('[data-image="'+active+'"]')?.click();});
  carousel.addEventListener('keydown',event=>{if(!carousel.contains(document.activeElement))return;if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();move(event.key==='ArrowLeft'?-1:1);}});
  image.addEventListener('touchstart',event=>{initialTouch=event.touches[0].clientX;},{passive:true});
  image.addEventListener('touchend',event=>{if(initialTouch===null)return;const delta=event.changedTouches[0].clientX-initialTouch;initialTouch=null;if(Math.abs(delta)>55)move(delta<0?1:-1);},{passive:true});
 }
 const note=doc.querySelector('.detail-note');
 if(story.note||story.effect)note.innerHTML=(story.note?'<div><p class="eyebrow">DESIGNER’S NOTE</p><blockquote>'+escape(story.note)+'</blockquote></div>':'')+(story.effect?'<div><p class="eyebrow">LOOKING AT THE WORK</p><p>'+escape(story.effect)+'</p></div>':'');
 else note.innerHTML='<p>I’m still adding background, process material and project details as this archive grows.</p>';
 const actions=doc.querySelector('.detail-actions');
 const start=document.createElement('a');start.className='case-start';start.href='mailto:mpapakojo@gmail.com?subject='+encodeURIComponent('Design enquiry — '+project.title);start.textContent='Start a project like this ↗';actions.prepend(start);
 // Existing gallery buttons and handlers stay in the DOM as an accessible fallback to the viewer.
 doc.querySelectorAll('.case-original-gallery img').forEach((img,i)=>{img.alt=project.title+': '+pictures[i].title;});
}
function makePreviewInteractive(container,byKey){
 if(container.dataset.enhanced==='true')return;
 container.dataset.enhanced='true';
 const aside=container.querySelector('.index-preview');if(!aside)return;
 aside.removeAttribute('aria-hidden');aside.setAttribute('aria-label','Project preview');
 const first=container.querySelector('.index-row');
 const firstProject=first?byKey.get(first.dataset.key):null;
 let selected=firstProject,index=0;
 const visual=aside.querySelector('#index-preview-image');
 if(!visual)return;
 const a=document.createElement('a');a.className='index-preview__open';a.href=selected?HOME+selected.key+'/':'#';a.setAttribute('aria-label','Read selected project case study');
 visual.parentNode.insertBefore(a,visual);a.append(visual);
 const footer=document.createElement('div');footer.className='index-preview__controls';
 footer.innerHTML='<span id="preview-project-name">'+escape(selected?.title||'')+'</span><div><button type="button" id="preview-prev" aria-label="Previous image">←</button><output id="preview-position"></output><button type="button" id="preview-next" aria-label="Next image">→</button></div>';
 aside.append(footer);
 const count=footer.querySelector('#preview-position');
 function update(){if(!selected)return;const piece=selected.pieces[index];visual.src=piece.preview;visual.alt=selected.title+' — '+piece.title;a.href=HOME+selected.key+'/';a.setAttribute('aria-label','Read '+selected.title+' case study');footer.querySelector('#preview-project-name').textContent=selected.title;count.textContent=(index+1)+' / '+selected.pieces.length;}
 function pick(p){if(!p||p===selected)return;selected=p;index=0;update();}
 container.querySelectorAll('.index-row').forEach(row=>{
 const p=byKey.get(row.dataset.key);row.addEventListener('pointerenter',()=>pick(p));
 row.querySelector('.row-title')?.addEventListener('focus',()=>pick(p));
 const mobile=row.querySelector('.mobile-preview');
 if(mobile&&!mobile.querySelector('.mobile-project-link')){const link=document.createElement('a');link.className='mobile-project-link';link.href=HOME+p.key+'/';link.textContent='Read this project ↗';mobile.append(link);}
 });
 footer.querySelector('#preview-prev').addEventListener('click',()=>{index=(index-1+selected.pieces.length)%selected.pieces.length;update();});
 footer.querySelector('#preview-next').addEventListener('click',()=>{index=(index+1)%selected.pieces.length;update();});
 if(fine.matches&&!reduced.matches){a.addEventListener('pointermove',e=>{const b=a.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;visual.style.transform='perspective(900px) rotateY('+x*7+'deg) rotateX('+(-y*7)+'deg) scale(1.025)';});a.addEventListener('pointerleave',()=>{visual.style.transform='';});}
 update();
}
function enhanceIndex(byKey){
 const result=document.getElementById('projects-results');if(!result)return;
 const search=document.getElementById('find-project');
 function remember(){try{const selected=document.querySelector('[data-category][aria-pressed="true"]');const view=document.querySelector('[data-view][aria-pressed="true"]');sessionStorage.setItem('iconka.return.v2',JSON.stringify({route:location.pathname,search:search?.value||'',category:selected?.dataset.category||'All',view:view?.dataset.view||'list',scroll:scrollY}));}catch{}}
 const wire=()=>{
  makePreviewInteractive(result,byKey);
  result.querySelectorAll('a[href^="/design/"]').forEach(a=>{if(a.dataset.remember)return;a.dataset.remember='yes';a.addEventListener('click',remember);});
 };
 const observer=new MutationObserver(wire);observer.observe(result,{childList:true});wire();
 let saved=null;try{saved=JSON.parse(sessionStorage.getItem('iconka.return.v2')||'null');if(saved?.route===location.pathname)sessionStorage.removeItem('iconka.return.v2');else saved=null;}catch{}
 if(saved){if(saved.category!=='All')document.querySelector('[data-category="'+CSS.escape(saved.category)+'"]')?.click();if(search){search.value=saved.search||'';search.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('[data-view="'+saved.view+'"]')?.click();requestAnimationFrame(()=>requestAnimationFrame(()=>scrollTo({top:saved.scroll||0,behavior:'instant'})));}
}
document.getElementById('lightbox')?.addEventListener('close',()=>{lastViewerTrigger?.focus({preventScroll:true});lastViewerTrigger=null;});
document.addEventListener('iconka:rendered',event=>{
 const {projects,byKey,active}=event.detail;
 if(active==='index'&&document.querySelector('.detail')){const slug=location.pathname.replace(/^\/design\/?/,'').replace(/\/+$/,'');const p=byKey.get(slug);if(p)enhanceCase(p);}
 else if(document.querySelector('#projects-results'))enhanceIndex(byKey);
});
})();