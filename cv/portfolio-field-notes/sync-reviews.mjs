/* Sync static Field Notes article copy from reviews.json.
 * Run from repository cv/: node portfolio-field-notes/sync-reviews.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const here=dirname(fileURLToPath(import.meta.url));
const notes=JSON.parse(readFileSync(resolve(here,"reviews.json"),"utf8"));
const esc=s=>String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const icon='<svg class="icon" aria-hidden="true"><use href="/portfolio-field-notes/icons.svg#arrow-up-right"></use></svg>';
const toc='<aside class="review-rail" aria-label="On this page"><strong>In this review</strong><a href="#noticed">What caught my eye</a><a href="#strengths">What works well</a><a href="#recommendation">My recommendation</a><a href="#method">Method</a></aside>';
if(notes.length!==50||new Set(notes.map(n=>n.id)).size!==50)throw Error("Expected 50 unique review entries");
for(const n of notes){
 const file=resolve(here,n.id,"index.html");
 let s=readFileSync(file,"utf8");
 const part=(id,label,body)=>'<section id="'+id+'"><h2>'+label+'</h2><p>'+esc(body)+'</p>';
 const article=part("noticed","What caught my eye",n.noticed)+"</section>"+part("strengths","What works well",n.works)+"</section>"+part("recommendation","My recommendation",n.recommendation)+(n.focusUrl?'<a class="review-focus-link" href="'+esc(n.focusUrl)+'" target="_blank" rel="noopener noreferrer">'+esc(n.focusLabel)+" "+icon+"</a>":"")+"</section>";
 const body=/<article class="review-copy">[\s\S]*?(?=<details id="method" class="method">)/;
 const aside=/<aside class="review-rail" aria-label="On this page">[\s\S]*?<\/aside>/;
 if(!body.test(s)||!aside.test(s))throw Error("Unexpected article structure "+n.id);
 s=s.replace(body,'<article class="review-copy">'+article).replace(aside,toc);
 const desc=esc((n.noticed+" "+n.works).slice(0,158).replace(/\s+\S*$/,"."));
 s=s.replace(/<meta name="description" content="[^"]*">/,'<meta name="description" content="'+desc+'">').replace(/<meta property="og:description" content="[^"]*">/,'<meta property="og:description" content="'+desc+'">');
 writeFileSync(file,s);
}
console.log("Synced "+notes.length+" portfolio reviews.");
