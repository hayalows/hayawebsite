const sectionLinks = [...document.querySelectorAll('[data-section-link]')];
const sections = [...document.querySelectorAll('[data-section]')];
const mobileNav = document.querySelector('.mobile-nav');
const mobileMoreButton = document.querySelector('.mobile-nav__more');
const mobileMoreMenu = document.querySelector('#mobile-more-menu');
const mobileMoreLinks = [...document.querySelectorAll('.mobile-nav__more-menu [data-section-link]')];
const mobileMoreSectionIds = new Set(mobileMoreLinks.map((link) => link.dataset.sectionLink));
const year = document.querySelector('[data-year]');
const siteLoader = document.querySelector('[data-site-loader]');
const mobileDisclosures = [...document.querySelectorAll('[data-mobile-disclosure]')];
const listeningEndpoint = document.querySelector('meta[name="listening-endpoint"]')?.content;
const listeningPanel = document.querySelector('[data-listening]');
const listeningElements = {
  kicker: document.querySelector('[data-listening-kicker]'),
  title: document.querySelector('[data-listening-title]'),
  status: document.querySelector('[data-listening-status]'),
  current: document.querySelector('[data-listening-current]'),
  currentArt: document.querySelector('[data-listening-current-art]'),
  currentFallback: document.querySelector('[data-listening-current-fallback]'),
  currentLabel: document.querySelector('[data-listening-current-label]'),
  currentTitle: document.querySelector('[data-listening-current-title]'),
  currentMeta: document.querySelector('[data-listening-current-meta]'),
  progressWrap: document.querySelector('[data-listening-progress-wrap]'),
  progress: document.querySelector('[data-listening-progress]'),
  history: document.querySelector('[data-listening-history]'),
  historySummary: document.querySelector('[data-listening-history-summary]'),
  list: document.querySelector('[data-listening-list]'),
  window: document.querySelector('[data-listening-window]'),
  note: document.querySelector('[data-listening-note]'),
  refresh: document.querySelector('[data-listening-refresh]'),
};

const reducedMotionQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');

if (document.documentElement.classList.contains('show-loader') && siteLoader) {
  const startedAt = Number(document.documentElement.dataset.loaderStarted) || performance.now();
  const minimumDuration = reducedMotionQuery?.matches ? 80 : 620;
  const remainingDuration = Math.max(0, minimumDuration - (performance.now() - startedAt));

  window.setTimeout(() => {
    document.documentElement.classList.add('loader-ready');
    siteLoader.setAttribute('aria-hidden', 'true');

    window.setTimeout(() => {
      document.documentElement.classList.remove('show-loader', 'loader-ready');
      delete document.documentElement.dataset.loaderStarted;
      siteLoader.remove();
    }, reducedMotionQuery?.matches ? 0 : 180);
  }, remainingDuration);
} else {
  siteLoader?.remove();
}

if (mobileDisclosures.length && window.matchMedia) {
  const mobileDisclosureQuery = window.matchMedia('(max-width: 35rem)');
  const syncMobileDisclosures = ({ matches }) => {
    mobileDisclosures.forEach((disclosure) => {
      disclosure.open = !matches;
    });
  };

  syncMobileDisclosures(mobileDisclosureQuery);
  if (mobileDisclosureQuery.addEventListener) {
    mobileDisclosureQuery.addEventListener('change', syncMobileDisclosures);
  } else {
    mobileDisclosureQuery.addListener(syncMobileDisclosures);
  }
}

const localTimeElement = document.querySelector('[data-local-time]');
if (localTimeElement) {
  let ghanaTimeFormatter = null;

  try {
    ghanaTimeFormatter = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'GMT',
    });
  } catch {
    ghanaTimeFormatter = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  }

  const renderLocalTime = () => {
    localTimeElement.textContent = ghanaTimeFormatter.format(new Date());
  };

  renderLocalTime();
  window.setInterval(renderLocalTime, 15000);
}

let listeningTimer;
let listeningStarted = false;
let listeningLoading = false;
let listeningFailures = 0;
let listeningHasTracks = false;

