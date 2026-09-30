/* The only Spotify controller. WebMCP registration has no polling side effects. */
(() => {
  const endpoint = document.querySelector('meta[name="listening-endpoint"]')?.content;
  const panel = document.querySelector('[data-listening]');
  if (!endpoint || !panel || panel.dataset.spotifyController) return;
  panel.dataset.spotifyController = 'ready';
  const find = name => panel.querySelector('[data-listening-' + name + ']');
  const ui = {
    status: find('status'), current: find('current'), art: find('current-art'),
    fallback: find('current-fallback'), label: find('current-label'),
    title: find('current-title'), meta: find('current-meta'), progress: find('progress'),
    progressWrap: find('progress-wrap'), list: find('list'), window: find('window'),
    note: find('note'), refresh: find('refresh'),
  };
  const STORAGE_KEY = 'pkm.spotify.snapshot.v2';
  const PLAYING_INTERVAL = 30000;
  const IDLE_INTERVAL = 300000;
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  let snapshot = null, retryAt = 0, nextCheckAt = 0, lastRequestAt = 0;
  let timer = 0, frame = 0, loading = false, nearViewport = false;
  let artworkVersion = 0, historySignature = '';

  function trackUrl(value) {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && url.hostname === 'open.spotify.com' ? url.href : null;
    } catch { return null; }
  }
  function link(element, value) {
    const url = trackUrl(value);
    if (url) {
      element.href = url; element.target = '_blank'; element.rel = 'noopener';
      element.removeAttribute('aria-disabled');
    } else {
      element.removeAttribute('href'); element.removeAttribute('target');
      element.setAttribute('aria-disabled', 'true');
    }
  }
  const artists = track => Array.isArray(track?.artists) ? track.artists.join(', ') : String(track?.artist || '');
  function stopProgress() {
    cancelAnimationFrame(frame);
    frame = 0;
    if (ui.progressWrap) ui.progressWrap.hidden = true;
  }
  function drawProgress(state, live) {
    stopProgress();
    const duration = Number(state.track?.durationMs);
    if (!ui.progress || !ui.progressWrap || !Number.isFinite(duration) || duration <= 0 ||
        typeof state.progressMs !== 'number' || (!live && state.status !== 'paused')) return;
    const age = live ? Math.max(0, Date.now() - Date.parse(state.updatedAt)) || 0 : 0;
    const initial = Math.max(0, Math.min(duration, state.progressMs + age));
    ui.progressWrap.hidden = false;
    const started = performance.now();
    const tick = now => {
      if (document.hidden || !nearViewport) return;
      const position = Math.min(duration, initial + (live ? now - started : 0));
      ui.progress.style.width = (position / duration * 100) + '%';
      if (live && position < duration) {
        if (!reducedMotion?.matches) frame = requestAnimationFrame(tick);
      } else if (live) {
        // Track-end extrapolation cannot tell us what is playing next.
        ui.label.textContent = 'Last checked';
        ui.status.textContent = 'saved';
        panel.dataset.state = 'recent';
      }
    };
    tick(started);
  }
  function drawArtwork(track) {
    const version = ++artworkVersion;
    const image = track?.imageUrl || track?.image;
    ui.art.alt = 'Album cover for ' + (track?.album || track?.name || 'the track');
    if (!image || !/^https:\/\//.test(image)) {
      ui.art.hidden = true; ui.fallback.hidden = false; return;
    }
    if (ui.art.getAttribute('src') === image) {
      ui.art.hidden = false; ui.fallback.hidden = true; return;
    }
    const preload = new Image();
    preload.onload = () => {
      if (version !== artworkVersion) return;
      ui.art.src = image; ui.art.hidden = false; ui.fallback.hidden = true;
    };
    preload.onerror = () => {
      if (version !== artworkVersion) return;
      ui.art.hidden = true; ui.fallback.hidden = false;
    };
    preload.src = image;
  }
  function drawHistory(state) {
    const tracks = Array.isArray(state?.tracks) ? state.tracks.slice(0, 5) : [];
    const signature = JSON.stringify(tracks);
    if (signature === historySignature) return;
    historySignature = signature;
    if (!tracks.length) {
      const message = document.createElement('li');
      message.className = 'listening-empty';
      message.textContent = 'Recent listening will appear when it is available.';
      ui.list.replaceChildren(message);
      return;
    }
    const rows = tracks.map((track, index) => {
      const item = document.createElement('li');
      item.className = 'listening-ranking__item';
      const url = trackUrl(track.url);
      const row = document.createElement(url ? 'a' : 'div');
      row.className = 'listening-row';
      if (url) link(row, url);
      const rank = document.createElement('span');
      rank.className = 'listening-rank'; rank.textContent = String(index + 1).padStart(2, '0');
      const art = document.createElement('span'); art.className = 'listening-art'; art.textContent = '♪';
      if (/^https:\/\//.test(track.imageUrl || '')) {
        const img = document.createElement('img');
        img.alt = ''; img.loading = 'lazy'; img.src = track.imageUrl;
        img.onload = () => art.replaceChildren(img);
      }
      const copy = document.createElement('span'); copy.className = 'listening-row__copy';
      const title = document.createElement('strong'); title.textContent = track.name || 'Untitled';
      const meta = document.createElement('small'); meta.textContent = artists(track);
      copy.append(title, meta);
      const count = document.createElement('span'); count.className = 'listening-count';
      const number = document.createElement('strong'); number.textContent = track.plays || 1;
      const label = document.createElement('small'); label.textContent = Number(track.plays) === 1 ? 'play' : 'plays';
      count.append(number, label); row.append(rank, art, copy, count); item.append(row);
      return item;
    });
    ui.list.replaceChildren(...rows);
    if (ui.window) ui.window.textContent = 'Recent Spotify listening';
  }
  function draw(state = snapshot, saved = false) {
    stopProgress();
    const track = state?.track;
    const age = Date.now() - Date.parse(state?.updatedAt);
    const live = state?.status === 'playing' && !saved && !state.stale && age < 60000 &&
      navigator.onLine && retryAt <= Date.now() && !document.hidden;
    panel.dataset.state = live ? 'playing' : (saved ? 'recent' : state?.status || 'offline');
    ui.status.textContent = live ? 'live' : saved || state?.stale ? 'saved' : state?.status === 'paused' ? 'paused' : 'recent';
    if (track) {
      ui.label.textContent = live ? 'Playing now' : state.status === 'paused' && !saved ? 'Paused' : 'Last played';
      ui.title.textContent = track.name || 'Untitled';
      ui.meta.textContent = artists(track);
      link(ui.current, track.url); drawArtwork(track);
      if (!saved && !state.stale) drawProgress(state, live);
    } else {
      ui.label.textContent = 'Listening, lately';
      ui.title.textContent = state?.status === 'not_connected' ? 'Music will appear here' : 'Listening updates are resting';
      ui.meta.textContent = 'A small snapshot of what I have been playing.';
      link(ui.current, null); drawArtwork(null);
      ui.status.textContent = 'quiet';
    }
    drawHistory(state);
    if (ui.note) ui.note.textContent = retryAt > Date.now()
      ? 'Showing saved listening. Updates resume automatically after ' + new Date(retryAt).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) + '.'
      : saved || state?.stale ? 'Showing the last saved listening. Updates resume automatically.'
      : 'Recent plays, rather than lifetime counts.';
    updateControls();
  }
  function updateControls() {
    panel.setAttribute('aria-busy', String(loading));
    if (ui.refresh) {
      ui.refresh.disabled = loading || retryAt > Date.now();
      ui.refresh.textContent = loading ? 'Checking…' : retryAt > Date.now() ? 'Updates paused' : 'Refresh';
    }
  }
  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({snapshot, retryAt, nextCheckAt, savedAt:Date.now()}));
    } catch { /* Storage can be unavailable in a private session. */ }
  }
  function markSaved() {
    if (snapshot) snapshot = {...snapshot, stale:true, isPlaying:false, progressMs:null};
  }
  function restore() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      const legacy = value ? null : JSON.parse(localStorage.getItem('pkm.spotify.snapshot.v1') || 'null');
      const saved = value || legacy;
      if (!saved || Date.now() - saved.savedAt > 604800000) return;
      snapshot = value?.snapshot || (legacy?.current?.track ? legacy.current : legacy?.recent);
      if (snapshot) snapshot = {...snapshot, status:snapshot.track ? 'recent' : snapshot.status, isPlaying:false, progressMs:null, stale:true};
      retryAt = Math.max(retryAt, Number(value?.retryAt) || 0);
      nextCheckAt = Math.max(nextCheckAt, Number(value?.nextCheckAt) || 0);
      if (snapshot) draw(snapshot, true);
    } catch { /* A corrupt saved snapshot must not prevent live updates. */ }
  }
  function schedule() {
    clearTimeout(timer);
    if (!nearViewport || document.hidden || !navigator.onLine) return;
    const when = Math.max(retryAt, nextCheckAt);
    timer = setTimeout(() => update(), Math.max(1000, when - Date.now()));
  }
  async function update(manual = false) {
    if (!nearViewport || document.hidden || !navigator.onLine || loading) return;
    const now = Date.now();
    if (now < retryAt || (!manual && now < nextCheckAt) || (manual && now - lastRequestAt < PLAYING_INTERVAL)) {
      if (retryAt > now) draw(snapshot, true);
      else if (manual && ui.note) ui.note.textContent = 'Recently checked. Listening updates automatically.';
      schedule(); return;
    }
    loading = true; lastRequestAt = now; updateControls();
    try {
      // One stable URL allows all visitors to share the Vercel CDN snapshot.
      // Neither refresh clicks nor lifecycle events add cache-busting parameters.
      const response = await fetch(endpoint, {headers:{accept:'application/json'}, signal:AbortSignal.timeout(10000)});
      const state = await response.json();
      if (response.status === 429 || state.status === 'rate_limited') {
        const absolute = Number(state.retryAt);
        const seconds = Number(state.retryAfter) || Number(response.headers.get('retry-after')) || 60;
        retryAt = Math.max(retryAt, Number.isFinite(absolute) && absolute > 0 ? absolute : now + Math.max(30, seconds) * 1000);
        nextCheckAt = Math.max(now + PLAYING_INTERVAL, retryAt);
        if (state.track && !snapshot?.track) snapshot = state;
        markSaved();
        draw(snapshot || state, true);
      } else {
        if (!response.ok) throw new Error('Listening request unavailable');
        if (retryAt > Date.now()) {
          // Another tab may have discovered a cooldown while this request was
          // in flight. Its newer decision wins over this older success.
          markSaved(); nextCheckAt = Math.max(nextCheckAt, retryAt); draw(snapshot, true);
        } else {
          retryAt = 0;
          const failed = ['unavailable', 'needs_reconnect', 'not_connected'].includes(state.status);
          if (!failed || !snapshot?.track) snapshot = state;
          if (failed) markSaved();
          const interval = state.status === 'playing' ? PLAYING_INTERVAL : failed ? (state.status === 'unavailable' ? 120000 : 900000) : IDLE_INTERVAL;
          nextCheckAt = Math.max(now + interval, Number(state.nextCheckAt) || 0);
          draw(snapshot, failed);
        }
      }
      save();
    } catch {
      nextCheckAt = Date.now() + 120000;
      markSaved();
      draw(snapshot, true);
      save();
    } finally {
      loading = false; updateControls(); schedule();
    }
  }

  restore();
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      nearViewport = entries.some(entry => entry.isIntersecting);
      if (nearViewport) { if (snapshot) draw(snapshot, !!snapshot.stale); update(); }
      else { clearTimeout(timer); stopProgress(); }
    }, {rootMargin:'300px'}).observe(panel);
  } else { nearViewport = true; update(); }
  ui.refresh?.addEventListener('click', () => update(true));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { clearTimeout(timer); stopProgress(); }
    else { if (snapshot) draw(snapshot, !!snapshot.stale); update(); }
  });
  window.addEventListener('online', () => update());
  window.addEventListener('offline', () => { clearTimeout(timer); markSaved(); draw(snapshot, true); save(); });
  window.addEventListener('pageshow', () => update());
  window.addEventListener('storage', event => {
    if (event.key !== STORAGE_KEY) return;
    // A cooldown discovered in another tab must also pause this tab.
    restore(); schedule();
  });
})();
