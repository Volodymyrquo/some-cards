/* import { fetchAuth } from '../common/functions';
 */

import { authAPI } from '../api/api';
const SET_USER_ACCESS_TOKEN = 'ulta-cards/auth/SET_USER_ACCESS_TOKEN';

const initialState = {
  accessToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
      };
    default:
      return state;
  }
};

export const setUserAccessToken = (access) => ({
  type: SET_USER_ACCESS_TOKEN,
  accessToken: access,
});
export const _signIn = ({ username, password }) => async (dispatch) => {
  let response = await authAPI.fetchAuth({ username, password });

  const {
    access_token,
    meet_token,
    expires_in,
    refresh_token,
    token_type,
  } = response.data;
  dispatch(setUserAccessToken(access_token));
  localStorage.setItem('token', access_token);
  console.log('#####:status', response.status, response.statusText);
};

export default authReducer;
