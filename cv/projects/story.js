/* AccordionOS composition adapted from UseLayouts © 2025 Urvish Mali.
 * MIT licence in ../THIRD-PARTY-NOTICES.md. Manual, native disclosure controls.
 */
document.querySelectorAll('[data-project-story]').forEach(story=>{
  const parts=[...story.querySelectorAll('[data-story-part]')];
  const summaries=parts.map(part=>part.querySelector('summary'));
  const previous=story.querySelector('[data-story-prev]'),next=story.querySelector('[data-story-next]');
  const counter=story.querySelector('[data-story-counter]'),context=story.querySelector('[data-story-context]');
  parts.forEach((part,index)=>{part.open=index===0;});
  story.querySelector('[data-story-pagination]').hidden=false;
  function sync(){
    const index=parts.findIndex(part=>part.open);
    story.dataset.activeStage=index<0?'overview':String(index);
    counter.textContent=index<0?'Overview':String(index+1).padStart(2,'0')+' / 03';
    previous.disabled=index<=0;next.disabled=index===parts.length-1;
    const text=index<0?context.dataset.overview:context.getAttribute('data-context-'+index);
    if(context.textContent!==text)context.textContent=text;
  }
  function select(index){parts.forEach((part,i)=>{part.open=i===index;});sync();}
  parts.forEach((part,index)=>{
    part.addEventListener('toggle',()=>{
      if(part.open)parts.forEach(other=>{if(other!==part)other.open=false;});
      sync();
    });
    summaries[index].addEventListener('keydown',event=>{
      if(event.altKey||event.ctrlKey||event.metaKey)return;
      const target={ArrowDown:Math.min(index+1,parts.length-1),ArrowUp:Math.max(index-1,0),Home:0,End:parts.length-1}[event.key];
      if(target!==undefined){event.preventDefault();summaries[target].focus();}
    });
  });
  story.addEventListener('keydown',event=>{
    if(event.key==='Escape'){const index=parts.findIndex(part=>part.open);if(index>=0){event.preventDefault();parts[index].open=false;sync();summaries[index].focus();}}
  });
  previous.addEventListener('click',()=>select(Math.max(0,parts.findIndex(part=>part.open)-1)));
  next.addEventListener('click',()=>select(Math.min(parts.length-1,parts.findIndex(part=>part.open)+1)));
  const image=story.querySelector('[data-story-image]'),fallback=story.querySelector('[data-story-image-fallback]');
  function showImageError(){image.hidden=true;fallback.hidden=false;}
  image.addEventListener('error',showImageError);
  if(image.complete&&!image.naturalWidth)showImageError();
  sync();
});
