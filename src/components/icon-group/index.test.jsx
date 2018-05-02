import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import IconGroup from './index';

test('IconGroup:: should render default props', (t) => {
  const wrapper = shallow(<IconGroup />);

  t.equal(wrapper.find('span').length, 1);
  t.equal(wrapper.find('.icon-group').length, 1);

  t.end();
});

test('IconGroup:: should render default props', (t) => {
  const wrapper = shallow(<IconGroup tag="div" left bottom />);

  t.equal(wrapper.find('span').length, 0);
  t.equal(wrapper.find('div').length, 1);
  t.equal(wrapper.find('.icon-group').length, 1);
  t.equal(wrapper.find('.icon-group-bottom').length, 1);
  t.equal(wrapper.find('.icon-group-left').length, 1);

  t.end();
});
