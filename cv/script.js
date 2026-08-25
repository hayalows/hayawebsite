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
  historyTitle: document.querySelector('[data-listening-history-title]'),
  historySummary: document.querySelector('[data-listening-history-summary]'),
  list: document.querySelector('[data-listening-list]'),
  window: document.querySelector('[data-listening-window]'),
  note: document.querySelector('[data-listening-note]'),
  refresh: document.querySelector('[data-listening-refresh]'),
};

const reducedMotionQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');

if (document.documentElement.classList.contains('show-loader') && siteLoader) {
  const startedAt = Number(document.documentElement.dataset.loaderStarted) || performance.now();
  const minimumDuration = reducedMotionQuery?.matches ? 120 : 1050;
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
const localDateElement = document.querySelector('[data-local-date]');
const nextHolidayElement = document.querySelector('[data-next-holiday]');
const nextHolidayCountElement = document.querySelector('[data-next-holiday-count]');

const GHANA_TIME_ZONE = 'Africa/Accra';

function createGhanaDate(year, month, day) {
  return new Date(Date.UTC(year, month - 1, day));
}

function addDays(date, days) {
  return new Date(date.getTime() + days * 86400000);
}

function getGhanaDateParts(date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: GHANA_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  return parts.reduce((values, part) => {
    if (part.type !== 'literal') values[part.type] = Number(part.value);
    return values;
  }, {});
}

function getEasterSunday(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return createGhanaDate(year, month, day);
}

function getFirstFridayOfDecember(year) {
  const first = createGhanaDate(year, 12, 1);
  const offset = (5 - first.getUTCDay() + 7) % 7;
  return createGhanaDate(year, 12, 1 + offset);
}

function getGhanaHolidays(year) {
  if (year === 2026) {
    return [
      ['New Year’s Day', 1, 1],
      ['Constitution Day', 1, 9],
      ['Independence Day', 3, 6],
      ['Eid-ul-Fitr', 3, 20],
      ['Shaqq Day', 3, 23],
      ['Good Friday', 4, 3],
      ['Easter Monday', 4, 6],
      ['Labour Day', 5, 1],
      ['Republic Day', 7, 3],
      ['Founder’s Day', 9, 21],
      ['Farmer’s Day', 12, 4],
      ['Christmas Day', 12, 25],
      ['Boxing Day', 12, 28],
    ].map(([name, month, day]) => ({ name, date: createGhanaDate(year, month, day) }));
  }

  const easter = getEasterSunday(year);
  return [
    ['New Year’s Day', createGhanaDate(year, 1, 1)],
    ['Constitution Day', createGhanaDate(year, 1, 7)],
    ['Independence Day', createGhanaDate(year, 3, 6)],
    ['Good Friday', addDays(easter, -2)],
    ['Easter Monday', addDays(easter, 1)],
    ['Labour Day', createGhanaDate(year, 5, 1)],
    ['Republic Day', createGhanaDate(year, 7, 1)],
    ['Founder’s Day', createGhanaDate(year, 9, 21)],
    ['Farmer’s Day', getFirstFridayOfDecember(year)],
    ['Christmas Day', createGhanaDate(year, 12, 25)],
    ['Boxing Day', createGhanaDate(year, 12, 26)],
  ].map(([name, date]) => ({ name, date }));
}

function formatGhanaHolidayDate(date) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    timeZone: GHANA_TIME_ZONE,
  }).format(date);
}

function renderNextGhanaHoliday(now) {
  if (!nextHolidayElement) return;

  const parts = getGhanaDateParts(now);
  const today = createGhanaDate(parts.year, parts.month, parts.day);
  let holidays = getGhanaHolidays(parts.year).filter((holiday) => holiday.date >= today);

  if (!holidays.length) {
    holidays = getGhanaHolidays(parts.year + 1);
  }

  holidays.sort((a, b) => a.date - b.date);
  const nextHoliday = holidays[0];

  if (!nextHoliday) {
    nextHolidayElement.textContent = 'Calendar unavailable';
    if (nextHolidayCountElement) nextHolidayCountElement.textContent = 'Ghana public holidays';
    return;
  }

  const daysAway = Math.round((nextHoliday.date - today) / 86400000);
  nextHolidayElement.textContent = nextHoliday.name;
  if (nextHolidayCountElement) {
    const timing = daysAway === 0
      ? 'Today'
      : daysAway === 1
        ? 'Tomorrow'
        : 'in ' + daysAway + ' days';
    nextHolidayCountElement.textContent = formatGhanaHolidayDate(nextHoliday.date) + ' · ' + timing;
  }
}

