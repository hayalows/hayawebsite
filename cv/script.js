const sectionLinks = [...document.querySelectorAll('[data-section-link]')];
const sections = [...document.querySelectorAll('[data-section]')];
const mobileNav = document.querySelector('.mobile-nav');
const mobileMoreButton = document.querySelector('.mobile-nav__more');
const mobileMoreMenu = document.querySelector('#mobile-more-menu');
const mobileMoreLinks = [...document.querySelectorAll('.mobile-nav__more-menu [data-section-link]')];
const mobileMoreSectionIds = new Set(mobileMoreLinks.map((link) => link.dataset.sectionLink));
const year = document.querySelector('[data-year]');
const listeningEndpoint = document.querySelector('meta[name="listening-endpoint"]')?.content;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const listeningPanel = document.querySelector('[data-listening]');
const listeningElements = {
  kicker: document.querySelector('[data-listening-kicker]'),
  title: document.querySelector('[data-listening-title]'),
  copy: document.querySelector('[data-listening-copy]'),
  status: document.querySelector('[data-listening-status]'),
  album: document.querySelector('[data-listening-album]'),
  art: document.querySelector('[data-listening-art]'),
  trackLink: document.querySelector('[data-listening-track-link]'),
  refresh: document.querySelector('[data-listening-refresh]'),
};

let listeningTimer;
let listeningStarted = false;
let listeningLoading = false;
let listeningFailures = 0;
let listeningHasTrack = false;

let activeSectionId = 'about';

function setMoreMenu(open, focusFirst = false, returnFocus = false) {
  if (!mobileMoreButton || !mobileMoreMenu) return;

  mobileMoreMenu.hidden = !open;
  mobileMoreButton.setAttribute('aria-expanded', String(open));
  mobileMoreButton.querySelector('.mobile-nav__more-icon').textContent = open ? '×' : '+';
  mobileMoreButton.classList.toggle('is-open', open);
  mobileMoreButton.classList.toggle(
    'is-active',
    open || mobileMoreSectionIds.has(activeSectionId),
  );

  if (open && focusFirst) {
    requestAnimationFrame(() => mobileMoreLinks[0]?.focus());
  }

  if (!open && returnFocus) mobileMoreButton.focus();
}

function setActiveSection(sectionId) {
  let changed = false;
  activeSectionId = sectionId;

  sectionLinks.forEach((link) => {
    const active = link.dataset.sectionLink === sectionId;
    changed ||= active && !link.classList.contains('is-active');
    link.classList.toggle('is-active', active);

    if (active) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  mobileMoreButton?.classList.toggle(
    'is-active',
    mobileMoreMenuOpen() || mobileMoreSectionIds.has(sectionId),
  );

  return changed;
}

function mobileMoreMenuOpen() {
  return Boolean(mobileMoreMenu && !mobileMoreMenu.hidden);
}

function isAtPageBottom() {
  return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;
}

function contactHasEnteredView() {
  const contact = document.querySelector('#contact');
  if (!contact) return false;

  const bounds = contact.getBoundingClientRect();
  return bounds.top <= window.innerHeight * .72 && bounds.bottom > 0;
}

setActiveSection('about');

if ('IntersectionObserver' in window) {
  const navigationObserver = new IntersectionObserver((entries) => {
    if (isAtPageBottom() || contactHasEnteredView()) {
      setActiveSection('contact');
      return;
    }

    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) setActiveSection(visible.target.id);
  }, {
    rootMargin: '-18% 0px -62% 0px',
    threshold: [0, .12, .35]
  });

  sections.forEach((section) => navigationObserver.observe(section));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .06 });

  sections.forEach((section) => {
    if (section.getBoundingClientRect().top > window.innerHeight * .92) {
      revealObserver.observe(section);
    }
  });
}

window.addEventListener('scroll', () => {
  if (isAtPageBottom() || contactHasEnteredView()) setActiveSection('contact');
}, { passive: true });

sectionLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setActiveSection(link.dataset.sectionLink);
    if (mobileMoreSectionIds.has(link.dataset.sectionLink)) setMoreMenu(false);
  });
});

mobileMoreButton?.addEventListener('click', () => {
  setMoreMenu(mobileMoreMenu?.hidden === true, true);
});

