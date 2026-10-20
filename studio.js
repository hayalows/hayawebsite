/* Build a draft, never send a message on a visitor's behalf. */
(() => {
  const form = document.querySelector('#quick-enquiry');
  if (form) {
    const cfg = window.HAYALOWS_SITE_CONFIG || {};
    const waUrl = cfg.whatsappUrl || 'https://wa.me/233506201345';
    const email = cfg.email || 'info@hayalows.com';
    const preview = form.querySelector('#quick-preview');
    const status = form.querySelector('#quick-status');
    const reset = form.querySelector('[data-quick-reset]');
    let edited = false;
    const val = name => (form.querySelector(`[name="${name}"]:checked`) || form.elements[name] || {}).value || '';
    function compose() {
      const name = (form.elements.name.value || '').trim();
      const place = (form.elements.place.value || '').trim() || 'my area';
      const business = val('business');
      const article = /^[aeiou]/i.test(business) ? 'an' : 'a';
      const hello = name ? `Hello Hayalows, I'm ${name}.` : 'Hello Hayalows.';
      return `${hello} I run ${article} ${business} in ${place} and I'd like ${val('goal')}. Can we talk about what would help?`;
    }
    function refresh(force) {
      if (!edited || force) { preview.value = compose(); edited = false; reset.hidden = true; }
      status.textContent = '';
    }
    preview.addEventListener('input', () => { edited = preview.value.trim() !== compose(); reset.hidden = !edited; status.textContent = ''; });
    reset.addEventListener('click', () => { refresh(true); preview.focus(); });
    form.addEventListener('change', e => { if (e.target !== preview) refresh(false); });
    form.addEventListener('input', e => { if (e.target.name === 'name' || e.target.name === 'place') refresh(false); });
    const text = () => preview.value.trim() || compose();
    function say(msg, link) {
      status.replaceChildren(document.createTextNode(msg));
      if (link) { const a = document.createElement('a'); a.href = link; a.target = '_blank'; a.rel = 'noopener'; a.textContent = 'Open it here'; status.append(' ', a); }
    }
    form.addEventListener('submit', e => {
      e.preventDefault();
      const url = `${waUrl}?text=${encodeURIComponent(text())}`;
      const w = window.open(url, '_blank');
      if (w) { w.opener = null; say('Your message is ready in WhatsApp. Check it and tap send.'); }
      else say('Your browser blocked the new tab.', url);
    });
    form.querySelector('[data-quick-email]').addEventListener('click', () => {
      location.href = `mailto:${email}?subject=${encodeURIComponent('Project enquiry from hayalows.com')}&body=${encodeURIComponent(text())}`;
      say(`Your email app should open. If not, write to ${email}.`);
    });
    form.querySelector('[data-quick-copy]').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(text()); say('Copied. Paste it anywhere you like.'); }
      catch { preview.select(); say('Select the message and copy it.'); }
    });
    refresh(true);
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
