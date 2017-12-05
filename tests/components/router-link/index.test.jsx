import React from 'react';
import test from 'tape';
import { shallow, mount } from 'enzyme';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { RouterLink } from '../../../src/components';

test('Navbar:: should render a NavLink with default props', (t) => {
  const wrapper = mount(
    <BrowserRouter>
      <RouterLink to="path">title</RouterLink>
    </BrowserRouter>,
  );

  t.equal(wrapper.find(NavLink).length, 1, 'it should render a NavLink component from react-router-dom');
  t.equal(wrapper.text(), 'title');
  t.equal(wrapper.html(), '<a class="" aria-current="false" href="path">title</a>');
  t.end();
});

test('Navbar:: should render a nav-link class NavLink', (t) => {
  const wrapper = mount(
    <BrowserRouter>
      <RouterLink navTab to="path">title</RouterLink>
    </BrowserRouter>,
  );

  t.equal(wrapper.find(NavLink).length, 1, 'it should render a NavLink component from react-router-dom');
  t.equal(wrapper.text(), 'title');
  t.equal(wrapper.html(), '<a class="nav-link" aria-current="false" href="path">title</a>');
  t.end();
});

test('Navbar:: should render pass custom class', (t) => {
  const wrapper = mount(
    <BrowserRouter>
      <RouterLink navTab to="path" className="custom-class">title</RouterLink>
    </BrowserRouter>,
  );

  t.equal(wrapper.html(), '<a class="nav-link custom-class" aria-current="false" href="path">title</a>');
  t.end();
});
