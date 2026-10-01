const sectionLinks=[...document.querySelectorAll('[data-section-link]')];
const sections=[...document.querySelectorAll('[data-section]')];
const mobileNav=document.querySelector('.mobile-nav');
const mobilePrimaryElement=document.querySelector('.mobile-nav__primary');
const exploreMenus=[...document.querySelectorAll('[data-explore]')];
const mobileExploreTrigger=document.querySelector('.explore--mobile > summary');
const year=document.querySelector('[data-year]');
const mobileDisclosures=[...document.querySelectorAll('[data-mobile-disclosure]')];
const reducedMotionQuery=window.matchMedia?.('(prefers-reduced-motion: reduce)');
const mobileQuery=window.matchMedia?.('(max-width: 52rem)');

// Native disclosures keep navigation usable without JavaScript. One controller
// owns closing/focus behaviour; section tracking remains independent.
function closeExplore(menu,{restoreFocus=false}={}){
  if(!menu.open)return;
  menu.open=false;
  menu.querySelector('summary')?.setAttribute('aria-expanded','false');
  if(restoreFocus)menu.querySelector('summary')?.focus({preventScroll:true});
}
function closeAllExplore(options){exploreMenus.forEach(menu=>closeExplore(menu,options));}
exploreMenus.forEach(menu=>{
  const trigger=menu.querySelector('summary');
  trigger.setAttribute('aria-expanded',String(menu.open));
  menu.querySelector('[data-explore-close]')?.removeAttribute('hidden');
  menu.addEventListener('toggle',()=>{
    trigger.setAttribute('aria-expanded',String(menu.open));
    if(menu.open)exploreMenus.filter(other=>other!==menu).forEach(other=>closeExplore(other));
  });
  menu.querySelector('[data-explore-close]')?.addEventListener('click',()=>closeExplore(menu,{restoreFocus:true}));
  menu.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&menu.open){event.preventDefault();event.stopPropagation();closeExplore(menu,{restoreFocus:true});}
    if(event.target===trigger&&event.key==='ArrowDown'){
      event.preventDefault();menu.open=true;menu.querySelector('nav a')?.focus();
    }
  });
  menu.addEventListener('focusout',event=>{
    // relatedTarget survives the temporary body focus between blur and focus.
    if(event.relatedTarget){if(!menu.contains(event.relatedTarget))closeExplore(menu);}
    else requestAnimationFrame(()=>{if(!menu.contains(document.activeElement))closeExplore(menu);});
  });
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',event=>{
    if(event.button===0&&!event.metaKey&&!event.ctrlKey&&!event.shiftKey&&!event.altKey){
      closeExplore(menu,{restoreFocus:!link.hasAttribute('data-section-link')});
    }
  }));
});
document.addEventListener('pointerdown',event=>exploreMenus.forEach(menu=>{
  if(!menu.contains(event.target))closeExplore(menu);
}));
document.addEventListener('keydown',event=>{
  if(event.key==='Escape')exploreMenus.forEach(menu=>closeExplore(menu,{restoreFocus:true}));
});
mobileQuery?.addEventListener('change',()=>closeAllExplore());

if(mobileDisclosures.length&&window.matchMedia){
  const query=window.matchMedia('(max-width: 35rem)');
  const sync=({matches})=>mobileDisclosures.forEach(item=>{item.open=!matches;});
  sync(query);query.addEventListener?.('change',sync);
}

const localTimeElement=document.querySelector('[data-local-time]');
const localDateElement=document.querySelector('[data-local-date]');
if(localTimeElement){
  const timeFormatter=new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false,timeZone:'Africa/Accra'});
  const dateFormatter=new Intl.DateTimeFormat('en-GB',{weekday:'long',day:'numeric',month:'long',timeZone:'Africa/Accra'});
  const render=()=>{const now=new Date();localTimeElement.textContent=timeFormatter.format(now);localTimeElement.dateTime=now.toISOString();if(localDateElement)localDateElement.textContent=dateFormatter.format(now);};
  render();window.setInterval(render,1000);
}

