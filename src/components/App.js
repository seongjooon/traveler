import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header';
import List from './List/List';

class App extends Component {
  render() {
    const { onLoad, productList } = this.props;
    return (
      <div className="App">
        <Header />
        <List onLoad={onLoad} productList={productList} />
      </div>
    );
  }
}

export default App;
