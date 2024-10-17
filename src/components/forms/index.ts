import { log } from '$utils/log';

import { pageName } from './pageName';
import { redirect } from './redirect';
import { validation } from './validation';

export const forms = () => {
  log('forms');

  pageName();
  redirect();
  validation();
};
