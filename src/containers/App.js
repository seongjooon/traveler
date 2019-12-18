import { connect } from 'react-redux';
import App from '../components/App';
import {
  getDataAction,
  getHighPriceAction,
  getLowPriceAction,
  updateSortMessageAction,
  updateWishListAction
} from '../actions';
import data from '../data.json';

const mapStateToProps = state => ({
  productList: state.productList,
  sortMessage: state.sortMessage,
  wishList: state.wishList
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch(getDataAction(data));
  },
  getSortedPriceOfProductList: selection => {
    if (selection === 'high') {
      dispatch(getHighPriceAction());
      dispatch(updateSortMessageAction(selection));
    }
    if (selection === 'low') {
      dispatch(getLowPriceAction());
      dispatch(updateSortMessageAction(selection));
    }
  },
  updateWishList: cardId => {
    dispatch(updateWishListAction(cardId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
