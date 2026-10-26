/* Build the 100 concise first-pass pages and keep archive routes in sequence.
 * Run from repository cv/: node portfolio-field-notes/sync-screenings.mjs
 */
import {readFileSync,writeFileSync,mkdirSync} from "node:fs";
import {resolve,dirname} from "node:path";
import {fileURLToPath} from "node:url";
import vm from "node:vm";

const here=dirname(fileURLToPath(import.meta.url));
const source=readFileSync(resolve(here,"data.js"),"utf8");
const sandbox={window:{}};
vm.runInNewContext(source,sandbox,{timeout:1000});
const entries=sandbox.window.PORTFOLIO_ENTRIES||[];
const screenings=entries.filter(entry=>entry.added===true);
if(entries.length!==150||screenings.length!==100)throw Error("Expected 150 entries, including 100 first-pass screens");
if(new Set(entries.map(entry=>entry.id)).size!==entries.length)throw Error("Portfolio IDs must be unique");
for(const entry of screenings){
 if(!/^[a-z0-9-]+$/.test(entry.id)||!entry.url||!entry.profession||!entry.qualitySignal||!entry.sourceUrl)throw Error("Incomplete first-pass entry: "+entry.id);
}
const esc=value=>String(value??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
const host=entry=>{try{return new URL(entry.url).hostname.replace(/^www\./,"")}catch{return entry.domain||"Portfolio site"}};
const initials=name=>String(name).split(/\s+/).filter(Boolean).slice(0,2).map(part=>part.replace(/[^\p{L}\p{N}]/gu,"").slice(0,1)).join("").toUpperCase()||"FN";
const screenshot=entry=>"https://s.wordpress.com/mshots/v1/"+encodeURIComponent(entry.url)+"?w=1200";
const clip=(value,max=154)=>{const text=String(value).replace(/\s+/g," ").trim();if(text.length<=max)return text;const cut=text.slice(0,max-1).replace(/\s+\S*$/,"");return cut+"…"};
const navFor=index=>{
 const previous=entries[(index+entries.length-1)%entries.length];
 const next=entries[(index+1)%entries.length];
 return '<nav class="prevnext" aria-label="More portfolios"><a href="../'+esc(previous.id)+'/" aria-label="Previous: '+esc(previous.name)+'"><small>← Previous</small><strong>'+esc(previous.name)+'</strong></a><a href="../'+esc(next.id)+'/" aria-label="Next: '+esc(next.name)+'"><small>Next →</small><strong>'+esc(next.name)+'</strong></a></nav>';
};
const makeCard=(entry,index)=>{
 const domain=host(entry);
 const search=[entry.name,entry.url,domain,entry.profession,entry.qualitySignal].filter(Boolean).join(" ").toLowerCase();
 const tone=index%6;
 return '<article class="portfolio-card" data-id="'+esc(entry.id)+'" data-index="'+index+'" data-name="'+esc(entry.name.toLowerCase())+'" data-featured="false" data-revisit="false" data-new="true" data-search="'+esc(search)+'"><a class="portfolio-card__link" href="'+esc(entry.id)+'/" aria-label="Read the first-pass screen for '+esc(entry.name)+'"><div class="preview tone-'+tone+'" aria-hidden="true"><div class="preview__top"><i></i><i></i><i></i><span>'+esc(domain)+'</span></div><div class="preview__fallback"><strong class="preview__initials">'+esc(initials(entry.name))+'</strong><small>'+esc(entry.name)+'</small></div><img loading="lazy" decoding="async" referrerpolicy="no-referrer" src="'+esc(screenshot(entry))+'" alt=""><span class="portfolio-card__screen">First pass</span></div><div class="portfolio-card__body"><h3 class="portfolio-card__title">'+esc(entry.name)+'</h3><p class="portfolio-card__domain">'+esc(domain)+'</p></div><span class="portfolio-card__arrow" aria-hidden="true">↗</span></a><button type="button" class="bookmark" data-save="'+esc(entry.id)+'" aria-label="Save '+esc(entry.name)+'" aria-pressed="false" title="Save">☆</button></article>';
};
const makePage=(entry,index)=>{
 const domain=host(entry),description=clip("First-pass portfolio screen: "+entry.qualitySignal);
 const href=screenshot(entry),tone=index%6,initial=initials(entry.name);
 const base='/portfolio-field-notes/';
 return '<!doctype html><html lang="en-GH" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#10110f"><meta name="description" content="'+esc(description)+'"><meta property="og:type" content="article"><meta property="og:title" content="'+esc(entry.name)+' · Portfolio Field Notes"><meta property="og:description" content="'+esc(description)+'"><meta property="og:url" content="https://pkm.hayalows.com'+base+esc(entry.id)+'/"><title>'+esc(entry.name)+' · Portfolio Field Notes</title><link rel="canonical" href="https://pkm.hayalows.com'+base+esc(entry.id)+'/"><link rel="stylesheet" href="../styles.css?v=5"><script defer src="../data.js?v=field-notes-2"></script><script defer src="../ui.js?v=5"></script></head><body><div class="reading-progress" aria-hidden="true"></div><a class="skip-link" href="#main">Skip to content</a><div class="topbar-wrap"><header class="topbar"><a class="brand" href="'+base+'"><span class="brand__mark">fn.</span>Field Notes</a><nav class="topnav" aria-label="Main navigation"><a href="'+base+'#close-reads">Selected</a><a href="'+base+'#index">Archive</a><a href="https://pkm.hayalows.com/">PKM ↗</a></nav><div class="top-actions"><button type="button" data-open="command" class="nav-button search-button"><span>Search</span><kbd>⌘ K</kbd></button><button type="button" data-open="saved" title="Saved portfolios" aria-label="Saved portfolios" class="nav-button">☆</button><button type="button" data-theme-toggle aria-label="Switch colour theme" title="Switch colour theme" class="nav-button">◐</button></div></header></div><main class="shell" id="main"><div class="backline"><a href="'+base+'#index">← All portfolios</a><span>'+(index+1)+' / '+entries.length+'</span></div><section class="review-head"><div><div class="review-meta"><span>First-pass screen</span><span>'+esc(entry.profession)+'</span></div><h1>'+esc(entry.name)+'</h1><p>'+esc(domain)+'</p></div><div class="review-actions"><button type="button" data-save="'+esc(entry.id)+'" aria-pressed="false"><span data-save-icon aria-hidden="true">☆</span>Save</button><button type="button" data-copy-url>Copy link ↗</button><a class="visit" href="'+esc(entry.url)+'" target="_blank" rel="noopener noreferrer">Visit portfolio ↗</a></div></section><div class="review-preview"><div class="preview tone-'+tone+'" aria-hidden="true"><div class="preview__top"><i></i><i></i><i></i><span>'+esc(domain)+'</span></div><div class="preview__fallback"><strong class="preview__initials">'+esc(initial)+'</strong><small>'+esc(entry.name)+'</small></div><img loading="lazy" decoding="async" referrerpolicy="no-referrer" src="'+esc(href)+'" alt=""></div></div><div class="review-main"><article class="review-copy"><section id="signal"><h2>First-pass signal</h2><p>'+esc(entry.qualitySignal)+'</p></section><section id="scope"><h2>How to read this</h2><p>This note records one concrete signal visible during an initial screen. It is a starting point for exploration, not a full assessment of the work, its outcomes or its usability. Any results described on the portfolio remain creator-reported here.</p></section><section id="next"><h2>What to inspect next</h2><p>Open the original site and follow the linked work. For a fuller read, check role and contribution, problem framing, decisions and trade-offs, evidence of validation, outcome attribution, and mobile and accessibility details.</p></section><details id="method" class="method"><summary>Screening method <b aria-hidden="true">+</b></summary><div class="method__body"><p>This profile passed a first-pass screen for a distinct personal practice, visible work or purposeful interaction. The short signal is based on public portfolio material and should be checked against the live site.</p><p>This is not a full design review, hiring recommendation, accessibility review or performance audit.</p><a href="'+esc(entry.sourceUrl)+'" target="_blank" rel="noopener noreferrer">See X source ↗</a></div></details></article><aside class="review-rail" aria-label="On this page"><strong>In this screen</strong><a href="#signal">First-pass signal</a><a href="#scope">How to read this</a><a href="#next">What to inspect next</a><a href="#method">Screening method</a></aside></div>'+navFor(index)+'</main><footer class="footer"><a href="'+base+'">Field Notes</a><span>© 2026 Papa Kojo Mensah</span><div><a href="https://pkm.hayalows.com/">Portfolio ↗</a><a href="'+base+'#method">Method</a><a href="https://rareui.com/" target="_blank" rel="noopener noreferrer">Rare UI ↗</a><a href="https://uselayouts.com/" target="_blank" rel="noopener noreferrer">useLayouts ↗</a><a href="https://beui.dev/" target="_blank" rel="noopener noreferrer">beUI ↗</a></div></footer><dialog class="command" id="command" aria-label="Search portfolios"><div class="command-search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 5 5"/></svg><input id="command-input" type="search" autocomplete="off" placeholder="Search portfolios" aria-label="Search portfolios"><button type="button" data-close="command">Esc</button></div><div class="command-results" id="command-results"></div></dialog><dialog class="saved-panel" id="saved" aria-label="Saved portfolios"><div class="saved-head"><h2>Saved portfolios</h2><button type="button" data-close="saved" aria-label="Close">✕</button></div><div class="saved-results" id="saved-results"></div></dialog><div id="toast" class="toast" role="status" aria-live="polite"></div><nav class="mobile-nav" aria-label="Quick access"><a href="'+base+'">⌂<span>Archive</span></a><button type="button" data-open="command">⌕<span>Search</span></button><button type="button" data-open="saved">☆<span>Saved</span></button></nav></body></html>';
};

let index=readFileSync(resolve(here,"index.html"),"utf8");
index=index.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="A visual archive of 150 portfolios: 12 selected close reads, 34 additional records, 4 revisits and 100 first-pass screens.">');
index=index.replace('<strong>50</strong>','<strong>150</strong>').replace('id="visible-count">50','id="visible-count">150');
index=index.replace('</h1></div><div class="hero__count">','</h1><p class="hero__note">An independent archive from two X threads and their quote and reply networks: selected close reads, earlier entries and 100 first-pass screens.</p></div><div class="hero__count">');
index=index.replace('data-filter="revisit" aria-pressed="false">To revisit</button>','data-filter="revisit" aria-pressed="false">To revisit</button><button type="button" data-filter="new" aria-pressed="false">New additions</button>');
index=index.replace('Independent, primarily desktop-focused reading notes. Results and metrics quoted from creators are not independently verified. These notes are not a full accessibility or performance audit. Four sites could not be assessed in the earlier review.','The archive retains the original 50 entries: 12 selected close reads, 34 additional records and four entries pending revisit. It adds 100 first-pass screens from public portfolios surfaced through two X threads and their quote and reply networks. First-pass entries carry one observed signal, not a long-form review or individual score. The weighted criteria above inform the selected close reads; creator-reported metrics remain unverified. This is not a full accessibility or performance audit.');
index=index.replace('Original thread ↗</a>','Recent X thread ↗</a><a href="https://x.com/zarazhangrui/status/2108047745936466373" target="_blank" rel="noopener noreferrer">Earlier X thread ↗</a>');
index=index.replace('styles.css?v=4','styles.css?v=5').replace('ui.js?v=4','ui.js?v=5').replace('app.js?v=4','app.js?v=5').replace('data.js?v=field-notes-1','data.js?v=field-notes-2');
index=index.replace(/<!-- SCREENED PORTFOLIOS START -->[\s\S]*?<!-- SCREENED PORTFOLIOS END -->/g,"");
const gridStart=index.indexOf('<div class="portfolio-grid" id="portfolio-grid">');
const empty=index.indexOf('<div class="empty" id="empty"',gridStart);
if(gridStart<0||empty<0)throw Error("Could not locate the static archive grid");
const gridClose=index.lastIndexOf('</div>',empty);
const generated='<!-- SCREENED PORTFOLIOS START -->'+screenings.map((entry,i)=>makeCard(entry,50+i)).join("")+'<!-- SCREENED PORTFOLIOS END -->';
index=index.slice(0,gridClose)+generated+index.slice(gridClose);
writeFileSync(resolve(here,"index.html"),index);

for(let i=0;i<entries.length;i++){
 const entry=entries[i],dir=resolve(here,entry.id),file=resolve(dir,"index.html");
 if(entry.added){mkdirSync(dir,{recursive:true});writeFileSync(file,makePage(entry,i));continue}
 let page=readFileSync(file,"utf8");
 page=page.replace(/<span>\s*\d+\s*\/\s*50\s*<\/span>/,'<span>'+(i+1)+' / '+entries.length+'</span>');
 page=page.replace(/<nav class="prevnext" aria-label="More portfolios">[\s\S]*?<\/nav>/,navFor(i));
 page=page.replace('../styles.css?v=3','../styles.css?v=5').replace('../ui.js?v=3','../ui.js?v=5').replace('../data.js?v=field-notes-1','../data.js?v=field-notes-2');
 writeFileSync(file,page);
}

let styles=readFileSync(resolve(here,"styles.css"),"utf8");
if(!styles.includes(".portfolio-card__screen{"))styles+='\n.portfolio-card__screen{position:absolute;z-index:5;left:9px;bottom:9px;padding:4px 7px;border:1px solid #ffffff55;border-radius:999px;background:#10110fd9;color:#f2eee5;font-size:9px;line-height:1.2;letter-spacing:.08em;text-transform:uppercase;backdrop-filter:blur(8px)}\n.hero__note{max-width:44ch;margin-top:25px;color:var(--muted);font-size:14px;line-height:1.75}\n@media(max-width:560px){.hero__note{max-width:37ch;margin-top:18px;font-size:12px;line-height:1.65}.portfolio-card__screen{left:6px;bottom:6px;padding:3px 6px;font-size:8px}}\n';
writeFileSync(resolve(here,"styles.css"),styles);

let app=readFileSync(resolve(here,"app.js"),"utf8");
app=app.replace('new Set(["all","featured","saved","revisit"])','new Set(["all","featured","saved","revisit","new"])');
app=app.replace('(filter==="revisit"&&card.dataset.revisit==="true")','(filter==="revisit"&&card.dataset.revisit==="true")||(filter==="new"&&card.dataset.new==="true")');
writeFileSync(resolve(here,"app.js"),app);

let verify=readFileSync(resolve(here,"verify.mjs"),"utf8");
verify=verify.replace('if(entries.length!==50)bad.push("Expected original 50 entries");','if(entries.length!==150)bad.push("Expected 150 archive entries");\nif(entries.filter(e=>e.added===true).length!==100)bad.push("Expected 100 first-pass screens");');
verify=verify.replace('if(!page.includes("What caught my eye")||!page.includes("What works well")||!page.includes("My recommendation"))bad.push("Missing review sections "+entry.id);','if(entry.added){if(!page.includes("First-pass signal")||!page.includes("What to inspect next")||!page.includes(entry.sourceUrl.replace(/&/g,"&amp;")))bad.push("Missing first-pass content "+entry.id)}else if(!page.includes("What caught my eye")||!page.includes("What works well")||!page.includes("My recommendation"))bad.push("Missing review sections "+entry.id);');
verify=verify.replace('if((index.match(/class="portfolio-card"/g)||[]).length!==entries.length)bad.push("Index card count mismatch");','if((index.match(/class="portfolio-card"/g)||[]).length!==entries.length)bad.push("Index card count mismatch");\nif(!index.includes("data-filter=\\"new\\""))bad.push("Missing new additions filter");');
writeFileSync(resolve(here,"verify.mjs"),verify);

let readme=readFileSync(resolve(here,"README.md"),"utf8");
readme=readme.replace('Independent archive of 50 portfolios, published at','Independent archive of 150 portfolios, published at');
readme=readme.replace('12 entries have detailed observational notes for designers and hiring teams. 34 additional entries are indexed without fabricated long reviews. Four inaccessible sites remain explicitly marked for another look. No numeric individual ratings or fabricated results are shown.','The original 50 entries remain intact: 12 selected close reads, 34 additional records and four sites marked for another look. The 100 new entries have concise first-pass screens based on one visible signal from each public portfolio. They are useful starting points, not long-form reviews, individual ratings or hiring recommendations.');
readme=readme.replace('The 50 detail pages contain static HTML, unique titles/descriptions and neighbour links.','All 150 detail pages contain static HTML, unique titles/descriptions and neighbour links. The 100 new pages are generated from their source-grounded screening signals.');
readme=readme.replace('- Preserve the 50 existing entries and their external URLs. `data.js` is the single source of editorial notes.','- Preserve the original 50 entries and their external URLs. `data.js` is the source for all 150 archive records and their screening signals.');
readme=readme.replace('- Every added entry must have a unique lowercase slug as `id`, a working original URL where available and a corresponding static `<id>/index.html`. Use an existing page as the authoring template. Update the sitemap.','- Every added entry must have a unique lowercase slug as `id`, a working original URL where available, a concise source-grounded `qualitySignal`, an X `sourceUrl`, a corresponding static `<id>/index.html`, and an entry in the sitemap. Run `node portfolio-field-notes/sync-screenings.mjs` from `cv` to build the first-pass pages and keep route navigation current.');
readme=readme.replace('## Source-grounded reading notes (24 October 2026)','## Source-grounded reading notes (24 October 2026)');
readme=readme.replace('Run from cv: node portfolio-field-notes/sync-reviews.mjs. This rebuilds the static article text from the editorial source without changing the other parts of the page. Then run verify.mjs.','Run from `cv`: `node portfolio-field-notes/sync-reviews.mjs` rebuilds the original 50 editorial pages. `node portfolio-field-notes/sync-screenings.mjs` rebuilds the 100 first-pass pages and archive route navigation. Then run `node portfolio-field-notes/verify.mjs`.');
writeFileSync(resolve(here,"README.md"),readme);

const sitemapPath=resolve(here,"../sitemap.xml");
let sitemap=readFileSync(sitemapPath,"utf8");
for(const entry of screenings){
 const url='https://pkm.hayalows.com/portfolio-field-notes/'+entry.id+'/';
 if(!sitemap.includes('<loc>'+url+'</loc>'))sitemap=sitemap.replace('</urlset>','  <url><loc>'+url+'</loc><lastmod>2026-10-26</lastmod></url>\n</urlset>');
}
writeFileSync(sitemapPath,sitemap);
console.log(JSON.stringify({entries:entries.length,firstPassPages:screenings.length,archiveCards:(index.match(/class="portfolio-card"/g)||[]).length,sitemapAdded:screenings.length},null,2));
