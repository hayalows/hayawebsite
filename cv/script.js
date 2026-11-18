/* PKM home page. Small, dependency-free. Spotify lives in spotify-ui.js. */
(() => {
  const doc = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');

  /* Hello loader: once per visit, never longer than it needs to be. */
  const hello = document.querySelector('[data-hello]');
  if (doc.classList.contains('is-loading') && hello) {
    const started = performance.now();
    const finish = () => {
      const wait = Math.max(0, 1650 - (performance.now() - started));
      setTimeout(() => {
        hello.classList.add('is-done');
        setTimeout(() => { doc.classList.remove('is-loading'); hello.remove(); }, 560);
        try { sessionStorage.setItem('pkm.hello', '1'); } catch (e) {}
      }, wait);
    };
    if (document.readyState === 'complete') finish(); else addEventListener('load', finish, { once: true });
    setTimeout(() => doc.classList.remove('is-loading'), 3400);
  } else if (hello) hello.remove();

  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  /* Copy email, with a little toast. */
  const toast = document.querySelector('[data-toast]');
  let toastTimer;
  const say = msg => {
    if (!toast) return;
    toast.textContent = msg; toast.classList.add('is-on');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('is-on'), 2600);
  };
  document.querySelectorAll('[data-copy-email]').forEach(btn => {
    const label = btn.querySelector('[data-copy-label]');
    const original = label?.textContent;
    btn.addEventListener('click', async () => {
      const email = btn.dataset.copyEmail;
      let ok = false;
      try { await navigator.clipboard.writeText(email); ok = true; } catch (e) {}
      if (!ok) { location.href = 'mailto:' + email; return; }
      btn.classList.add('is-copied');
      if (label) label.textContent = 'Copied';
      say('Email copied. Talk soon!');
      setTimeout(() => { btn.classList.remove('is-copied'); if (label) label.textContent = original; }, 2200);
    });
  });

  /* Reveal on scroll. */
  const reveals = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !reduce.matches) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    reveals.forEach(el => io.observe(el));
  } else reveals.forEach(el => el.classList.add('is-in'));

  /* Navigation: the bead and the pill glide with the scroll, so nothing jumps. */
  const navs = [...document.querySelectorAll('[data-nav]')].map(nav => {
    const links = [...nav.querySelectorAll(':scope > a[data-section-link]')];
    const targets = links.map(a => document.getElementById(a.dataset.sectionLink));
    return { nav, links, targets, kind: nav.dataset.nav };
  });
  const bead = document.querySelector('[data-nav-bead]');
  const pill = document.querySelector('[data-dock-pill]');
  const lerp = (a, b, t) => a + (b - a) * t;
  function position(targets) {
    const probe = scrollY + innerHeight * .35;
    const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) return targets.length - 1;
    const tops = targets.map(t => (t ? t.getBoundingClientRect().top + scrollY : 0));
    tops[0] = 0;
    for (let i = tops.length - 1; i >= 0; i--) {
      if (probe >= tops[i]) {
        if (i === tops.length - 1) return i;
        const span = Math.max(1, tops[i + 1] - tops[i]);
        const t = (probe - tops[i]) / span;
        // Hold still for most of a section, then glide over the last fifth.
        return i + Math.max(0, (t - .8) / .2);
      }
    }
    return 0;
  }
  function paint() {
    navs.forEach(({ nav, links, targets, kind }) => {
      if (!nav.offsetParent && kind === 'rail' && getComputedStyle(nav).display === 'none') return;
      const p = position(targets);
      const i = Math.floor(p), f = p - i;
      const active = f >= .5 ? Math.min(i + 1, links.length - 1) : i;
      links.forEach((a, n) => {
        const on = n === active;
        a.classList.toggle('is-active', on);
        if (on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
      });
      const a = links[i], b = links[Math.min(i + 1, links.length - 1)];
      if (!a) return;
      if (kind === 'rail' && bead) {
        const base = nav.getBoundingClientRect().top + 8;
        const ya = a.getBoundingClientRect().top + a.offsetHeight / 2 - base - 11;
        const yb = b.getBoundingClientRect().top + b.offsetHeight / 2 - base - 11;
        bead.style.setProperty('--bead', lerp(ya, yb, f).toFixed(1) + 'px');
      }
      if (kind === 'dock' && pill) {
        const base = nav.getBoundingClientRect().left;
        const xa = a.getBoundingClientRect().left - base, xb = b.getBoundingClientRect().left - base;
        pill.style.setProperty('--pill-x', lerp(xa, xb, f).toFixed(1) + 'px');
        pill.style.setProperty('--pill-w', lerp(a.offsetWidth, b.offsetWidth, f).toFixed(1) + 'px');
      }
    });
  }
  let ticking = false;
  const queue = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; paint(); }); } };
  addEventListener('scroll', queue, { passive: true });
  addEventListener('resize', queue);
  document.fonts?.ready?.then(queue);
  paint();

  document.querySelectorAll('a[data-section-link="top"]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    scrollTo({ top: 0, behavior: reduce.matches ? 'auto' : 'smooth' });
    history.replaceState(null, '', location.pathname);
  }));

  const more = document.querySelector('[data-dock-more]');
  if (more) {
    more.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { more.open = false; }));
    document.addEventListener('click', e => { if (more.open && !more.contains(e.target)) more.open = false; });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && more.open) { more.open = false; more.querySelector('summary').focus(); }
    });
  }

  /* Four beats: count them in once, like a band. */
  const bar = document.querySelector('[data-beats]');
  if (bar) {
    const beats = [...bar.children];
    const set = n => { bar.style.setProperty('--beat', n); beats.forEach((li, k) => li.classList.toggle('is-on', k < n)); };
    if (reduce.matches || !('IntersectionObserver' in window)) set(4);
    else {
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        beats.forEach((_, k) => setTimeout(() => set(k + 1), 350 + k * 520));
      }, { threshold: .5 });
      io.observe(bar);
    }
  }

  /* Gentle tilt on the lab tiles for mouse users. */
  if (finePointer.matches && !reduce.matches) {
    document.querySelectorAll('.tile a').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        card.style.setProperty('--ry', (x * 7).toFixed(2) + 'deg');
        card.style.setProperty('--rx', (-y * 7).toFixed(2) + 'deg');
      });
      card.addEventListener('pointerleave', () => { card.style.removeProperty('--rx'); card.style.removeProperty('--ry'); });
    });
  }

  /* Kumasi time (Ghana keeps GMT all year). */
  const clockEls = [...document.querySelectorAll('[data-clock],[data-local-time]')];
  const dateEl = document.querySelector('[data-local-date]');
  const fmtTime = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Accra', hour: '2-digit', minute: '2-digit', hour12: false });
  const fmtDay = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Accra', weekday: 'long' });
  function tick() {
    const now = new Date();
    const time = fmtTime.format(now);
    clockEls.forEach(el => { el.textContent = time; el.setAttribute('datetime', now.toISOString()); });
    if (dateEl) dateEl.textContent = 'on a ' + fmtDay.format(now);
  }
  if (clockEls.length) { tick(); setInterval(tick, 15000); }
})();
