import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Label } from 'reactstrap';
import Input from '../input';
import Checkbox from './';

test('Checkbox:: should render default props', (t) => {
  const wrapper = shallow(<Checkbox />);

  t.equal(wrapper.find(Label).length, 1);
  t.equal(wrapper.find(Input).length, 1);
  t.equal(wrapper.find('.checkbox-input-label').length, 1);
  t.equal(wrapper.find('.checkbox-input').length, 1);
  t.equal(wrapper.find('.form-control').length, 1);

  t.end();
});

test('Checkbox:: should render custom props', (t) => {
  const wrapper = shallow(<Checkbox size="lg" disabled right round />);

  t.equal(wrapper.find('.checkbox-label-right').length, 1);
  t.equal(wrapper.find('.form-control-lg').length, 1);
  t.equal(wrapper.find('.checkbox-disabled').length, 1);
  t.equal(wrapper.find('.checkbox-input-round').length, 1);

  t.end();
});

