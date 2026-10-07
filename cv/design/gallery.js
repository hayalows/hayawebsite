/* UseLayouts gallery/deck interaction adaptation. MIT © 2025 Urvish Mali.
   Accessible vanilla implementation; see ../THIRD-PARTY-NOTICES.md. */
(() => {
  'use strict';
  const cards = [...document.querySelectorAll('.artwork')];
  const links = cards.map(card => card.querySelector('[data-artwork-open]'));
  const dialog = document.querySelector('.viewer');
  if (!cards.length || !dialog || typeof dialog.showModal !== 'function') return;
  const filters = [...document.querySelectorAll('[data-filter]')];
  const search = document.querySelector('#design-search');
  const count = document.querySelector('.result-count');
  const empty = document.querySelector('.no-results');
  const stage = dialog.querySelector('.viewer-stage');
  const image = dialog.querySelector('.viewer-image');
  const loading = dialog.querySelector('.viewer-loading');
  const error = dialog.querySelector('.viewer-error');
  const previous = dialog.querySelector('[data-prev]');
  const next = dialog.querySelector('[data-next]');
  const zoom = dialog.querySelector('[data-zoom]');
  const motion = document.querySelector('.motion-toggle');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  let category = 'All work', active = -1, opener = null, pushed = false, priorHash = '';
  let motionEnabled = !reduced.matches, visible = [...cards.keys()];
  const base = () => location.pathname + location.search;
  const resetTilt = surface => { surface.style.removeProperty('--rx'); surface.style.removeProperty('--ry'); };
  const canTilt = () => motionEnabled && !reduced.matches && fine.matches;

  document.querySelectorAll('.gallery-tools, .search-row').forEach(el => { el.hidden = false; });
  function updateMotion() {
    document.body.classList.toggle('motion-off', !canTilt());
    motion.setAttribute('aria-pressed', String(motionEnabled && !reduced.matches));
    motion.textContent = reduced.matches ? '3D motion: reduced' : `3D motion: ${motionEnabled ? 'on' : 'off'}`;
    motion.disabled = reduced.matches;
    motion.hidden = !fine.matches && !reduced.matches;
    dialog.querySelector('.viewer-hint').textContent = canTilt()
      ? 'Move your pointer to explore depth. Arrow keys to browse · Escape to close'
      : 'Arrow keys to browse · Escape to close';
    document.querySelectorAll('[data-tilt], .viewer-image').forEach(resetTilt);
  }
  motion.addEventListener('click', () => { motionEnabled = !motionEnabled; updateMotion(); });
  reduced.addEventListener('change', updateMotion);
  fine.addEventListener('change', updateMotion);
  updateMotion();

  function bindTilt(target, surface, allowed = () => true) {
    let frame = 0;
    target.addEventListener('pointermove', event => {
      if (!canTilt() || !allowed() || event.pointerType === 'touch') return;
      const box = target.getBoundingClientRect();
      const x = Math.max(-.5, Math.min(.5, (event.clientX - box.left) / box.width - .5));
      const y = Math.max(-.5, Math.min(.5, (event.clientY - box.top) / box.height - .5));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        surface.style.setProperty('--rx', `${-y * 12}deg`);
        surface.style.setProperty('--ry', `${x * 12}deg`);
      });
    });
    target.addEventListener('pointerleave', () => { cancelAnimationFrame(frame); resetTilt(surface); });
  }
  document.querySelectorAll('.artwork__open,.deck-card').forEach(target => bindTilt(target, target.querySelector('[data-tilt]')));
  bindTilt(stage, image, () => !stage.classList.contains('is-zoomed'));

  function applyFilters() {
    const query = search.value.trim().toLocaleLowerCase();
    visible = [];
    cards.forEach((card, index) => {
      const matches = (category === 'All work' || card.dataset.category === category)
        && card.dataset.search.toLocaleLowerCase().includes(query);
      card.hidden = !matches;
      if (matches) visible.push(index);
    });
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter.dataset.filter === category)));
    count.textContent = `${visible.length} of ${cards.length} designs`;
    empty.hidden = visible.length > 0;
  }
  filters.forEach(filter => filter.addEventListener('click', () => { category = filter.dataset.filter; applyFilters(); }));
  search.addEventListener('input', applyFilters);
  document.querySelector('[data-clear]').addEventListener('click', () => {
    category = 'All work'; search.value = ''; applyFilters(); filters[0].focus();
  });
  applyFilters();

  for (const img of document.querySelectorAll('.artwork__surface img')) {
    function fallback() { img.hidden = true; img.nextElementSibling.hidden = false; }
    img.addEventListener('error', fallback);
    if (img.complete && !img.naturalWidth) fallback();
  }
  function resetZoom() {
    stage.classList.remove('is-zoomed'); stage.scrollTo(0, 0);
    zoom.setAttribute('aria-pressed', 'false'); zoom.textContent = 'Zoom in'; resetTilt(image);
  }
  function loadImage() {
    resetZoom(); image.hidden = true; loading.hidden = false; error.hidden = true; zoom.disabled = true;
    image.src = links[active].dataset.full;
  }
  image.addEventListener('load', () => {
    loading.hidden = true; error.hidden = true; image.hidden = false; zoom.disabled = false;
  });
  image.addEventListener('error', () => {
    loading.hidden = true; image.hidden = true; error.hidden = false; zoom.disabled = true;
  });
  dialog.querySelector('[data-retry]').addEventListener('click', loadImage);
  function show(index, changeHash = true) {
    if (index < 0 || index >= cards.length) return;
    const wasOpen = dialog.open;
    active = index;
    const link = links[index], card = cards[index];
    dialog.querySelector('#viewer-title').textContent = link.dataset.title;
    dialog.querySelector('#viewer-category').textContent = `${card.dataset.category} · ${card.dataset.sourceFile}`;
    image.alt = card.querySelector('img').alt;
    dialog.querySelector('[data-full-link]').href = link.dataset.full;
    dialog.querySelector('[data-source-link]').href = link.dataset.source;
    // Direct links open the complete archive; filter navigation stays within its results.
    if (!visible.includes(index)) { category = 'All work'; search.value = ''; applyFilters(); }
    const position = visible.indexOf(index);
    previous.disabled = position <= 0; next.disabled = position >= visible.length - 1;
    dialog.querySelector('.viewer-counter').textContent = `${position + 1} / ${visible.length}`;
    loadImage();
    if (!wasOpen) { document.body.classList.add('viewer-open'); dialog.showModal(); }
    if (changeHash) {
      const url = base() + '#view=' + encodeURIComponent(card.dataset.id);
      if (!wasOpen) {
        priorHash = location.hash;
        history.pushState({ pkmDesignViewer: true, pkmDesignPriorHash: priorHash }, '', url);
        pushed = true;
      } else history.replaceState(history.state, '', url);
    }
  }
  function closeInternal() {
    if (!dialog.open) return;
    dialog.close(); document.body.classList.remove('viewer-open'); resetTilt(image); resetZoom();
    opener?.focus({ preventScroll: true }); active = -1;
  }
  function requestClose() {
    closeInternal();
    if (pushed) { pushed = false; history.back(); }
    else if (location.hash.startsWith('#view=')) history.replaceState(null, '', base() + priorHash);
  }
  links.forEach((link, index) => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault(); opener = link; show(index);
  }));
  document.querySelectorAll('[data-deck-id]').forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault(); opener = link; show(cards.findIndex(card => card.dataset.id === link.dataset.deckId));
  }));
  function move(delta) {
    const index = visible.indexOf(active), destination = index + delta;
    if (destination >= 0 && destination < visible.length) show(visible[destination]);
  }
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  zoom.addEventListener('click', () => {
    const enabled = !stage.classList.contains('is-zoomed');
    stage.classList.toggle('is-zoomed', enabled); zoom.setAttribute('aria-pressed', String(enabled));
    zoom.textContent = enabled ? 'Fit to screen' : 'Zoom in'; resetTilt(image); stage.scrollTo(0, 0);
  });
  dialog.querySelector('[data-close]').addEventListener('click', requestClose);
  dialog.addEventListener('cancel', event => { event.preventDefault(); requestClose(); });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) requestClose();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
      const controls = [...dialog.querySelectorAll('button:not([disabled]),a[href]')]
        .filter(control => control.getClientRects().length > 0);
      const first = controls[0], last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      return;
    }
    if (event.altKey || event.ctrlKey || event.metaKey || stage.classList.contains('is-zoomed')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });
  function syncHash() {
    pushed = history.state?.pkmDesignViewer === true;
    priorHash = history.state?.pkmDesignPriorHash || '';
    if (!location.hash.startsWith('#view=')) { pushed = false; closeInternal(); return; }
    const id = location.hash.slice(6), index = cards.findIndex(card => card.dataset.id === id);
    if (index !== -1) { if (!dialog.open) opener = links[index]; show(index, false); }
    else { pushed = false; closeInternal(); }
  }
  window.addEventListener('popstate', syncHash);
  window.addEventListener('hashchange', syncHash);
  syncHash();
})();
