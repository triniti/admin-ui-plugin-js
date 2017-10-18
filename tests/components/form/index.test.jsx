import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Form } from '../../../src/components';

test('Form:: should render with "form" tag', (t) => {
  const wrapper = shallow(<Form>Yo!</Form>);

  t.equal(wrapper.type(), 'form');
  t.end();
});

test('Form:: should render children', (t) => {
  const wrapper = shallow(<Form>Yo!</Form>);

  t.equal(wrapper.text(), 'Yo!');
  t.end();
});

test('Form:: should render with "form-inline" class', (t) => {
  const wrapper = shallow(<Form inline>Yo!</Form>);

  t.true(wrapper.hasClass('form-inline'));
  t.end();
});

test('Form:: should render additional classes', (t) => {
  const wrapper = shallow(<Form className="other">Yo!</Form>);

  t.true(wrapper.hasClass('other'));
  t.end();
});

test('Form:: should render custom tag', (t) => {
  const wrapper = shallow(<Form tag="main">Yo!</Form>);

  t.equal(wrapper.type(), 'main');
  t.end();
});
