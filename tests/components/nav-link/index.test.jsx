import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { NavLink } from '../../../src/components';

test('NavLink:: should render .nav-link markup', (t) => {
  const wrapper = shallow(<NavLink />);

  t.equal(wrapper.html(), '<a class="nav-link"></a>');
  t.end();
});

test('NavLink:: should render custom tag', (t) => {
  const wrapper = shallow(<NavLink tag="div" />);

  t.equal(wrapper.html(), '<div class="nav-link"></div>');
  t.end();
});

test('NavLink:: should render children', (t) => {
  const wrapper = shallow(<NavLink>Children</NavLink>);

  t.equal(wrapper.html(), '<a class="nav-link">Children</a>');
  t.end();
});

test('NavLink:: should pass additional classNames', (t) => {
  const wrapper = shallow(<NavLink className="extra" />);

  t.true(wrapper.hasClass('extra'));
  t.true(wrapper.hasClass('nav-link'));
  t.end();
});

test('NavLink:: should render active class', (t) => {
  const wrapper = shallow(<NavLink active />);

  t.true(wrapper.hasClass('active'));
  t.end();
});

test('NavLink:: should render disabled markup', (t) => {
  const wrapper = shallow(<NavLink disabled />);

  t.true(wrapper.hasClass('disabled'));
  t.end();
});

test('NavLink:: handles onClick prop', (t) => {
  const onClick = sinon.spy();
  const preventDefault = sinon.spy();
  const wrapper = shallow(<NavLink onClick={onClick} />);

  wrapper.find('a').simulate('click', { preventDefault });
  t.true(onClick.called);
  t.true(preventDefault.notCalled);
  t.end();
});

test('NavLink:: handles onClick events', (t) => {
  const preventDefault = sinon.spy();
  const wrapper = shallow(<NavLink />);

  wrapper.find('a').simulate('click', { preventDefault });
  t.true(preventDefault.notCalled);
  t.end();
});

test('NavLink:: prevents link clicks via onClick for dropdown nav-items', (t) => {
  const preventDefault = sinon.spy();
  const wrapper = shallow(<NavLink href="#" />);

  wrapper.find('a').simulate('click', { preventDefault });
  t.true(preventDefault.called);
  t.end();
});

test('NavLink:: is not called when disabled', (t) => {
  const onClick = sinon.spy();
  const preventDefault = sinon.spy();
  const wrapper = shallow(<NavLink disabled onClick={onClick} />);

  wrapper.find('a').simulate('click', { preventDefault });
  t.true(preventDefault.called);
  t.true(onClick.notCalled);
  t.end();
});
