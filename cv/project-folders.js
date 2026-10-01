/* Folder geometry and motion adapted from Rare UI, Copyright (c) 2026 Swami Malode.
 * https://rareui.com · MIT + Commons Clause + Attribution. See THIRD-PARTY-NOTICES.md.
 * Local interface snapshots only; this controller makes no network requests. */
(() => {
  const folders = [...document.querySelectorAll('[data-project-folder]')];
  const setOpen = (folder, open) => {
    const toggle = folder.querySelector('[data-folder-toggle]');
    const preview = folder.querySelector('.project-preview');
    folder.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    const name = folder.querySelector('h3').textContent;
    toggle.setAttribute('aria-label', `${open ? 'Close' : 'Open'} ${name} preview`);
    toggle.querySelector('[data-folder-label]').textContent = open ? 'Close preview' : 'Open preview';
    preview.hidden = !open;
  };
  folders.forEach(folder => {
    const toggle = folder.querySelector('[data-folder-toggle]');
    const preview = folder.querySelector('.project-preview');
    const image = preview.querySelector('img');
    const thumbnail = folder.querySelector('.folder-paper img');
    const thumbnailFailed = () => { thumbnail.hidden = true; };
    thumbnail.addEventListener('error', thumbnailFailed);
    if (thumbnail.complete && !thumbnail.naturalWidth) thumbnailFailed();
    const imageFailed = () => {
      image.hidden = true;
      preview.querySelector('.preview-fallback').hidden = false;
    };
    image.addEventListener('error', imageFailed);
    if (image.complete && !image.naturalWidth) imageFailed();
    toggle.hidden = false;
    folder.querySelector('.project-card__intro').classList.add('has-folder');
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      folders.filter(other => other !== folder).forEach(other => setOpen(other, false));
      setOpen(folder, open);
    });
    folder.querySelector('[data-folder-close]').addEventListener('click', () => {
      setOpen(folder, false);
      toggle.focus();
    });
    folder.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        event.preventDefault();
        setOpen(folder, false);
        toggle.focus();
      }
    });
  });
})();
