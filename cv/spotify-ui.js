const endpoint = document.querySelector('meta[name="listening-endpoint"]')?.content;
const panel = document.querySelector('[data-listening]');

if (endpoint && panel) {
  const art = document.querySelector('[data-listening-current-art]');
  const fallback = document.querySelector('[data-listening-current-fallback]');
  const progressWrap = document.querySelector('[data-listening-progress-wrap]');
  const progress = document.querySelector('[data-listening-progress]');
  const currentMeta = document.querySelector('[data-listening-current-meta]');
  const list = document.querySelector('[data-listening-list]');
  let frame = 0;
  let progressState = null;
  let syncController = null;
  let lastAppliedAt = 0;

  if (progressWrap && progress) {
    Object.assign(progressWrap.style, {
      position: 'relative', display: 'block', width: '100%', height: '3px',
      marginTop: '10px', overflow: 'hidden', borderRadius: '999px',
      background: 'var(--line-strong)'
    });
    Object.assign(progress.style, {
      display: 'block', width: '0%', height: '100%', borderRadius: 'inherit',
      background: 'var(--accent)', willChange: 'width'
    });
  }

  const artistText = (track) => Array.isArray(track?.artists)
    ? track.artists.join(', ')
    : (track?.artist || track?.artists || '');

  function paintCurrent(state) {
    const track = state?.track;
    const image = track?.imageUrl || track?.image || null;

    if (currentMeta) currentMeta.textContent = track ? artistText(track) : '';

    if (art && image) {
      // Do not blank the old cover while the new image is loading. Swap only
      // when the requested artwork is ready, which avoids flashes on track changes.
      if (art.src !== image) {
        const preload = new Image();
        preload.onload = () => {
          art.src = image;
          art.hidden = false;
          if (fallback) fallback.hidden = true;
        };
        preload.onerror = () => {
          art.hidden = true;
          if (fallback) fallback.hidden = false;
        };
        preload.src = image;
      } else {
        art.hidden = false;
        if (fallback) fallback.hidden = true;
      }
    } else if (art) {
      art.hidden = true;
      if (fallback) fallback.hidden = false;
    }

    cancelAnimationFrame(frame);
    progressState = null;

    const duration = Number(track?.durationMs);
    const initial = Number(state?.progressMs);
    const hasProgress = (state?.status === 'playing' || state?.status === 'paused')
      && Number.isFinite(duration) && duration > 0 && Number.isFinite(initial);

    if (!progressWrap || !progress) return;
    progressWrap.hidden = !hasProgress;
    if (!hasProgress) {
      progress.style.width = '0%';
      return;
    }

    const basePercent = Math.max(0, Math.min(100, initial / duration * 100));
    progress.style.width = `${basePercent}%`;
    if (state.status !== 'playing') return;

    progressState = { duration, initial, started: performance.now() };
    const tick = (now) => {
      if (!progressState || document.hidden) return;
      const elapsed = now - progressState.started;
      const value = Math.min(progressState.duration, progressState.initial + elapsed);
      progress.style.width = `${Math.max(0, Math.min(100, value / progressState.duration * 100))}%`;
      if (value < progressState.duration) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
  }

  function paintRecent(state) {
    const tracks = Array.isArray(state?.tracks) ? state.tracks : [];
    if (!list || !tracks.length) return;

    const rows = [...list.querySelectorAll('.listening-row')];
    tracks.slice(0, rows.length).forEach((track, index) => {
      const row = rows[index];
      if (!row) return;
      const holder = row.querySelector('.listening-art');
      const image = track?.imageUrl || track?.image || null;
      const meta = row.querySelector('.listening-row__copy small');
      if (meta) meta.textContent = artistText(track);
      if (holder && image) {
        const existing = holder.querySelector('img');
        if (existing?.src === image) return;
        const img = document.createElement('img');
        img.src = image;
        img.alt = '';
        img.loading = 'lazy';
        img.onload = () => holder.replaceChildren(img);
      }
    });
  }

  async function get(view, signal) {
    const separator = endpoint.includes('?') ? '&' : '?';
    const url = `${endpoint}${separator}view=${encodeURIComponent(view)}&_=${Date.now()}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'cache-control': 'no-cache, no-store',
        pragma: 'no-cache',
      },
      cache: 'no-store',
      signal,
    });
    if (!response.ok) throw new Error(`Spotify ${view} request failed: ${response.status}`);
    return response.json();
  }

  async function sync() {
    // A slower previous request must never overwrite a newer Spotify state.
    syncController?.abort();
    syncController = new AbortController();
    const controller = syncController;
    const requestedAt = Date.now();

    try {
      const [current, recent] = await Promise.all([
        get('current', controller.signal),
        get('recent', controller.signal),
      ]);
      if (controller.signal.aborted || requestedAt < lastAppliedAt) return;
      lastAppliedAt = requestedAt;
      requestAnimationFrame(() => {
        paintCurrent(current);
        paintRecent(recent);
      });
    } catch (error) {
      if (error?.name !== 'AbortError') {
        // Keep the last known good UI rather than replacing it with stale/error state.
      }
    }
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      sync();
      observer.disconnect();
    }
  }, { rootMargin: '300px' });
  observer.observe(panel);

  const refresh = document.querySelector('[data-listening-refresh]');
  refresh?.addEventListener('click', sync);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) sync();
  });
  window.addEventListener('pageshow', sync);
  window.addEventListener('online', sync);

  // Five seconds keeps track changes responsive without hammering Spotify.
  setInterval(() => {
    if (!document.hidden) sync();
  }, 5000);
}
