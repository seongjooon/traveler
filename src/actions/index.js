import {
  GET_DATA,
  GET_HIGH_PRICE,
  GET_LOW_PRICE
} from '../constants/actionTypes';

export const getDataAction = data => ({
  type: GET_DATA,
  data
});

export const getHighPriceAction = data => ({
  type: GET_HIGH_PRICE,
  data
});

export const getLowPriceAction = data => ({
  type: GET_LOW_PRICE,
  data
});