let activeSectionId = 'about';

const EMAIL_ADDRESS = 'mpapakojo@gmail.com';
const sideNavElement = document.querySelector('.section-nav');
const mobilePrimaryElement = document.querySelector('.mobile-nav__primary');

function createGlide(container) {
  if (!container) return null;
  const glide = document.createElement('span');
  glide.className = 'nav-glide';
  glide.setAttribute('aria-hidden', 'true');
  container.prepend(glide);
  return glide;
}

const sideGlide = createGlide(sideNavElement);
const mobileGlide = createGlide(mobilePrimaryElement);

function placeGlides(animated) {
  const applyPlacement = () => {
    if (sideGlide && sideNavElement) {
      const activeLink = sideNavElement.querySelector('a.is-active');
      if (activeLink) {
        const navRect = sideNavElement.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        sideGlide.style.height = linkRect.height + 'px';
        sideGlide.style.transform = 'translateY(' + (linkRect.top - navRect.top).toFixed(1) + 'px)';
      }
    }

    if (mobileGlide && mobilePrimaryElement) {
      const activeItem = mobilePrimaryElement.querySelector('.is-active');
      if (activeItem) {
        const navRect = mobilePrimaryElement.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        mobileGlide.style.width = itemRect.width + 'px';
        mobileGlide.style.transform = 'translateX(' + (itemRect.left - navRect.left).toFixed(1) + 'px)';
      }
    }
  };

  if (animated) {
    applyPlacement();
    return;
  }

  if (sideGlide) sideGlide.classList.remove('is-ready');
  if (mobileGlide) mobileGlide.classList.remove('is-ready');
  applyPlacement();
  requestAnimationFrame(() => {
    sideGlide?.classList.add('is-ready');
    mobileGlide?.classList.add('is-ready');
  });
}

if (sideGlide || mobileGlide) {
  placeGlides(false);

  let glideResizeFrame = 0;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(glideResizeFrame);
    glideResizeFrame = requestAnimationFrame(() => placeGlides(false));
  }, { passive: true });

  document.fonts?.ready?.then(() => placeGlides(false));
}

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

  placeGlides(true);

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
    const sectionId = link.dataset.sectionLink;
    const target = document.getElementById(sectionId);

    setActiveSection(sectionId);
    requestAnimationFrame(() => {
      if (mobileMoreSectionIds.has(sectionId)) setMoreMenu(false);

      requestAnimationFrame(() => {
        target?.scrollIntoView({
          behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
            ? 'auto'
            : 'smooth',
          block: 'start',
        });
      });
    });
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

function formatListeningWindow(range) {
  const from = range?.from ? new Date(range.from) : null;
  const to = range?.to ? new Date(range.to) : null;

  if (
    !from
    || !to
    || Number.isNaN(from.getTime())
    || Number.isNaN(to.getTime())
  ) {
    return 'Recent listening';
  }

  const formatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
  });

  return formatter.format(from) + ' — ' + formatter.format(to);
}

function clearListeningRows() {
  if (listeningElements.list) listeningElements.list.textContent = '';
}

function normaliseListeningTrack(track) {
  if (!track || typeof track !== 'object') return null;

  const name = String(track.name || '').trim();
  if (!name) return null;

  const artists = Array.isArray(track.artists)
    ? track.artists.map((artist) => String(artist || '').trim()).filter(Boolean)
    : [];

  return {
    ...track,
    name,
    artists,
    url: typeof track.url === 'string' ? track.url : '',
    imageUrl: typeof track.imageUrl === 'string' ? track.imageUrl : '',
  };
}

