import {
  GET_DATA,
  GET_HIGH_PRICE,
  GET_LOW_PRICE,
  UPDATE_SORT_MESSAGE,
  UPDATE_WISH_LIST
} from '../constants/actionTypes';

export const getDataAction = data => ({
  type: GET_DATA,
  data
});

export const getHighPriceAction = () => ({ type: GET_HIGH_PRICE });

export const getLowPriceAction = () => ({ type: GET_LOW_PRICE });

export const updateSortMessageAction = selection => ({
  type: UPDATE_SORT_MESSAGE,
  selection
});

export const updateWishListAction = cardId => ({
  type: UPDATE_WISH_LIST,
  cardId
});
