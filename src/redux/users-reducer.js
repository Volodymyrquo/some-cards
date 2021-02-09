import { usersList } from '../common/usersData';

const SET_NEW_USER = 'ulta-card/users/SET_NEW_USER';

const initialState = {
  usersList,
  newUser: {
    id: null,
    name: '',
    description: '',
    typeOfUsers: '',
    tariff: '',
    country: '',
    status: '',
  },
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_USER:
      return {
        ...state,
        usersList: [...usersList, action.newUser],
      };
    default:
      return state;
  }
};

export const setNewUser = (newUser) => ({
  type: SET_NEW_USER,
  newUser,
});

export const getNewUser = (newUser) => (dispatch) => {
  dispatch(setNewUser(setNewUser(newUser)));
};

export default usersReducer;
