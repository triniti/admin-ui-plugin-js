import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import Loading from './';

test('Loading:: should render default props', (t) => {
  const wrapper = shallow(<Loading />);

  t.equal(wrapper.find('.loading-container').length, 1);
  t.equal(wrapper.find('li.loading-dot').length, 3, 'it should render three dots by default');

  t.end();
});

test('Loading:: should render childred', (t) => {
  const wrapper = shallow(<Loading>here is the text</Loading>);

  t.equal(wrapper.find('.loading-container').length, 1);
  t.equal(wrapper.find('li.loading-dot').length, 3, 'it should render three dots by default');
  t.equal(wrapper.find('span.loading-children').length, 1);
  t.equal(wrapper.find('span').text(), 'here is the text');

  t.end();
});
