import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Button as ButtonRS } from 'reactstrap';
import Button from './';

test('Button:: should import Button component from reactstrap', (t) => {
  const wrapper = shallow(<Button />);

  t.equal(wrapper.find(ButtonRS).length, 1);
  t.equal(wrapper.find(ButtonRS).at(0).props().color, 'light', 'it should has default color "light"');

  t.end();
});

test('Button:: should render custom props on top of reactstrap Button', (t) => {
  const wrapper = shallow(<Button icon className="custom-class-1" action="save" outlineText radius="test" />);

  t.equal(wrapper.find(ButtonRS).length, 1);
  t.equal(wrapper.find('.btn-action .btn-save').length, 1);
  t.equal(wrapper.find('.btn-outline-text-light').length, 1);
  t.equal(wrapper.find('.btn-radius-test').length, 1);
  t.equal(wrapper.find('.btn-icon').length, 1);
  t.equal(wrapper.find('.custom-class-1').length, 1);

  t.end();
});
