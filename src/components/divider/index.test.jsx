import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import Divider from './';

test('Divider:: should render default props', (t) => {
  const wrapper = shallow(<Divider />);

  t.equal(wrapper.find('div').length, 1, 'it should use the default tag "div"');
  t.equal(wrapper.find('.divider').length, 1);
  t.equal(wrapper.find('.divider-vertical').length, 1, 'it should use the diveider-vertical as default');
  t.end();
});

test('Divider:: should render custom props', (t) => {
  const wrapper = shallow(<Divider horizontal size="md" tag="a" className="one-more-class" />);

  t.equal(wrapper.find('a').length, 1, 'it should use the custom tag "a"');
  t.equal(wrapper.find('.divider').length, 1);
  t.equal(wrapper.find('.divider-vertical').length, 0, 'it should NOT use the default diveider-vertical class');
  t.equal(wrapper.find('.divider-horizontal').length, 1, 'it should use the custom diveider-horizontal class');
  t.equal(wrapper.find('.divider-md').length, 1, 'it should use the size prop');
  t.equal(wrapper.find('.one-more-class').length, 1, 'it should pass any additional classes');

  t.end();
});
