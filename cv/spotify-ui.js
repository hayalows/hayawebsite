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

    if (currentMeta && track) currentMeta.textContent = artistText(track);

    if (art && image) {
      art.src = image;
      art.hidden = false;
      if (fallback) fallback.hidden = true;
    } else if (art && !track) {
      art.hidden = true;
      if (fallback) fallback.hidden = false;
    }

    cancelAnimationFrame(frame);
    progressState = null;

    const duration = Number(track?.durationMs);
    const initial = Number(state?.progressMs);
    const isLive = state?.status === 'playing' && Number.isFinite(duration) && duration > 0 && Number.isFinite(initial);

    if (!progressWrap || !progress) return;
    progressWrap.hidden = !isLive;
    if (!isLive) {
      progress.style.width = '0%';
      return;
    }

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
        holder.textContent = '';
        const img = document.createElement('img');
        img.src = image;
        img.alt = '';
        img.loading = 'lazy';
        holder.append(img);
      }
    });
  }

  async function get(view) {
    const response = await fetch(`${endpoint}?view=${view}`, {
      headers: { accept: 'application/json' },
      cache: 'no-store',
    });
    if (!response.ok) throw new Error(`Spotify ${view} request failed`);
    return response.json();
  }

  async function sync() {
    try {
      const [current, recent] = await Promise.all([get('current'), get('recent')]);
      requestAnimationFrame(() => {
        paintCurrent(current);
        paintRecent(recent);
      });
    } catch {
      // The existing listening UI handles offline and reconnect states.
    }
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      setTimeout(sync, 120);
      observer.disconnect();
    }
  }, { rootMargin: '300px' });
  observer.observe(panel);

  const refresh = document.querySelector('[data-listening-refresh]');
  refresh?.addEventListener('click', () => setTimeout(sync, 120));
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) sync();
  });
  setInterval(() => {
    if (!document.hidden) sync();
  }, 15000);
}
