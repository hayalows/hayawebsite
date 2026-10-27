import React from 'react';
import { createRoot } from 'react-dom/client';
import { DynamicGridGallery } from './vendor/uselayouts/dynamic-grid-gallery';
import { Alert, AlertTitle, AlertAction } from './vendor/reui/alert';
import { Badge } from './vendor/reui/badge';
import { Scrollspy } from './vendor/reui/scrollspy';
import { Frame, FramePanel } from './vendor/reui/frame';
import { IconTile } from './vendor/reui/icon-tile';
import DiscreteTabs from './vendor/uselayouts/discrete-tabs';
import { MotionConfig } from 'motion/react';
import ThemeToggle from './vendor/uselayouts/theme-toggle';
import { PrimaryCtaLink } from './vendor/uselayouts/get-in-touch-button';
import { TactileButton } from './vendor/uselayouts/tactile-button';

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
  if (items.length === 6) createRoot(target).render(<Frame className="fn-gallery-frame"><FramePanel className="fn-gallery-panel"><DynamicGridGallery items={items} gap={8} /></FramePanel></Frame>);
}

const empty = document.querySelector<HTMLElement>('#empty');
if (empty) {
  const fallbackMessage = empty.querySelector<HTMLElement>('p');
  const fallbackButton = empty.querySelector<HTMLButtonElement>('[data-reset]');
  if (fallbackMessage && fallbackButton) {
    const host = document.createElement('div');
    empty.append(host);
    createRoot(host).render(<Alert className="fn-empty-alert">
      <IconTile className="fn-empty-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/></svg></IconTile><AlertTitle>No matching portfolios</AlertTitle>
      <AlertAction><MotionConfig reducedMotion="user"><TactileButton className="fn-clear" size="sm" showIndicator={false} onClick={() => fallbackButton.click()}>Clear filters</TactileButton></MotionConfig></AlertAction>
    </Alert>);
    fallbackMessage.hidden = true;
    fallbackButton.hidden = true;
  }
}

const count = document.querySelector<HTMLElement>('#visible-count');
if (count) {
  const host = document.createElement('span');
  count.after(host);
  function CountBadge() {
    const [value, setValue] = React.useState(count!.textContent || '0');
    React.useEffect(() => {
      const observer = new MutationObserver(() => setValue(count!.textContent || '0'));
      observer.observe(count!, {childList:true, characterData:true, subtree:true});
      return () => observer.disconnect();
    }, []);
    return <Badge className="fn-count" aria-label={`${value} portfolios shown`}>{value}</Badge>;
  }
  createRoot(host).render(<CountBadge />);
  count.hidden = true;
}

const nav = document.querySelector<HTMLElement>('.topnav');
if (nav) {
  const originals = [...nav.querySelectorAll<HTMLAnchorElement>('a')].slice(0, 2);
  if (originals.length === 2) {
    const host = document.createElement('span');
    host.className = 'fn-scrollspy';
    nav.prepend(host);
    function ArchiveNavigation() {
      const documentRef = React.useRef<Document>(document);
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      return <Scrollspy targetRef={documentRef} history={false} smooth={!reduce} offset={90}>
        <a href="#close-reads" data-scrollspy-anchor="close-reads">Selected</a>
        <a href="#index" data-scrollspy-anchor="index">Archive</a>
      </Scrollspy>;
    }
    createRoot(host).render(<ArchiveNavigation />);
    originals.forEach(link => link.hidden = true);
  }
}

const display = document.querySelector<HTMLElement>('.list-toggle');
if (display) {
  const buttons = [...display.querySelectorAll<HTMLButtonElement>('[data-view]')];
  if (buttons.length === 2) {
    const host = document.createElement('div');
    display.append(host);
    const initial = buttons.find(button => button.getAttribute('aria-pressed') === 'true')?.dataset.view === 'list' ? 'List' : 'Grid';
    createRoot(host).render(<MotionConfig reducedMotion="user"><DiscreteTabs initial={initial} onChange={value => buttons.find(button => button.dataset.view === value.toLowerCase())?.click()} /></MotionConfig>);
    buttons.forEach(button => button.hidden = true);
  }
}

const originalTheme = document.querySelector<HTMLButtonElement>('.top-actions [data-theme-toggle]');
if (originalTheme) {
  const host = document.createElement('span');
  host.className = 'fn-theme';
  originalTheme.after(host);
  createRoot(host).render(<ThemeToggle initial={document.documentElement.dataset.theme === 'dark'} onChange={() => originalTheme.click()} />);
  originalTheme.hidden = true;
}
const contribute = document.querySelector<HTMLElement>('.contribute');
const originalLink = contribute?.querySelector<HTMLAnchorElement>('a');
if (contribute && originalLink) {
  const host = document.createElement('span');
  originalLink.after(host);
  createRoot(host).render(<PrimaryCtaLink className="fn-contribute-link" href={originalLink.href}>Send a link ↗</PrimaryCtaLink>);
  originalLink.hidden = true;
}
