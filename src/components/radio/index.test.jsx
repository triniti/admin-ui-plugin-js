import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Label } from 'reactstrap';
import Input from '../input';
import Icon from '../icon';
import Radio from './';

test('Radio:: should render default props', (t) => {
  const wrapper = shallow(<Radio />);

  t.equal(wrapper.find(Label).length, 1);
  t.equal(wrapper.find(Input).length, 1);
  t.equal(wrapper.find('.radio-input').length, 1);
  t.equal(wrapper.find('.form-control').length, 1);
  t.equal(wrapper.find(Label).find('.radio-input-label').length, 1);
  t.equal(wrapper.find('.form-radio-label.radio-label').length, 0);

  t.end();
});

test('Radio:: should render custom props and classNames', (t) => {
  const wrapper = shallow(<Radio size="lg" disabled right />);

  t.equal(wrapper.find(Label).length, 1);
  t.equal(wrapper.find(Input).length, 1);
  t.equal(wrapper.find('.radio-input').length, 1);
  t.equal(wrapper.find('.form-control').length, 1);
  t.equal(wrapper.find(Label).find('.radio-input-label').length, 1);

  t.equal(wrapper.find('.radio-disabled').length, 1);
  t.equal(wrapper.find('.radio-label-right').length, 1);
  t.equal(wrapper.find('.form-control-lg').length, 1);

  t.end();
});

test('Radio:: should render childred', (t) => {
  const wrapper = shallow(<Radio><Icon /></Radio>);

  t.equal(wrapper.find('.form-radio-label.radio-label').length, 1);
  t.equal(wrapper.find('.form-radio-label.radio-label').find(Icon).length, 1);

  t.end();
});
