import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Nav } from '../../../src/components';

test('Nav:: should render .nav markup', (t) => {
  const wrapper = shallow(<Nav />);

  t.equal(wrapper.html(), '<ul class="nav"></ul>');
  t.end();
});

test('Nav:: should render custom tag', (t) => {
  const wrapper = shallow(<Nav tag="nav" />);

  t.equal(wrapper.html(), '<nav class="nav"></nav>');
  t.end();
});

test('Nav:: should render children', (t) => {
  const wrapper = shallow(<Nav>Children</Nav>);

  t.equal(wrapper.html(), '<ul class="nav">Children</ul>');
  t.end();
});

test('Nav:: should handle justified prop', (t) => {
  const wrapper = shallow(<Nav justified />);

  t.equal(wrapper.html(), '<ul class="nav nav-justified"></ul>');
  t.end();
});

test('Nav:: should handle fill prop', (t) => {
  const wrapper = shallow(<Nav fill />);

  t.equal(wrapper.html(), '<ul class="nav nav-fill"></ul>');
  t.end();
});

test('Nav:: should handle pills prop', (t) => {
  const wrapper = shallow(<Nav pills />);

  t.equal(wrapper.html(), '<ul class="nav nav-pills"></ul>');
  t.end();
});

test('Nav:: should handle pills prop with card prop', (t) => {
  const wrapper = shallow(<Nav pills card />);

  t.equal(wrapper.html(), '<ul class="nav nav-pills card-header-pills"></ul>');
  t.end();
});

test('Nav:: should handle tabs prop', (t) => {
  const wrapper = shallow(<Nav tabs />);

  t.equal(wrapper.html(), '<ul class="nav nav-tabs"></ul>');
  t.end();
});

test('Nav:: should handle tabs prop with card prop', (t) => {
  const wrapper = shallow(<Nav tabs card />);

  t.equal(wrapper.html(), '<ul class="nav nav-tabs card-header-tabs"></ul>');
  t.end();
});

test('Nav:: should handle vertical prop', (t) => {
  const wrapper = shallow(<Nav vertical />);

  t.equal(wrapper.html(), '<ul class="nav flex-column"></ul>');
  t.end();
});

test('Nav:: should handle vertical prop with string', (t) => {
  const wrapper = shallow(<Nav vertical="sm" />);

  t.equal(wrapper.html(), '<ul class="nav flex-sm-column"></ul>');
  t.end();
});

test('Nav:: should handle horizontal prop with string', (t) => {
  const wrapper = shallow(<Nav horizontal="end" />);

  t.equal(wrapper.html(), '<ul class="nav justify-content-end"></ul>');
  t.end();
});

test('Nav:: should pass additional classNames', (t) => {
  const wrapper = shallow(<Nav className="extra" />);

  t.true(wrapper.hasClass('extra'));
  t.true(wrapper.hasClass('nav'));
  t.end();
});

test('Nav:: should render .navbar-nav class only', (t) => {
  const wrapper = shallow(<Nav navbar>Children</Nav>);

  t.equal(wrapper.html(), '<ul class="navbar-nav">Children</ul>');
  t.end();
});