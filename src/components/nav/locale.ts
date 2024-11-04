import { queryElement } from '$utils/queryElement';

export const locale = () => {
  // eslint-disable-next-line no-console
  console.log('locale');

  const currentLocale = queryElement<HTMLAnchorElement>('.w-locales-item .w--current');
  const localeText = queryElement<HTMLDivElement>('[data-locale-el="text"]');
  if (!currentLocale || !localeText) return;

  localeText.textContent = currentLocale.textContent;
};
