import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header/Header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  let wrapper;
  let sortMessage;
  let updateProductList;
  let selectedListMessage;

  beforeEach(() => {
    sortMessage = '';
    updateProductList = jest.fn();
    selectedListMessage = '';

    wrapper = shallow(
      <Header
        sortMessage={sortMessage}
        updateProductList={updateProductList}
        selectedListMessage={selectedListMessage}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('should contain clickable buttons', () => {
    it('on click high price button', () => {
      const highPriceButton = wrapper.find('.high-price-button');
      expect(highPriceButton.length).toBe(1);
      highPriceButton.simulate('click');
      expect(updateProductList.mock.calls.length).toEqual(1);
    });
    it('on click low price button', () => {
      const lowPriceButton = wrapper.find('.low-price-button');
      expect(lowPriceButton.length).toBe(1);
      lowPriceButton.simulate('click');
      expect(updateProductList.mock.calls.length).toEqual(1);
    });

    it('on click wish list button', () => {
      const wishListButton = wrapper.find('.wish-list-button');
      expect(wishListButton.length).toBe(1);
      wishListButton.simulate('click');
      expect(updateProductList.mock.calls.length).toEqual(1);
    });

    it('on click product list button', () => {
      const defaultListButton = wrapper.find('.product-list-button');
      expect(defaultListButton.length).toBe(1);
      defaultListButton.simulate('click');
      expect(updateProductList.mock.calls.length).toEqual(1);
    });
  });
});
