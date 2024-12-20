import { log } from '$utils/log';

import { forms } from './forms';
import { misc } from './misc';
import { nav } from './nav';
import { sliders } from './sliders';

export const components = () => {
  log('components');

  nav();
  sliders();
  forms();
  misc();
};
