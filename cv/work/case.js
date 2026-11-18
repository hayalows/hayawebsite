/* Case study pages: reading progress, reveals and one small demo per project. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const bar = document.querySelector('.case-progress');
  if (bar) {
    const set = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.setProperty('--read', max > 0 ? Math.min(1, scrollY / max).toFixed(4) : 0);
    };
    addEventListener('scroll', set, { passive: true }); addEventListener('resize', set); set();
  }
  const reveals = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(el => io.observe(el));
  } else reveals.forEach(el => el.classList.add('is-in'));

  const demos = {
    /* RouteLab: the same acceptance rules the app uses, on a pretend walk. */
    gps(root) {
      const R = 6371000, toRad = d => d * Math.PI / 180;
      const dist = (a, b) => {
        const dLat = toRad(b.lat - a.lat), dLon = toRad(b.lon - a.lon);
        const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLon / 2) ** 2;
        return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
      };
      // A made-up 20 minute walk, one fix every 15 seconds. Seeded, so it is the same for everyone.
      let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647) - .5;
      const lat0 = 6.6885, lon0 = -1.6244, pts = [];
      for (let i = 0; i < 80; i++) {
        const t = i / 79;
        const stopped = i >= 30 && i < 40; // waiting at a junction
        const s = stopped ? 30 / 79 : t;
        const lat = lat0 + s * .0092 + Math.sin(s * 5.2) * .0011;
        const lon = lon0 + s * .0105 - Math.cos(s * 3.4) * .0009;
        pts.push({ lat: lat + rnd() * .00012, lon: lon + rnd() * .00012, t: i * 15, acc: 8 + Math.abs(rnd()) * 14 });
      }
      pts[18] = { ...pts[18], lat: pts[18].lat + .0088, lon: pts[18].lon - .0071, acc: 30 };      // a jump
      pts[52] = { ...pts[52], lat: pts[52].lat - .0079, lon: pts[52].lon + .0086, acc: 26 };      // another jump
      pts[61] = { ...pts[61], lat: pts[61].lat + .0016, lon: pts[61].lon + .0014, acc: 240 };     // blurry fix
      pts[8] = { ...pts[8], lat: pts[8].lat - .0012, acc: 180 };                                   // blurry fix
      const reasons = { jump: 0, blurry: 0, wobble: 0 };
      let last;
      pts.forEach(p => {
        p.ok = true;
        if (p.acc > 100) { p.ok = false; p.why = 'blurry'; }
        else if (last) {
          const sec = p.t - last.t, d = dist(last, p);
          const dead = Math.max(2, Math.min(28, Math.hypot(p.acc, last.acc) * .42));
          if (d < dead && sec < 30) { p.ok = false; p.why = 'wobble'; }
          else if (d / sec > 55 && d > Math.max((p.acc + last.acc) * 1.5, 100)) { p.ok = false; p.why = 'jump'; }
        }
        if (p.ok) last = p; else reasons[p.why]++;
      });
      const total = list => list.reduce((s, p, i) => i ? s + dist(list[i - 1], p) : 0, 0);
      const raw = total(pts), kept = pts.filter(p => p.ok), clean = total(kept);
      const lats = kept.map(p => p.lat), lons = kept.map(p => p.lon);
      const minLa = Math.min(...lats), maxLa = Math.max(...lats), minLo = Math.min(...lons), maxLo = Math.max(...lons);
      const W = 400, H = 300, pad = 40;
      const sc = Math.min((W - pad * 2) / (maxLo - minLo), (H - pad * 2) / (maxLa - minLa));
      const xy = p => [pad + (p.lon - minLo) * sc + ((W - pad * 2) - (maxLo - minLo) * sc) / 2, H - pad - (p.lat - minLa) * sc - ((H - pad * 2) - (maxLa - minLa) * sc) / 2];
      const path = list => list.map((p, i) => (i ? 'L' : 'M') + xy(p).map(n => n.toFixed(1)).join(' ')).join(' ');
      const svg = root.querySelector('svg'), pathEl = svg.querySelector('.gps__path'), dots = svg.querySelector('.gps__dots');
      dots.innerHTML = pts.map(p => { const [x, y] = xy(p); return `<circle class="gps__pt ${p.ok ? 'gps__pt--ok' : 'gps__pt--bad'}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${p.ok ? 2.4 : 4.5}"></circle>`; }).join('');
      const out = root.querySelector('[data-gps-distance]'), label = root.querySelector('[data-gps-label]');
      root.querySelector('[data-gps-jump]').textContent = reasons.jump;
      root.querySelector('[data-gps-blurry]').textContent = reasons.blurry;
      root.querySelector('[data-gps-wobble]').textContent = reasons.wobble;
      const buttons = [...root.querySelectorAll('[data-gps-mode]')];
      const show = mode => {
        const isRaw = mode === 'raw';
        pathEl.setAttribute('d', path(isRaw ? pts : kept));
        pathEl.style.stroke = isRaw ? '#e4572e' : '#3f5cc8';
        svg.querySelectorAll('.gps__pt--bad').forEach(c => c.style.opacity = isRaw ? 1 : .9);
        out.textContent = ((isRaw ? raw : clean) / 1000).toFixed(2) + ' km';
        label.textContent = isRaw ? 'Distance from raw phone GPS' : 'Distance after RouteLab’s checks';
        buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.gpsMode === mode)));
      };
      buttons.forEach(b => b.addEventListener('click', () => show(b.dataset.gpsMode)));
      show('raw');
      if (!reduce && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { io.disconnect(); setTimeout(() => show('clean'), 1400); } }, { threshold: .6 });
        io.observe(root);
      }
    },

    /* StigmaClear: the five moves, and better words. */
    moves(root) {
      const moves = {
        B: ['Believe', '“Thank you for telling me. I believe you.”'],
        L: ['Listen', '“What has it been like?”'],
        A: ['Ask', '“Is it feeling too heavy to carry tonight?”'],
        S: ['Stay', '“I am not going anywhere.”'],
        C: ['Connect', '“Let us call the free line together. I will hold the phone.”'],
      };
      const card = root.querySelector('.moves__card');
      const keys = [...root.querySelectorAll('[data-move]')];
      const pick = k => {
        const [name, line] = moves[k];
        card.querySelector('strong').textContent = name;
        card.querySelector('p').textContent = line;
        card.querySelector('small').textContent = 'Move ' + ('BLASC'.indexOf(k) + 1) + ' of 5';
        card.classList.remove('is-swap'); void card.offsetWidth; card.classList.add('is-swap');
        keys.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.move === k)));
      };
      keys.forEach(b => b.addEventListener('click', () => pick(b.dataset.move)));
      root.addEventListener('keydown', e => {
        const i = keys.indexOf(document.activeElement); if (i < 0) return;
        const n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
        if (n === null) return; e.preventDefault();
        const next = keys[(n + keys.length) % keys.length]; next.focus(); pick(next.dataset.move);
      });
      root.querySelectorAll('.swap').forEach(s => s.addEventListener('click', () => s.setAttribute('aria-pressed', String(s.getAttribute('aria-pressed') !== 'true'))));
      pick('B');
    },

    /* OffScript: a tiny photo booth with the real Edition 001 props. */
    booth(root) {
      const img = root.querySelector('.booth__prop');
      const flash = root.querySelector('.booth__flash');
      const picks = [...root.querySelectorAll('[data-prop]')];
      const choose = btn => {
        img.src = btn.dataset.prop; img.alt = btn.getAttribute('aria-label');
        img.classList.remove('is-new'); void img.offsetWidth; img.classList.add('is-new');
        picks.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
      };
      picks.forEach(b => b.addEventListener('click', () => choose(b)));
      root.querySelector('[data-snap]').addEventListener('click', () => {
        if (!reduce) { flash.classList.remove('is-on'); void flash.offsetWidth; flash.classList.add('is-on'); }
        const others = picks.filter(b => b.getAttribute('aria-pressed') !== 'true');
        choose(others[Math.floor(Math.random() * others.length)]);
      });
    },

    /* English Chat Finder: a pretend scan with a small pool of checkers. */
    scan(root) {
      const names = ['Ama', 'Kofi', 'Esi', 'John', 'Maria', 'Kwame', 'Grace', 'Tunde', 'Lucy', 'Peter', 'Abena', 'Daniel', 'Ruth', 'Samuel', 'Joy', 'Yaw', 'Naomi', 'Felix'];
      const grid = root.querySelector('.scan__grid'), results = root.querySelector('.scan__results');
      const count = root.querySelector('.scan__count'), go = root.querySelector('[data-scan]');
      const days = ['Today', 'Tomorrow', 'Thursday', 'Friday', 'Saturday'];
      const draw = () => {
        grid.innerHTML = names.map(n => `<div class="vol" data-state="waiting"><b>${n}</b><small>Waiting</small></div>`).join('');
        results.innerHTML = ''; count.textContent = 'Pretend volunteers: ' + names.length;
      };
      draw();
      let running = false;
      go.addEventListener('click', async () => {
        if (running) return; running = true; go.disabled = true; draw();
        const cards = [...grid.children], found = [];
        let next = 0, done = 0;
        const POOL = 4, wait = ms => new Promise(r => setTimeout(r, reduce ? 0 : ms));
        const worker = async () => {
          while (next < cards.length) {
            const i = next++, card = cards[i];
            card.dataset.state = 'checking'; card.querySelector('small').textContent = 'Checking';
            await wait(380 + ((i * 137) % 420));
            const open = (i * 7) % 3 === 0;
            card.dataset.state = open ? 'open' : 'none';
            if (open) {
              const slot = { name: names[i], day: days[(i * 3) % days.length], hour: 8 + ((i * 5) % 11) };
              found.push(slot); card.querySelector('small').textContent = slot.day + ', ' + slot.hour + ':00';
            } else card.querySelector('small').textContent = 'No openings';
            done++; count.textContent = `Checked ${done} of ${names.length}, ${POOL} at a time`;
          }
        };
        await Promise.all(Array.from({ length: POOL }, worker));
        found.sort((a, b) => days.indexOf(a.day) - days.indexOf(b.day) || a.hour - b.hour);
        results.innerHTML = `<h3>${found.length} openings, soonest first</h3>` + found.slice(0, 4).map((s, k) => `<div class="slot" style="animation-delay:${k * 80}ms"><b>${s.day}, ${s.hour}:00</b><span>with ${s.name} · book on Google</span></div>`).join('');
        go.disabled = false; go.textContent = 'Run it again'; running = false;
      });
    },
  };
  document.querySelectorAll('[data-demo]').forEach(el => demos[el.dataset.demo]?.(el));
})();
