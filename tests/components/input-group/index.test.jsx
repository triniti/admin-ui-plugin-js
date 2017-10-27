import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { InputGroup } from '../../../src/components';

test('InputGroup:: should render with "div" tag', (t) => {
  const wrapper = shallow(<InputGroup>Yo!</InputGroup>);

  t.equal(wrapper.type(), 'div');
  t.end();
});

test('InputGroup:: should render children', (t) => {
  const wrapper = shallow(<InputGroup>Yo!</InputGroup>);

  t.equal(wrapper.text(), 'Yo!');
  t.end();
});

test('InputGroup:: should render with "input-group" class', (t) => {
  const wrapper = shallow(<InputGroup>Yo!</InputGroup>);

  t.true(wrapper.hasClass('input-group'));
  t.end();
});

test('InputGroup:: should render with "input-group-${size}" class when size is passed', (t) => {
  const wrapper = shallow(<InputGroup size="whatever">Yo!</InputGroup>);

  t.true(wrapper.hasClass('input-group-whatever'));
  t.end();
});

test('InputGroup:: should render additional classes', (t) => {
  const wrapper = shallow(<InputGroup className="other">Yo!</InputGroup>);

  t.true(wrapper.hasClass('other'));
  t.true(wrapper.hasClass('input-group'));
  t.end();
});

test('InputGroup:: should render custom tag', (t) => {
  const wrapper = shallow(<InputGroup tag="main">Yo!</InputGroup>);

  t.equal(wrapper.type(), 'main');
  t.end();
});
