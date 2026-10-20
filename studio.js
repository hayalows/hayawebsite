/* Build a draft, never send a message on a visitor's behalf. */
(() => {
  const form = document.querySelector('#quick-enquiry');
  if (form) {
    const cfg = window.HAYALOWS_SITE_CONFIG || {};
    const waUrl = cfg.whatsappUrl || 'https://wa.me/233506201345';
    const email = cfg.email || 'info@hayalows.com';
    const card = form.closest('.eb');
    const panels = [...form.querySelectorAll('[data-step]')];
    const count = card.querySelector('[data-eb-count]');
    const bar = card.querySelector('[data-eb-bar]');
    const summary = card.querySelector('[data-eb-summary]');
    const back = form.querySelector('[data-eb-back]');
    const preview = form.querySelector('#quick-preview');
    const status = form.querySelector('#quick-status');
    const reset = form.querySelector('[data-quick-reset]');
    let step = 1, edited = false;
    const picked = name => form.querySelector(`[name="${name}"]:checked`);
    function compose() {
      const name = form.elements.name.value.trim();
      const place = form.elements.place.value.trim() || 'my area';
      const business = picked('business')?.value || 'small business';
      const goal = picked('goal')?.value || 'help working out what to fix first';
      const article = /^[aeiou]/i.test(business) ? 'an' : 'a';
      return `${name ? `Hello Hayalows, I'm ${name}.` : 'Hello Hayalows.'} I run ${article} ${business} in ${place} and I'd like ${goal}. Can we talk about what would help?`;
    }
    function syncMessage(force) {
      if (force || !edited) { preview.value = compose(); edited = false; reset.hidden = true; }
    }
    function renderSummary() {
      summary.replaceChildren();
      [['business', 1], ['goal', 2]].forEach(([n, s]) => {
        const input = picked(n);
        if (!input || step <= s) return;
        const chip = document.createElement('button');
        chip.type = 'button'; chip.className = 'eb-pill';
        chip.textContent = input.nextElementSibling.textContent;
        chip.setAttribute('aria-label', `${chip.textContent}, edit`);
        chip.addEventListener('click', () => go(s));
        summary.append(chip);
      });
      summary.hidden = !summary.children.length;
    }
    function go(n, focus = true) {
      step = n;
      panels.forEach(p => { p.hidden = Number(p.dataset.step) !== n; });
      count.textContent = n;
      bar.style.width = `${(n / 3) * 100}%`;
      back.hidden = n === 1;
      status.textContent = '';
      renderSummary();
      if (n === 3) syncMessage(false);
      if (focus) {
        const panel = panels[n - 1];
        const target = n === 3 ? form.querySelector('.eb-send') : (panel.querySelector('input:checked') || panel.querySelector('input'));
        target?.focus({ preventScroll: true });
      }
    }
    // click (not change) so re-tapping an already chosen option still moves forward
    form.addEventListener('click', e => {
      const t = e.target;
      if (!(t instanceof HTMLInputElement) || t.type !== 'radio') return;
      if (t.name === 'business' && step === 1) setTimeout(() => go(2), 160);
      else if (t.name === 'goal' && step === 2) setTimeout(() => go(3), 160);
    });
    form.addEventListener('keydown', e => {
      const t = e.target;
      if (e.key === 'Enter' && t instanceof HTMLInputElement && t.type === 'radio') { e.preventDefault(); t.click(); }
    });
    form.addEventListener('input', e => {
      if (e.target === preview) { edited = preview.value.trim() !== compose(); reset.hidden = !edited; }
      else if (e.target.name === 'name' || e.target.name === 'place') syncMessage(false);
      status.textContent = '';
    });
    reset.addEventListener('click', () => { syncMessage(true); preview.focus(); });
    back.addEventListener('click', () => go(step - 1));
    const text = () => preview.value.trim() || compose();
    function say(msg, link) {
      status.replaceChildren(document.createTextNode(msg));
      if (link) { const a = document.createElement('a'); a.href = link; a.target = '_blank'; a.rel = 'noopener'; a.textContent = 'Open WhatsApp'; status.append(' ', a); }
    }
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (step !== 3) return;
      const url = `${waUrl}?text=${encodeURIComponent(text())}`;
      const w = window.open(url, '_blank');
      if (w) { w.opener = null; say('Your message is ready in WhatsApp. Tap send there.'); }
      else say('Your browser blocked the new tab.', url);
    });
    form.querySelector('[data-quick-email]').addEventListener('click', () => {
      location.href = `mailto:${email}?subject=${encodeURIComponent('Project enquiry from hayalows.com')}&body=${encodeURIComponent(text())}`;
      say(`Opening your email app. If nothing happens, write to ${email}.`);
    });
    form.querySelector('[data-quick-copy]').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(text()); say('Copied. Paste it anywhere.'); }
      catch { preview.select(); say('Select the message and copy it.'); }
    });
    go(1, false);
  }
  const enquiry = document.querySelector('#contact-form');
  function revealEnquiry() {
    if (location.hash === '#contact-form' && enquiry) {
      const disclosure = enquiry.closest('#guided-enquiry');
      if (disclosure) disclosure.open = true;
    }
  }
  revealEnquiry();
  window.addEventListener('hashchange', revealEnquiry);
  const help = document.querySelector('#help-type');
  if (help && location.pathname.startsWith('/contact')) {
    const types = { business_clarity:'Business clarity or systems', brand_communication:'Brand and communication', websites_tools:'Website or digital tool' };
    const selected = types[new URLSearchParams(location.search).get('service')];
    if (selected) help.value = selected;
  }
  const current = document.querySelector(`.site-nav a[href="${location.pathname}"]`);
  current?.setAttribute('aria-current','page');
})();
