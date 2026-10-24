/* Portfolio Field Notes shared behaviour.
   Dependency-free interaction adaptations. See THIRD-PARTY-NOTICES.md. */
(() => {
  "use strict";
  const entries=window.PORTFOLIO_ENTRIES||[];
  const byId=new Map(entries.map(entry=>[entry.id,entry]));
  const savedKey="pkm.field-notes.saved.v1",themeKey="pkm.field-notes.theme.v1";
  const get=(key)=>{try{return localStorage.getItem(key)}catch{return null}};
  const set=(key,value)=>{try{localStorage.setItem(key,value)}catch{}};
  const readSaved=()=>{try{const v=JSON.parse(get(savedKey)||"[]");return Array.isArray(v)?v.filter(id=>byId.has(id)):[]}catch{return[]}};
  const link=id=>"/portfolio-field-notes/"+encodeURIComponent(id)+"/";
  const toast=document.getElementById("toast");
  function notify(text){if(!toast)return;toast.replaceChildren();const el=document.createElement("span");el.textContent=text;toast.append(el);clearTimeout(notify.timer);notify.timer=setTimeout(()=>toast.replaceChildren(),2800)}

  // One locally hosted Lucide sprite. Static links and labels remain usable without JavaScript.
  const iconNS="http://www.w3.org/2000/svg",iconUrl="/portfolio-field-notes/icons.svg#";
  function glyph(name){
    const svg=document.createElementNS(iconNS,"svg");
    svg.setAttribute("viewBox","0 0 24 24");svg.setAttribute("class","icon");svg.setAttribute("aria-hidden","true");
    const use=document.createElementNS(iconNS,"use");
    use.setAttribute("href",iconUrl+name);svg.append(use);return svg;
  }
  function place(selector,name){
    document.querySelectorAll(selector).forEach(el=>el.replaceChildren(glyph(name)));
  }
  function showIcons(){
    const search=document.querySelector(".search-button");
    if(search){search.prepend(glyph("search"));search.setAttribute("aria-label","Search portfolios")}
    place('.top-actions [data-open="saved"]',"bookmark");
    place(".section-actions [data-move='-1']","arrow-left");
    place(".section-actions [data-move='1']","arrow-right");
    place("[data-view='grid']","grid-2x2");
    place("[data-view='list']","list");
    place(".portfolio-card__arrow","arrow-up-right");
    place(".featured-card__name>span:last-child","arrow-up-right");
    place(".method summary b","plus");
    place(".saved-head [data-close]","x");
    document.querySelectorAll(".search-box svg,.command-search svg").forEach(el=>el.replaceWith(glyph("search")));
    document.querySelectorAll(".sort-trigger span").forEach(el=>el.replaceChildren(glyph("chevron-down")));
    document.querySelectorAll(".bookmark").forEach(el=>el.replaceChildren(glyph("bookmark")));
    document.querySelectorAll("[data-save-icon]").forEach(el=>el.replaceWith(glyph("bookmark")));
    document.querySelectorAll("[data-copy-url]").forEach(el=>el.prepend(glyph("copy")));
    document.querySelectorAll(".review-actions a.visit").forEach(el=>{
      el.lastChild.textContent=el.lastChild.textContent.replace(/\s*↗\s*$/,"");
      el.append(glyph("external-link"));
    });
    document.querySelectorAll(".backline a").forEach(el=>{
      el.firstChild.textContent=el.firstChild.textContent.replace(/^←\s*/,"");
      el.prepend(glyph("arrow-left"));
    });
    document.querySelectorAll(".prevnext a small").forEach((el,i)=>{
      el.textContent=(i===0?"Previous":"Next");
      if(i===0)el.prepend(glyph("arrow-left"));else el.append(glyph("arrow-right"));
    });
    document.querySelectorAll(".mobile-nav>a,.mobile-nav>button").forEach((el,i)=>{
      const first=el.firstChild;
      if(first?.nodeType===Node.TEXT_NODE)first.remove();
      el.prepend(glyph(["house","search","bookmark"][i]));
    });
    document.querySelectorAll('.mobile-nav>a').forEach(el=>{
      if(el.getAttribute("href")==="/portfolio-field-notes/"){
        el.setAttribute("href","/portfolio-field-notes/#index");
        if(document.getElementById("portfolio-grid"))el.setAttribute("aria-current","page");
      }
    });
    document.querySelectorAll(".contribute a").forEach(el=>{
      el.textContent=el.textContent.replace(/\s*↗\s*$/,"");
      el.append(glyph("arrow-up-right"));
    });
    document.querySelectorAll(".command-search [data-close]").forEach(el=>{
      el.setAttribute("aria-label","Close search");el.classList.add("command-close");
    });
    paintThemeIcons();
  }
  function paintThemeIcons(){
    const dark=document.documentElement.dataset.theme!=="light";
    document.querySelectorAll("[data-theme-toggle]").forEach(btn=>{
      btn.replaceChildren(glyph(dark?"sun":"moon"));
      btn.setAttribute("aria-label",dark?"Switch to light mode":"Switch to dark mode");
      btn.setAttribute("title",dark?"Light mode":"Dark mode");
    });
  }
  document.querySelectorAll("[data-theme-toggle]").forEach(btn=>btn.addEventListener("click",paintThemeIcons));
  function refreshBookmarks(){
    const saved=new Set(readSaved());
    document.querySelectorAll("[data-save]").forEach(btn=>{
      const active=saved.has(btn.dataset.save);
      btn.setAttribute("aria-pressed",String(active));
      btn.setAttribute("aria-label",(active?"Remove ":"Save ")+(byId.get(btn.dataset.save)?.name||"portfolio"));
      const use=btn.querySelector("use");
      if(use)use.setAttribute("href",iconUrl+(active?"bookmark-check":"bookmark"));
      else if(btn.hasAttribute("data-save"))btn.textContent=active?"★":"☆";
      if(btn.closest(".review-actions")){
        const label=[...btn.childNodes].find(node=>node.nodeType===Node.TEXT_NODE);
        if(label)label.textContent=active?" Saved":" Save";
      }
      btn.classList.toggle("is-saved",active);
    });
  }
  document.addEventListener("click",event=>{
    const btn=event.target.closest("[data-save]");
    if(!btn)return;
    event.preventDefault();event.stopPropagation();
    const id=btn.dataset.save,values=readSaved(),at=values.indexOf(id);
    if(at>=0){values.splice(at,1);notify("Removed from saved")}else{values.push(id);notify("Saved")}
    set(savedKey,JSON.stringify(values));refreshBookmarks();
    document.dispatchEvent(new CustomEvent("fieldnotes:saved"));
  });
  const theme=get(themeKey);
  if(theme==="light"||theme==="dark")document.documentElement.dataset.theme=theme;
  document.querySelectorAll("[data-theme-toggle]").forEach(btn=>btn.addEventListener("click",()=>{
    const now=document.documentElement.dataset.theme==="dark"?"light":"dark";
    document.documentElement.dataset.theme=now;set(themeKey,now);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content",now==="dark"?"#10110f":"#f7f5ef");
  }));
  document.querySelectorAll(".preview img").forEach(image=>{
    const check=()=>{if(image.complete&&!image.naturalWidth)image.classList.add("is-broken")};
    image.addEventListener("error",()=>image.classList.add("is-broken"));
    check();
  });
  const command=document.getElementById("command"),cmdInput=document.getElementById("command-input"),cmdResults=document.getElementById("command-results");
  const savedPanel=document.getElementById("saved"),savedResults=document.getElementById("saved-results");
  let options=[],selected=0;
  function renderCommand(){
    const q=cmdInput.value.trim().toLowerCase();
    options=entries.filter(e=>!q||[e.name,e.subline,e.designer,e.hiring,e.url].filter(Boolean).join(" ").toLowerCase().includes(q)).slice(0,20);
    selected=0;cmdResults.replaceChildren();
    if(!options.length){const p=document.createElement("p");p.textContent="No matches";cmdResults.append(p);return}
    options.forEach((e,i)=>{
      const a=document.createElement("a");a.href=link(e.id);if(!i)a.classList.add("is-current");
      const name=document.createElement("span");name.textContent=e.name;
      const domain=document.createElement("small");domain.textContent=e.url?e.url.replace(/^https?:\/\/(www\.)?/,"").split("/")[0]:"Link pending";
      a.append(name,domain);cmdResults.append(a);
    });
  }
  function renderSaved(){
    if(!savedResults)return;
    savedResults.replaceChildren();
    const ids=readSaved();
    if(!ids.length){const p=document.createElement("p");p.textContent="No saved portfolios yet.";savedResults.append(p)}
    ids.forEach(id=>{
      const entry=byId.get(id);if(!entry)return;
      const a=document.createElement("a");a.href=link(id);
      const name=document.createElement("span");name.textContent=entry.name;
      const arrow=document.createElement("small");arrow.textContent="Read note ↗";
      a.append(name,arrow);savedResults.append(a);
    });
  }
  function openDialog(id){
    const dialog=id==="command"?command:id==="saved"?savedPanel:null;
    if(!dialog||dialog.open)return;
    if(id==="command"){cmdInput.value="";renderCommand()}else renderSaved();
    dialog.showModal();
    if(id==="command")cmdInput.focus();
  }
  document.querySelectorAll("[data-open]").forEach(btn=>btn.addEventListener("click",()=>openDialog(btn.dataset.open)));
  document.querySelectorAll("[data-close]").forEach(btn=>btn.addEventListener("click",()=>document.getElementById(btn.dataset.close)?.close()));
  [command,savedPanel].forEach(dialog=>dialog?.addEventListener("click",event=>{if(event.target===dialog)dialog.close()}));
  cmdInput?.addEventListener("input",renderCommand);
  cmdInput?.addEventListener("keydown",event=>{
    if((event.key==="ArrowDown"||event.key==="ArrowUp")&&options.length){
      event.preventDefault();selected=(selected+(event.key==="ArrowDown"?1:-1)+options.length)%options.length;
      cmdResults.querySelectorAll("a").forEach((el,i)=>el.classList.toggle("is-current",i===selected));
      cmdResults.children[selected]?.scrollIntoView({block:"nearest"});
    }
    if(event.key==="Enter"&&options[selected]){event.preventDefault();location.assign(link(options[selected].id))}
  });
  document.addEventListener("keydown",event=>{
    const el=document.activeElement,typing=el&&(/INPUT|TEXTAREA|SELECT/.test(el.tagName)||el.isContentEditable);
    if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){event.preventDefault();openDialog("command")}
    else if(event.key==="/"&&!typing&&!event.metaKey&&!event.ctrlKey){event.preventDefault();openDialog("command")}
  });
  const list=document.getElementById("featured-list");
  document.querySelectorAll("[data-move]").forEach(btn=>btn.addEventListener("click",()=>list?.scrollBy({left:Number(btn.dataset.move)*list.clientWidth*.83,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})));
  const bar=document.querySelector(".reading-progress");
  if(bar){
    let active=false;
    const update=()=>{if(active)return;active=true;requestAnimationFrame(()=>{const range=document.documentElement.scrollHeight-innerHeight;bar.style.width=(range>0?Math.min(100,scrollY/range*100):100)+"%";active=false})};
    addEventListener("scroll",update,{passive:true});update();
    const links=[...document.querySelectorAll(".review-rail a[href^='#']")];
    if("IntersectionObserver" in window){
      const observer=new IntersectionObserver(events=>events.forEach(event=>{
        if(event.isIntersecting)links.forEach(a=>a.setAttribute("aria-current",String(a.hash==="#"+event.target.id)));
      }),{rootMargin:"-15% 0px -68% 0px"});
      document.querySelectorAll(".review-copy section[id]").forEach(section=>observer.observe(section));
    }
  }
  document.querySelectorAll("[data-copy-url]").forEach(btn=>btn.addEventListener("click",async()=>{
    try{await navigator.clipboard.writeText(location.href);notify("Link copied")}
    catch{notify("Could not copy. Use your browser share menu.")}
  }));

  // Rare UI Grid Reveal + useLayouts Pop Tilt Cards: low-amplitude progressive enhancement.
  const reducedMotion=matchMedia("(prefers-reduced-motion: reduce)");
  const cards=[...document.querySelectorAll(".portfolio-card")];
  if(!reducedMotion.matches&&"IntersectionObserver" in window){
    const reveal=new IntersectionObserver(records=>records.forEach(record=>{
      if(!record.isIntersecting)return;
      record.target.classList.add("has-entered");reveal.unobserve(record.target);
    }),{rootMargin:"75px"});
    cards.forEach(card=>{card.classList.add("can-reveal");reveal.observe(card)});
  }
  if(matchMedia("(hover: hover) and (pointer: fine)").matches&&!reducedMotion.matches){
    document.querySelectorAll(".portfolio-card .preview").forEach(preview=>{
      let frame=0;
      preview.addEventListener("pointermove",event=>{
        cancelAnimationFrame(frame);
        const bounds=preview.getBoundingClientRect();
        const x=(event.clientX-bounds.left)/bounds.width-.5,y=(event.clientY-bounds.top)/bounds.height-.5;
        frame=requestAnimationFrame(()=>preview.style.transform="perspective(800px) rotateX("+(-y*2.5).toFixed(2)+"deg) rotateY("+(x*2.5).toFixed(2)+"deg)");
      },{passive:true});
      preview.addEventListener("pointerleave",()=>{cancelAnimationFrame(frame);preview.style.transform=""});
    });
  }
  showIcons();
  refreshBookmarks();
})();
