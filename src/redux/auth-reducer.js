/* import { fetchAuth } from '../common/functions';
 */

import { authAPI } from '../api/api';
const SET_USER_ACCESS_TOKEN = 'ulta-cards/auth/SET_USER_ACCESS_TOKEN';
const SET_USER_NAME = 'ulta-cards/auth/SET_USER_NAME';

const initialState = {
  accessToken: null,
  username: '',
  invalidUserName: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
      };
    case SET_USER_NAME:
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};

export const setUserAccessToken = (access) => ({
  type: SET_USER_ACCESS_TOKEN,
  accessToken: access,
});
export const setUserName = (username) => ({
  type: SET_USER_NAME,
  username,
});
export const _signIn = ({ username, password }) => async (dispatch) => {
  let response = await authAPI.fetchAuth({ username, password });

  const {
    access_token,
    /*     expires_in,
    refresh_token,
    token_type,
 */
  } = response.data;
  dispatch(setUserAccessToken(access_token));
  localStorage.setItem('token', access_token);
  console.log('#####:status', response.status, response.statusText);
};

/* export const _changeInput = (username) => async (dispatch) => {
  dispatch(setUserName(username));

  if (timer) {
    clearTimeout(timer);
  }

  this.timerID = setTimeout(() => {
    fetchValidateName(value)
      .then((response) => {
        if (response.status === 200) {
          this.setState({ invalidUserName: false });
        } else {
          this.setState({ invalidUserName: true });
        }
      })
      .catch(console.error);
  }, 300);
};
 */
export default authReducer;
