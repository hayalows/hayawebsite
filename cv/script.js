const sectionLinks=[...document.querySelectorAll('[data-section-link]')];
const sections=[...document.querySelectorAll('[data-section]')];
const mobileNav=document.querySelector('.mobile-nav');
const mobilePrimaryElement=document.querySelector('.mobile-nav__primary');
const mobileMoreButton=document.querySelector('.mobile-nav__more');
const mobileMoreMenu=document.querySelector('#mobile-more-menu');
const year=document.querySelector('[data-year]');
const mobileDisclosures=[...document.querySelectorAll('[data-mobile-disclosure]')];
const reducedMotionQuery=window.matchMedia?.('(prefers-reduced-motion: reduce)');
const mobileQuery=window.matchMedia?.('(max-width: 52rem)');

/* Product OS mobile navigation: four visitor tasks, not seven DOM sections. */
if(mobileNav&&mobilePrimaryElement&&mobileMoreButton){
  const homeLink=mobilePrimaryElement.querySelector('[data-section-link="about"]');
  if(homeLink)homeLink.textContent='Home';
  mobileMoreButton.innerHTML='<span>Contact</span><span class="mobile-nav__contact-mark" aria-hidden="true">↗</span>';
  mobileMoreButton.removeAttribute('aria-expanded');
  mobileMoreButton.removeAttribute('aria-controls');
  mobileMoreButton.setAttribute('aria-label','Go to contact section');
  mobileMoreMenu?.setAttribute('hidden','');
  const style=document.createElement('style');
  style.textContent=`
    @media (max-width:52rem){
      html{scroll-padding-top:1.25rem;scroll-padding-bottom:6.5rem}
      body{padding-bottom:calc(5.9rem + env(safe-area-inset-bottom,0px))}
      .mobile-nav{position:fixed!important;inset:auto .75rem calc(.65rem + env(safe-area-inset-bottom,0px))!important;z-index:40!important;width:auto!important;max-width:34rem;margin:0 auto!important;filter:drop-shadow(0 16px 30px rgb(0 0 0 / .38))}
      .mobile-nav__primary{grid-template-columns:repeat(4,minmax(0,1fr))!important;padding:.3rem!important;border:1px solid rgb(255 255 255 / .12)!important;border-radius:16px!important;background:rgb(13 13 13 / .96)!important;box-shadow:inset 0 1px 0 rgb(255 255 255 / .045),0 -10px 32px rgb(0 0 0 / .28)!important;backdrop-filter:blur(28px) saturate(145%)!important;-webkit-backdrop-filter:blur(28px) saturate(145%)!important}
      .mobile-nav__primary a,.mobile-nav__more{min-height:3rem!important;padding:.25rem .2rem!important;border-radius:11px!important;font-size:.69rem!important;font-weight:620!important;letter-spacing:-.01em!important;touch-action:manipulation;-webkit-tap-highlight-color:transparent}
      .mobile-nav__primary .is-active{color:var(--text)!important}
      .mobile-nav__more{gap:.28rem;cursor:pointer}
      .mobile-nav__contact-mark{color:var(--accent);font-size:.78rem;transform:translateY(-1px)}
      .mobile-nav__more-menu{display:none!important}
      .mobile-nav .nav-glide{top:.3rem!important;bottom:.3rem!important;height:auto!important;width:25%!important;border-radius:11px!important;background:linear-gradient(180deg,rgb(255 255 255 / .09),rgb(255 255 255 / .05))!important;box-shadow:inset 0 0 0 1px rgb(255 255 255 / .05)!important}
      main{padding-block:2.5rem 1rem!important}
      [data-section]{scroll-margin-top:1rem}
      #contact{scroll-margin-bottom:6rem}
    }
    @media (max-width:24rem){.mobile-nav{inset-inline:.5rem!important}.mobile-nav__primary a,.mobile-nav__more{font-size:.65rem!important}}
    @media (prefers-reduced-transparency:reduce) and (max-width:52rem){.mobile-nav__primary{background:var(--surface)!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}}
  `;
  document.head.append(style);
}

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
const mobileRegion=id=>id==='about'?'about':id==='projects'?'projects':id==='contact'?'contact':['experience','skills','education','personal'].includes(id)?'experience':id;
function mobileActiveElement(){const id=mobileRegion(activeSectionId);if(id==='contact')return mobileMoreButton;return mobilePrimaryElement?.querySelector(`[data-section-link="${id}"]`);}
function placeGlides(animated){const apply=()=>{if(sideGlide&&sideNavElement){const a=sideNavElement.querySelector('a.is-active');if(a){const n=sideNavElement.getBoundingClientRect(),r=a.getBoundingClientRect();sideGlide.style.height=r.height+'px';sideGlide.style.transform='translateY('+(r.top-n.top).toFixed(1)+'px)';}}if(mobileGlide&&mobilePrimaryElement){const a=mobileActiveElement();if(a){const n=mobilePrimaryElement.getBoundingClientRect(),r=a.getBoundingClientRect();mobileGlide.style.width=r.width+'px';mobileGlide.style.transform='translateX('+(r.left-n.left).toFixed(1)+'px)';}}};if(!animated){sideGlide?.classList.remove('is-ready');mobileGlide?.classList.remove('is-ready');}apply();requestAnimationFrame(()=>{sideGlide?.classList.add('is-ready');mobileGlide?.classList.add('is-ready');});}
function setActiveSection(id){activeSectionId=id;sectionLinks.forEach(link=>{const active=link.dataset.sectionLink===id;link.classList.toggle('is-active',active);active?link.setAttribute('aria-current','location'):link.removeAttribute('aria-current');});if(mobilePrimaryElement){[...mobilePrimaryElement.querySelectorAll('[data-section-link]')].forEach(link=>{const active=link.dataset.sectionLink===mobileRegion(id);link.classList.toggle('is-active',active);active?link.setAttribute('aria-current','location'):link.removeAttribute('aria-current');});}if(mobileMoreButton){const active=mobileRegion(id)==='contact';mobileMoreButton.classList.toggle('is-active',active);active?mobileMoreButton.setAttribute('aria-current','location'):mobileMoreButton.removeAttribute('aria-current');}placeGlides(true);}
function isAtPageBottom(){return window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-24;}
function contactHasEnteredView(){const c=document.querySelector('#contact');if(!c)return false;const b=c.getBoundingClientRect();return b.top<=window.innerHeight*.68&&b.bottom>0;}
placeGlides(false);window.addEventListener('resize',()=>placeGlides(false),{passive:true});document.fonts?.ready?.then(()=>placeGlides(false));setActiveSection('about');
if('IntersectionObserver'in window){const navObserver=new IntersectionObserver(entries=>{if(isAtPageBottom()||contactHasEnteredView()){setActiveSection('contact');return;}const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setActiveSection(visible.target.id);},{rootMargin:'-18% 0px -62% 0px',threshold:[0,.12,.35]});sections.forEach(s=>navObserver.observe(s));const reveal=new IntersectionObserver((entries,o)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-revealed');o.unobserve(e.target);}}),{rootMargin:'0px 0px -8% 0px',threshold:.06});sections.forEach(s=>{if(s.getBoundingClientRect().top>window.innerHeight*.92)reveal.observe(s);else s.classList.add('is-revealed');});}
window.addEventListener('scroll',()=>{if(isAtPageBottom()||contactHasEnteredView())setActiveSection('contact');},{passive:true});
sectionLinks.forEach(link=>link.addEventListener('click',()=>{const id=link.dataset.sectionLink,target=document.getElementById(id);setActiveSection(id);target?.scrollIntoView({behavior:reducedMotionQuery?.matches?'auto':'smooth',block:'start'});}));
mobileMoreButton?.addEventListener('click',()=>{const target=document.querySelector('#contact');setActiveSection('contact');target?.scrollIntoView({behavior:reducedMotionQuery?.matches?'auto':'smooth',block:'start'});});
if(year)year.textContent=new Date().getFullYear();

const copyButton=document.querySelector('[data-copy-email]');
copyButton?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('mpapakojo@gmail.com');const label=copyButton.querySelector('[data-copy-label]'),status=copyButton.querySelector('[data-copy-status]');if(label)label.textContent='Copied';if(status)status.textContent='Email address copied';window.setTimeout(()=>{if(label)label.textContent='Copy email';if(status)status.textContent='';},1800);}catch{window.location.href='mailto:mpapakojo@gmail.com';}});
