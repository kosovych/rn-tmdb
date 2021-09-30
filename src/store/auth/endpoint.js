import {LOGIN} from './types';
import {AUTH_TOKEN} from '@constants';

import endpoint from '@utils/endpoint';

export const loginEndpoint = endpoint(LOGIN, 'POST', AUTH_TOKEN);
