import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { InputGroupButton, Button } from '../../../src/components';

test('InputGroupButton:: should render with "div" tag', (t) => {
  const wrapper = shallow(<InputGroupButton>Yo!</InputGroupButton>);

  t.equal(wrapper.type(), 'div');
  t.end();
});

test('InputGroupButton:: should render with "input-group-btn" class', (t) => {
  const wrapper = shallow(<InputGroupButton>Yo!</InputGroupButton>);

  t.true(wrapper.hasClass('input-group-btn'));
  t.end();
});

test('InputGroupButton:: should render custom tag', (t) => {
  const wrapper = shallow(<InputGroupButton tag="main">Yo!</InputGroupButton>);

  t.equal(wrapper.type(), 'main');
  t.end();
});

test('InputGroupButton::Standard:: should render children provided', (t) => {
  const wrapper = shallow(<InputGroupButton><span>Yo!</span></InputGroupButton>);

  t.equal(wrapper.childAt(0).type(), 'span');
  t.end();
});

test('InputGroupButton::Standard:: should render additional classes', (t) => {
  const wrapper = shallow(<InputGroupButton className="other"><span>Yo!</span></InputGroupButton>);

  t.true(wrapper.hasClass('other'));
  t.true(wrapper.hasClass('input-group-btn'));
  t.end();
});

test('InputGroupButton::Shorthand:: should render a child Button', (t) => {
  const wrapper = shallow(<InputGroupButton>Yo!</InputGroupButton>);

  t.same(wrapper.childAt(0).type(), Button);
  t.end();
});

test('InputGroupButton::Shorthand:: should render the string provided in the child Button', (t) => {
  const wrapper = shallow(<InputGroupButton>Yo!</InputGroupButton>);

  t.equal(wrapper.childAt(0).prop('children'), 'Yo!');
  t.end();
});

test('InputGroupButton::Shorthand:: should render additional props on the child Button', (t) => {
  const wrapper = shallow(<InputGroupButton color="rad">Yo!</InputGroupButton>);

  t.equal(wrapper.childAt(0).prop('color'), 'rad');
  t.end();
});

test('InputGroupButton::Shorthand:: should render additional classes on the child Button', (t) => {
  const wrapper = shallow(<InputGroupButton className="yo">Yo!</InputGroupButton>);

  t.true(wrapper.childAt(0).hasClass('yo'));
  t.end();
});

test('InputGroupButton::Shorthand:: should render groupClassName as additional classes on the input-group-btn wrapper', (t) => {
  const wrapper = shallow(<InputGroupButton groupClassName="other">Yo!</InputGroupButton>);

  t.true(wrapper.hasClass('other'));
  t.true(wrapper.hasClass('input-group-btn'));
  t.end();
});

test('InputGroupButton::Shorthand:: should render groupAttributes as additional attributes on the input-group-btn wrapper', (t) => {
  const wrapper = shallow(<InputGroupButton groupAttributes={{ style: { textAlign: 'left' } }}>Yo!</InputGroupButton>);

  t.equal(wrapper.prop('style').textAlign, 'left');
  t.end();
});
