import React from 'react';
import { createRoot } from 'react-dom/client';
import { DynamicGridGallery } from './vendor/uselayouts/dynamic-grid-gallery';

// Reuse the archive's existing local routes, names, and screenshots.
const target = document.querySelector<HTMLElement>('#component-preview');
if (target) {
  const items = [...document.querySelectorAll<HTMLElement>('#featured-list .featured-card')]
    .slice(0, 6).map((card, id) => ({
      id,
      href: card.querySelector('a')?.getAttribute('href') || '',
      title: card.querySelector('.featured-card__name strong')?.textContent || '',
      src: card.querySelector('img')?.getAttribute('src') || '',
      alt: '',
    })).filter(item => item.href && item.src);
  if (items.length === 6) createRoot(target).render(<DynamicGridGallery items={items} gap={8} />);
}
