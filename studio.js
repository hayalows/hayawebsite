/* Build a draft, never send a message on a visitor's behalf. */
(() => {
  const form = document.querySelector('#quick-enquiry');
  if (form) {
    const business = form.elements.business;
    const place = form.elements.place;
    const goal = form.elements.goal;
    const preview = document.querySelector('#quick-preview');
    const status = document.querySelector('#quick-status');
    function message() {
      return `Hello Hayalows. I run a ${business.value} in ${place.value.trim() || 'my area'} and I need ${goal.value}. Can we talk about what would help?`;
    }
    form.addEventListener('input', () => { place.setCustomValidity(''); preview.textContent = message(); status.textContent = ''; });
    form.addEventListener('change', () => { preview.textContent = message(); });
    form.addEventListener('submit', event => {
      event.preventDefault();
      place.setCustomValidity(place.value.trim() ? '' : 'Enter your city or town.');
      if (!form.reportValidity()) return;
      const url = `${window.HAYALOWS_SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(message())}`;
      const opened = window.open(url, '_blank');
      if (opened) { opened.opener = null; status.textContent = 'Your draft is ready in WhatsApp. Review it before sending.'; }
      else { status.replaceChildren(document.createTextNode('Your browser blocked the new tab. ')); const link = document.createElement('a'); link.href = url; link.textContent = 'Open your WhatsApp draft'; status.append(link); }
    });
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
