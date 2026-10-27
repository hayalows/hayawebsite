/* Field Notes infinite canvas + perspective reading moment.
   Interaction patterns adapted from useLayouts Infinite Canvas and
   Perspective Text Scroll (https://uselayouts.com/docs/components/).
   Core links stay in HTML when JavaScript or motion is unavailable. */
(() => {
  "use strict";
  const section = document.getElementById("close-reads");
  const sourceList = document.getElementById("featured-list");
  if (!section || !sourceList) return;
  const sourceCards = [...sourceList.querySelectorAll(".featured-card")];
  const items = sourceCards.map(card => {
    const anchor = card.querySelector("a");
    const name = card.querySelector(".featured-card__name strong")?.textContent?.trim();
    const img = card.querySelector("img");
    return { href: anchor?.getAttribute("href"), name, img: img?.getAttribute("src") || "", initials: name?.split(/\s+/).map(word => word[0]).slice(0, 2).join("") || "FN" };
  }).filter(item => item.href && item.name);
  if (items.length < 8) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const shell = document.createElement("div");
  shell.className = "fn-infinite";
  shell.innerHTML = '<div class="fn-infinite__top"><p class="fn-infinite__intro">Move through the work.</p><div class="fn-infinite__tools"><button type="button" class="fn-infinite__reset">Reset view <span aria-hidden="true">↺</span></button><button type="button" class="fn-infinite__toggle" aria-pressed="false">View as list <span aria-hidden="true">↗</span></button></div></div><div class="fn-infinite__viewport" role="region" tabindex="0" aria-label="Selected portfolio canvas. Drag to move or use arrow keys. Links open individual field notes."><div class="fn-infinite__surface"></div><span class="fn-infinite__guide" aria-hidden="true">Drag to explore <span>·</span> Arrow keys to move</span></div><p class="fn-infinite__mobile-tip">Swipe sideways to explore, or view as a list.</p>';
  section.querySelector(".section-head")?.after(shell);
  const viewport = shell.querySelector(".fn-infinite__viewport");
  const surface = shell.querySelector(".fn-infinite__surface");
  const COLS = 9, ROWS = 7, cells = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const item = items[(row * 4 + col) % items.length];
      const link = document.createElement("a");
      link.className = "fn-infinite__tile";
      link.href = item.href;
      link.setAttribute("aria-label", "Read field note about " + item.name);
      const picture = document.createElement("span");
      picture.className = "fn-infinite__picture";
      const fallback = document.createElement("span");
      fallback.className = "fn-infinite__initials";
      fallback.textContent = item.initials;
      picture.append(fallback);
      if (item.img) {
        const img = document.createElement("img");
        img.src = item.img;
        img.alt = "";
        img.loading = row >= 2 || col >= 5 ? "lazy" : "eager";
        img.decoding = "async";
        img.referrerPolicy = "no-referrer";
        img.addEventListener("error", () => img.remove(), { once:true });
        picture.append(img);
      }
      const label = document.createElement("span");
      label.className = "fn-infinite__label";
      label.textContent = item.name;
      const arrow = document.createElement("span");
      arrow.className = "fn-infinite__arrow";
      arrow.textContent = "↗";
      arrow.setAttribute("aria-hidden", "true");
      link.append(picture, label, arrow);
      surface.append(link);
      cells.push({ link, col, row });
    }
  }
  let dx = 0, dy = 0, width = 0, height = 0, stepX = 0, stepY = 0, baseX = 0, baseY = 0;
  let scheduled = false;
  const wrap = (n, period) => ((n % period) + period) % period;
  const paint = () => {
    scheduled = false;
    if (!stepX || !stepY) return;
    const xperiod = COLS * stepX, yperiod = ROWS * stepY;
    const ox = wrap(dx, xperiod), oy = wrap(dy, yperiod);
    for (const cell of cells) {
      let x = baseX + cell.col * stepX + ox;
      let y = baseY + cell.row * stepY + oy;
      if (x > width + stepX) x -= xperiod;
      if (y > height + stepY) y -= yperiod;
      cell.link.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
    }
  };
  const schedule = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(paint); } };
  const measure = () => {
    width = viewport.clientWidth;
    height = viewport.clientHeight;
    stepX = cells[0].link.offsetWidth + (width <= 600 ? 13 : 18);
    stepY = cells[0].link.offsetHeight + (width <= 600 ? 13 : 18);
    baseX = (width - COLS * stepX) / 2;
    baseY = (height - ROWS * stepY) / 2;
    schedule();
  };
  let activePointer = null, dragging = false, startX = 0, startY = 0, lastX = 0, lastY = 0;
  let velocityX = 0, velocityY = 0, inertia = 0, ignoreClickUntil = 0;
  const stopInertia = () => { cancelAnimationFrame(inertia); inertia = 0; };
  const runInertia = () => {
    if (reduced.matches) return;
    const step = () => {
      velocityX *= .91; velocityY *= .91;
      if (Math.abs(velocityX) + Math.abs(velocityY) < .38) { inertia = 0; return; }
      dx += velocityX; dy += velocityY; schedule();
      inertia = requestAnimationFrame(step);
    };
    if (Math.abs(velocityX) + Math.abs(velocityY) > 1.1) inertia = requestAnimationFrame(step);
  };
  viewport.addEventListener("pointerdown", event => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    stopInertia();
    activePointer = event.pointerId;
    dragging = false;
    startX = lastX = event.clientX;
    startY = lastY = event.clientY;
    velocityX = velocityY = 0;
  });
  viewport.addEventListener("pointermove", event => {
    if (activePointer !== event.pointerId) return;
    if (!dragging && Math.hypot(event.clientX - startX, event.clientY - startY) > 7) {
      dragging = true;
      viewport.classList.add("is-dragging");
      try { viewport.setPointerCapture(event.pointerId); } catch {}
    }
    if (!dragging) return;
    const shiftX = event.clientX - lastX, shiftY = event.clientY - lastY;
    dx += shiftX; dy += shiftY;
    velocityX = shiftX; velocityY = shiftY;
    lastX = event.clientX; lastY = event.clientY;
    schedule();
  }, { passive:true });
  const finish = event => {
    if (activePointer !== event.pointerId) return;
    activePointer = null;
    if (dragging) {
      ignoreClickUntil = performance.now() + 300;
      viewport.classList.remove("is-dragging");
      try { viewport.releasePointerCapture(event.pointerId); } catch {}
      runInertia();
    }
    dragging = false;
  };
  viewport.addEventListener("pointerup", finish);
  viewport.addEventListener("pointercancel", finish);
  viewport.addEventListener("lostpointercapture", () => { activePointer = null; dragging = false; viewport.classList.remove("is-dragging"); });
  viewport.addEventListener("click", event => {
    if (performance.now() < ignoreClickUntil) { event.preventDefault(); event.stopPropagation(); }
  }, true);
  viewport.addEventListener("wheel", event => {
    // Ordinary vertical wheel scrolling must still move down the page.
    if (!event.shiftKey && Math.abs(event.deltaX) < Math.abs(event.deltaY) * 1.15) return;
    event.preventDefault();
    stopInertia();
    dx -= event.deltaX || event.deltaY;
    dy -= event.shiftKey ? 0 : event.deltaY;
    schedule();
  }, { passive:false });
  viewport.addEventListener("keydown", event => {
    const amounts = { ArrowLeft:[68,0], ArrowRight:[-68,0], ArrowUp:[0,68], ArrowDown:[0,-68] };
    if (amounts[event.key]) {
      event.preventDefault(); stopInertia();
      dx += amounts[event.key][0]; dy += amounts[event.key][1]; schedule();
    } else if (event.key === "Home" && event.target === viewport) {
      event.preventDefault(); dx = dy = 0; schedule();
    }
  });
  shell.querySelector(".fn-infinite__reset").addEventListener("click", () => {
    stopInertia(); dx = dy = 0; schedule(); viewport.focus({ preventScroll:true });
  });
  const toggle = shell.querySelector(".fn-infinite__toggle");
  toggle.addEventListener("click", () => {
    const open = section.classList.toggle("fn-list-open");
    toggle.setAttribute("aria-pressed", String(open));
    toggle.firstChild.textContent = open ? "Explore canvas " : "View as list ";
    if (!open) { measure(); viewport.focus({ preventScroll:true }); }
    else sourceList.querySelector("a")?.focus({ preventScroll:true });
  });
  if ("ResizeObserver" in window) new ResizeObserver(measure).observe(viewport);
  else window.addEventListener("resize", measure, { passive:true });
  measure();
  document.documentElement.classList.add("fn-canvas-ready");

  const perspective = document.getElementById("fn-perspective");
  const words = perspective?.querySelector(".fn-perspective__headline");
  if (!perspective || !words || reduced.matches) return;
  // Adapted from useLayouts' five-keyframe scroll interpolation.
  const keys = [
    [0, 28, 210, .42],
    [.19, 16, 94, .85],
    [.48, 0, 0, 1],
    [.80, -15, -84, .85],
    [1, -25, -150, .42]
  ];
  let scrollScheduled = false;
  const interpolate = p => {
    for (let i = 0; i < keys.length - 1; i++) {
      if (p > keys[i + 1][0]) continue;
      const a = keys[i], b = keys[i + 1], t = Math.max(0, Math.min(1, (p - a[0]) / (b[0] - a[0])));
      return [a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t, a[3] + (b[3] - a[3]) * t];
    }
    return keys[keys.length - 1].slice(1);
  };
  const updateScroll = () => {
    scrollScheduled = false;
    const rect = perspective.getBoundingClientRect();
    const usable = Math.max(1, rect.height - innerHeight);
    const p = Math.max(0, Math.min(1, -rect.top / usable));
    const [angle, translate, opacity] = interpolate(p);
    words.style.transform = `perspective(850px) rotateX(${angle.toFixed(2)}deg) translate3d(0,${translate.toFixed(1)}px,0)`;
    words.style.opacity = String(opacity);
  };
  const onScroll = () => { if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(updateScroll); } };
  window.addEventListener("scroll", onScroll, { passive:true });
  window.addEventListener("resize", onScroll, { passive:true });
  updateScroll();
})();