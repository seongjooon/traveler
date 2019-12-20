import { connect } from 'react-redux';
import App from '../components/App';
import {
  getDataAction,
  getHighPriceAction,
  getLowPriceAction,
  updateSortMessageAction,
  updateSelectedListMessageAction,
  updateWishListAction
} from '../actions';
import { getDataApi } from '../api';

const mapStateToProps = state => ({
  productList: state.productList,
  sortMessage: state.sortMessage,
  selectedListMessage: state.selectedListMessage,
  wishList: state.wishList
});

const mapDispatchToProps = dispatch => ({
  onLoad: pageNumber => {
    const data = getDataApi();

    const dataList = data.reduce((acc, page) => {
      if (page.id <= pageNumber) {
        acc.push(...page.products);
      }
      return acc;
    }, []);

    dispatch(getDataAction(dataList));
    dispatch(updateSelectedListMessageAction('default'));
  },
  updateProductList: selection => {
    if (selection === 'high') {
      dispatch(getHighPriceAction());
      dispatch(updateSortMessageAction(selection));
    } else if (selection === 'low') {
      dispatch(getLowPriceAction());
      dispatch(updateSortMessageAction(selection));
    } else if (selection === 'default') {
      dispatch(updateSelectedListMessageAction(selection));
    } else if (selection === 'wish') {
      dispatch(updateSelectedListMessageAction(selection));
    }
  },
  updateWishList: cardId => {
    dispatch(updateWishListAction(cardId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
