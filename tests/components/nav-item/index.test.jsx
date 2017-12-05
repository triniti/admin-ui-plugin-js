import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { NavItem } from '../../../src/components';

test('NavItem:: should render .nav-item markup', (t) => {
  const wrapper = shallow(<NavItem />);

  t.equal(wrapper.html(), '<li class="nav-item"></li>');
  t.end();
});

test('NavItem:: should render custom tag', (t) => {
  const wrapper = shallow(<NavItem tag="div" />);

  t.equal(wrapper.html(), '<div class="nav-item"></div>');
  t.end();
});

test('NavItem:: sholid render children', (t) => {
  const wrapper = shallow(<NavItem>Children</NavItem>);

  t.equal(wrapper.html(), '<li class="nav-item">Children</li>');
  t.end();
});

test('NavItem:: should pass additional classNames', (t) => {
  const wrapper = shallow(<NavItem className="extra" />);

  t.true(wrapper.hasClass('extra'));
  t.true(wrapper.hasClass('nav-item'));
  t.end();
});
