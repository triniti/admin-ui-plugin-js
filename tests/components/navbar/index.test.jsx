import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Navbar } from '../../../src/components';

test('Navbar:: should render .navbar markup', (t) => {
  const wrapper = shallow(<Navbar />);

  t.equal(wrapper.html(), '<nav class="navbar"></nav>');
  t.end();
});

test('Navbar:: should render default .navbar-expand class', (t) => {
  const wrapper = shallow(<Navbar expand />);

  t.equal(wrapper.html(), '<nav class="navbar navbar-expand"></nav>');
  t.end();
});

test('Navbar:: should render size based .navbar-expand-* classes', (t) => {
  const wrapper = shallow(<Navbar expand="md" />);

  t.equal(wrapper.html(), '<nav class="navbar navbar-expand-md"></nav>');
  t.end();
});

test('Navbar:: should render default .navbar-expand class for toggleable false [DEPRECATED]', (t) => {
  const wrapper = shallow(<Navbar toggleable={false} />);

  t.equal(wrapper.html(), '<nav class="navbar navbar-expand"></nav>');
  t.end();
});

test('Navbar:: should render default .navbar-expand class for toggleable true [DEPRECATED]', (t) => {
  const wrapper = shallow(<Navbar toggleable />);

  t.equal(wrapper.html(), '<nav class="navbar navbar-expand-sm"></nav>');
  t.end();
});

test('Navbar:: should render size based .navbar-expand-* classes for toggleable (bumping breakpoint) [DEPRECATED]', (t) => {
  const wrapper = shallow(<Navbar toggleable="md" />);

  t.equal(wrapper.html(), '<nav class="navbar navbar-expand-lg"></nav>');
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

test('Navbar:: should render prop based classes', (t) => {
  const wrapper = shallow(<Navbar light dark expand="sm" color="success" full sticky="top" fixed="top" />);

  t.true(wrapper.hasClass('bg-success'));
  t.true(wrapper.hasClass('navbar'));
  t.true(wrapper.hasClass('navbar-expand-sm'));
  t.true(wrapper.hasClass('navbar-light'));
  t.true(wrapper.hasClass('navbar-dark'));
  t.true(wrapper.hasClass('fixed-top'));
  t.true(wrapper.hasClass('sticky-top'));
  t.end();
});
