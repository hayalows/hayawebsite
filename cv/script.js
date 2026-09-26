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

/* Spotify listening surface */
const listeningEndpoint=document.querySelector('meta[name="listening-endpoint"]')?.content;
const listeningPanel=document.querySelector('[data-listening]');
const le={status:document.querySelector('[data-listening-status]'),current:document.querySelector('[data-listening-current]'),art:document.querySelector('[data-listening-current-art]'),fallback:document.querySelector('[data-listening-current-fallback]'),label:document.querySelector('[data-listening-current-label]'),title:document.querySelector('[data-listening-current-title]'),meta:document.querySelector('[data-listening-current-meta]'),progressWrap:document.querySelector('[data-listening-progress-wrap]'),progress:document.querySelector('[data-listening-progress]'),list:document.querySelector('[data-listening-list]'),window:document.querySelector('[data-listening-window]'),refresh:document.querySelector('[data-listening-refresh]')};
let listeningTimer=null,listeningLoading=false,historyState=null,historyFetchedAt=0,currentState=null,progressFrame=0,progressModel=null,listeningRetryAt=0;
const artistText=track=>Array.isArray(track?.artists)?track.artists.join(', '):String(track?.artist||track?.artists||'');
const imageUrl=track=>track?.imageUrl||track?.image||null;
function setTrackLink(el,url){if(!el)return;if(url){el.href=url;el.target='_blank';el.rel='noopener';el.removeAttribute('aria-disabled');}else{el.removeAttribute('href');el.removeAttribute('target');el.setAttribute('aria-disabled','true');}}
function stopProgress(){cancelAnimationFrame(progressFrame);progressFrame=0;progressModel=null;if(le.progressWrap)le.progressWrap.hidden=true;if(le.progress)le.progress.style.width='0%';}
function startProgress(state){stopProgress();const duration=Number(state?.track?.durationMs),initial=Number(state?.progressMs);if(state?.status!=='playing'||!Number.isFinite(duration)||duration<=0||!Number.isFinite(initial)||!le.progressWrap||!le.progress)return;le.progressWrap.hidden=false;progressModel={duration,initial,started:performance.now()};const tick=now=>{if(!progressModel)return;const elapsed=document.hidden?0:now-progressModel.started;const value=Math.min(progressModel.duration,progressModel.initial+elapsed);le.progress.style.width=Math.max(0,Math.min(100,value/progressModel.duration*100))+'%';if(value<progressModel.duration)progressFrame=requestAnimationFrame(tick);};progressFrame=requestAnimationFrame(tick);}
function renderCurrent(state){const track=state?.track;if(!track){le.label.textContent='Spotify';le.title.textContent=state?.status==='needs_reconnect'?'Spotify needs reconnecting':'Nothing playing right now';le.meta.textContent='Recent listening is available below.';setTrackLink(le.current,null);if(le.art){le.art.hidden=true;le.art.removeAttribute('src');}if(le.fallback)le.fallback.hidden=false;stopProgress();return;}le.label.textContent=state.status==='playing'?'Playing now':state.status==='paused'?'Paused':'Played recently';le.title.textContent=track.name||'Untitled';le.meta.textContent=artistText(track);setTrackLink(le.current,track.url);const image=imageUrl(track);if(le.art&&image){le.art.onload=()=>{le.art.hidden=false;if(le.fallback)le.fallback.hidden=true;};le.art.onerror=()=>{le.art.hidden=true;if(le.fallback)le.fallback.hidden=false;};le.art.src=image;le.art.alt='Album cover for '+(track.album||track.name||'current track');le.art.hidden=false;if(le.fallback)le.fallback.hidden=true;}else{if(le.art)le.art.hidden=true;if(le.fallback)le.fallback.hidden=false;}startProgress(state);}
function renderRecent(state){const tracks=Array.isArray(state?.tracks)?state.tracks:[];if(!le.list||!tracks.length)return;le.list.innerHTML='';tracks.slice(0,5).forEach((track,index)=>{const li=document.createElement('li');li.className='listening-ranking__item';const row=document.createElement(track.url?'a':'div');row.className='listening-row';if(track.url){row.href=track.url;row.target='_blank';row.rel='noopener';}const rank=document.createElement('span');rank.className='listening-rank';rank.textContent=String(index+1).padStart(2,'0');const art=document.createElement('span');art.className='listening-art';const image=imageUrl(track);if(image){const img=document.createElement('img');img.src=image;img.alt='';img.loading='lazy';img.onerror=()=>{img.remove();art.textContent='♪';};art.append(img);}else art.textContent='♪';const copy=document.createElement('span');copy.className='listening-row__copy';const strong=document.createElement('strong');strong.textContent=track.name||'Untitled';const small=document.createElement('small');small.textContent=artistText(track);copy.append(strong,small);const count=document.createElement('span');count.className='listening-count';const countStrong=document.createElement('strong');countStrong.textContent=track.plays||1;const countSmall=document.createElement('small');countSmall.textContent=Number(track.plays)===1?'play':'plays';count.append(countStrong,countSmall);row.append(rank,art,copy,count);li.append(row);le.list.append(li);});if(le.window&&state?.listeningWindow?.from&&state?.listeningWindow?.to)le.window.textContent='Recent Spotify listening';}
async function fetchListening(view){
  const separator=listeningEndpoint.includes('?')?'&':'?';
  const response=await fetch(listeningEndpoint+separator+'view='+encodeURIComponent(view),{headers:{accept:'application/json'}});
  const state=await response.json().catch(()=>({status:'unavailable'}));
  if(response.status===429)return{response,state};
  if(!response.ok)throw new Error('Spotify '+view+' '+response.status);
  return{response,state};
}
const LISTENING_HISTORY_INTERVAL=300000;
const LISTENING_PLAYING_INTERVAL=30000;
const LISTENING_IDLE_INTERVAL=60000;
const LISTENING_STORAGE_KEY='pkm.spotify.snapshot.v1';
function listeningRetryDelay(result){
  const retryAfter=Number(result?.state?.retryAfter)||Number(result?.response?.headers?.get('retry-after'))||30;
  return Math.max(30,retryAfter)*1000;
}
function saveListeningSnapshot(){
  try{localStorage.setItem(LISTENING_STORAGE_KEY,JSON.stringify({current:currentState,recent:historyState,savedAt:Date.now()}));}catch{}
}
function restoreListeningSnapshot(){
  try{
    const saved=JSON.parse(localStorage.getItem(LISTENING_STORAGE_KEY)||'null');
    if(!saved||!saved.savedAt||Date.now()-saved.savedAt>604800000)return;
    currentState=saved.current||null;
    historyState=saved.recent||null;
    historyFetchedAt=saved.savedAt||0;
  }catch{}
}
function renderListeningSnapshot(){
  const preferred=currentState?.track?currentState:(historyState?.track?historyState:null);
  if(preferred)renderCurrent(preferred);
  else if(currentState)renderCurrent(currentState);
  if(historyState)renderRecent(historyState);
  listeningPanel.dataset.state=preferred?.status||historyState?.status||'recent';
  if(le.status)le.status.textContent=preferred?.status==='playing'?'live':preferred?.status==='paused'?'paused':'recent';
}
function renderListeningRateLimit(){
  listeningPanel.dataset.state='rate_limited';
  if(currentState?.track||historyState?.track||(Array.isArray(historyState?.tracks)&&historyState.tracks.length)){
    renderListeningSnapshot();
    if(le.status)le.status.textContent='cached';
    return;
  }
  if(le.status)le.status.textContent='waiting';
  if(le.label)le.label.textContent='Spotify';
  if(le.title)le.title.textContent='Listening updates paused';
  if(le.meta)le.meta.textContent='Spotify asked the site to wait before checking again.';
  setTrackLink(le.current,null);
  stopProgress();
}
function scheduleListening(delay){
  clearTimeout(listeningTimer);
  if(!document.hidden)listeningTimer=setTimeout(()=>loadListening(false),Math.max(1000,delay));
}
async function loadListening(forceHistory=false){
  if(!listeningEndpoint||!listeningPanel||listeningLoading)return;
  const now=Date.now();
  if(now<listeningRetryAt){
    renderListeningRateLimit();
    scheduleListening(listeningRetryAt-now);
    return;
  }
  listeningLoading=true;
  let updated=false;
  let retryDelay=0;
  try{
    const needHistory=forceHistory||!historyState||now-historyFetchedAt>=LISTENING_HISTORY_INTERVAL;
    const requests=[fetchListening('current')];
    if(needHistory)requests.push(fetchListening('recent'));
    const results=await Promise.allSettled(requests);
    const currentResult=results[0];
    const recentResult=needHistory?results[1]:null;
    if(currentResult?.status==='fulfilled'){
      if(currentResult.value.state?.status==='rate_limited'){
        retryDelay=Math.max(retryDelay,listeningRetryDelay(currentResult.value));
      }else{
        currentState=currentResult.value.state;
        updated=true;
      }
    }
    if(recentResult?.status==='fulfilled'){
      if(recentResult.value.state?.status==='rate_limited'){
        retryDelay=Math.max(retryDelay,listeningRetryDelay(recentResult.value));
      }else{
        historyState=recentResult.value.state;
        historyFetchedAt=Date.now();
        updated=true;
      }
    }
    if(retryDelay>0){
      listeningRetryAt=Date.now()+retryDelay;
      if(updated)saveListeningSnapshot();
      renderListeningRateLimit();
      scheduleListening(retryDelay);
      return;
    }
    listeningRetryAt=0;
    if(updated){
      saveListeningSnapshot();
      renderListeningSnapshot();
    }else if(currentState||historyState){
      renderListeningSnapshot();
    }else{
      throw new Error('Spotify listening unavailable');
    }
    const next=currentState?.status==='playing'?LISTENING_PLAYING_INTERVAL:LISTENING_IDLE_INTERVAL;
    scheduleListening(next);
  }catch(error){
    console.error('Listening surface:',error);
    if(currentState||historyState){
      renderListeningSnapshot();
      if(le.status)le.status.textContent='cached';
    }else if(le.status){
      le.status.textContent='offline';
    }
    scheduleListening(120000);
  }finally{
    listeningLoading=false;
  }
}
if(listeningPanel&&listeningEndpoint){
  restoreListeningSnapshot();
  if(currentState||historyState)renderListeningSnapshot();
  if('IntersectionObserver'in window){
    const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){observer.disconnect();loadListening(true);}},{rootMargin:'400px'});
    observer.observe(listeningPanel);
  }else loadListening(true);
  le.refresh?.addEventListener('click',()=>loadListening(true));
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){clearTimeout(listeningTimer);cancelAnimationFrame(progressFrame);}
    else loadListening(false);
  });
}
