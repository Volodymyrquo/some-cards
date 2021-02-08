import { cardTypesAPI } from '../api/infinityAPI';

const SET_CARD_TYPES_LIST = 'ulta-card/card-types/SET_CARD_TYPES_LIST';

const initialState = {
  cardTypesList: [],
};

const cardTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD_TYPES_LIST:
      return {
        ...state,
        cardTypes: action.cardTypesList,
      };
    default:
      return state;
  }
};

export const setCardTypesList = (cardTypesList) => ({
  type: SET_CARD_TYPES_LIST,
  cardTypesList,
});

export const getCardTypesList = () => async (dispatch) => {
  let response = await cardTypesAPI.getCardTypesList();
  dispatch(setCardTypesList(response));
};

export default cardTypesReducer;