if (localTimeElement) {
  let ghanaTimeFormatter = null;
  let ghanaDateFormatter = null;

  try {
    ghanaTimeFormatter = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: GHANA_TIME_ZONE,
    });
    ghanaDateFormatter = new Intl.DateTimeFormat('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      timeZone: GHANA_TIME_ZONE,
    });
  } catch {
    ghanaTimeFormatter = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    ghanaDateFormatter = new Intl.DateTimeFormat('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  }

  const renderLocalContext = () => {
    const now = new Date();
    localTimeElement.textContent = ghanaTimeFormatter.format(now);
    localTimeElement.dateTime = now.toISOString();
    if (localDateElement) localDateElement.textContent = ghanaDateFormatter.format(now);
    renderNextGhanaHoliday(now);
  };

  renderLocalContext();
  window.setInterval(renderLocalContext, 1000);
}

let listeningTimer;
let listeningStarted = false;
let listeningLoading = false;
let listeningFailures = 0;
let listeningHasTracks = false;
let listeningProgressAnimation;
const listeningSnapshot = {
  current: null,
  recent: null,
  historyUpdatedAt: 0,
  historyRetryAt: 0,
};

const LISTENING_HISTORY_INTERVAL = 120_000;

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

function relativeListeningTime(value) {
  const playedAt = value ? new Date(value) : null;
  if (!playedAt || Number.isNaN(playedAt.getTime())) return '';

  const elapsedMinutes = Math.max(0, Math.floor((Date.now() - playedAt.getTime()) / 60_000));
  if (elapsedMinutes < 1) return 'just now';
  if (elapsedMinutes < 60) return elapsedMinutes + ' min ago';

  const elapsedHours = Math.floor(elapsedMinutes / 60);
  if (elapsedHours < 24) return elapsedHours + (elapsedHours === 1 ? ' hr ago' : ' hrs ago');

  const elapsedDays = Math.floor(elapsedHours / 24);
  return elapsedDays + (elapsedDays === 1 ? ' day ago' : ' days ago');
}

function stopListeningProgress() {
  listeningProgressAnimation?.cancel();
  listeningProgressAnimation = undefined;
}

function renderListeningProgress(state, track) {
  stopListeningProgress();

  const isPlaying = state?.status === 'playing';
  const hasReportedProgress = state?.progressMs !== null
    && state?.progressMs !== undefined;
  const progressMs = Number(state?.progressMs);
  const durationMs = Number(track?.durationMs);
  const responseTime = state?.updatedAt ? new Date(state.updatedAt).getTime() : NaN;
  const responseAge = Number.isFinite(responseTime)
    ? Math.max(0, Date.now() - responseTime)
    : 0;
  const liveProgress = progressMs + responseAge;
  const hasProgress = isPlaying
    && hasReportedProgress
    && Number.isFinite(liveProgress)
    && Number.isFinite(durationMs)
    && durationMs > 0;

  if (listeningElements.progressWrap) {
    listeningElements.progressWrap.hidden = !hasProgress;
  }
  if (!listeningElements.progress) return;

  if (!hasProgress) {
    listeningElements.progress.style.transform = 'scaleX(0)';
    return;
  }

  const safeProgress = Math.min(durationMs, Math.max(0, liveProgress));
  const ratio = safeProgress / durationMs;
  listeningElements.progress.style.transform = 'scaleX(' + ratio + ')';

  if (
    reducedMotionQuery?.matches
    || typeof listeningElements.progress.animate !== 'function'
    || safeProgress >= durationMs
  ) return;

  listeningProgressAnimation = listeningElements.progress.animate(
    [
      { transform: 'scaleX(' + ratio + ')' },
      { transform: 'scaleX(1)' },
    ],
    {
      duration: durationMs - safeProgress,
      easing: 'linear',
      fill: 'forwards',
    },
  );
}

function renderCurrentListeningTrack(state) {
  const track = normaliseListeningTrack(state?.track);
  const isPlaying = state?.status === 'playing';
  const artistLabel = track?.artists.length
    ? track.artists.join(', ')
    : 'Unknown artist';
  const albumLabel = track?.album ? ' · ' + track.album : '';

  if (listeningElements.currentLabel) {
    const relativeTime = relativeListeningTime(track?.playedAt);
    listeningElements.currentLabel.textContent = track
      ? (isPlaying ? 'Now playing · live' : 'Last played' + (relativeTime ? ' · ' + relativeTime : ''))
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

  renderListeningProgress(state, track);
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
      ? 'live now'
      : 'recent';
  }
  if (listeningElements.window) {
    listeningElements.window.textContent = state.status === 'playing'
      ? 'Live from Spotify'
      : 'Spotify snapshot';
  }
  if (listeningElements.note) {
    listeningElements.note.textContent = state.status === 'playing'
      ? 'What I’m listening to right now.'
      : 'A small snapshot of what I’ve returned to lately.';
  }
  if (listeningElements.historyTitle) {
    let historyTitle = tracks.length + ' lately';
    if (tracks.length >= 5) historyTitle = 'Five lately';
    if (tracks.length === 1) historyTitle = 'One lately';
    listeningElements.historyTitle.textContent = historyTitle;
  }
  if (listeningElements.historySummary) {
    listeningElements.historySummary.textContent = tracks.length
      + (tracks.length === 1 ? ' song' : ' songs')
      + ', tucked away until you want them.';
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
    listeningElements.window.textContent = 'Spotify snapshot';
  }
  if (listeningElements.note) {
    listeningElements.note.textContent = state.copy;
  }
  if (listeningElements.historySummary) {
    listeningElements.historySummary.textContent = 'No listening history available right now.';
  }
  if (listeningElements.historyTitle) {
    listeningElements.historyTitle.textContent = 'Listening history';
  }

  renderCurrentListeningTrack({ status: statusName, track: null });
  renderListeningRows([], state.copy);
}

function listeningViewUrl(view) {
  const separator = listeningEndpoint.includes('?') ? '&' : '?';
  return listeningEndpoint + separator + 'view=' + encodeURIComponent(view);
}

async function fetchListeningView(view, signal) {
  const response = await fetch(listeningViewUrl(view), {
    cache: 'no-store',
    signal,
  });
  const state = await response.json().catch(() => ({ status: 'unavailable' }));

  if (!response.ok && response.status !== 429) {
    throw new Error('listening_unavailable');
  }

  return { response, state };
}

function hasListeningTrack(state) {
  const hasTracks = Array.isArray(state?.tracks)
    && state.tracks.some((track) => normaliseListeningTrack(track));
  return hasTracks || Boolean(normaliseListeningTrack(state?.track));
}

function composedListeningState() {
  const current = listeningSnapshot.current;
  const recent = listeningSnapshot.recent;

  if (current?.status === 'playing' && normaliseListeningTrack(current.track)) {
    return {
      ...current,
      tracks: Array.isArray(recent?.tracks) ? recent.tracks : [],
      listeningWindow: recent?.listeningWindow || null,
    };
  }

  if (
    (recent?.status === 'recent' || recent?.status === 'playing')
    && hasListeningTrack(recent)
  ) return recent;

  return current || recent || { status: 'unavailable' };
}

function renderListeningSnapshot() {
  const state = composedListeningState();

  if (
    (state?.status === 'playing' || state?.status === 'recent')
    && state?.provider === 'Spotify'
    && hasListeningTrack(state)
  ) {
    renderListeningTracks(state);
  } else {
    renderListeningService(state?.status || 'unavailable');
  }
}

function nextListeningDelay(state, response) {
  if (state?.status === 'playing') return 10_000;
  if (state?.status === 'rate_limited') {
    const retryAfter = Number(state.retryAfter)
      || Number(response?.headers?.get('retry-after'))
      || 30;
    return Math.max(30, retryAfter) * 1000;
  }
  if (state?.status === 'not_connected' || state?.status === 'needs_reconnect') {
    return 300_000;
  }
  return 15_000;
}

function clearListeningTimer() {
  window.clearTimeout(listeningTimer);
  listeningTimer = undefined;
}

function scheduleListeningUpdate(delay) {
  clearListeningTimer();
  if (document.hidden) return;
  listeningTimer = window.setTimeout(() => loadListeningState(), delay);
}

async function loadListeningState(forceHistory = false) {
  if (!listeningEndpoint || !listeningPanel || listeningLoading) return;

  listeningStarted = true;
  listeningLoading = true;
  clearListeningTimer();
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 20_000);
  const historyIsStale = Date.now() - listeningSnapshot.historyUpdatedAt
    >= LISTENING_HISTORY_INTERVAL;
  const historyRetryReady = Date.now() >= listeningSnapshot.historyRetryAt;
  const shouldRefreshHistory = historyRetryReady && (
    forceHistory === true
    || !listeningSnapshot.recent
    || historyIsStale
  );

  try {
    const requests = [fetchListeningView('current', controller.signal)];
    if (shouldRefreshHistory) {
      requests.push(fetchListeningView('recent', controller.signal));
    }

    const [currentResult, recentResult] = await Promise.allSettled(requests);
    let currentState = listeningSnapshot.current || { status: 'unavailable' };
    let currentResponse;
    let updated = false;

    if (currentResult.status === 'fulfilled') {
      currentState = currentResult.value.state || currentState;
      currentResponse = currentResult.value.response;

      if (currentState.status !== 'rate_limited') {
        listeningSnapshot.current = currentState;
        updated = true;
      }
    }

    if (shouldRefreshHistory && recentResult?.status === 'fulfilled') {
      const recentState = recentResult.value.state;
      if (recentState?.status === 'rate_limited') {
        const retryAfter = Number(recentState.retryAfter)
          || Number(recentResult.value.response.headers.get('retry-after'))
          || 30;
        listeningSnapshot.historyRetryAt = Date.now() + Math.max(30, retryAfter) * 1000;
      } else {
        listeningSnapshot.recent = recentState;
        listeningSnapshot.historyUpdatedAt = Date.now();
        listeningSnapshot.historyRetryAt = 0;
        updated = true;
      }
    }

    if (updated) {
      listeningFailures = 0;
      renderListeningSnapshot();
    } else if (currentState.status === 'rate_limited') {
      if (listeningSnapshot.recent) {
        renderListeningSnapshot();
      } else {
        renderListeningService('rate_limited');
      }
    } else {
      throw new Error('listening_unavailable');
    }

    scheduleListeningUpdate(nextListeningDelay(currentState, currentResponse));
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
  reducedMotionQuery?.addEventListener?.('change', ({ matches }) => {
    if (matches) {
      stopListeningProgress();
    } else if (listeningStarted) {
      renderListeningSnapshot();
    }
  });

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
    loadListeningState(true);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearListeningTimer();
      stopListeningProgress();
    } else if (listeningStarted) {
      loadListeningState();
    }
  });

  window.addEventListener('pagehide', () => {
    clearListeningTimer();
    stopListeningProgress();
  });
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
  const visibleLabel = copyButton.querySelector('[data-copy-label]');
  let revertTimer;

  copyButton.addEventListener('pointerdown', () => {
    copyButton.classList.remove('copy-action--no-motion');
  });
  copyButton.addEventListener('keydown', () => {
    copyButton.classList.add('copy-action--no-motion');
  });

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
    if (visibleLabel) visibleLabel.textContent = copied ? 'Copied' : 'Try again';
    if (statusLabel) statusLabel.textContent = copied ? 'Email address copied.' : 'Copying did not work.';
    revertTimer = window.setTimeout(() => {
      copyButton.classList.remove('is-copied');
      copyButton.classList.remove('copy-action--no-motion');
      if (visibleLabel) visibleLabel.textContent = 'Copy email';
      if (statusLabel) statusLabel.textContent = '';
    }, copied ? 1800 : 2400);
  });
}

