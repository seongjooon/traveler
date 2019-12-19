import {
  initialState,
  getDataReducer,
  updateSortMessageReducer,
  updateSelectedListMessageReducer,
  updateWishListReducer
} from '../reducers/index';

import {
  GET_DATA,
  GET_HIGH_PRICE,
  GET_LOW_PRICE,
  UPDATE_SORT_MESSAGE,
  UPDATE_SELECTED_LIST_MESSAGE,
  UPDATE_WISH_LIST
} from '../constants/actionTypes';

describe('reducers', () => {
  it('should return init value', () => {
    expect(initialState).toHaveProperty('productList');
    expect(initialState).toHaveProperty('sortMessage');
    expect(initialState.productList).toEqual([]);
    expect(initialState.selectedListMessage).toEqual('');
    expect(getDataReducer(undefined, {})).toEqual(initialState.productList);
    expect(updateWishListReducer(undefined, {})).toEqual(initialState.wishList);
  });

  describe('data of action should return equal value', () => {
    it('in getDataReducer', () => {
      expect(
        getDataReducer(initialState.productList, {
          type: GET_DATA,
          productList: []
        })
      ).toEqual([]);
      expect(
        getDataReducer(
          [
            {
              id: 1,
              title: '모나리자',
              price: 22000
            },
            {
              id: 2,
              title: '박물관 복도',
              price: 100000
            },
            {
              id: 29,
              title: '예수그리스도 석상',
              price: 9999999
            }
          ],
          { type: GET_HIGH_PRICE }
        )
      ).toEqual([
        {
          id: 29,
          title: '예수그리스도 석상',
          price: 9999999
        },
        {
          id: 2,
          title: '박물관 복도',
          price: 100000
        },
        {
          id: 1,
          title: '모나리자',
          price: 22000
        }
      ]);
      expect(
        getDataReducer(
          [
            {
              id: 29,
              title: '노천카페 석상',
              price: 9999999
            },
            {
              id: 2,
              title: '선인장들 복도',
              price: 100000
            },
            {
              id: 1,
              title: '대저택',
              price: 22000
            }
          ],
          { type: GET_LOW_PRICE }
        )
      ).toEqual([
        {
          id: 1,
          title: '대저택',
          price: 22000
        },
        {
          id: 2,
          title: '선인장들 복도',
          price: 100000
        },
        {
          id: 29,
          title: '노천카페 석상',
          price: 9999999
        }
      ]);
    });
    it('in updateSortMessageReducer', () => {
      expect(
        updateSortMessageReducer(initialState.sortMessage, {
          type: UPDATE_SORT_MESSAGE,
          selection: ''
        })
      ).toEqual('');
      expect(
        updateSortMessageReducer(initialState.sortMessage, {
          type: UPDATE_SORT_MESSAGE,
          selection: 'high'
        })
      ).toEqual('high');
      expect(
        updateSortMessageReducer('high', {
          type: UPDATE_SORT_MESSAGE,
          selection: 'low'
        })
      ).toEqual('low');
    });
    it('in updateSelectedListMessageReducer', () => {
      expect(
        updateSelectedListMessageReducer(initialState.sortMessage, {
          type: UPDATE_SELECTED_LIST_MESSAGE,
          selection: ''
        })
      ).toEqual('');
      expect(
        updateSelectedListMessageReducer(initialState.sortMessage, {
          type: UPDATE_SELECTED_LIST_MESSAGE,
          selection: 'wish'
        })
      ).toEqual('wish');
      expect(
        updateSelectedListMessageReducer('wish', {
          type: UPDATE_SELECTED_LIST_MESSAGE,
          selection: 'default'
        })
      ).toEqual('default');
    });
    it('in updateWishListReducer', () => {
      const wishList = [1, 13, 2];
      expect(
        updateWishListReducer(initialState.wishList, {
          type: UPDATE_WISH_LIST,
          cardId: 1
        })
      ).toEqual([1]);
      expect(
        updateWishListReducer(wishList, {
          type: UPDATE_WISH_LIST,
          cardId: 55
        })
      ).toEqual([1, 13, 2, 55]);
      expect(
        updateWishListReducer(wishList, {
          type: UPDATE_WISH_LIST,
          cardId: 55
        })
      ).toEqual([1, 13, 2]);
      expect(
        updateWishListReducer(wishList, {
          type: UPDATE_WISH_LIST,
          cardId: 13
        })
      ).toEqual([1, 2]);
    });
  });
});
