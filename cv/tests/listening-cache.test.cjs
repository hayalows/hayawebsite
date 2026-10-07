const {test} = require('node:test');
const assert = require('node:assert/strict');
const {createReader} = require('../lib/listening-cache');
function store() {
  const rows = new Map();
  return {get:async key=>structuredClone(rows.get(key)),
    set:async (key,value)=>{rows.set(key,structuredClone(value));},
    delete:async key=>{rows.delete(key);}, rows};
}
const snapshot = ()=>({value:null,expiresAt:0,pending:null});
const state = name=>({status:'playing',track:{name},updatedAt:new Date().toISOString()});

test('Independent workers reuse a shared result and preserve the last song after idle', async()=>{
  const cache=store(); let calls=0;
  await createReader(cache)(snapshot(),'current',async()=>{calls++;return state('First');},()=>10);
  const fresh=snapshot();
  assert.equal((await createReader(cache)(fresh,'current',async()=>{calls++;return state('Wrong');},()=>10)).track.name,'First');
  assert.equal(calls,1);
  const previous=cache.rows.get('current');previous.expiresAt=0;
  await createReader(cache)(snapshot(),'current',async()=>({status:'offline',track:null}),()=>20);
  assert.equal(cache.rows.get('current').lastKnown.track.name,'First');
});

test('Simultaneous cold workers coalesce a quick refresh using a shared warming marker', async()=>{
  const cache=store();let calls=0;
  const results=await Promise.all(Array.from({length:12},()=>createReader(cache)(snapshot(),'current',async()=>{
    calls++;await new Promise(resolve=>setTimeout(resolve,30));return state('Shared');
  },()=>10)));
  assert.ok(results.every(r=>r.track.name==='Shared'));
  assert.equal(calls,1);
});

test('Cooldown survives worker replacement and also blocks a separate history reader',async()=>{
  const cache=store();let calls=0;
  const retryAt=Date.now()+7200000;
  await assert.rejects(createReader(cache)(snapshot(),'current',async()=>{
    calls++;throw Object.assign(new Error('limit'),{status:429,retryAt,retryAfter:7200});
  },()=>10),{status:429});
  await assert.rejects(createReader(cache)(snapshot(),'recent',async()=>{calls++;return state('Wrong');},()=>900),{status:429});
  assert.equal(calls,1);assert.equal(cache.rows.get('cooldown').retryAt,retryAt);
});

test('Transient failures are cached across workers and never turn saved playback back into live',async()=>{
  const cache=store();let calls=0;
  const warm=snapshot();await createReader(cache)(warm,'current',async()=>state('Saved'),()=>10);
  warm.expiresAt=0;cache.rows.get('current').expiresAt=0;
  await assert.rejects(createReader(cache)(warm,'current',async()=>{calls++;throw new Error('offline');},()=>10));
  await assert.rejects(createReader(cache)(snapshot(),'current',async()=>{calls++;return state('Wrong');},()=>10));
  assert.equal(calls,1);assert.equal(cache.rows.get('current').lastKnown.track.name,'Saved');
});

test('Shared cache failure stops before contacting Spotify',async()=>{
  let calls=0;
  const cache={get:async()=>{throw new Error('Cache unavailable');}};
  await assert.rejects(createReader(cache)(snapshot(),'current',async()=>{calls++;return state('Wrong');},()=>10));
  assert.equal(calls,0);
});
