import React from 'react';
import test from 'tape';
import { shallow, mount } from 'enzyme';
import { PaginationItem } from '../../../src/components';

test('PaginationItem:: should render default tag', (t) => {
  const wrapper = mount(<PaginationItem />);

  t.equal(wrapper.find('li').length, 1);
  t.end();
});

test('PaginationItem:: should render custom tag', (t) => {
  const wrapper = mount(<PaginationItem tag="main" />);

  t.equal(wrapper.find('main').length, 1);
  t.end();
});

test('PaginationItem:: should render with "page-item" class', (t) => {
  const wrapper = shallow(<PaginationItem />);

  t.true(wrapper.hasClass('page-item'));
  t.end();
});

test('PaginationItem:: should render active state', (t) => {
  const wrapper = shallow(<PaginationItem active />);

  t.true(wrapper.hasClass('active'));
  t.end();
});

test('PaginationItem:: should render disabled state', (t) => {
  const wrapper = shallow(<PaginationItem disabled />);

  t.true(wrapper.hasClass('disabled'));
  t.end();
});

