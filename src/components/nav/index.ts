import { log } from '$utils/log';

import { height } from './height';
import { locale } from './locale';
import { scroll } from './scroll';

export const nav = () => {
  log('nav');

  locale();
  scroll();
  height();
};
