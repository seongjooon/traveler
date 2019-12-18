import React, { Component } from 'react';
import './List.scss';
import { PRODUCT_THUMNAIL_PATH } from '../../constants/constant';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

class List extends Component {
  componentDidMount() {
    const { onLoad, updateProductList, match } = this.props;
    setTimeout(() => {
      onLoad();
      if (updateProductList) {
        const selection = match.params.selection;

        updateProductList(selection);
      }
    }, 500);
  }

  handleClick = cardId => {
    const { updateWishList } = this.props;
    updateWishList(cardId);
  };

  showProductList = (product, index, wishList) => {
    return (
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
          {wishList.find(wishId => wishId === product.id) ? (
            <FaHeart className="heart-icon" />
          ) : (
            <FaRegHeart className="heart-empty-icon" />
          )}
        </div>
      </div>
    );
  };

  render() {
    const { productList, wishList, selectedListMessage } = this.props;

    return (
      <div className="List">
        {selectedListMessage === 'wish' ? (
          !wishList.length ? (
            <div className="empty-wish-list">
              위시 리스트에 담긴 상품이 없습니다
            </div>
          ) : (
            productList.map((product, index) => {
              const hasWishCard = wishList.find(
                wishId => wishId === product.id
              );
              if (hasWishCard) {
                return this.showProductList(product, index, wishList);
              }
            })
          )
        ) : (
          productList.map((product, index) =>
            this.showProductList(product, index, wishList)
          )
        )}
      </div>
    );
  }
}

export default List;
