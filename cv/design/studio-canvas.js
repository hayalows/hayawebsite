/* Iconka studio: opt-in spatial canvas + native-proportion gallery.
   Uses existing images and the existing design viewer; no additional dependencies. */
(() => {
  'use strict';
  const grid = document.querySelector('.gallery-grid');
  const artworks = [...document.querySelectorAll('.gallery-grid > .artwork')];
  const board = document.querySelector('#design-board');
  const stage = document.querySelector('[data-board-stage]');
  const world = document.querySelector('[data-board-world]');
  const browse = document.querySelector('[data-browse-panel]');
  const controls = [...document.querySelectorAll('[data-design-view]')];
  if (!grid || !board || !stage || !world || !browse || artworks.length === 0) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const status = document.querySelector('[data-board-status]');
  const zoomLabel = document.querySelector('[data-board-zoom]');
  let mode = 'archive', layoutFrame = 0, camera = {x:0,y:0,scale:.85}, gesture = null;
  let arrangeCount = 0;
  document.body.classList.add('design-enhanced');
  controls[0].parentElement.hidden = false;

  // The masonry rows follow the intrinsic proportions of each image, not a shared 4:5 box.
  // Measuring the link (rather than the grid item) avoids feeding grid-row span back into itself.
  function measureGallery() {
    if (mode !== 'archive' || !grid.clientWidth) return;
    for (const art of artworks) art.style.gridRowEnd = 'auto';
    const style = getComputedStyle(grid);
    const unit = parseFloat(style.gridAutoRows) || 8;
    const gap = parseFloat(style.rowGap) || 18;
    for (const art of artworks) {
      if (art.hidden) continue;
      const link = art.querySelector('.artwork__open');
      const height = link.getBoundingClientRect().height;
      art.style.gridRowEnd = 'span ' + Math.max(1,Math.ceil((height + gap) / (unit + gap)));
    }
  }
  function layout() {
    cancelAnimationFrame(layoutFrame);
    layoutFrame = requestAnimationFrame(measureGallery);
  }
  // Only genuinely wide pieces become featured, so flyers never inherit an arbitrary hero slot.
  const featuredIndices = new Set([0,12,25,39,52]);
  artworks.forEach((art,i) => {
    const img = art.querySelector('.artwork__surface img');
    const w = Number(img.getAttribute('width'));
    const h = Number(img.getAttribute('height'));
    if (featuredIndices.has(i) && w/h >= 1.18) art.classList.add('is-feature');
  });
  grid.addEventListener('load', layout, true);
  new MutationObserver(layout).observe(grid,{subtree:true,attributes:true,attributeFilter:['hidden']});
  let gridWidth=0;
  new ResizeObserver(entries => {
    const width = Math.round(entries[0]?.contentRect.width||0);
    if (width && width !== gridWidth) {gridWidth=width;layout();}
  }).observe(grid);
  window.addEventListener('load',layout,{once:true});
  layout();

  const restack = document.querySelector('[data-deck-restack]');
  const deck = [...document.querySelectorAll('.deck-card')];
  if (restack && deck.length === 3) {
    deck.forEach((card,i) => {card.dataset.slot=String(i);});
    restack.addEventListener('click',() => {
      deck.forEach(card => {card.dataset.slot=String((Number(card.dataset.slot)+1)%3);});
    });
  }

  // Curate across practices without cloning the entire 67-artwork DOM tree.
  const groups = new Map();
  artworks.forEach(art=>{
    const key=art.dataset.category;
    if(!groups.has(key))groups.set(key,[]);
    groups.get(key).push(art);
  });
  const selected = [];
  for (let depth=0;depth<4;depth++) {
    for (const category of groups.values()) {
      if (category[depth] && selected.length<16) selected.push(category[depth]);
    }
  }
  const points = Array.from({length:selected.length},(_,i)=>{
    const col=i%4, row=Math.floor(i/4);
    return {x:55+col*286+(row%2)*28,y:38+row*315+(col%2)*21,rotation:[-3,2,-1,3,0][i%5]};
  });
  const nodes=selected.map((art,i)=>{
    const img=art.querySelector('.artwork__surface img');
    const thumb=document.createElement('img');
    thumb.src=img.getAttribute('src');thumb.alt='';thumb.loading='lazy';thumb.decoding='async';thumb.draggable=false;
    const button=document.createElement('button');
    button.type='button';button.className='canvas-art';button.style.width=(i%5===0?'248px':'222px');
    const aspect=Number(img.getAttribute('width'))/Number(img.getAttribute('height'))||1;
    button.style.setProperty('--image-height',Math.round(Math.max(136,Math.min(226,216/aspect)))+'px');
    const title=document.createElement('span');title.className='canvas-art__title';
    title.textContent=art.querySelector('h3')?.textContent||'Design';
    const subtitle=document.createElement('span');subtitle.className='canvas-art__category';
    subtitle.textContent=art.dataset.category;
    button.setAttribute('aria-label','Open '+title.textContent+' in detail viewer');
    button.append(thumb,title,subtitle);
    const node={element:button,id:art.dataset.id,x:points[i].x,y:points[i].y,rotation:points[i].rotation};
    button.addEventListener('click',e=>{
      if(button.dataset.dragged==='true'){button.dataset.dragged='false';e.preventDefault();return;}
      window.dispatchEvent(new CustomEvent('pkm:canvas-open',{detail:{id:node.id,button}}));
    });
    thumb.addEventListener('error',()=>{thumb.hidden=true;});
    world.append(button);
    return node;
  });
  function paintNode(node) {
    node.element.style.left=node.x+'px';
    node.element.style.top=node.y+'px';
    node.element.style.transform='rotate('+node.rotation+'deg)';
  }
  nodes.forEach(paintNode);
  function paint() {
    world.style.transform='translate3d('+camera.x+'px,'+camera.y+'px,0) scale('+camera.scale+')';
    zoomLabel.value=Math.round(camera.scale*100)+'%';
    stage.style.backgroundPosition=Math.round(camera.x/2)+'px '+Math.round(camera.y/2)+'px, center';
  }
  function fit() {
    const available=stage.getBoundingClientRect();
    const width=1240;
    camera.scale=Math.min(1,Math.max(.45,Math.min((available.width-40)/width,.92)));
    camera.x=(available.width-width*camera.scale)/2;
    camera.y=18;
    paint();
  }
  function setMode(value) {
    mode=value;
    for(const button of controls) button.setAttribute('aria-pressed',String(button.dataset.designView===value));
    board.hidden=value!=='canvas';
    grid.hidden=value!=='archive';
    browse.hidden=value!=='archive';
    if(value==='archive')layout();
    else requestAnimationFrame(fit);
  }
  controls.forEach(button=>button.addEventListener('click',()=>setMode(button.dataset.designView)));
  function begin(e,target,node) {
    if(e.button!==0 && e.pointerType!=='touch')return;
    gesture={id:e.pointerId,target,node,startX:e.clientX,startY:e.clientY,lastX:e.clientX,lastY:e.clientY,moved:false,panX:camera.x,panY:camera.y,startNodeX:node?.x,startNodeY:node?.y};
    target.setPointerCapture(e.pointerId);
    if(node){target.classList.add('is-moving');target.dataset.dragged='false';}
    else stage.classList.add('is-panning');
  }
  stage.addEventListener('pointerdown',e=>{
    if(e.target.closest('.canvas-art'))return;
    begin(e,stage,null);
  });
  nodes.forEach(node=>node.element.addEventListener('pointerdown',e=>{e.stopPropagation();begin(e,node.element,node);}));
  function move(e) {
    if(!gesture||e.pointerId!==gesture.id)return;
    const dx=e.clientX-gesture.startX,dy=e.clientY-gesture.startY;
    if(!gesture.moved && Math.hypot(dx,dy)>6)gesture.moved=true;
    if(!gesture.moved)return;
    if(gesture.node){
      gesture.node.x=gesture.startNodeX+dx/camera.scale;
      gesture.node.y=gesture.startNodeY+dy/camera.scale;
      gesture.node.element.dataset.dragged='true';
      paintNode(gesture.node);
    }else{
      camera.x=gesture.panX+dx;camera.y=gesture.panY+dy;paint();
    }
  }
  stage.addEventListener('pointermove',move);
  nodes.forEach(node=>node.element.addEventListener('pointermove',move));
  function end(e) {
    if(!gesture||e.pointerId!==gesture.id)return;
    const {node,target,moved}=gesture;
    if(target.hasPointerCapture(e.pointerId))target.releasePointerCapture(e.pointerId);
    target.classList.remove('is-moving');stage.classList.remove('is-panning');
    gesture=null;
    if(node&&moved){
      node.element.dataset.dragged='true';
      setTimeout(()=>{node.element.dataset.dragged='false';},80);
    }
  }
  stage.addEventListener('pointerup',end);stage.addEventListener('pointercancel',end);
  nodes.forEach(node=>{node.element.addEventListener('pointerup',end);node.element.addEventListener('pointercancel',end);});
  stage.addEventListener('keydown',e=>{
    if(e.target!==stage)return;
    const step=68;
    if(e.key==='ArrowLeft')camera.x+=step;
    else if(e.key==='ArrowRight')camera.x-=step;
    else if(e.key==='ArrowUp')camera.y+=step;
    else if(e.key==='ArrowDown')camera.y-=step;
    else if(e.key==='+'||e.key==='=')camera.scale=Math.min(1.45,camera.scale+.1);
    else if(e.key==='-')camera.scale=Math.max(.45,camera.scale-.1);
    else if(e.key==='Home'){e.preventDefault();fit();return;}
    else return;
    e.preventDefault();paint();
  });
  stage.addEventListener('wheel',e=>{
    // Ordinary wheel scrolling always scrolls the page. Ctrl/Command-wheel may zoom the board.
    if(!e.ctrlKey&&!e.metaKey)return;
    e.preventDefault();
    camera.scale=Math.min(1.45,Math.max(.45,camera.scale+(e.deltaY<0?.08:-.08)));
    paint();
  },{passive:false});
  document.querySelector('[data-board-zoom-in]').addEventListener('click',()=>{camera.scale=Math.min(1.45,camera.scale+.1);paint();});
  document.querySelector('[data-board-zoom-out]').addEventListener('click',()=>{camera.scale=Math.max(.45,camera.scale-.1);paint();});
  document.querySelector('[data-board-reset]').addEventListener('click',()=>{
    arrangeCount=0;nodes.forEach((node,i)=>{Object.assign(node,points[i]);paintNode(node);});
    fit();status.textContent='Artwork centred. Drag to explore.';
  });
  document.querySelector('[data-board-arrange]').addEventListener('click',()=>{
    arrangeCount++;
    nodes.forEach((node,i)=>{
      const p=points[(i+arrangeCount*3)%points.length];
      node.x=p.x;node.y=p.y;node.rotation=points[i].rotation;
      paintNode(node);
    });
    status.textContent='Artwork rearranged. Select any design for detail.';
  });
  let stageWidth=0;
  new ResizeObserver(entries=>{
    const width=Math.round(entries[0]?.contentRect.width||0);
    if(width && width!==stageWidth){stageWidth=width;if(mode==='canvas')fit();}
  }).observe(stage);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stage.classList.remove('is-panning');});
})();
