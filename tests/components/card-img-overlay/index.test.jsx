import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { CardImgOverlay } from '../../../src/components';

test('CardImgOverlay', (t) => {
  let wrapper = shallow(<CardImgOverlay>Yo!</CardImgOverlay>);
  t.equal('Yo!', wrapper.text(), 'should render with "card-img-overlay" class');
  t.true(wrapper.hasClass('card-img-overlay'), 'should render with "card-img-overlay" class');

  wrapper = shallow(<CardImgOverlay className="other">Yo!</CardImgOverlay>);
  t.true(wrapper.hasClass('other'), 'should render additional classes');
  t.true(wrapper.hasClass('card-img-overlay'), 'should render additional classes');

  wrapper = shallow(<CardImgOverlay tag="main">Yo!</CardImgOverlay>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.equal(1, wrapper.find('main').length, 'should render custom tag');
  t.true(wrapper.hasClass('card-img-overlay'), 'should render custom tag');

  t.end();
});
