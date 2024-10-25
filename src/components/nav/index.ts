import { log } from '$utils/log';

import { height } from './height';
import { scroll } from './scroll';

export const nav = () => {
  log('nav');

  scroll();
  height();
};
