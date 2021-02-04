import { fetchAuth } from '../common/functions';

const SET_USER_ACCESS_TOKEN = 'ulta-cards/auth/SET_USER_ACCESS_TOKEN';

const initialState = {
  accessToken: null,
};

const authReducer = (state = initialState, action) => {
  debugger;
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
export const _signIn = ({ username, password }) => (dispatch) => {
  debugger;
  fetchAuth({ username, password })
    .then((response) => response.json())
    .then((result) => {
      debugger;
      const {
        access_token,
        meet_token,
        expires_in,
        refresh_token,
        token_type,
      } = result;
      dispatch(setUserAccessToken(access_token));
    });
};

export default authReducer;
