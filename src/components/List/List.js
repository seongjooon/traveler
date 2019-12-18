import React, { Component } from 'react';
import './List.scss';
import { PRODUCT_THUMNAIL_PATH } from '../../constants/constant';
import { FaRegHeart } from 'react-icons/fa';

class List extends Component {
  componentDidMount() {
    const { onLoad, sortProductList } = this.props;

    if (onLoad) {
      onLoad();
    } else if (sortProductList) {
      const { match } = this.props;
      const selection = match.params.selection;

      sortProductList(selection);
    }
  }

  render() {
    const { productList } = this.props;

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
            <div className="product-wish-icons">
              <FaRegHeart className="heart-empty icon" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
