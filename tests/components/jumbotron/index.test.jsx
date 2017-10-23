import React from 'react';
import test from 'tape';
import { shallow, mount } from 'enzyme';
import { Jumbotron } from '../../../src/components';

test('Jumbotron:: should render children', (t) => {
  const wrapper = shallow(<Jumbotron>Hello World</Jumbotron>);

  t.equal(wrapper.text(), 'Hello World');
  t.end();
});

test('Jumbotron:: should render elements as children', (t) => {
  const wrapper = mount(<Jumbotron><h1>Hello from h1</h1></Jumbotron>);

  t.equal(wrapper.find('h1').length, 1);
  t.equal(wrapper.find('h1').text(), 'Hello from h1');
  t.end();
});

test('Jumbotron:: should have class jumbotron', (t) => {
  const wrapper = shallow(<Jumbotron>Hello</Jumbotron>);

  t.true(wrapper.hasClass('jumbotron'));
  t.end();
});

test('Jumbotron:: should render fluid jumbotron', (t) => {
  const wrapper = shallow(<Jumbotron fluid>Hello</Jumbotron>);

  t.true(wrapper.hasClass('jumbotron'));
  t.true(wrapper.hasClass('jumbotron-fluid'));
  t.end();
});

test('Jumbotron:: should render custom class', (t) => {
  const wrapper = shallow(<Jumbotron className="custom-class">Hello</Jumbotron>);

  t.true(wrapper.hasClass('custom-class'));
  t.end();
});

