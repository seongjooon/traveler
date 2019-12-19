import React, { Component } from 'react';
import './List.scss';
import { PRODUCT_THUMNAIL_PATH } from '../../constants/constant';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import Empty from '../../images/empty.gif';
import debounce from 'lodash/debounce';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = { pageNumber: 1 };

    this.scrollEvent = debounce(this.handlePageScroll, 200);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollEvent);

    const { onLoad, updateProductList, match } = this.props;
    const { pageNumber } = this.state;

    setTimeout(() => {
      onLoad(pageNumber);
      if (updateProductList) {
        const selection = match.params.selection;

        updateProductList(selection);
      }
    }, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEvent);
  }

  handlePageScroll = () => {
    const { onLoad } = this.props;
    const { pageNumber } = this.state;

    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollHeight - scrollTop - clientHeight <= 200) {
      this.setState({ pageNumber: pageNumber + 1 }, onLoad(pageNumber + 1));
    }
  };

  handleClick = cardId => {
    const { updateWishList } = this.props;

    updateWishList(cardId);
  };

  showProductList = (product, index) => {
    const { wishList, selectedListMessage } = this.props;
    const hasFewWishList =
      wishList.length <= 4 && selectedListMessage === 'wish' ? 'Few' : '';

    return (
      <div className={`product-card ${hasFewWishList}`} key={index}>
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
    const hasWishList =
      wishList.length || selectedListMessage !== 'wish' ? '' : 'Empty';

    return (
      <div className={`List ${hasWishList}`}>
        {selectedListMessage === 'wish' ? (
          !wishList.length ? (
            <div className="empty-wish-list-wrapper">
              위시 리스트에 담긴 상품이 없습니다
              <img className="empty-image" src={Empty} alt="Empty wish list" />
            </div>
          ) : (
            productList.map((product, index) => {
              const hasWishCard = wishList.find(
                wishId => wishId === product.id
              );
              if (hasWishCard) {
                return this.showProductList(product, index);
              }
              return null;
            })
          )
        ) : (
          productList.map((product, index) =>
            this.showProductList(product, index)
          )
        )}
      </div>
    );
  }
}

export default List;
