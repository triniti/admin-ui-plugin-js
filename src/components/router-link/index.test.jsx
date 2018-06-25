import React from 'react';
import test from 'tape';
import { mount } from 'enzyme';
import { BrowserRouter, NavLink } from 'react-router-dom';
import RouterLink from './';

test('RouterLink:: should render a NavLink with default props', (t) => {
  const wrapper = mount((
    <BrowserRouter>
      <RouterLink to="path">title</RouterLink>
    </BrowserRouter>
  ));

  t.equal(wrapper.find(NavLink).length, 1, 'it should render a NavLink component from react-router-dom');
  t.equal(wrapper.text(), 'title');
  t.equal(wrapper.html(), '<a class="" href="path">title</a>');
  t.end();
});

test('RouterLink:: should render a nav-link class NavLink', (t) => {
  const wrapper = mount(
    <BrowserRouter>
      <RouterLink navTab to="path">title</RouterLink>
    </BrowserRouter>,
  );

  t.equal(wrapper.find(NavLink).length, 1, 'it should render a NavLink component from react-router-dom');
  t.equal(wrapper.text(), 'title');
  t.equal(wrapper.html(), '<a class="nav-link" href="path">title</a>');
  t.end();
});

test('RouterLink:: should render pass custom class', (t) => {
  const wrapper = mount(
    <BrowserRouter>
      <RouterLink navTab to="path" className="custom-class">title</RouterLink>
    </BrowserRouter>,
  );

  t.equal(wrapper.html(), '<a class="nav-link custom-class" href="path">title</a>');
  t.end();
});
