import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import ScrollableContainer from './';

test('ScrollableContainer:: should render default props', (t) => {
  const wrapper = shallow(<ScrollableContainer />);

  t.equal(wrapper.find('div.scrollable-container').length, 1);
  t.end();
});

test('ScrollableContainer:: should render custom props', (t) => {
  const wrapper = shallow(<ScrollableContainer tag="section" className="test-class" />);

  t.equal(wrapper.find('section').length, 1);
  t.equal(wrapper.find('.scrollable-container.test-class').length, 1);
  t.end();
});
