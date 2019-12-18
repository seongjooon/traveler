import { combineReducers } from 'redux';
import { GET_DATA } from '../constants/actionTypes';

export const initialState = {
  productList: []
};

const getData = (state = initialState.productList, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.data;
    default:
      return state;
  }
};

const myrealtrip = combineReducers({
  productList: getData
});

export default myrealtrip;
