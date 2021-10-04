import {createLogic} from 'redux-logic';
import {get} from 'lodash';

import {ACCOUNT} from '@constants';
import {GET_USER} from '../types';
import {storeUser} from '../actions';

export const getUserOperation = createLogic({
  type: GET_USER,
  latest: true,
  async process({action, axios}, dispatch, done) {
    const {sessionId} = action.payload;
    try {
      const httpClient = await axios;
      const response = await httpClient.get(ACCOUNT, {
        params: {session_id: sessionId},
      });
      const {id, name, avatar, username} = response.data;
      const avatarUrl = get(avatar, ['tmdb', 'avatar_path']);
      dispatch(
        storeUser({
          userId: id,
          displayName: name,
          username,
          avatarUrl,
        }),
      );
    } catch (error) {
      console.log(error);
    }
    done();
  },
});
