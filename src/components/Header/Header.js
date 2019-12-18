import React, { Component } from 'react';
import './Header.scss';
import Main from '../../images/main-logo.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img className="main-logo" src={Main} alt="Main Logo" />
        <div className="buttons-wrapper">
          <div className="sort-buttons-wrapper">
            <button className="high-price-button">가격 높은순</button>
            <button className="low-price-button">가격 낮은순</button>
          </div>
          <div className="list-buttons-wrapper">
            <button className="product-list-button">상품 리스트</button>
            <button className="wish-list-button">위시 리스트</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
