import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { InputGroupAddon } from '../../../src/components';

test('InputGroupAddon:: should render with "div" tag', (t) => {
  const wrapper = shallow(<InputGroupAddon>Yo!</InputGroupAddon>);

  t.equal(wrapper.type(), 'div');
  t.end();
});

test('InputGroupAddon:: should render children', (t) => {
  const wrapper = shallow(<InputGroupAddon>Yo!</InputGroupAddon>);

  t.equal(wrapper.text(), 'Yo!');
  t.end();
});

test('InputGroupAddon:: should render with "input-group-addon" class', (t) => {
  const wrapper = shallow(<InputGroupAddon>Yo!</InputGroupAddon>);

  t.true(wrapper.hasClass('input-group-addon'));
  t.end();
});

test('InputGroupAddon:: should render additional classes', (t) => {
  const wrapper = shallow(<InputGroupAddon className="other">Yo!</InputGroupAddon>);

  t.true(wrapper.hasClass('other'));
  t.true(wrapper.hasClass('input-group-addon'));
  t.end();
});

test('InputGroupAddon:: should render custom tag', (t) => {
  const wrapper = shallow(<InputGroupAddon tag="main">Yo!</InputGroupAddon>);

  t.equal(wrapper.type(), 'main');
  t.end();
});
