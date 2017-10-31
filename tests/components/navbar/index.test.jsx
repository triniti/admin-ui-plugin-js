import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Navbar } from '../../../src/components';

test('Navbar:: should render .navbar markup', (t) => {
  const wrapper = shallow(<Navbar />);

  t.equal(wrapper.html(), '<nav class="navbar"></nav>');
  t.end();
});

test('Navbar:: should render custom tag', (t) => {
  const wrapper = shallow(<Navbar tag="div" />);

  t.equal(wrapper.html(), '<div class="navbar"></div>');
  t.end();
});

test('Navbar:: should render role', (t) => {
  const wrapper = shallow(<Navbar role="navigation" />);

  t.equal(wrapper.html(), '<nav role="navigation" class="navbar"></nav>');
  t.end();
});

test('Navbar:: should render children', (t) => {
  const wrapper = shallow(<Navbar>Children</Navbar>);

  t.equal(wrapper.html(), '<nav class="navbar">Children</nav>');
  t.end();
});

test('Navbar:: should pass additional classNames', (t) => {
  const wrapper = shallow(<Navbar className="extra" />);

  t.true(wrapper.hasClass('extra'));
  t.true(wrapper.hasClass('navbar'));
  t.end();
});

test('Navbar:: should render dark color classes', (t) => {
  const wrapper = shallow(<Navbar color="dark" />);
  t.true(wrapper.hasClass('navbar-dark'));

  t.end();
});

test('Navbar:: should render light color classes', (t) => {
  const wrapper = shallow(<Navbar color="light" />);
  t.true(wrapper.hasClass('navbar-light'));

  t.end();
});

test('Navbar:: should render prop based classes', (t) => {
  const wrapper = shallow(<Navbar color="success" full sticky="top" fixed="top" />);

  t.true(wrapper.hasClass('navbar-success'));
  t.true(wrapper.hasClass('navbar'));
  t.true(wrapper.hasClass('fixed-top'));
  t.true(wrapper.hasClass('sticky-top'));
  t.end();
});
