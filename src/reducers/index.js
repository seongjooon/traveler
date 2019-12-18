import { combineReducers } from 'redux';
import {
  GET_DATA,
  GET_HIGH_PRICE,
  GET_LOW_PRICE,
  UPDATE_WISH_LIST
} from '../constants/actionTypes';

export const initialState = {
  productList: [],
  wishList: []
};

const getDataReducer = (state = initialState.productList, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.data;
    case GET_HIGH_PRICE:
      return action.data;
    case GET_LOW_PRICE:
      return action.data;
    default:
      return state;
  }
};

const updateWishListReducer = (state = initialState.wishList, action) => {
  switch (action.type) {
    case UPDATE_WISH_LIST:
      const findedCardId = state.findIndex(wishId => wishId === action.cardId);

      if (findedCardId === -1) {
        state.push(action.cardId);
      } else {
        state.splice(findedCardId, 1);
      }

      return [...state];
    default:
      return state;
  }
};

const myrealtrip = combineReducers({
  productList: getDataReducer,
  wishList: updateWishListReducer
});

export default myrealtrip;
