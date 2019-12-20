import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from '../components/List/List';

configure({ adapter: new Adapter() });

describe('<List />', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      onLoad: jest.fn(),
      productList: [
        {
          id: 4,
          title: '산에서 바라본 시계탑',
          price: 22000
        },
        {
          id: 5,
          title: '길거리 그림들',
          price: 50000
        },
        {
          id: 6,
          title: '표지판',
          price: 7000
        }
      ],
      selectedListMessage: 'default',
      updateWishList: jest.fn(),
      wishList: []
    };

    wrapper = shallow(<List {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain elements', () => {
    const listComponent = wrapper.find('.List');
    expect(listComponent.length).toBe(1);

    const productCard = wrapper.find('.product-card');
    expect(productCard.length).toBe(3);

    expect(wrapper.contains(<h3 className="product-title">표지판</h3>)).toBe(
      true
    );
    expect(
      wrapper.contains(<h3 className="product-title">길거리 그림들</h3>)
    ).toBe(true);
    expect(wrapper.contains(<div className="product-price">7,000원</div>)).toBe(
      true
    );
  });

  it('should contain Empty class name', () => {
    props.selectedListMessage = 'wish';
    wrapper = shallow(<List {...props} />);

    const emptyWishList = wrapper.find('.Empty');
    expect(emptyWishList.length).toBe(1);
  });
});
