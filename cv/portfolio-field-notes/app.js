/* Field Notes archive: sorting, layout, search and saved filters. */
(() => {
  "use strict";
  const grid=document.getElementById("portfolio-grid");
  if(!grid)return;
  const cards=[...grid.querySelectorAll(".portfolio-card")];
  const input=document.getElementById("search"),count=document.getElementById("visible-count"),empty=document.getElementById("empty");
  let filter="all",sort="az";
  function saved(){try{const ids=JSON.parse(localStorage.getItem("pkm.field-notes.saved.v1")||"[]");return new Set(Array.isArray(ids)?ids:[])}catch{return new Set()}}
  function draw(){
    const search=input.value.toLowerCase().trim(),mine=saved();let visible=0;
    cards.forEach(card=>{
      const matched=!search||card.dataset.search.includes(search);
      const allowed=filter==="all"||(filter==="featured"&&card.dataset.featured==="true")||(filter==="revisit"&&card.dataset.revisit==="true")||(filter==="saved"&&mine.has(card.dataset.id));
      card.hidden=!(matched&&allowed);
      if(!card.hidden)visible++;
    });
    if(!matchMedia("(prefers-reduced-motion: reduce)").matches){
      const from=Number(count.textContent)||0,to=visible,start=performance.now();
      cancelAnimationFrame(draw.frame);
      const step=now=>{const t=Math.min(1,(now-start)/230);count.textContent=String(Math.round(from+(to-from)*(1-Math.pow(1-t,3))));if(t<1)draw.frame=requestAnimationFrame(step)};
      draw.frame=requestAnimationFrame(step);
    }else count.textContent=String(visible);
    empty.hidden=visible>0;
    cards.sort((a,b)=>sort==="original"?Number(a.dataset.index)-Number(b.dataset.index):sort==="za"?b.dataset.name.localeCompare(a.dataset.name):a.dataset.name.localeCompare(b.dataset.name)).forEach(card=>grid.append(card));
  }
  input.addEventListener("input",draw);
  document.addEventListener("fieldnotes:saved",draw);
  document.querySelectorAll("[data-filter]").forEach(button=>button.addEventListener("click",()=>{
    filter=button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach(other=>{const yes=other===button;other.classList.toggle("is-active",yes);other.setAttribute("aria-pressed",String(yes))});
    draw();
  }));
  document.querySelectorAll("[data-view]").forEach(button=>button.addEventListener("click",()=>{
    const list=button.dataset.view==="list";grid.classList.toggle("is-list",list);
    document.querySelectorAll("[data-view]").forEach(other=>{const yes=other===button;other.classList.toggle("is-active",yes);other.setAttribute("aria-pressed",String(yes))});
    try{localStorage.setItem("pkm.field-notes.view.v1",button.dataset.view)}catch{}
  }));
  try{if(localStorage.getItem("pkm.field-notes.view.v1")==="list")document.querySelector('[data-view="list"]').click()}catch{}
  const trigger=document.querySelector("[data-sort-open]"),options=document.getElementById("sort-options");
  function closeSort(){options.hidden=true;trigger.setAttribute("aria-expanded","false")}
  trigger.addEventListener("click",()=>{options.hidden=!options.hidden;trigger.setAttribute("aria-expanded",String(!options.hidden))});
  document.querySelectorAll("[data-sort]").forEach(button=>button.addEventListener("click",()=>{
    sort=button.dataset.sort;trigger.firstChild.textContent=button.textContent+" ";
    closeSort();draw();
  }));
  document.addEventListener("click",event=>{if(!event.target.closest(".sort-wrap"))closeSort()});
  document.addEventListener("keydown",event=>{if(event.key==="Escape")closeSort()});
  document.querySelector("[data-reset]").addEventListener("click",()=>{input.value="";document.querySelector('[data-filter="all"]').click()});
  draw();
})();
