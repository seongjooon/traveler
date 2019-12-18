import { connect } from 'react-redux';
import App from '../components/App';
import {
  getDataAction,
  getHighPriceAction,
  getLowPriceAction
} from '../actions';
import data from '../data.json';

const mapStateToProps = state => ({
  productList: state.productList
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
