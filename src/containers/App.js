import { connect } from 'react-redux';
import App from '../components/App';
import {
  getDataAction,
  getHighPriceAction,
  getLowPriceAction,
  updateWishListAction
} from '../actions';
import data from '../data.json';

const mapStateToProps = state => ({
  productList: state.productList,
  wishList: state.wishList
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    setTimeout(() => {
      dispatch(getDataAction(data));
    }, 500);
  },
  getSortedPriceOfProductList: selection => {
    if (selection === 'high') {
      const sortedHighPrice = data.sort((a, b) => b.price - a.price);
      dispatch(getHighPriceAction(sortedHighPrice));
    }
    if (selection === 'low') {
      const sortedLowPrice = data.sort((a, b) => a.price - b.price);
      dispatch(getLowPriceAction(sortedLowPrice));
    }
  },
  updateWishList: (cardId) => {
      dispatch(updateWishListAction(cardId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
