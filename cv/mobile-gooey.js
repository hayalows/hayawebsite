/* Rare UI Gooey Nav adaptation © 2026 Swami Malode.
 * components/ui/gooey-nav.tsx, revision 1d572f4b1862f5f6b1be61bb33380fede433e1df.
 * MIT + Commons Clause + Attribution: THIRD-PARTY-NOTICES.md.
 * Native links/disclosure and the existing section controller own navigation.
 */
(()=>{
  const nav=document.querySelector('.mobile-nav__primary');
  if(!nav)return;
  const mobile=matchMedia('(max-width:52rem)'),reduced=matchMedia('(prefers-reduced-motion:reduce)');
  const owners=[...nav.children].filter(el=>el.matches('a,details'));
  const tiles=owners.map(el=>el.matches('details')?el.querySelector('summary'):el);
  const ns='http://www.w3.org/2000/svg',span=8,corner=11;
  const paths=[],stops=[];
  let frame=0,selected=-1,wrapped=false,lastWrapped=false;
  let current=tiles.map(()=>({gap:0,left:corner,right:corner}));
  // Two concave curves pinch to nothing as the selected tile separates.
  function neckPath(gap){
    if(!Number.isFinite(gap)||gap<=0)return '';
    const waist=100*(1-gap/(span*.22));
    if(waist<=0)return '';
    const start=span-gap,mid=start+gap/2;
    return `M${start} 0 Q${mid} ${100-waist} ${span} 0 L${span} 100 Q${mid} ${waist} ${start} 100 Z`;
  }
  tiles.forEach((tile,i)=>{
    tile.classList.add('gooey-tile');
    if(!i)return;
    const svg=document.createElementNS(ns,'svg');
    svg.classList.add('gooey-neck');svg.setAttribute('viewBox',`0 0 ${span} 100`);
    svg.setAttribute('preserveAspectRatio','none');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
    const defs=document.createElementNS(ns,'defs'),gradient=document.createElementNS(ns,'linearGradient');
    gradient.id='pkm-gooey-neck-'+i;gradient.setAttribute('x1','0');gradient.setAttribute('x2','1');
    const pair=[0,1].map(offset=>{const stop=document.createElementNS(ns,'stop');stop.setAttribute('offset',String(offset));gradient.append(stop);return stop;});
    defs.append(gradient);const path=document.createElementNS(ns,'path');path.setAttribute('fill',`url(#${gradient.id})`);
    svg.append(defs,path);tile.append(svg);paths[i]=path;stops[i]=pair;
  });
  nav.dataset.gooey='ready';
  function draw(values){
    values.forEach((value,i)=>{
      owners[i].style.marginLeft=value.gap+'px';
      tiles[i].style.borderRadius=`${value.left}px ${value.right}px ${value.right}px ${value.left}px`;
      paths[i]?.setAttribute('d',wrapped?'':neckPath(value.gap));
    });
    current=values;
  }
  function sync(force=false){
    const index=owners.findIndex((owner,i)=>owner.open||tiles[i].classList.contains('is-active'));
    // Opening Explore is an action, so it temporarily takes visual priority.
    const open=owners.findIndex(owner=>owner.open);
    const next=open>=0?open:Math.max(0,index);
    if(!force&&next===selected&&lastWrapped===wrapped)return;
    cancelAnimationFrame(frame);frame=0;selected=next;lastWrapped=wrapped;
    nav.dataset.gooeySelected=String(next);
    const separated=seam=>seam===0||seam===tiles.length||seam===next||seam-1===next;
    tiles.forEach((tile,i)=>{
      tile.classList.toggle('is-gooey-selected',i===next);
      if(stops[i])stops[i].forEach((stop,k)=>stop.setAttribute('stop-color',i-1+k===next?'#e8b650':'#262626'));
    });
    const target=tiles.map((_,i)=>({gap:wrapped||i===0?0:separated(i)?span:-1,left:wrapped||separated(i)?corner:0,right:wrapped||separated(i+1)?corner:0}));
    if(reduced.matches||!mobile.matches||wrapped||document.hidden){draw(target);nav.dataset.gooeyAnimating='false';return;}
    const from=current.map(value=>({...value})),start=performance.now();
    nav.dataset.gooeyAnimating='true';
    const tick=now=>{
      const progress=Math.min(1,(now-start)/320),ease=1-Math.pow(1-progress,3);
      draw(target.map((value,i)=>Object.fromEntries(Object.keys(value).map(key=>[key,from[i][key]+(value[key]-from[i][key])*ease]))));
      if(progress<1)frame=requestAnimationFrame(tick);
      else{frame=0;nav.dataset.gooeyAnimating='false';}
    };
    frame=requestAnimationFrame(tick);
  }
  new MutationObserver(()=>sync()).observe(nav,{subtree:true,attributes:true,attributeFilter:['class','open']});
  function layout(){
    const tops=tiles.map(tile=>Math.round(tile.getBoundingClientRect().top));
    const nextWrapped=mobile.matches&&tops.some(top=>top!==tops[0]);
    if(nextWrapped!==wrapped){wrapped=nextWrapped;nav.classList.toggle('gooey-wrapped',wrapped);sync(true);}
  }
  if('ResizeObserver'in window)new ResizeObserver(layout).observe(nav);
  window.addEventListener('resize',layout,{passive:true});
  mobile.addEventListener('change',()=>{layout();sync(true);});
  reduced.addEventListener('change',()=>sync(true));
  document.addEventListener('visibilitychange',()=>sync(true));
  sync(true);layout();
})();
