/* Portfolio Field Notes: useLayouts-inspired Infinite Canvas and Perspective Text Scroll.
   Original references: https://uselayouts.com/docs/components/infinite-grid
   and https://uselayouts.com/docs/components/perspective-text-scroll
   Adapted to existing static archive: no new framework, real internal links, no-JS fallback. */
(() => {
  "use strict";
  const section = document.getElementById("close-reads");
  const selectedList = document.getElementById("featured-list");
  if (!section || !selectedList) return;
  const entries = [...selectedList.querySelectorAll(".featured-card")].map((card, index) => {
    const anchor = card.querySelector("a");
    const name = card.querySelector(".featured-card__name strong")?.textContent?.trim();
    const image = card.querySelector("img")?.getAttribute("src") || "";
    const fallback = name?.split(/\s+/).map(part => part[0]).slice(0, 2).join("") || "FN";
    return { href: anchor?.getAttribute("href") || "", name, image, fallback, index };
  }).filter(entry => entry.href && entry.name);
  if (entries.length < 8) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const gallery = document.createElement("div");
  gallery.className = "fn-infinite";
  gallery.innerHTML = `
    <div class="fn-infinite__top">
      <p class="fn-infinite__intro">A closer look at twelve portfolios.</p>
      <div class="fn-infinite__tools">
        <button type="button" class="fn-infinite__reset" aria-label="Return canvas to the starting position">Reset <span aria-hidden="true">↺</span></button>
        <button type="button" class="fn-infinite__toggle" aria-pressed="false">View all 12 <span aria-hidden="true">↗</span></button>
      </div>
    </div>
    <div class="fn-infinite__viewport" role="region" tabindex="0" aria-label="Interactive portfolio canvas. Drag to explore in any direction. Use arrow keys to move through the canvas, or View all 12 for a regular grid.">
      <div class="fn-infinite__matrix"></div>
      <span class="fn-infinite__hint" aria-hidden="true">Drag to explore <span>↔</span></span>
    </div>
    <p class="fn-infinite__mobile-tip">Swipe across the gallery, or choose View all 12.</p>`;
  section.querySelector(".section-head")?.after(gallery);
  const viewport = gallery.querySelector(".fn-infinite__viewport");
  const matrix = gallery.querySelector(".fn-infinite__matrix");
  const COLS = 4;

  // Source canvas repeats one coherent grid block in a 3x3 matrix.
  // Only the middle block is presented to assistive technology.
  for (let blockIndex = 0; blockIndex < 9; blockIndex++) {
    const centre = blockIndex === 4;
    const block = document.createElement("div");
    block.className = "fn-infinite__block";
    if (centre) block.dataset.center = "true";
    else block.setAttribute("aria-hidden", "true");
    for (const item of entries) {
      const link = document.createElement("a");
      link.href = item.href;
      link.className = "fn-infinite__tile";
      link.setAttribute("aria-label", "Read field note about " + item.name);
      link.tabIndex = centre ? 0 : -1;
      link.draggable = false;
      const picture = document.createElement("span");
      picture.className = "fn-infinite__picture";
      const fallback = document.createElement("span");
      fallback.className = "fn-infinite__fallback";
      fallback.textContent = item.fallback;
      picture.append(fallback);
      if (item.image) {
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = "";
        img.draggable = false;
        img.loading = centre && item.index < 8 ? "eager" : "lazy";
        img.decoding = "async";
        img.referrerPolicy = "no-referrer";
        img.addEventListener("error", () => img.remove(), { once: true });
        picture.append(img);
      }
      const meta = document.createElement("span");
      meta.className = "fn-infinite__meta";
      const number = document.createElement("span");
      number.className = "fn-infinite__number";
      number.textContent = String(item.index + 1).padStart(2, "0");
      number.setAttribute("aria-hidden", "true");
      const title = document.createElement("span");
      title.className = "fn-infinite__label";
      title.textContent = item.name;
      meta.append(number, title);
      link.append(picture, meta);
      block.append(link);
    }
    matrix.append(block);
  }
  const block = matrix.querySelector('[data-center="true"]');
  let blockW = 0, blockH = 0, initialized = false;
  const current = { x: 0, y: 0 }, target = { x: 0, y: 0 }, velocity = { x: 0, y: 0 };
  let frame = 0, pointer = null, moved = false, dragDistance = 0, dragStart = { x: 0, y: 0 };
  let dragTarget = { x: 0, y: 0 }, previous = { x: 0, y: 0, t: 0 }, suppressClickBefore = 0;
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  const place = () => {
    matrix.style.transform = `translate3d(${current.x.toFixed(2)}px,${current.y.toFixed(2)}px,0) skew(${clamp(velocity.x * .06, -2, 2).toFixed(2)}deg,${clamp(velocity.y * .06, -2, 2).toFixed(2)}deg)`;
  };
  const wrapPosition = () => {
    if (!blockW || !blockH) return;
    for (const axis of ["x", "y"]) {
      const size = axis === "x" ? blockW : blockH;
      while (current[axis] < -size * 1.75) {
        current[axis] += size; target[axis] += size; dragTarget[axis] += size;
      }
      while (current[axis] > -size * .25) {
        current[axis] -= size; target[axis] -= size; dragTarget[axis] -= size;
      }
    }
  };
  const tick = () => {
    frame = 0;
    const dragging = pointer !== null && moved;
    if (!dragging && !reducedMotion.matches) {
      velocity.x *= .92; velocity.y *= .92;
      target.x += velocity.x; target.y += velocity.y;
    } else if (!dragging) {
      velocity.x = velocity.y = 0;
    }
    const factor = reducedMotion.matches ? 1 : dragging ? .19 : .12;
    current.x += (target.x - current.x) * factor;
    current.y += (target.y - current.y) * factor;
    wrapPosition();
    place();
    const stillMoving = Math.abs(target.x - current.x) + Math.abs(target.y - current.y) > .06
      || Math.abs(velocity.x) + Math.abs(velocity.y) > .06;
    if (stillMoving) frame = requestAnimationFrame(tick);
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(tick); };
  const home = () => {
    // Introduce the first portfolio on phones, not a clipped middle column.
    // Begin each viewport at a complete image row, leaving room to pan.
    const compact = viewport.clientWidth <= 600;
    const firstCard = block.querySelector(".fn-infinite__tile");
    const cardWidth = firstCard?.offsetWidth || 240;
    const padding = parseFloat(getComputedStyle(block).paddingLeft) || 0;
    return {
      x: compact
        ? -blockW + (viewport.clientWidth - cardWidth) / 2 - padding
        : -blockW + (viewport.clientWidth - blockW) / 2,
      y: -blockH - 8
    };
  };
  const measure = () => {
    if (!block || !viewport.clientWidth) return;
    blockW = block.offsetWidth; blockH = block.offsetHeight;
    if (!blockW || !blockH) return;
    if (!initialized) {
      const origin = home();
      current.x = target.x = origin.x;
      current.y = target.y = origin.y;
      initialized = true;
    }
    wrapPosition(); place();
  };

  viewport.addEventListener("pointerdown", event => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointer = event.pointerId;
    moved = false; dragDistance = 0;
    velocity.x = velocity.y = 0;
    dragStart = { x: event.clientX, y: event.clientY };
    dragTarget = { ...target };
    previous = { x: event.clientX, y: event.clientY, t: performance.now() };
  });
  viewport.addEventListener("pointermove", event => {
    if (event.pointerId !== pointer) return;
    const dist = Math.hypot(event.clientX - dragStart.x, event.clientY - dragStart.y);
    if (!moved && dist < 7) return;
    if (!moved) {
      moved = true; viewport.classList.add("is-dragging");
      try { viewport.setPointerCapture(event.pointerId); } catch {}
    }
    dragDistance = dist;
    const now = performance.now(), dt = Math.max(now - previous.t, 1);
    const vx = ((event.clientX - previous.x) / dt) * 10;
    const vy = ((event.clientY - previous.y) / dt) * 10;
    velocity.x = velocity.x * .3 + vx * .7;
    velocity.y = velocity.y * .3 + vy * .7;
    previous = { x: event.clientX, y: event.clientY, t: now };
    target.x = dragTarget.x + (event.clientX - dragStart.x) * .9;
    target.y = dragTarget.y + (event.clientY - dragStart.y) * .9;
    schedule();
  }, { passive: true });
  const finish = event => {
    if (pointer !== event.pointerId) return;
    pointer = null;
    if (moved && dragDistance > 7) suppressClickBefore = performance.now() + 350;
    viewport.classList.remove("is-dragging");
    if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    moved = false; schedule();
  };
  viewport.addEventListener("pointerup", finish);
  viewport.addEventListener("pointercancel", finish);
  viewport.addEventListener("click", event => {
    if (event.detail !== 0 && performance.now() < suppressClickBefore) {
      event.preventDefault(); event.stopImmediatePropagation();
    }
  }, true);
  viewport.addEventListener("wheel", event => {
    // Preserve ordinary vertical page scrolling. Shift+wheel and sideways
    // trackpad input pan the canvas, without trapping the archive below.
    if (!event.shiftKey && Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
    event.preventDefault();
    const x = (event.deltaX || event.deltaY) * -.65;
    const y = event.shiftKey ? 0 : event.deltaY * -.5;
    target.x += x; target.y += y;
    velocity.x = x * .3; velocity.y = y * .3;
    schedule();
  }, { passive: false });
  viewport.addEventListener("keydown", event => {
    if (event.target !== viewport) return;
    const dir = { ArrowLeft: [95, 0], ArrowRight: [-95, 0], ArrowUp: [0, 95], ArrowDown: [0, -95] };
    if (dir[event.key]) {
      event.preventDefault();
      target.x += dir[event.key][0]; target.y += dir[event.key][1];
      velocity.x = velocity.y = 0; schedule();
    }
    if (event.key === "Home") {
      event.preventDefault();
      target.x = -blockW + (viewport.clientWidth - blockW) / 2;
      target.y = -blockH + (viewport.clientHeight - blockH) / 2;
      velocity.x = velocity.y = 0; schedule();
    }
  });
  gallery.querySelector(".fn-infinite__reset").addEventListener("click", () => {
    const origin = home();
    target.x = origin.x; target.y = origin.y;
    velocity.x = velocity.y = 0; schedule();
    viewport.focus({ preventScroll: true });
  });
  const toggle = gallery.querySelector(".fn-infinite__toggle");
  toggle.addEventListener("click", () => {
    const open = section.classList.toggle("fn-list-open");
    toggle.setAttribute("aria-pressed", String(open));
    toggle.firstChild.textContent = open ? "Explore canvas " : "View all 12 ";
    if (open) selectedList.querySelector("a")?.focus({ preventScroll: true });
    else { measure(); viewport.focus({ preventScroll: true }); }
  });
  if ("ResizeObserver" in window) new ResizeObserver(measure).observe(viewport);
  else window.addEventListener("resize", measure, { passive: true });
  measure();
  document.documentElement.classList.add("fn-canvas-ready");

  const perspective = document.getElementById("fn-perspective");
  const text = perspective?.querySelector(".fn-perspective__headline");
  if (!perspective || !text || reducedMotion.matches) return;
  // Source's five-stage pitch / translation / depth model; shortened passage
  // duration to avoid a five-screen interruption to the archive.
  const keys = [
    { p: 0, rx: 38, y: 280, z: -40, opacity: .25 },
    { p: .14, rx: 24, y: 125, z: 0, opacity: 1 },
    { p: .5, rx: 0, y: 0, z: 30, opacity: 1 },
    { p: .85, rx: -22, y: -140, z: 45, opacity: 1 },
    { p: 1, rx: -34, y: -270, z: 55, opacity: .2 }
  ];
  const interpolate = p => {
    for (let i = 0; i < keys.length - 1; i++) {
      const a = keys[i], b = keys[i + 1];
      if (p <= b.p) {
        const t = clamp((p - a.p) / (b.p - a.p), 0, 1);
        return { rx: a.rx + (b.rx - a.rx) * t, y: a.y + (b.y - a.y) * t,
          z: a.z + (b.z - a.z) * t, opacity: a.opacity + (b.opacity - a.opacity) * t };
      }
    }
    return keys[keys.length - 1];
  };
  let progress = 0, destination = 0, perspectiveFrame = 0;
  const update = () => {
    perspectiveFrame = 0;
    progress += (destination - progress) * .095;
    const pose = interpolate(progress);
    text.style.transform = `rotateX(${pose.rx.toFixed(2)}deg) translate3d(0,${pose.y.toFixed(1)}px,${pose.z.toFixed(1)}px)`;
    text.style.opacity = pose.opacity.toFixed(3);
    if (Math.abs(destination - progress) > .001) perspectiveFrame = requestAnimationFrame(update);
  };
  const onScroll = () => {
    const rect = perspective.getBoundingClientRect();
    const travel = Math.max(1, rect.height - innerHeight);
    destination = clamp(-rect.top / travel, 0, 1);
    if (!perspectiveFrame) perspectiveFrame = requestAnimationFrame(update);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
})();