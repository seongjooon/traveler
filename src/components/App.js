import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import List from './List/List';

class App extends Component {
  render() {
    const {
      onLoad,
      productList,
      updateProductList,
      sortMessage,
      selectedListMessage,
      updateWishList,
      wishList
    } = this.props;

    return (
      <div className="App">
        <Header
          sortMessage={sortMessage}
          updateProductList={updateProductList}
          selectedListMessage={selectedListMessage}
        />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/main" />} />
          <Route
            path="/sorted-price/:selection"
            render={props => (
              <List
                {...props}
                onLoad={onLoad}
                updateProductList={updateProductList}
                productList={productList}
                sortMessage={sortMessage}
                selectedListMessage={selectedListMessage}
                updateWishList={updateWishList}
                wishList={wishList}
              />
            )}
          />
          <Route
            path="/products/:selection"
            render={props => (
              <List
                {...props}
                onLoad={onLoad}
                updateProductList={updateProductList}
                productList={productList}
                sortMessage={sortMessage}
                selectedListMessage={selectedListMessage}
                updateWishList={updateWishList}
                wishList={wishList}
              />
            )}
          />
          <Route
            exact
            path="/main"
            render={() => (
              <List
                onLoad={onLoad}
                productList={productList}
                selectedListMessage={selectedListMessage}
                updateWishList={updateWishList}
                wishList={wishList}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
