const sectionLinks = [...document.querySelectorAll('[data-section-link]')];
const sections = [...document.querySelectorAll('[data-section]')];
const mobileNav = document.querySelector('.mobile-nav__scroll');
const year = document.querySelector('[data-year]');
const listeningEndpoint = document.querySelector('meta[name="listening-endpoint"]')?.content;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function keepActiveMobileLinkVisible(sectionId) {
  const link = mobileNav?.querySelector(`[data-section-link="${sectionId}"]`);
  if (!link || !mobileNav) return;

  const desiredLeft = link.offsetLeft - (mobileNav.clientWidth - link.offsetWidth) / 2;
  mobileNav.scrollTo({
    left: Math.max(0, desiredLeft),
    behavior: reducedMotion.matches ? 'auto' : 'smooth'
  });
}

function setActiveSection(sectionId, keepVisible = true) {
  let changed = false;

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

  if (changed && keepVisible) keepActiveMobileLinkVisible(sectionId);
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

setActiveSection('about', false);

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
  link.addEventListener('click', () => setActiveSection(link.dataset.sectionLink));
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

function setOptionalListeningLink(link, label, item) {
  if (!link) return;

  if (!item?.name) {
    link.hidden = true;
    link.removeAttribute('href');
    return;
  }

  link.textContent = label + ': ' + item.name;
  link.hidden = !item.url;

  if (item.url) {
    link.href = item.url;
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
  }
}

async function loadListeningState() {
  if (!listeningEndpoint) return;

  const panel = document.querySelector('[data-listening]');
  const title = document.querySelector('[data-listening-title]');
  const copy = document.querySelector('[data-listening-copy]');
  const status = document.querySelector('[data-listening-status]');
  const art = document.querySelector('[data-listening-art]');
  const mark = document.querySelector('[data-listening-mark]');
  const extra = document.querySelector('[data-listening-extra]');
  const artistLink = document.querySelector('[data-listening-artist]');
  const playlistLink = document.querySelector('[data-listening-playlist]');

  try {
    const response = await fetch(listeningEndpoint, { cache: 'no-store' });
    if (!response.ok) return;

    const state = await response.json();

    if (state.status === 'needs_reconnect') {
      if (status) status.textContent = 'reconnect needed';
      return;
    }

    if (state.status === 'connected_empty') {
      if (status) status.textContent = 'no recent track';
      return;
    }

    if (
      state.status !== 'connected'
      || state.provider !== 'Spotify'
      || !state.track?.name
    ) return;

    const artist = Array.isArray(state.track.artists)
      ? state.track.artists.join(', ')
      : state.track.artist;

    if (title) title.textContent = state.track.name;
    if (copy) {
      copy.textContent = (artist || 'Artist unavailable')
        + ' · last played ' + formatPlayedAt(state.track.playedAt);
    }
    if (status) status.textContent = 'last played ' + formatPlayedAt(state.track.playedAt);
    panel?.classList.add('is-connected');

    if (art && state.track.imageUrl) {
      art.src = state.track.imageUrl;
      art.alt = state.track.album
        ? state.track.album + ' album artwork'
        : 'Album artwork';
      art.hidden = false;
      if (mark) mark.hidden = true;
    }

    if (state.track.url && copy) {
      let link = copy.parentElement.querySelector('[data-listening-track-link]');
      if (!link) {
        link = document.createElement('a');
        link.className = 'track-link';
        link.dataset.listeningTrackLink = '';
        copy.insertAdjacentElement('afterend', link);
      }
      link.href = state.track.url;
      link.textContent = 'Open in Spotify ↗';
      link.target = '_blank';
      link.rel = 'noreferrer noopener';
      link.hidden = false;
    }

    setOptionalListeningLink(artistLink, 'Top artist', state.favoriteArtist);
    setOptionalListeningLink(playlistLink, 'In rotation', state.featuredPlaylist);

    if (
      extra
      && (!artistLink?.hidden || !playlistLink?.hidden)
    ) {
      extra.hidden = false;
    }
  } catch {
    // The public page keeps the quiet placeholder if Spotify is unavailable.
  }
}

loadListeningState();
