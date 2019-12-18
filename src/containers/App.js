import { connect } from 'react-redux';
import App from '../components/App';
import { getDataAction } from '../actions';
import data from '../data.json';

const mapStateToProps = state => ({
  productList: state.productList
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    setTimeout(() => {
      dispatch(getDataAction(data));
    }, 500);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
