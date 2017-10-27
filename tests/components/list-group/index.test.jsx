import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { ListGroup } from '../../../src/components';

test('ListGroup:: should render with "list-group" class', (t) => {
  const wrapper = shallow(<ListGroup>Yo!</ListGroup>);

  t.equal(wrapper.text(), 'Yo!');
  t.true(wrapper.hasClass('list-group'));
  t.end();
});

test('ListGroup:: should render with "flush"', (t) => {
  const wrapper = shallow(<ListGroup flush>Yo!</ListGroup>);

  t.equal(wrapper.text(), 'Yo!');
  t.true(wrapper.hasClass('list-group'));
  t.true(wrapper.hasClass('list-group-flush'));
  t.end();
});

test('ListGroup:: should render additional classes', (t) => {
  const wrapper = shallow(<ListGroup className="other">Yo!</ListGroup>);

  t.equal(wrapper.text(), 'Yo!');
  t.true(wrapper.hasClass('other'));
  t.true(wrapper.hasClass('list-group'));
  t.end();
});

test('ListGroup:: should render custom tag', (t) => {
  const wrapper = shallow(<ListGroup tag="main">Yo!</ListGroup>);

  t.equal(wrapper.text(), 'Yo!');
  t.true(wrapper.hasClass('list-group'));
  t.equal(wrapper.find('main').length, 1);
  t.end();
});
