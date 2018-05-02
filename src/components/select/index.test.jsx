import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import ReactSelect from 'react-select';
import Select from './';

test('Select:: should import ReactSelect and render default props', (t) => {
  const wrapper = shallow(<Select />);

  t.equal(wrapper.find(ReactSelect).length, 1);
  t.equal(wrapper.find('.select-form-control').length, 1);
  t.end();
});

test('Select:: should import ReactSelect and render custom props and classNames', (t) => {
  const wrapper = shallow(<Select size="lg" radius="round" theme="light" />);

  t.equal(wrapper.find(ReactSelect).length, 1);
  t.equal(wrapper.find('.select-form-control').length, 1);
  t.equal(wrapper.find('.select-form-control-radius-round').length, 1);
  t.equal(wrapper.find('.select-form-control-lg').length, 1);
  t.equal(wrapper.find('.select-form-control-theme-light').length, 1);

  t.end();
});
