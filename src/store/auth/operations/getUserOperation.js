import {createLogic} from 'redux-logic';
import {get} from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ACCOUNT} from '@constants';
import {GET_USER} from '../types';
import {storeUser} from '../actions';

export const getUserOperation = createLogic({
  type: GET_USER,
  latest: true,
  async process({action, axios}, dispatch, done) {
    const {sessionId} = action;
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
      await AsyncStorage.setItem('@user_id', `${id}`);
    } catch (error) {
      console.log(error);
    }
    done();
  },
});
