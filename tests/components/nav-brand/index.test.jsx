import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { NavbarBrand } from '../../../src/components';

test('NavbarBrand:: should render .navbar-brand markup', (t) => {
  const wrapper = shallow(<NavbarBrand />);

  t.equal(wrapper.html(), '<a class="navbar-brand"></a>');
  t.end();
});

test('NavbarBrand:: should render custom tag', (t) => {
  const wrapper = shallow(<NavbarBrand tag="div" />);

  t.equal(wrapper.html(), '<div class="navbar-brand"></div>');
  t.end();
});

test('NavbarBrand:: sholid render children', (t) => {
  const wrapper = shallow(<NavbarBrand>Children</NavbarBrand>);

  t.equal(wrapper.html(), '<a class="navbar-brand">Children</a>');
  t.end();
});

test('NavbarBrand:: should pass additional classNames', (t) => {
  const wrapper = shallow(<NavbarBrand className="extra" />);

  t.true(wrapper.hasClass('extra'));
  t.true(wrapper.hasClass('navbar-brand'));
  t.end();
});
