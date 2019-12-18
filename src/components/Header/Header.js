import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Main from '../../images/main-logo.png';

class Header extends Component {
  handleClick = selection => {
    const { sortProductList } = this.props;
    sortProductList(selection);
  };

  render() {
    return (
      <div className="Header">
          <img className="main-logo" src={Main} alt="Main Logo" />
        <div className="buttons-wrapper">
          <div className="sort-buttons-wrapper">
            <Link to="/sorted-price/high">
              <button
                className="high-price-button"
                onClick={() => this.handleClick('high')}
              >
                가격 높은순
              </button>
            </Link>
            <Link to="/sorted-price/low">
              <button
                className="low-price-button"
                onClick={() => this.handleClick('low')}
              >
                가격 낮은순
              </button>
            </Link>
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
