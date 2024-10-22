import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

export const privacyLink = () => {
  // eslint-disable-next-line no-console
  console.log('privacyLink');

  const link = queryElement<HTMLAnchorElement>('footer [data-legal-id="privacy-policy"]');
  if (!link) return;

  const subscribePolicyLinkWrapper = queryElements<HTMLDivElement>('[data-subscribe="wrapper"]');
  subscribePolicyLinkWrapper.forEach((element) => {
    const subscribePolicyLink = queryElement<HTMLAnchorElement>('a', element);
    if (subscribePolicyLink) subscribePolicyLink.href = link.href;
  });
};
