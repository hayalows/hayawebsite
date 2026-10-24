/* Archive controller with per-tab return-state restoration. */
(() => {
  "use strict";
  const grid=document.getElementById("portfolio-grid");
  if(!grid)return;
  const cards=[...grid.querySelectorAll(".portfolio-card")];
  const input=document.getElementById("search"),count=document.getElementById("visible-count"),empty=document.getElementById("empty");
  const key="pkm.field-notes.archive.v2";
  const allowedFilters=new Set(["all","featured","saved","revisit"]);
  const allowedSorts=new Set(["az","za","original"]);
  let filter="all",sort="az";
  let previous=null;
  try{previous=JSON.parse(sessionStorage.getItem(key)||"null")}catch{}
  if(previous&&typeof previous==="object"){
    if(allowedFilters.has(previous.filter))filter=previous.filter;
    if(allowedSorts.has(previous.sort))sort=previous.sort;
    if(typeof previous.query==="string")input.value=previous.query.slice(0,120);
  }
  function remember(){
    try{sessionStorage.setItem(key,JSON.stringify({filter,sort,query:input.value.slice(0,120),view:grid.classList.contains("is-list")?"list":"grid"}))}catch{}
  }
  function saved(){
    try{const ids=JSON.parse(localStorage.getItem("pkm.field-notes.saved.v1")||"[]");return new Set(Array.isArray(ids)?ids:[])}
    catch{return new Set()}
  }
  function draw(){
    const search=input.value.trim().toLowerCase(),mine=saved();let visible=0;
    cards.forEach(card=>{
      const match=!search||card.dataset.search.includes(search);
      const passes=filter==="all"||(filter==="featured"&&card.dataset.featured==="true")||(filter==="revisit"&&card.dataset.revisit==="true")||(filter==="saved"&&mine.has(card.dataset.id));
      card.hidden=!(match&&passes);
      if(!card.hidden)visible++;
    });
    cancelAnimationFrame(draw.frame);
    if(!matchMedia("(prefers-reduced-motion: reduce)").matches&&document.visibilityState==="visible"){
      const from=Number(count.textContent)||0,start=performance.now();
      const step=now=>{
        const t=Math.min(1,(now-start)/210);
        count.textContent=String(Math.round(from+(visible-from)*(1-Math.pow(1-t,3))));
        if(t<1)draw.frame=requestAnimationFrame(step);
      };
      draw.frame=requestAnimationFrame(step);
    }else count.textContent=String(visible);
    empty.hidden=visible>0;
    cards.sort((a,b)=>sort==="original"?Number(a.dataset.index)-Number(b.dataset.index):sort==="za"?b.dataset.name.localeCompare(a.dataset.name):a.dataset.name.localeCompare(b.dataset.name)).forEach(card=>grid.append(card));
    remember();
  }
  function setFilter(value){
    if(!allowedFilters.has(value))return;
    filter=value;
    document.querySelectorAll("[data-filter]").forEach(button=>{
      const active=button.dataset.filter===filter;
      button.classList.toggle("is-active",active);
      button.setAttribute("aria-pressed",String(active));
    });
    draw();
  }
  function setView(view){
    const list=view==="list";
    grid.classList.toggle("is-list",list);
    document.querySelectorAll("[data-view]").forEach(button=>{
      const active=button.dataset.view===(list?"list":"grid");
      button.classList.toggle("is-active",active);
      button.setAttribute("aria-pressed",String(active));
    });
    try{localStorage.setItem("pkm.field-notes.view.v1",list?"list":"grid")}catch{}
    remember();
  }
  input.addEventListener("input",draw);
  document.addEventListener("fieldnotes:saved",draw);
  document.querySelectorAll("[data-filter]").forEach(button=>button.addEventListener("click",()=>setFilter(button.dataset.filter)));
  document.querySelectorAll("[data-view]").forEach(button=>button.addEventListener("click",()=>setView(button.dataset.view)));
  const trigger=document.querySelector("[data-sort-open]"),options=document.getElementById("sort-options");
  function closeSort(){options.hidden=true;trigger.setAttribute("aria-expanded","false")}
  function setSort(value){
    if(!allowedSorts.has(value))return;
    sort=value;
    const btn=document.querySelector('[data-sort="'+value+'"]');
    if(btn)trigger.firstChild.textContent=btn.textContent+" ";
    closeSort();draw();
  }
  trigger.addEventListener("click",()=>{options.hidden=!options.hidden;trigger.setAttribute("aria-expanded",String(!options.hidden))});
  document.querySelectorAll("[data-sort]").forEach(button=>button.addEventListener("click",()=>setSort(button.dataset.sort)));
  document.addEventListener("click",event=>{if(!event.target.closest(".sort-wrap"))closeSort()});
  document.addEventListener("keydown",event=>{if(event.key==="Escape")closeSort()});
  document.querySelector("[data-reset]").addEventListener("click",()=>{input.value="";setFilter("all");input.focus()});
  let view=previous?.view;
  const requestedView=new URLSearchParams(location.search).get('view');
  if(requestedView==='list'||requestedView==='grid')view=requestedView;
  if(view!=="list"&&view!=="grid"){try{view=localStorage.getItem("pkm.field-notes.view.v1")}catch{}}
  setView(view==="list"?"list":"grid");
  setSort(sort);
  setFilter(filter);
})();
