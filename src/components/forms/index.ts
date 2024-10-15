import { log } from '$utils/log';

import { pageName } from './pageName';
import { redirect } from './redirect';

export const forms = () => {
  log('forms');

  pageName();
  redirect();
};