let activeSectionId='about';
const sideNavElement=document.querySelector('.section-nav');
function createGlide(container){if(!container)return null;const glide=document.createElement('span');glide.className='nav-glide';glide.setAttribute('aria-hidden','true');container.prepend(glide);return glide;}
const sideGlide=createGlide(sideNavElement),mobileGlide=createGlide(mobilePrimaryElement);
const mobileRegion=id=>id==='about'?'about':id==='projects'?'projects':id==='contact'?'contact':['skills','education','personal'].includes(id)?'explore':id;
function mobileActiveElement(){const id=mobileRegion(activeSectionId);if(id==='explore')return mobileExploreTrigger;return mobilePrimaryElement?.querySelector(`[data-section-link="${id}"]`);}
function placeGlides(animated){const apply=()=>{if(sideGlide&&sideNavElement){const a=sideNavElement.querySelector('a.is-active');if(a){const n=sideNavElement.getBoundingClientRect(),r=a.getBoundingClientRect();sideGlide.style.height=r.height+'px';sideGlide.style.transform='translateY('+(r.top-n.top).toFixed(1)+'px)';}}if(mobileGlide&&mobilePrimaryElement){const a=mobileActiveElement();if(a){const n=mobilePrimaryElement.getBoundingClientRect(),r=a.getBoundingClientRect();mobileGlide.style.width=r.width+'px';mobileGlide.style.height=r.height+'px';mobileGlide.style.transform='translate('+(r.left-n.left).toFixed(1)+'px,'+(r.top-n.top).toFixed(1)+'px)';}}};if(!animated){sideGlide?.classList.remove('is-ready');mobileGlide?.classList.remove('is-ready');}apply();requestAnimationFrame(()=>{sideGlide?.classList.add('is-ready');mobileGlide?.classList.add('is-ready');});}
function setActiveSection(id){activeSectionId=id;sectionLinks.forEach(link=>{const active=link.dataset.sectionLink===id;link.classList.toggle('is-active',active);active?link.setAttribute('aria-current','location'):link.removeAttribute('aria-current');});if(mobilePrimaryElement){[...mobilePrimaryElement.querySelectorAll(':scope > [data-section-link]')].forEach(link=>{const active=link.dataset.sectionLink===mobileRegion(id);link.classList.toggle('is-active',active);active?link.setAttribute('aria-current','location'):link.removeAttribute('aria-current');});}if(mobileExploreTrigger)mobileExploreTrigger.classList.toggle('is-active',mobileRegion(id)==='explore');placeGlides(true);}
function isAtPageBottom(){return window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-24;}
function contactHasEnteredView(){const c=document.querySelector('#contact');if(!c)return false;const b=c.getBoundingClientRect();return b.top<=window.innerHeight*.68&&b.bottom>0;}
function sizeMobileDock(){if(mobileNav)mobileNav.style.setProperty('--dock-height',mobileNav.offsetHeight+'px');placeGlides(false);}
if(mobilePrimaryElement&&'ResizeObserver'in window)new ResizeObserver(sizeMobileDock).observe(mobilePrimaryElement);
sizeMobileDock();window.addEventListener('resize',sizeMobileDock,{passive:true});document.fonts?.ready?.then(()=>placeGlides(false));setActiveSection('about');
if('IntersectionObserver'in window){const navObserver=new IntersectionObserver(entries=>{if(isAtPageBottom()||contactHasEnteredView()){setActiveSection('contact');return;}const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setActiveSection(visible.target.id);},{rootMargin:'-18% 0px -62% 0px',threshold:[0,.12,.35]});sections.forEach(s=>navObserver.observe(s));const reveal=new IntersectionObserver((entries,o)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-revealed');o.unobserve(e.target);}}),{rootMargin:'0px 0px -8% 0px',threshold:.06});sections.forEach(s=>{if(s.getBoundingClientRect().top>window.innerHeight*.92)reveal.observe(s);else s.classList.add('is-revealed');});}
window.addEventListener('scroll',()=>{if(isAtPageBottom()||contactHasEnteredView())setActiveSection('contact');},{passive:true});
sectionLinks.forEach(link=>link.addEventListener('click',event=>{
  if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  const id=link.dataset.sectionLink,target=document.getElementById(id);
  if(!target)return;
  event.preventDefault();closeAllExplore();
  if(location.hash!=='#'+id)history.pushState(null,'','#'+id);
  setActiveSection(id);
  target.setAttribute('tabindex','-1');target.focus({preventScroll:true});
  target.scrollIntoView({behavior:reducedMotionQuery?.matches?'auto':'smooth',block:'start'});
}));
if(year)year.textContent=new Date().getFullYear();

const copyButton=document.querySelector('[data-copy-email]');
copyButton?.removeAttribute('hidden');
let copyResetTimer;
copyButton?.addEventListener('click',async()=>{
  if(copyButton.disabled)return;
  const label=copyButton.querySelector('[data-copy-label]'),status=copyButton.querySelector('[data-copy-status]');
  const feedback=document.querySelector('[data-copy-feedback]');
  clearTimeout(copyResetTimer);copyButton.disabled=true;copyButton.dataset.state='pending';copyButton.setAttribute('aria-label','Copying email address');
  if(label)label.textContent='Copying…';
  if(feedback)feedback.hidden=true;
  if(status)status.textContent='Copying email address';
  try{
    if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('mpapakojo@gmail.com');
    copyButton.dataset.state='success';copyButton.setAttribute('aria-label','Copied email address');if(label)label.textContent='Copied';
    if(status)status.textContent='Email address copied';
    copyResetTimer=window.setTimeout(()=>{delete copyButton.dataset.state;copyButton.setAttribute('aria-label','Copy email address: mpapakojo@gmail.com');if(label)label.textContent='Copy email';if(status)status.textContent='';},3000);
  }catch{
    copyButton.dataset.state='error';copyButton.setAttribute('aria-label','Try again to copy email address');if(label)label.textContent='Try again';
    const message='Copying is unavailable. Select mpapakojo@gmail.com above, or use Email me to open your mail app.';
    if(feedback){feedback.textContent=message;feedback.hidden=false;}
    if(status)status.textContent=message;
  }finally{copyButton.disabled=false;}
});
