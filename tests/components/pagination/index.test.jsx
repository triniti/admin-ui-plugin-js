import React from 'react';
import test from 'tape';
import { shallow, mount } from 'enzyme';
import { Pagination } from '../../../src/components';

test('Pagination:: should render default tag', (t) => {
  const wrapper = mount(<Pagination />);

  t.equal(wrapper.find('ul').length, 1);
  t.end();
});

test('Pagination:: should render custom tag', (t) => {
  const wrapper = mount(<Pagination tag="main" />);

  t.equal(wrapper.find('main').length, 1);
  t.end();
});

test('Pagination:: should render with "pagination" class', (t) => {
  const wrapper = shallow(<Pagination />);

  t.equal(wrapper.hasClass('pagination'), true);
  t.end();
});

test('Pagination:: should render children', (t) => {
  const wrapper = shallow(<Pagination>Ello world</Pagination>);

  t.equal(wrapper.text(), 'Ello world');
  t.end();
});

test('Pagination:: should render pagination at different sizes', (t) => {
  const small = shallow(<Pagination size="sm" />);
  const large = shallow(<Pagination size="lg" />);

  t.true(small.hasClass('pagination-sm'));
  t.true(large.hasClass('pagination-lg'));
  t.end();
});

