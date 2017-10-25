import React from 'react';
import test from 'tape';
import { shallow, mount } from 'enzyme';
import { PaginationLink } from '../../../src/components';

test('PaginationLink:: should render default tag', (t) => {
  const wrapper = mount(<PaginationLink />);

  t.equal(wrapper.find('a').length, 1);
  t.end();
});

test('PaginationLink:: should render custom tag', (t) => {
  const wrapper = mount(<PaginationLink tag="span" />);

  t.equal(wrapper.find('span').length, 1);
  t.end();
});

test('PaginationLink:: should render with "page-link" class', (t) => {
  const wrapper = shallow(<PaginationLink />);

  t.equal(wrapper.hasClass('page-link'), true);
  t.end();
});

test('PaginationLink:: should render previous', (t) => {
  const wrapper = shallow(<PaginationLink previous />);

  t.equal(wrapper.prop('aria-label'), 'Previous');
  t.equal(wrapper.find({ 'aria-hidden': 'true' }).text(), '\u00ab');
  t.equal(wrapper.find('.sr-only').text(), 'Previous');
  t.end();
});

test('PaginationLink:: should render next', (t) => {
  const wrapper = shallow(<PaginationLink next />);

  t.equal(wrapper.prop('aria-label'), 'Next');
  t.equal(wrapper.find({ 'aria-hidden': 'true' }).text(), '\u00bb');
  t.equal(wrapper.find('.sr-only').text(), 'Next');
  t.end();
});

test('PaginationLink:: should render default previous caret with children as an empty array', (t) => {
  const wrapper = shallow(<PaginationLink previous children={[]} />);

  t.equal(wrapper.prop('aria-label'), 'Previous');
  t.equal(wrapper.find({ 'aria-hidden': 'true' }).text(), '\u00ab');
  t.equal(wrapper.find('.sr-only').text(), 'Previous');
  t.end();
});

test('PaginationLink:: should render default next caret with children as an empty array', (t) => {
  const wrapper = shallow(<PaginationLink next children={[]} />);

  t.equal(wrapper.prop('aria-label'), 'Next');
  t.equal(wrapper.find({ 'aria-hidden': 'true' }).text(), '\u00bb');
  t.equal(wrapper.find('.sr-only').text(), 'Next');
  t.end();
});

test('PaginationLink:: should render custom aria label', (t) => {
  const wrapper = shallow(<PaginationLink next aria-label="Yo" />);

  t.equal(wrapper.prop('aria-label'), 'Yo');
  t.equal(wrapper.find('.sr-only').text(), 'Yo');
  t.end();
});

test('PaginationLink:: should render custom caret specified as a string', (t) => {
  const wrapper = shallow(<PaginationLink next>Yo</PaginationLink>);

  t.equal(wrapper.find({ 'aria-hidden': 'true' }).text(), 'Yo');
  t.end();
});

test('PaginationLink:: should render custom caret specified as a component', (t) => {
  const wrapper = shallow(<PaginationLink next><span>Yo</span></PaginationLink>);

  t.equal(wrapper.find({ 'aria-hidden': 'true' }).text(), 'Yo');
  t.end();
});
