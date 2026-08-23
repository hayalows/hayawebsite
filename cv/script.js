const sectionLinks = [...document.querySelectorAll('[data-section-link]')];
const sections = [...document.querySelectorAll('[data-section]')];
const year = document.querySelector('[data-year]');
const listeningEndpoint = document.querySelector('meta[name="listening-endpoint"]')?.content;

function setActiveSection(sectionId) {
  sectionLinks.forEach((link) => {
    const active = link.dataset.sectionLink === sectionId;
    link.classList.toggle('is-active', active);

    if (active) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function isAtPageBottom() {
  return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;
}

function contactHasEnteredView() {
  const contact = document.querySelector('#contact');
  if (!contact) return false;

  const bounds = contact.getBoundingClientRect();
  return bounds.top <= window.innerHeight * 0.72 && bounds.bottom > 0;
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
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
    threshold: [0, 0.12, 0.35]
  });

  sections.forEach((section) => observer.observe(section));
} else {
  setActiveSection('about');
}

window.addEventListener('scroll', () => {
  if (isAtPageBottom() || contactHasEnteredView()) setActiveSection('contact');
}, { passive: true });

sectionLinks.forEach((link) => {
  link.addEventListener('click', () => setActiveSection(link.dataset.sectionLink));
});

if (year) year.textContent = String(new Date().getFullYear());

async function loadListeningState() {
  if (!listeningEndpoint) return;

  try {
    const response = await fetch(listeningEndpoint, { cache: 'no-store' });
    if (!response.ok) return;

    const state = await response.json();
    if (state.status !== 'connected' || !state.track?.name) return;

    const panel = document.querySelector('[data-listening]');
    const title = document.querySelector('[data-listening-title]');
    const copy = document.querySelector('[data-listening-copy]');
    const artist = Array.isArray(state.track.artists)
      ? state.track.artists.join(', ')
      : state.track.artist;

    title.textContent = state.track.name;
    copy.textContent = `${artist || 'Artist unavailable'} · ${state.isPlaying ? 'playing now' : 'recently played'}`;
    panel?.classList.add('is-connected');

    if (state.track.url) {
      const link = document.createElement('a');
      link.className = 'track-link';
      link.href = state.track.url;
      link.textContent = `Open in ${state.provider || 'music app'}`;
      link.rel = 'noreferrer';
      copy.insertAdjacentElement('afterend', link);
    }
  } catch {
    // The static, private-by-default state is intentional until an account is connected.
  }
}

loadListeningState();
