import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import PageHeader from './';

test('PageHeader:: should render a header element', (t) => {
  const wrapper = shallow(<PageHeader />);

  t.equal(wrapper.find('header.page-header').length, 1);
  t.end();
});

test('PageHeader:: should not render "title" if title were not provided', (t) => {
  const wrapper = shallow(<PageHeader />);

  t.equal(wrapper.find('h1.page-header-title').length, 0);
  t.end();
});

test('PageHeader:: should render "title" if title were provided', (t) => {
  const wrapper = shallow(<PageHeader title="a page title" />);

  t.equal(wrapper.find('h1.page-header-title').length, 1);
  t.equal(wrapper.find('h1.page-header-title').text(), 'a page title');
  t.end();
});

test('PageHeader:: should render any other children', (t) => {
  const wrapper = shallow(<PageHeader title="a page title"><button>Click me</button></PageHeader>);

  t.equal(wrapper.find('h1.page-header-title').length, 1);
  t.equal(wrapper.find('h1.page-header-title').text(), 'a page title');
  t.equal(wrapper.find('button').length, 1);
  t.equal(wrapper.find('button').text(), 'Click me');
  t.end();
});

