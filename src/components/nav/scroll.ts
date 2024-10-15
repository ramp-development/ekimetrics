import { log } from '$utils/log';

export const scroll = () => {
  log('scroll');

  const nav = document.querySelector<HTMLElement>('.nav_component');
  if (!nav) return;

  const container = nav.querySelector<HTMLElement>('.nav_container');
  if (!container) return;

  formatNav();
  window.addEventListener('scroll', formatNav);

  function formatNav() {
    if (!container) return;
    if (window.scrollY > 128) {
      container.style.setProperty('--color-nav--background', 'var(--color-nav--background-to)');
      container.style.setProperty(
        '--color-nav--dropdown-background',
        'var(--color-nav--dropdown-background-to)'
      );
    } else {
      container.style.setProperty('--color-nav--background', 'var(--color-nav--background-from)');
      container.style.setProperty(
        '--color-nav--dropdown-background',
        'var(--color-nav--dropdown-background-from)'
      );
    }
  }
};
