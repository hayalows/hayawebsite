import {readFileSync,existsSync} from "node:fs";
import {resolve,dirname} from "node:path";
import {fileURLToPath} from "node:url";
import vm from "node:vm";
const here=dirname(fileURLToPath(import.meta.url));
const source=readFileSync(resolve(here,"data.js"),"utf8");
const sandbox={window:{}};vm.runInNewContext(source,sandbox,{timeout:1000});
const entries=sandbox.window.PORTFOLIO_ENTRIES||[];
const bad=[];
if(entries.length!==50)bad.push("Expected original 50 entries");
const ids=new Set();
for(const entry of entries){
 if(ids.has(entry.id))bad.push("Duplicate ID "+entry.id);
 ids.add(entry.id);
 if(!/^[a-z0-9-]+$/.test(entry.id))bad.push("Invalid slug "+entry.id);
 const path=resolve(here,entry.id,"index.html");
 if(!existsSync(path)){bad.push("Missing review "+entry.id);continue}
 const page=readFileSync(path,"utf8");
 if(!page.includes("/portfolio-field-notes/"+entry.id+"/"))bad.push("Missing canonical URL "+entry.id);
 if(!page.includes("Visit portfolio")&&entry.url)bad.push("Missing original visit link "+entry.id);
 if(!page.includes("review-head"))bad.push("Missing review heading "+entry.id);
 if(!page.includes("What caught my eye")||!page.includes("What works well")||!page.includes("My recommendation"))bad.push("Missing review sections "+entry.id);
}
const index=readFileSync(resolve(here,"index.html"),"utf8");
if((index.match(/class="portfolio-card"/g)||[]).length!==entries.length)bad.push("Index card count mismatch");
if((index.match(/class="featured-card"/g)||[]).length!==entries.filter(e=>e.featured).length)bad.push("Featured count mismatch");
const detailed=entries.filter(e=>e.designer&&e.hiring).length;
if(detailed!==12)bad.push("Expected 12 source-grounded detailed entries");
if(entries.filter(e=>e.reviewed===false).length!==4)bad.push("Expected four sites pending review");
console.log(JSON.stringify({entries:entries.length,featured:entries.filter(e=>e.featured).length,detailed,pending:4,failures:bad},null,2));
if(bad.length)process.exitCode=1;
