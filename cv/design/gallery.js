/* UseLayouts gallery/deck adaptation. MIT © 2025 Urvish Mali.
   Accessible vanilla implementation; see ../THIRD-PARTY-NOTICES.md. */
(() => {
  'use strict';
  const cards = [...document.querySelectorAll('.artwork')];
  const links = cards.map(card => card.querySelector('[data-artwork-open]'));
  const dialog = document.querySelector('.viewer');
  if (!cards.length || !dialog || typeof dialog.showModal !== 'function') return;
  const $ = selector => dialog.querySelector(selector);
  const filters = [...document.querySelectorAll('[data-filter]')];
  const search = document.querySelector('#design-search');
  const count = document.querySelector('.result-count');
  const empty = document.querySelector('.no-results');
  const panel = document.querySelector('[data-browse-panel]');
  const reset = document.querySelector('[data-reset-filters]');
  const stage = $('.viewer-stage'), image = $('.viewer-image'), preview = $('.viewer-preview');
  const loading = $('.viewer-loading'), error = $('.viewer-error');
  const previous = $('[data-prev]'), next = $('[data-next]'), zoom = $('[data-zoom]');
  const browse = $('[data-browse]'), strip = $('.viewer-thumbnails'), more = $('.viewer-more');
  const copy = $('[data-copy-link]'), copyStatus = $('[data-copy-status]');
  const motion = document.querySelector('.motion-toggle');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  let category = 'All work', active = -1, opener = null, pushed = false, priorHash = '', scrollToOpener = false;
  let motionEnabled = !reduced.matches, visible = [...cards.keys()];
  let requestVersion = 0, loader = null, loadTimer = 0, fullReady = false, previewReady = false;
  let gesture = null, wheelTotal = 0, wheelAt = 0, wheelLocked = false;
  let copyPending = false, copyVersion = 0;
  const base = () => location.pathname + location.search;
  const shareUrl = () => location.origin + base() + '#view=' + encodeURIComponent(cards[active].dataset.id);
  const normalize = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();
  const resetTilt = surface => { surface.style.removeProperty('--rx'); surface.style.removeProperty('--ry'); };
  const canTilt = () => motionEnabled && !reduced.matches && fine.matches;
  document.querySelectorAll('.gallery-tools,.search-row').forEach(el => { el.hidden = false; });

  function updatePanel() {
    const height = panel.getBoundingClientRect().height;
    panel.classList.toggle('is-static', height > innerHeight * .35);
    document.documentElement.style.setProperty('--browse-height', `${height}px`);
  }
  new ResizeObserver(updatePanel).observe(panel);
  new ResizeObserver(() => {
    dialog.style.setProperty('--stage-height', `${Math.max(48, stage.clientHeight - 16)}px`);
  }).observe(stage);
  window.addEventListener('resize', updatePanel);
  function hint(message = '') {
    if (message) { $('#viewer-hint').textContent = message; return; }
    const position = visible.indexOf(active);
    const ending = position === 0 ? ' · First design' : position === visible.length - 1 ? ' · Last design' : '';
    $('#viewer-hint').textContent = stage.classList.contains('is-zoomed')
      ? 'Scroll or pinch to inspect · Fit to screen to browse'
      : `${fine.matches ? 'Drag, swipe or use ← → to browse' : 'Swipe left or right, or use the arrows'}${ending}`;
  }
  function updateMotion() {
    document.body.classList.toggle('motion-off', !canTilt());
    motion.setAttribute('aria-pressed', String(motionEnabled && !reduced.matches));
    motion.textContent = reduced.matches ? '3D motion: reduced' : `3D motion: ${motionEnabled ? 'on' : 'off'}`;
    motion.disabled = reduced.matches;
    motion.hidden = !fine.matches && !reduced.matches;
    document.querySelectorAll('[data-tilt],.viewer-image').forEach(resetTilt);
    if (active >= 0) hint();
  }
  motion.addEventListener('click', () => { motionEnabled = !motionEnabled; updateMotion(); });
  reduced.addEventListener('change', updateMotion);
  fine.addEventListener('change', updateMotion);
  updateMotion();
  function bindTilt(target, surface, allowed = () => true) {
    let frame = 0;
    target.addEventListener('pointermove', event => {
      if (!canTilt() || !allowed() || event.pointerType === 'touch' || event.buttons) return;
      const box = target.getBoundingClientRect();
      const x = Math.max(-.5, Math.min(.5, (event.clientX - box.left) / box.width - .5));
      const y = Math.max(-.5, Math.min(.5, (event.clientY - box.top) / box.height - .5));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!canTilt() || !allowed()) return;
        surface.style.setProperty('--rx', `${-y * 12}deg`);
        surface.style.setProperty('--ry', `${x * 12}deg`);
      });
    });
    target.addEventListener('pointerleave', () => { cancelAnimationFrame(frame); resetTilt(surface); });
  }
  document.querySelectorAll('.artwork__open,.deck-card').forEach(target => bindTilt(target, target.querySelector('[data-tilt]')));
  bindTilt(stage, image, () => !stage.classList.contains('is-zoomed') && !gesture);

  for (const filter of filters) {
    const number = filter.dataset.filter === 'All work' ? cards.length : cards.filter(card => card.dataset.category === filter.dataset.filter).length;
    const badge = document.createElement('span'); badge.className = 'filter__count'; badge.setAttribute('aria-hidden', 'true'); badge.textContent = number;
    filter.append(badge);
  }
  function applyFilters(scroll = false) {
    const terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    visible = [];
    cards.forEach((card, index) => {
      const matches = (category === 'All work' || card.dataset.category === category)
        && terms.every(term => normalize(card.dataset.search).includes(term));
      card.hidden = !matches;
      if (matches) visible.push(index);
    });
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter.dataset.filter === category)));
    count.textContent = `${visible.length} of ${cards.length} designs${category === 'All work' ? '' : ' · ' + category}`;
    empty.hidden = visible.length > 0;
    reset.hidden = category === 'All work' && terms.length === 0;
    if (scroll && document.querySelector('#work').getBoundingClientRect().top < 0) {
      document.querySelector('.gallery-grid').scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }
  filters.forEach(filter => filter.addEventListener('click', () => { category = filter.dataset.filter; applyFilters(true); }));
  search.addEventListener('input', () => applyFilters(true));
  function clearFilters() { category = 'All work'; search.value = ''; applyFilters(true); }
  reset.addEventListener('click', () => { clearFilters(); search.focus({ preventScroll: true }); });
  document.querySelector('[data-clear]').addEventListener('click', () => { clearFilters(); filters[0].focus(); });
  applyFilters();
  for (const img of document.querySelectorAll('.artwork__surface img,.deck-card__surface img')) {
    function fallback() { img.hidden = true; img.nextElementSibling.hidden = false; }
    img.addEventListener('error', fallback);
    if (img.complete && !img.naturalWidth) fallback();
  }

  function cancelGesture() {
    if (gesture && stage.hasPointerCapture(gesture.id)) stage.releasePointerCapture(gesture.id);
    gesture = null; stage.classList.remove('is-dragging');
    image.style.removeProperty('--swipe-x'); preview.style.removeProperty('--swipe-x');
  }
  function resetZoom() {
    cancelGesture(); stage.classList.remove('is-zoomed'); stage.scrollTo(0, 0);
    zoom.setAttribute('aria-pressed', 'false'); zoom.textContent = 'Zoom in'; resetTilt(image);
    if (active >= 0) hint();
  }
  function cancelLoad() {
    ++requestVersion; clearTimeout(loadTimer);
    if (loader) { loader.onload = loader.onerror = null; loader.src = ''; loader = null; }
  }
  function imageFailure(version) {
    if (version !== requestVersion || !dialog.open) return;
    clearTimeout(loadTimer); loading.hidden = true; error.hidden = false;
    $('[data-image-error]').textContent = previewReady
      ? 'Full detail couldn’t load. You can still explore the preview.'
      : 'This design couldn’t load. Try again or open the original.';
    zoom.disabled = !(previewReady || fullReady);
  }
  preview.addEventListener('load', () => {
    previewReady = true;
    if (dialog.open && !fullReady) { preview.hidden = false; zoom.disabled = false; }
  });
  preview.addEventListener('error', () => {
    previewReady = false; preview.hidden = true;
    if (!fullReady) zoom.disabled = true;
  });
  function loadImage() {
    cancelLoad(); const version = requestVersion;
    resetZoom(); fullReady = false; previewReady = false;
    image.hidden = true; preview.hidden = false; loading.hidden = false; error.hidden = true; zoom.disabled = true;
    stage.setAttribute('aria-busy', 'true');
    const cardImage = cards[active].querySelector('img');
    preview.alt = cardImage.alt; preview.src = cardImage.getAttribute('src');
    if (preview.complete && preview.naturalWidth) { previewReady = true; zoom.disabled = false; }
    const src = links[active].dataset.full;
    const current = loader = new Image();
    current.onload = async () => {
      try { await current.decode(); } catch { /* onload still proves usable pixels */ }
      if (version !== requestVersion || !dialog.open) return;
      clearTimeout(loadTimer); fullReady = true;
      image.alt = cardImage.alt; image.src = src; image.hidden = false; preview.hidden = true;
      loading.hidden = true; error.hidden = true; zoom.disabled = false; stage.setAttribute('aria-busy', 'false');
    };
    current.onerror = () => { stage.setAttribute('aria-busy', 'false'); imageFailure(version); };
    loadTimer = setTimeout(() => { imageFailure(version); stage.setAttribute('aria-busy', 'false'); }, 15000);
    current.src = src;
  }

  $('[data-retry]').addEventListener('click', loadImage);

  function resetCopy() {
    ++copyVersion; copyPending = false; copy.disabled = false; copy.textContent = 'Copy design link';
    copyStatus.hidden = true; $('[data-copy-fallback]').hidden = true;
  }
  function refreshThumbnails() {
    if (strip.hidden) return;
    strip.replaceChildren();
    for (const index of visible) {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'viewer-thumbnail';
      button.dataset.index = index; button.setAttribute('aria-label', `View ${links[index].dataset.title}`);
      button.setAttribute('aria-current', String(index === active)); button.tabIndex = index === active ? 0 : -1;
      const thumb = document.createElement('img'); thumb.src = cards[index].querySelector('img').getAttribute('src');
      thumb.alt = ''; thumb.loading = 'lazy'; thumb.decoding = 'async'; thumb.draggable = false;
      button.append(thumb); button.addEventListener('click', () => { show(index); strip.querySelector(`[data-index="${index}"]`)?.focus({ preventScroll: true }); });
      strip.append(button);
    }
    strip.querySelector('[aria-current=true]')?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'instant' });
  }
  function updateThumbnailSelection() {
    if (strip.hidden) return;
    strip.querySelectorAll('button').forEach(button => {
      const current = Number(button.dataset.index) === active;
      button.setAttribute('aria-current', String(current)); button.tabIndex = current ? 0 : -1;
    });
    strip.querySelector('[aria-current=true]')?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'instant' });
  }
  browse.addEventListener('click', () => {
    strip.hidden = !strip.hidden; browse.setAttribute('aria-expanded', String(!strip.hidden));
    browse.setAttribute('aria-label', strip.hidden ? 'Show thumbnails' : 'Hide thumbnails');
    if (!strip.hidden) refreshThumbnails();
  });
  strip.addEventListener('keydown', event => {
    const buttons = [...strip.querySelectorAll('button')], position = buttons.indexOf(document.activeElement);
    if (position < 0) return;
    let destination = position;
    if (event.key === 'ArrowLeft') destination = Math.max(0, position - 1);
    else if (event.key === 'ArrowRight') destination = Math.min(buttons.length - 1, position + 1);
    else if (event.key === 'Home') destination = 0;
    else if (event.key === 'End') destination = buttons.length - 1;
    else return;
    event.preventDefault(); event.stopPropagation();
    buttons.forEach((button, index) => { button.tabIndex = index === destination ? 0 : -1; });
    buttons[destination].focus();
  });
  function show(index, changeHash = true) {
    if (index < 0 || index >= cards.length) return;
    const wasOpen = dialog.open;
    active = index;
    const link = links[index], card = cards[index];
    more.open = false; resetCopy();
    if (!visible.includes(index)) { category = 'All work'; search.value = ''; applyFilters(); refreshThumbnails(); }
    const position = visible.indexOf(index);
    $('#viewer-title').textContent = link.dataset.title;
    $('#viewer-category').textContent = `${card.dataset.category}${category === 'All work' ? ' · All work' : ' · Filtered collection'}`;
    $('[data-full-link]').href = link.dataset.full;
    $('[data-source-link]').href = $('[data-error-source]').href = link.dataset.source;
    $('[data-source-file]').textContent = `Original file: ${card.dataset.sourceFile}`;
    previous.disabled = position <= 0; next.disabled = position >= visible.length - 1;
    $('.viewer-counter').textContent = `${position + 1} / ${visible.length}`;
    $('[data-viewer-status]').textContent = `${link.dataset.title}. ${position + 1} of ${visible.length} designs. ${card.dataset.category}.`;
    const url = location.origin + base() + '#view=' + encodeURIComponent(card.dataset.id);
    $('[data-enquire]').href = `mailto:mpapakojo@gmail.com?subject=${encodeURIComponent('Design project · ' + link.dataset.title)}&body=${encodeURIComponent('Hi Papa Kojo,\n\nI’d like to discuss a project with a direction similar to this design:\n' + link.dataset.title + '\n' + url + '\n\nMy project: ')}`;
    if (!wasOpen) { document.body.classList.add('viewer-open'); dialog.showModal(); }
    loadImage(); updateThumbnailSelection(); hint();
    if (document.activeElement === next && next.disabled) previous.focus();
    if (document.activeElement === previous && previous.disabled) next.focus();
    if (changeHash) {
      const path = base() + '#view=' + encodeURIComponent(card.dataset.id);
      if (!wasOpen) {
        priorHash = location.hash;
        history.pushState({ pkmDesignViewer: true, pkmDesignPriorHash: priorHash }, '', path); pushed = true;
      } else history.replaceState(history.state, '', path);
    }
  }
  function closeInternal() {
    if (!dialog.open) return;
    cancelLoad(); more.open = false; strip.hidden = true;
    browse.setAttribute('aria-expanded', 'false'); browse.setAttribute('aria-label', 'Show thumbnails'); resetCopy();
    dialog.close(); document.body.classList.remove('viewer-open'); resetTilt(image); resetZoom();
    if (scrollToOpener) opener?.closest('.artwork')?.scrollIntoView({ block: 'center', behavior: 'instant' });
    opener?.focus({ preventScroll: true }); scrollToOpener = false; active = -1;
  }
  function requestClose() {
    closeInternal();
    if (pushed) { pushed = false; history.back(); }
    else if (location.hash.startsWith('#view=')) history.replaceState(null, '', base() + priorHash);
  }
  links.forEach((link, index) => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault(); scrollToOpener = false; opener = link; show(index);
  }));
  document.querySelectorAll('[data-deck-id]').forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault(); scrollToOpener = false; opener = link; show(cards.findIndex(card => card.dataset.id === link.dataset.deckId));
  }));
  function move(delta) {
    const destination = visible.indexOf(active) + delta;
    if (destination >= 0 && destination < visible.length) { show(visible[destination]); return true; }
    hint(delta > 0 ? 'Last design in this collection · Swipe right to go back' : 'First design in this collection · Swipe left to continue');
    return false;
  }
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  zoom.addEventListener('click', () => {
    cancelGesture(); const enabled = !stage.classList.contains('is-zoomed');
    stage.classList.toggle('is-zoomed', enabled); zoom.setAttribute('aria-pressed', String(enabled));
    zoom.textContent = enabled ? 'Fit to screen' : 'Zoom in'; resetTilt(image); stage.scrollTo(0, 0); hint();
  });

  // Fit-to-screen gestures. Vertical scroll, pinch and zoomed panning stay native.
  stage.addEventListener('pointerdown', event => {
    if (!event.isPrimary) { cancelGesture(); return; }
    if (event.button !== 0 || stage.classList.contains('is-zoomed') || !(fullReady || previewReady)
      || event.target.closest('button,a,input') || more.open) return;
    cancelGesture();
    gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, dx: 0, dy: 0, index: active, axis: null };
    stage.setPointerCapture(event.pointerId); resetTilt(image);
  });
  stage.addEventListener('pointermove', event => {
    if (!gesture || gesture.id !== event.pointerId) return;
    gesture.dx = event.clientX - gesture.x; gesture.dy = event.clientY - gesture.y;
    const x = Math.abs(gesture.dx), y = Math.abs(gesture.dy);
    if (!gesture.axis && Math.max(x, y) > 10) {
      if (y > x * .85) { cancelGesture(); return; }
      if (x > y * 1.4) gesture.axis = 'horizontal';
    }
    if (gesture.axis === 'horizontal') {
      stage.classList.add('is-dragging');
      if (!reduced.matches) {
        const dx = Math.max(-42, Math.min(42, gesture.dx * .2));
        image.style.setProperty('--swipe-x', `${dx}px`); preview.style.setProperty('--swipe-x', `${dx}px`);
      }
    }
  });
  stage.addEventListener('pointerup', event => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const state = gesture;
    // Include the final position, even if the browser coalesced preceding moves.
    state.dx = event.clientX - state.x; state.dy = event.clientY - state.y;
    cancelGesture();
    if (active === state.index && Math.abs(state.dx) >= 48 && Math.abs(state.dx) > Math.abs(state.dy) * 1.4) move(state.dx < 0 ? 1 : -1);
  });
  stage.addEventListener('pointercancel', cancelGesture);
  stage.addEventListener('lostpointercapture', () => { if (gesture) cancelGesture(); });
  stage.addEventListener('dragstart', event => event.preventDefault());
  stage.addEventListener('wheel', event => {
    if (event.ctrlKey || event.metaKey || stage.classList.contains('is-zoomed') || more.open || !(fullReady || previewReady)) return;
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) * 1.4 || Math.abs(event.deltaX) < 2) return;
    event.preventDefault();
    const now = performance.now();
    if (now - wheelAt > 240) { wheelTotal = 0; wheelLocked = false; }
    wheelAt = now;
    if (wheelLocked) return;
    const delta = event.deltaX * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? stage.clientWidth : 1);
    if (wheelTotal && Math.sign(wheelTotal) !== Math.sign(delta)) wheelTotal = 0;
    wheelTotal += delta;
    if (Math.abs(wheelTotal) >= 70) { wheelLocked = true; move(wheelTotal > 0 ? 1 : -1); }
  }, { passive: false });

  copy.addEventListener('click', async () => {
    if (copyPending || active < 0) return;
    const version = ++copyVersion, url = shareUrl(); copyPending = true;
    copy.disabled = true; copy.textContent = 'Copying…'; copyStatus.hidden = true; $('[data-copy-fallback]').hidden = true;
    try {
      if (!navigator.clipboard?.writeText) throw Error('Clipboard unavailable');
      await navigator.clipboard.writeText(url);
      if (version !== copyVersion || !dialog.open) return;
      copy.textContent = 'Link copied'; copyStatus.textContent = 'Design link copied. Ready to share.'; copyStatus.hidden = false;
    } catch {
      if (version !== copyVersion || !dialog.open) return;
      copy.textContent = 'Try copying again'; copyStatus.textContent = 'Copying wasn’t available. You can select the link below.'; copyStatus.hidden = false;
      $('[data-copy-fallback]').hidden = false; const field = $('#design-share-url'); field.value = url; field.focus(); field.select();
    } finally {
      if (version === copyVersion) { copyPending = false; copy.disabled = false; }
    }
  });
  document.addEventListener('pointerdown', event => {
    if (more.open && !more.contains(event.target)) more.open = false;
  });
  $('[data-close]').addEventListener('click', requestClose);
  dialog.addEventListener('cancel', event => { event.preventDefault(); requestClose(); });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) requestClose();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Escape' && more.open) { event.preventDefault(); more.open = false; more.querySelector('summary').focus(); return; }
    if (event.key === 'Tab') {
      const controls = [...dialog.querySelectorAll('button:not([disabled]),a[href],summary,input')]
        .filter(control => control.tabIndex >= 0 && control.checkVisibility());
      const first = controls[0], last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      return;
    }
    if (event.target.closest('input,textarea,.viewer-thumbnails,.viewer-more') || event.altKey || event.ctrlKey || event.metaKey || stage.classList.contains('is-zoomed')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); }
  });
  function syncHash() {
    pushed = history.state?.pkmDesignViewer === true; priorHash = history.state?.pkmDesignPriorHash || '';
    if (!location.hash.startsWith('#view=')) { pushed = false; closeInternal(); return; }
    const id = location.hash.slice(6), index = cards.findIndex(card => card.dataset.id === id);
    if (index !== -1) { if (!dialog.open) { opener = links[index]; scrollToOpener = true; } show(index, false); }
    else { pushed = false; closeInternal(); }
  }
  window.addEventListener('popstate', syncHash);
  window.addEventListener('hashchange', syncHash);
  syncHash();
})();
