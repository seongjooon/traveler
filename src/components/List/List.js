import React, { Component } from 'react';
import './List.scss';
import { PRODUCT_THUMNAIL_PATH } from '../../constants/constant';
import { IoMdHeartEmpty } from 'react-icons/io';

class List extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { productList } = this.props;

    return (
      <div className="List">
        {productList.map((product, index) => (
          <div className="product-element" key={index}>
            <img
              className="product-thumnail"
              src={`${PRODUCT_THUMNAIL_PATH}${index + 1}.jpg`}
            />
            <div className="wish-icons">
              <IoMdHeartEmpty />
            </div>
            <div className="product-title">{product.title}</div>
            <div className="product-price">{product.price}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
