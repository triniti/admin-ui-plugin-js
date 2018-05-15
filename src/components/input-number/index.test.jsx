import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import NumericInput from 'react-numeric-input';
import InputNumber from './';

test('InputNumber:: should import NumericInputcomponent from react-numeric-input', (t) => {
  const wrapper = shallow(<InputNumber />);

  t.equal(wrapper.find(NumericInput).length, 1);
  t.end();
});

test('InputNumber:: should render custom props and classNames', (t) => {
  const wrapper = shallow(<InputNumber radius="none" theme="white" size="sm" className="additional-class" />);

  t.equal(wrapper.find('.form-control-radius-none').length, 1);
  t.equal(wrapper.find('.form-control-theme-white').length, 1);
  t.equal(wrapper.find('.form-control-sm').length, 1);
  t.equal(wrapper.find('.additional-class').length, 1);

  t.end();
});
