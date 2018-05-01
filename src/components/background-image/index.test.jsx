import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import BackgroundImage from './';

test('BackgroundImage:: should render default props', (t) => {
  const wrapper = shallow(<BackgroundImage />);
  t.equal(wrapper.find('div').length, 1);
  t.equal(wrapper.find('.background-image').length, 1);

  const defaultStyle = {
    backgroundImage: 'url()',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  };
  t.deepEqual(wrapper.find('div').at(0).props().style, defaultStyle);

  t.end();
});

test('BackgroundImage:: should render custom tag and props', (t) => {
  const wrapper = shallow(<BackgroundImage tag="a" imgSrc="http://example.com" repeat="repeat-x" />);
  t.equal(wrapper.find('a').length, 1);
  t.equal(wrapper.find('div').length, 0);
  t.equal(wrapper.find('.background-image').length, 1);

  const defaultStyle = {
    backgroundImage: 'url(http://example.com)',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    backgroundRepeat: 'repeat-x',
  };
  t.deepEqual(wrapper.find('a').at(0).props().style, defaultStyle);

  t.end();
});
