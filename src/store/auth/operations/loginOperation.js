import {createLogic} from 'redux-logic';

import {AUTH_TOKEN, VALIDATE_TOKEN_WITH_LOGIN, NEW_SESSION} from '@constants';

import {
  dataApiSuccess,
  dataApiFailure,
  dataApiRequest,
} from '@store/data/actions';
import {LOGIN} from '../types';
import {loginEndpoint} from '../endpoint';
import {getUser, setSessionId} from '../actions';

export const loginOperation = createLogic({
  type: LOGIN,
  latest: true,
  async process({action, axios}, dispatch, done) {
    const {endpoint} = loginEndpoint;
    dispatch(dataApiRequest({endpoint}));
    const {username, password} = action.payload;
    try {
      const httpClient = await axios;
      const requestTokenResponse = await httpClient.get(AUTH_TOKEN);
      const requestToken = requestTokenResponse.data.request_token;

      const sessionRequestTokenResponse = await httpClient.post(
        VALIDATE_TOKEN_WITH_LOGIN,
        {
          request_token: requestToken,
          username,
          password,
        },
      );
      const sessionRequestToken =
        sessionRequestTokenResponse.data.request_token;

      const sessionIdResponse = await httpClient.post(NEW_SESSION, {
        request_token: sessionRequestToken,
      });
      const sessionId = sessionIdResponse.data.session_id;
      dispatch(setSessionId(sessionId));
      dispatch(getUser(sessionId));
      dispatch(dataApiSuccess({endpoint}));
    } catch (error) {
      console.log(error);
      dispatch(dataApiFailure({endpoint}));
    }
    done();
  },
});
