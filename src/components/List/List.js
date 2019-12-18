import React, { Component } from 'react';
import './List.scss';

class List extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    console.log(this.props.productList);
    return <div className="List"></div>;
  }
}

export default List;