document.addEventListener('click', (event) => {
  if (mobileMoreMenuOpen() && !mobileNav?.contains(event.target)) {
    setMoreMenu(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMoreMenuOpen()) {
    setMoreMenu(false, false, true);
  }
});

if (year) year.textContent = String(new Date().getFullYear());

function formatPlayedAt(value) {
  if (!value) return 'recently';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'recently';

  const age = Math.max(0, Date.now() - date.getTime());
  const minutes = Math.floor(age / 60000);
  const hours = Math.floor(minutes / 60);

  if (minutes < 1) return 'just now';
  if (minutes < 60) return minutes + 'm ago';
  if (hours < 24) return hours + 'h ago';

  return 'on ' + new Intl.DateTimeFormat(undefined, {
    day: 'numeric',
    month: 'short',
  }).format(date);
}

function clearListeningTimer() {
  window.clearTimeout(listeningTimer);
  listeningTimer = undefined;
}

function scheduleListeningUpdate(delay) {
  clearListeningTimer();
  if (document.hidden) return;
  listeningTimer = window.setTimeout(loadListeningState, delay);
}

function resetListeningArtwork() {
  const { art, trackLink } = listeningElements;

  if (art) {
    art.hidden = true;
    art.removeAttribute('src');
    art.alt = '';
  }

  if (trackLink) {
    trackLink.hidden = true;
    trackLink.removeAttribute('href');
  }
}

function renderListeningTrack(state) {
  const { kicker, title, copy, status, album, art, trackLink } = listeningElements;
  const playing = state.status === 'playing';
  const artist = Array.isArray(state.track.artists)
    ? state.track.artists.join(', ')
    : state.track.artist;
  const playedAt = formatPlayedAt(state.track.playedAt);

  listeningPanel.dataset.state = state.status;
  listeningHasTrack = true;
  if (kicker) kicker.textContent = playing
    ? 'Spotify · now playing'
    : 'Spotify · recently played';
  if (title) title.textContent = state.track.name;
  if (copy) copy.textContent = playing
    ? (artist || 'Artist unavailable') + ' · playing now'
    : (artist || 'Artist unavailable') + ' · ' + playedAt;
  if (status) status.textContent = playing ? 'live' : playedAt;
  if (album) album.textContent = state.track.album
    ? 'From the album “' + state.track.album + '”.'
    : 'Album details are unavailable for this track.';

  if (art && state.track.imageUrl) {
    art.src = state.track.imageUrl;
    art.alt = state.track.album
      ? state.track.album + ' album artwork'
      : 'Album artwork';
    art.hidden = false;
  } else if (art) {
    art.hidden = true;
  }

  if (trackLink && state.track.url) {
    trackLink.href = state.track.url;
    trackLink.hidden = false;
  } else if (trackLink) {
    trackLink.hidden = true;
  }
}

function renderListeningService(statusName) {
  const { kicker, title, copy, status, album } = listeningElements;
  const states = {
    offline: {
      title: 'Nothing playing right now',
      copy: 'This corner will update when there is something recent to share.',
      status: 'offline',
    },
    not_connected: {
      title: 'Spotify is resting',
      copy: 'Nothing is being shared here right now.',
      status: 'quiet',
    },
    needs_reconnect: {
      title: 'Spotify connection paused',
      copy: 'Recent listening will return after a private reconnect.',
      status: 'paused',
    },
    rate_limited: {
      title: 'Spotify is taking a breath',
      copy: 'The panel will retry gently in a moment.',
      status: 'retrying',
    },
    unavailable: {
      title: 'Spotify is taking a quiet break',
      copy: 'The CV remains available while the music feed recovers.',
      status: 'unavailable',
    },
  };
  const state = states[statusName] || states.unavailable;

  listeningPanel.dataset.state = statusName;
  listeningHasTrack = false;
  resetListeningArtwork();
  if (kicker) kicker.textContent = 'Spotify · personal signal';
  if (title) title.textContent = state.title;
  if (copy) copy.textContent = state.copy;
  if (status) status.textContent = state.status;
  if (album) album.textContent = 'Only current or recently played track metadata appears here.';
}

function nextListeningDelay(state, response) {
  if (state.status === 'playing') return 15_000;
  if (state.status === 'recent') return 60_000;
  if (state.status === 'rate_limited') {
    const retryAfter = Number(state.retryAfter)
      || Number(response.headers.get('retry-after'))
      || 30;
    return Math.max(30, retryAfter) * 1000;
  }
  if (state.status === 'not_connected' || state.status === 'needs_reconnect') {
    return 300_000;
  }
  return 120_000;
}

async function loadListeningState() {
  if (!listeningEndpoint || !listeningPanel || listeningLoading) return;

  listeningStarted = true;
  listeningLoading = true;
  clearListeningTimer();
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 8_000);

  try {
    const response = await fetch(listeningEndpoint, {
      cache: 'no-store',
      signal: controller.signal,
    });
    const state = await response.json().catch(() => ({ status: 'unavailable' }));

    if (!response.ok && response.status !== 429) {
      throw new Error('listening_unavailable');
    }

    listeningFailures = 0;
    if (
      (state.status === 'playing' || state.status === 'recent')
      && state.provider === 'Spotify'
      && state.track?.name
    ) {
      renderListeningTrack(state);
    } else {
      renderListeningService(state.status);
    }
    scheduleListeningUpdate(nextListeningDelay(state, response));
  } catch {
    listeningFailures += 1;
    if (listeningHasTrack) {
      if (listeningElements.status) listeningElements.status.textContent = 'update paused';
    } else {
      renderListeningService('unavailable');
    }
    scheduleListeningUpdate(Math.min(300_000, 30_000 * (2 ** listeningFailures)));
  } finally {
    window.clearTimeout(timeout);
    listeningLoading = false;
  }
}

function startListeningUpdates() {
  if (listeningStarted) return;
  loadListeningState();
}

if (listeningPanel && listeningEndpoint) {
  if ('IntersectionObserver' in window) {
    const listeningObserver = new IntersectionObserver((entries, observer) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      startListeningUpdates();
      observer.disconnect();
    }, { rootMargin: '300px 0px' });
    listeningObserver.observe(listeningPanel);
  } else {
    startListeningUpdates();
  }

  listeningPanel.addEventListener('toggle', () => {
    if (listeningPanel.open) startListeningUpdates();
  });

  listeningElements.refresh?.addEventListener('click', () => {
    listeningFailures = 0;
    loadListeningState();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearListeningTimer();
    } else if (listeningStarted) {
      loadListeningState();
    }
  });

  window.addEventListener('pagehide', clearListeningTimer);
}
