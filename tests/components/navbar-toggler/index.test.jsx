import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { NavbarToggler } from '../../../src/components';

test('NavbarToggler:: should render .navbar-toggler markup', (t) => {
  const wrapper = shallow(<NavbarToggler />);

  t.equal(wrapper.html(), '<button type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>');
  t.end();
});

test('NavbarToggler:: should render custom tag', (t) => {
  const wrapper = shallow(<NavbarToggler tag="div" />);

  t.equal(wrapper.html(), '<div type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></div>');
  t.end();
});

test('NavbarToggler:: should render children instead of navbar-toggler-icon ', (t) => {
  const wrapper = shallow(<NavbarToggler>Children</NavbarToggler>);

  t.equal(wrapper.html(), '<button type="button" class="navbar-toggler">Children</button>');
  t.end();
});

test('NavbarToggler:: should pass additional classNames', (t) => {
  const wrapper = shallow(<NavbarToggler className="extra" />);

  t.true(wrapper.hasClass('extra'));
  t.true(wrapper.hasClass('navbar-toggler'));
  t.end();
});
