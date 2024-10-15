import { log } from '$utils/log';
import { queryElements } from '$utils/queryElements';

export const pageName = () => {
  log('pageName');

  const pageNameInputs = queryElements<HTMLInputElement>('input[id="page"]');
  if (!pageNameInputs.length) return;

  pageNameInputs.forEach((input) => {
    input.value = window.location.pathname;
  });
};
