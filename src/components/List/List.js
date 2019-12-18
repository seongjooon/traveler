import React, { Component } from 'react';
import './List.scss';
import { PRODUCT_THUMNAIL_PATH } from '../../constants/constant';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

class List extends Component {
  componentDidMount() {
    const { onLoad, sortProductList, match } = this.props;

    onLoad();
    if (sortProductList) {
      const selection = match.params.selection;
      if (selection === 'wish-list') {
        console.log('확인', selection);
      }
      sortProductList(selection);
    }
  }

  handleClick = cardId => {
    const { updateWishList } = this.props;
    updateWishList(cardId);
  };

  render() {
    const { productList, wishList } = this.props;

    return (
      <div className="List">
        {productList.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-module-thumnail">
              <img
                className="product-thumnail"
                src={`${PRODUCT_THUMNAIL_PATH}${product.id}.jpg`}
                alt="product thumnail"
              />
            </div>
            <div className="product-module-body">
              <h3 className="product-title">{product.title}</h3>
              <div className="product-price">
                {product.price.toLocaleString()}원
              </div>
            </div>
            <div
              className="product-wish-icons"
              onClick={() => this.handleClick(product.id)}
            >
              {wishList.find(wishCard => wishCard === product.id) ? (
                <FaHeart className="heart-icon" />
              ) : (
                <FaRegHeart className="heart-empty-icon" />
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
