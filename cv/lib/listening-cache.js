const { randomUUID, createHash } = require('node:crypto');
const { getCache } = require('@vercel/functions');

// Public listening metadata only. Credentials never enter the runtime cache.
// The namespace also isolates this site on Hobby teams, whose cache is shared.
const account = createHash('sha256').update(process.env.SPOTIFY_CLIENT_ID || 'local').digest('hex').slice(0, 16);
const shared = process.env.VERCEL ? getCache({namespace: 'pkm-listening-v3-' + account}) : null;
const RETAIN_SECONDS = 604800;

async function getSharedCooldown() {
  const value = shared ? await shared.get('cooldown') : null;
  return value?.retryAt > Date.now() ? value : null;
}

async function restoreSharedSnapshots(current, recent) {
  if (!shared) return;
  const records = await Promise.all([shared.get('current'), shared.get('recent')]);
  for (const [index, snapshot] of [current, recent].entries()) {
    const record = records[index];
    if (record) Object.assign(snapshot, {value:record.value, lastKnown:record.lastKnown});
  }
}

function createReader(cache = shared) {
  async function read(snapshot, key, fetchValue, lifetime) {
    if (snapshot.pending) return snapshot.pending;
    if ((snapshot.value || snapshot.error) && Date.now() < snapshot.expiresAt) return result(snapshot);
    snapshot.pending = refresh(snapshot, key, fetchValue, lifetime);
    try { return await snapshot.pending; }
    finally { snapshot.pending = null; }
  }

  function apply(snapshot, record) {
    if (!record) return;
    snapshot.value = record.value;
    snapshot.expiresAt = record.expiresAt;
    snapshot.lastKnown = record.lastKnown || snapshot.lastKnown;
    snapshot.error = record.error || null;
  }

  function result(snapshot) {
    if (snapshot.error) throw Object.assign(new Error('Listening update deferred'), snapshot.error);
    return snapshot.value;
  }

  async function refresh(snapshot, key, fetchValue, lifetime) {
    let owner;
    if (cache) {
      // Read the shared cooldown even on a cold function instance.
      const cooldown = await cache.get('cooldown');
      if (cooldown?.retryAt > Date.now()) throw Object.assign(new Error('Spotify cooldown'), {
        status:429, retryAt:cooldown.retryAt, retryAfter:Math.ceil((cooldown.retryAt - Date.now()) / 1000),
      });
      const record = await cache.get(key);
      apply(snapshot, record);
      if (record?.expiresAt > Date.now()) return result(snapshot);
      const warming = await cache.get(key + ':warming');
      if (warming?.until > Date.now()) return deferred(snapshot, key);
      owner = randomUUID();
      await cache.set(key + ':warming', {owner, until:Date.now() + 35000}, {ttl:35});
      // Coalesce simultaneous misses on a best-effort basis. Runtime Cache
      // has no atomic compare-and-set; this is not a distributed lock.
      if ((await cache.get(key + ':warming'))?.owner !== owner) return deferred(snapshot, key);
    }
    try {
      const value = await fetchValue();
      snapshot.value = value;
      snapshot.error = null;
      if (value.track) snapshot.lastKnown = value;
      snapshot.expiresAt = Date.now() + lifetime(value) * 1000;
    } catch (error) {
      const seconds = error.status === 429 ? Math.max(30, error.retryAfter || 60)
        : ['spotify_refresh_token_invalid', 'spotify_config_missing', 'spotify_refresh_token_missing'].includes(error.code) ? 900 : 30;
      snapshot.expiresAt = error.retryAt || Date.now() + seconds * 1000;
      snapshot.error = {status:error.status, code:error.code, retryAt:error.retryAt,
        retryAfter:error.retryAfter, nextCheckAt:snapshot.expiresAt};
      if (cache && error.status === 429) {
        const previous = await cache.get('cooldown');
        const retryAt = Math.max(previous?.retryAt || 0, snapshot.expiresAt);
        await cache.set('cooldown', {retryAt}, {ttl:Math.ceil((retryAt - Date.now()) / 1000) + 60});
      }
    } finally {
      if (cache) {
        await cache.set(key, {value:snapshot.value, expiresAt:snapshot.expiresAt,
          lastKnown:snapshot.lastKnown, error:snapshot.error}, {ttl:RETAIN_SECONDS});
        if ((await cache.get(key + ':warming'))?.owner === owner) await cache.delete(key + ':warming');
      }
    }
    return result(snapshot);
  }

  async function deferred(snapshot, key) {
    // Let a quick cold-start refresh finish rather than flashing an empty card.
    // Existing listening can be returned immediately while another worker warms.
    if (!snapshot.value) {
      for (let attempt = 0; attempt < 8; attempt++) {
        await new Promise(resolve => setTimeout(resolve, 75));
        const record = await cache.get(key);
        if (record?.expiresAt > Date.now()) { apply(snapshot, record); return result(snapshot); }
      }
    }
    snapshot.expiresAt = Date.now() + 2000;
    if (!snapshot.value) throw Object.assign(new Error('Listening is refreshing'), {nextCheckAt:snapshot.expiresAt});
    snapshot.value = {...snapshot.value, stale:true};
    return snapshot.value;
  }

  return read;
}

module.exports = {createReader, getSharedCooldown, restoreSharedSnapshots, readSnapshot:createReader()};