function createListeningRow(track, index) {
  const safeTrack = normaliseListeningTrack(track);
  if (!safeTrack) return null;

  const artistLabel = safeTrack.artists.length
    ? safeTrack.artists.join(', ')
    : 'Unknown artist';
  const item = document.createElement('li');
  item.className = 'listening-ranking__item';

  const row = safeTrack.url
    ? document.createElement('a')
    : document.createElement('div');
  row.className = 'listening-row' + (index === 0 ? ' listening-row--top' : '');
  row.style.setProperty('--row-i', String(index));

  if (safeTrack.url) {
    row.href = safeTrack.url;
    row.target = '_blank';
    row.rel = 'noreferrer noopener';
    row.setAttribute(
      'aria-label',
      'Open ' + safeTrack.name + ' by ' + artistLabel + ' in Spotify',
    );
  }

  const rank = document.createElement('span');
  rank.className = 'listening-rank';
  rank.textContent = String(index + 1).padStart(2, '0');

  const art = document.createElement('span');
  art.className = 'listening-art';

  if (safeTrack.imageUrl) {
    const image = document.createElement('img');
    image.src = safeTrack.imageUrl;
    image.alt = '';
    image.width = 52;
    image.height = 52;
    image.loading = 'lazy';
    art.append(image);
  } else {
    art.classList.add('listening-art--fallback');
    art.textContent = '♪';
  }

  const copy = document.createElement('span');
  copy.className = 'listening-row__copy';

  const title = document.createElement('strong');
  title.textContent = safeTrack.name;

  const artist = document.createElement('small');
  artist.textContent = artistLabel;

  copy.append(title, artist);

  const count = document.createElement('span');
  count.className = 'listening-count';

  const countValue = document.createElement('strong');
  countValue.textContent = String(Number(safeTrack.plays) || 1);

  const countLabel = document.createElement('small');
  countLabel.textContent = 'plays';

  count.append(countValue, countLabel);
  row.append(rank, art, copy, count);
  item.append(row);

  return item;
}

function renderListeningRows(tracks, emptyCopy) {
  clearListeningRows();
  const list = listeningElements.list;
  if (!list) return;

  if (!tracks.length) {
    const item = document.createElement('li');
    item.className = 'listening-ranking__item';

    const empty = document.createElement('div');
    empty.className = 'listening-empty';

    const message = document.createElement('strong');
    message.textContent = emptyCopy || 'Nothing recent to show yet.';

    empty.append(message);
    item.append(empty);
    list.append(item);
    return;
  }

  tracks.slice(0, 5).forEach((track, index) => {
    const row = createListeningRow(track, index);
    if (row) list.append(row);
  });
}

function renderCurrentListeningTrack(state) {
  const track = normaliseListeningTrack(state?.track);
  const isPlaying = state?.status === 'playing';
  const artistLabel = track?.artists.length
    ? track.artists.join(', ')
    : 'Unknown artist';
  const albumLabel = track?.album ? ' · ' + track.album : '';

  if (listeningElements.currentLabel) {
    listeningElements.currentLabel.textContent = track
      ? (isPlaying ? 'Now playing' : 'Last played')
      : 'Spotify status';
  }
  if (listeningElements.currentTitle) {
    listeningElements.currentTitle.textContent = track?.name || 'Nothing recent to show';
  }
  if (listeningElements.currentMeta) {
    listeningElements.currentMeta.textContent = track
      ? artistLabel + albumLabel
      : 'Spotify will update this quietly when there is something to share.';
  }

  if (listeningElements.current) {
    if (track?.url) {
      listeningElements.current.href = track.url;
      listeningElements.current.target = '_blank';
      listeningElements.current.rel = 'noreferrer noopener';
      listeningElements.current.removeAttribute('aria-disabled');
      listeningElements.current.setAttribute(
        'aria-label',
        'Open ' + track.name + ' by ' + artistLabel + ' in Spotify',
      );
    } else {
      listeningElements.current.removeAttribute('href');
      listeningElements.current.removeAttribute('target');
      listeningElements.current.removeAttribute('rel');
      listeningElements.current.setAttribute('aria-disabled', 'true');
      listeningElements.current.setAttribute('aria-label', 'No recent Spotify track available');
    }
  }

  if (listeningElements.currentArt && listeningElements.currentFallback) {
    if (track?.imageUrl) {
      listeningElements.currentArt.src = track.imageUrl;
      listeningElements.currentArt.hidden = false;
      listeningElements.currentFallback.hidden = true;
    } else {
      listeningElements.currentArt.removeAttribute('src');
      listeningElements.currentArt.hidden = true;
      listeningElements.currentFallback.hidden = false;
    }
  }

  const progressMs = Number(state?.progressMs);
  const durationMs = Number(track?.durationMs);
  const hasProgress = isPlaying
    && Number.isFinite(progressMs)
    && Number.isFinite(durationMs)
    && durationMs > 0;

  if (listeningElements.progressWrap) {
    listeningElements.progressWrap.hidden = !hasProgress;
  }
  if (listeningElements.progress) {
    const ratio = hasProgress
      ? Math.min(1, Math.max(0, progressMs / durationMs))
      : 0;
    listeningElements.progress.style.transform = 'scaleX(' + ratio + ')';
  }
}

