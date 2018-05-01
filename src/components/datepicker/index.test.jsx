import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import ReactDatePicker from 'react-datepicker';
import Datepicker from './';

test('Datepicker:: should render default props', (t) => {
  const wrapper = shallow(<Datepicker />);

  t.equal(wrapper.find(ReactDatePicker).length, 1, 'it should use ReactDatePicker');
  t.equal(wrapper.find('.form-control').length, 1);
  t.end();
});

test('Datepicker:: should render custom classes', (t) => {
  const wrapper = shallow(<Datepicker className="custom-1" size="lg" radius="round" theme="dark" />);

  t.equal(wrapper.find('.form-control-lg').length, 1);
  t.equal(wrapper.find('.custom-1').length, 1);
  t.equal(wrapper.find('.form-control-radius-round').length, 1);
  t.equal(wrapper.find('.form-control-theme-dark').length, 1);
  t.end();
});
