import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Main from '../../images/main-logo.png';

class Header extends Component {
  handleClick = selection => {
    const { updateProductList } = this.props;
    updateProductList(selection);
  };

  render() {
    const { sortMessage, selectedListMessage } = this.props;

    return (
      <div className="Header">
        <Link to="/main" className="main-logo">
          <img src={Main} alt="Main Logo" />
        </Link>
        <div className="buttons-wrapper">
          <div className="sort-buttons-wrapper">
            <Link to="/sorted-price/high">
              <button
                className={`high-price-button ${
                  sortMessage === 'high' ? 'highlight' : ''
                }`}
                onClick={() => this.handleClick('high')}
              >
                가격 높은순
              </button>
            </Link>
            <Link to="/sorted-price/low">
              <button
                className={`low-price-button ${
                  sortMessage === 'low' ? 'highlight' : ''
                }`}
                onClick={() => this.handleClick('low')}
              >
                가격 낮은순
              </button>
            </Link>
          </div>
          <div className="list-buttons-wrapper">
            <Link to="/products/wish">
              <button
                className={`wish-list-button ${
                  selectedListMessage === 'wish' ? 'highlight' : ''
                }`}
                onClick={() => this.handleClick('wish')}
              >
                위시 리스트
              </button>
            </Link>
            <Link to="/main">
              <button
                className={`product-list-button ${
                  selectedListMessage === 'default' ? 'highlight' : ''
                }`}
                onClick={() => this.handleClick('default')}
              >
                상품 리스트
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