function renderListeningTracks(state) {
  const recentTracks = Array.isArray(state?.tracks)
    ? state.tracks.map(normaliseListeningTrack).filter(Boolean)
    : [];
  const tracks = recentTracks.length
    ? recentTracks.slice(0, 5)
    : (() => {
      const currentTrack = normaliseListeningTrack(state?.track);
      return currentTrack ? [{ ...currentTrack, plays: 1 }] : [];
    })();

  if (!listeningPanel) return;
  listeningPanel.dataset.state = state?.status || 'recent';
  listeningHasTracks = tracks.length > 0;

  if (listeningElements.kicker) {
    listeningElements.kicker.textContent = 'A small personal signal';
  }
  if (listeningElements.title) {
    listeningElements.title.textContent = 'Listening, lately.';
  }
  if (listeningElements.status) {
    listeningElements.status.textContent = state.status === 'playing'
      ? 'live'
      : 'recent';
  }
  if (listeningElements.window) {
    listeningElements.window.textContent = formatListeningWindow(state.listeningWindow);
  }
  if (listeningElements.note) {
    const sampleSize = Number(state.listeningWindow?.sampleSize);
    listeningElements.note.textContent = sampleSize
      ? 'Counted from my last ' + sampleSize + ' plays.'
      : 'Counted from recent listening.';
  }
  if (listeningElements.historySummary) {
    const sampleSize = Number(state.listeningWindow?.sampleSize);
    listeningElements.historySummary.textContent = tracks.length
      + ' tracks'
      + (sampleSize ? ' · from the last ' + sampleSize + ' plays' : ' · recent listening');
  }

  renderCurrentListeningTrack(state);
  renderListeningRows(
    tracks,
    'Nothing recent to show yet.',
  );
}

function renderListeningService(statusName) {
  const states = {
    offline: {
      title: 'Nothing recent to show',
      copy: 'I’m not playing anything right now. I’ll show this list when Spotify has something recent.',
      status: 'offline',
    },
    not_connected: {
      title: 'Spotify is resting',
      copy: 'Nothing recent to show here right now.',
      status: 'quiet',
    },
    needs_reconnect: {
      title: 'Spotify connection paused',
      copy: 'I’ll bring this back after the private connection is refreshed.',
      status: 'paused',
    },
    rate_limited: {
      title: 'Spotify is taking a breath',
      copy: 'I’ll check again gently in a moment.',
      status: 'retrying',
    },
    unavailable: {
      title: 'Spotify is quiet for now',
      copy: 'The rest of the site is here while the music feed catches up.',
      status: 'unavailable',
    },
  };
  const state = states[statusName] || states.unavailable;

  listeningPanel.dataset.state = statusName;
  listeningHasTracks = false;
  if (listeningElements.kicker) {
    listeningElements.kicker.textContent = 'A small personal signal';
  }
  if (listeningElements.title) {
    listeningElements.title.textContent = state.title;
  }
  if (listeningElements.status) {
    listeningElements.status.textContent = state.status;
  }
  if (listeningElements.window) {
    listeningElements.window.textContent = 'Recent listening';
  }
  if (listeningElements.note) {
    listeningElements.note.textContent = state.copy;
  }
  if (listeningElements.historySummary) {
    listeningElements.historySummary.textContent = 'No listening history available right now.';
  }

  renderCurrentListeningTrack({ status: statusName, track: null });
  renderListeningRows([], state.copy);
}

