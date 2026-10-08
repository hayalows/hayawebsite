/* Scroll Stack Deck adaptation for PKM's existing folder previews.
   Inspired by useLayouts; keeps native scrolling and the original links. */
(()=>{'use strict';
const deck=document.querySelector('.project-stack-deck');
if(!deck)return;
const cards=[...deck.querySelectorAll('.project-card')];
const media=matchMedia('(min-width: 980px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)');
let raf=0;
function reset(){cards.forEach(c=>{c.style.removeProperty('--deck-scale');c.style.removeProperty('--deck-dim');});}
function update(){
 raf=0;if(!media.matches){reset();return;}
 cards.forEach((card,i)=>{
  const next=cards[i+1];if(!next){card.style.setProperty('--deck-scale','1');card.style.setProperty('--deck-dim','1');return;}
  const trigger=95+(i+1)*16;
  const distance=next.getBoundingClientRect().top-trigger;
  const progress=Math.min(1,Math.max(0,1-distance/340));
  card.style.setProperty('--deck-scale',String(1-progress*.035));
  card.style.setProperty('--deck-dim',String(1-progress*.12));
 });
}
function schedule(){if(!raf)raf=requestAnimationFrame(update);}
addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule,{passive:true});
media.addEventListener('change',schedule);schedule();
})();