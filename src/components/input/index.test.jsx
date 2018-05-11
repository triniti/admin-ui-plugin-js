import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Input as InputRS } from 'reactstrap';
import Input from './';

test('Input:: should import Input component from reactstrap', (t) => {
  const wrapper = shallow(<Input />);

  t.equal(wrapper.find(InputRS).length, 1);
  t.end();
});

test('Input:: should render custom props and classNames', (t) => {
  const wrapper = shallow(<Input radius="round" theme="success" size="lg" className="additional-class" />);

  t.equal(wrapper.find('.form-control-radius-round').length, 1);
  t.equal(wrapper.find('.form-control-theme-success').length, 1);
  t.equal(wrapper.find('.additional-class').length, 1);
  t.equal(wrapper.props().bsSize, 'lg');

  t.end();
});