function nextListeningDelay(state, response) {
  if (state.status === 'playing') return 30_000;
  if (state.status === 'recent') return 120_000;
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

function clearListeningTimer() {
  window.clearTimeout(listeningTimer);
  listeningTimer = undefined;
}

function scheduleListeningUpdate(delay) {
  clearListeningTimer();
  if (document.hidden) return;
  listeningTimer = window.setTimeout(loadListeningState, delay);
}

async function loadListeningState() {
  if (!listeningEndpoint || !listeningPanel || listeningLoading) return;

  listeningStarted = true;
  listeningLoading = true;
  clearListeningTimer();
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 20_000);

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
    const hasTracks = Array.isArray(state?.tracks)
      && state.tracks.some((track) => normaliseListeningTrack(track));
    if (
      (state?.status === 'playing' || state?.status === 'recent')
      && state?.provider === 'Spotify'
      && (hasTracks || normaliseListeningTrack(state?.track))
    ) {
      renderListeningTracks(state);
    } else {
      renderListeningService(state?.status || 'unavailable');
    }
    scheduleListeningUpdate(nextListeningDelay(state || {}, response));
  } catch {
    listeningFailures += 1;
    if (listeningHasTracks) {
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

const progressHairline = document.createElement('div');
progressHairline.className = 'progress-hairline';
progressHairline.setAttribute('aria-hidden', 'true');
document.body.append(progressHairline);

let progressQueued = false;

function renderScrollProgress() {
  const trackLength = document.documentElement.scrollHeight - window.innerHeight;
  const progress = trackLength > 0 ? Math.min(1, window.scrollY / trackLength) : 0;
  progressHairline.style.transform = 'scaleX(' + progress.toFixed(4) + ')';
  progressQueued = false;
}

window.addEventListener('scroll', () => {
  if (!progressQueued) {
    progressQueued = true;
    requestAnimationFrame(renderScrollProgress);
  }
}, { passive: true });

window.addEventListener('resize', renderScrollProgress, { passive: true });
renderScrollProgress();

document.querySelectorAll('#skills .skill-row li').forEach((chip, index) => {
  chip.style.setProperty('--chip-i', String(Math.min(index, 12)));
});

const contactTitle = document.querySelector('#contact-title');
if (contactTitle) {
  const words = contactTitle.textContent.trim().split(/\s+/);
  contactTitle.textContent = '';
  words.forEach((word, index) => {
    const wordSpan = document.createElement('span');
    wordSpan.className = 'w';
    wordSpan.style.setProperty('--w-i', String(index));
    wordSpan.textContent = word;
    contactTitle.append(wordSpan);
    if (index < words.length - 1) contactTitle.append(' ');
  });
  contactTitle.classList.add('word-rise');
}

const copyButton = document.querySelector('[data-copy-email]');
if (copyButton) {
  const statusLabel = copyButton.querySelector('[data-copy-status]');
  let revertTimer;

  copyButton.addEventListener('click', async () => {
    let copied = false;

    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      copied = true;
    } catch {
      try {
        const helper = document.createElement('textarea');
        helper.value = EMAIL_ADDRESS;
        helper.setAttribute('readonly', '');
        helper.style.position = 'fixed';
        helper.style.opacity = '0';
        document.body.append(helper);
        helper.select();
        copied = document.execCommand('copy');
        helper.remove();
      } catch {
        copied = false;
      }
    }

    window.clearTimeout(revertTimer);
    copyButton.classList.toggle('is-copied', copied);
    if (statusLabel) statusLabel.textContent = copied ? 'Email address copied.' : 'Copying did not work.';
    revertTimer = window.setTimeout(() => {
      copyButton.classList.remove('is-copied');
      if (statusLabel) statusLabel.textContent = '';
    }, copied ? 1800 : 2400);
  });
}

