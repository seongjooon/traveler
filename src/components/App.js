import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header';
import List from './List/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
