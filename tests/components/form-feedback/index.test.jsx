import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { FormFeedback } from '../../../src/components';

test('FormFeedback:: should render with "form" tag by default', (t) => {
  const wrapper = shallow(<FormFeedback>Yo!</FormFeedback>);

  t.equal(wrapper.type(), 'div');
  t.end();
});

test('FormFeedback:: should render children', (t) => {
  const wrapper = shallow(<FormFeedback>Yo!</FormFeedback>);

  t.equal(wrapper.text(), 'Yo!');
  t.end();
});

test('FormFeedback:: should render with "invalid-feedback" class', (t) => {
  const wrapper = shallow(<FormFeedback>Yo!</FormFeedback>);

  t.true(wrapper.hasClass('invalid-feedback'));
  t.end();
});

test('FormFeedback:: should render additional classes', (t) => {
  const wrapper = shallow(<FormFeedback className="other">Yo!</FormFeedback>);

  t.true(wrapper.hasClass('other'));
  t.end();
});

test('FormFeedback:: should render custom tag', (t) => {
  const wrapper = shallow(<FormFeedback tag="main">Yo!</FormFeedback>);

  t.equal(wrapper.type(), 'main');
  t.end();
});
