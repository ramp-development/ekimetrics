import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

export const redirect = () => {
  // eslint-disable-next-line no-console
  console.log('redirect');

  const forms = queryElements<HTMLFormElement>('[data-form-redirect="form"]');
  if (!forms.length) return;

  forms.forEach((form) => {
    const link = queryElement<HTMLAnchorElement>('[data-form-redirect="link"]', form);
    if (!link) return;

    form.setAttribute('redirect', link.href);
    form.dataset.redirect = link.href;
  });
};
