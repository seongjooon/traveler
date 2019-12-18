import { combineReducers } from 'redux';
import {
  GET_DATA,
  GET_HIGH_PRICE,
  GET_LOW_PRICE,
  UPDATE_SORT_MESSAGE,
  UPDATE_SELECTED_LIST_MESSAGE,
  UPDATE_WISH_LIST
} from '../constants/actionTypes';

export const initialState = {
  productList: [],
  sortMessage: '',
  selectedListMessage: '',
  wishList: []
};

const getDataReducer = (state = initialState.productList, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.data;
    case GET_HIGH_PRICE:
      const sortedHighPriceList = state.sort((a, b) => b.price - a.price);
      return sortedHighPriceList;
    case GET_LOW_PRICE:
      const sortedLowPriceList = state.sort((a, b) => a.price - b.price);
      return sortedLowPriceList;
    default:
      return state;
  }
};

const updateSortMessageReducer = (state = initialState.sortMessage, action) => {
  switch (action.type) {
    case UPDATE_SORT_MESSAGE:
      return action.selection;
    default:
      return state;
  }
};

const updateSelectedListMessageReducer = (
  state = initialState.sortMessage,
  action
) => {
  switch (action.type) {
    case UPDATE_SELECTED_LIST_MESSAGE:
      return action.selection;
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
  sortMessage: updateSortMessageReducer,
  selectedListMessage: updateSelectedListMessageReducer,
  wishList: updateWishListReducer
});

export default myrealtrip;
