import { log } from '$utils/log';

import { careerSS } from './careerSS';
import { radians } from './radians';
import { timeline } from './timeline';
import { vertical } from './vertical';

export const sliders = () => {
  log('sliders');

  radians();
  careerSS();
  vertical();
  timeline();
};
