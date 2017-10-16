import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { CardImg } from '../../../src/components';

test('CardImg', (t) => {
  let wrapper = shallow(<CardImg src="/path/image.png" />);
  t.true(wrapper.hasClass('card-img'), 'should render with "card-img" class');

  wrapper = shallow(<CardImg top src="/path/image.png" />);
  t.true(wrapper.hasClass('card-img-top'), 'should render top class name');

  wrapper = shallow(<CardImg bottom src="/path/image.png" />);
  t.true(wrapper.hasClass('card-img-bottom'), 'should render bottom class name');

  wrapper = shallow(<CardImg tag="image" src="/path/image.png" />);
  t.equal(1, wrapper.find('image').length, 'should render custom tag');

  t.end();
});
