import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import List from './List/List';

class App extends Component {
  render() {
    const { onLoad, productList, getSortedPriceOfProductList } = this.props;

    return (
      <div className="App">
        <Header sortProductList={getSortedPriceOfProductList} />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/main" />} />
          <Route
            exact
            path="/main"
            render={() => <List onLoad={onLoad} productList={productList} />}
          />
          <Route
            path="/sorted-price/:selection"
            render={props => (
              <List
                {...props}
                sortProductList={getSortedPriceOfProductList}
                productList={productList}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
