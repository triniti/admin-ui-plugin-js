import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import Icon from './index';

test('Icon:: should render default props', (t) => {
  const wrapper = shallow(<Icon />);

  t.equal(wrapper.find('.icon').length, 1);
  t.false(wrapper.props().alert);
  t.false(wrapper.props().border);
  t.false(wrapper.props().noborder);
  t.false(wrapper.props().outline);
  t.false(wrapper.props().toggler);
  t.equal(wrapper.find('span').length, 1);

  t.end();
});

test('Icon:: should render custom props', (t) => {
  const wrapper = shallow(<Icon tag="div" className="more-class" alert border noborder outline toggler color="success" radius="round" size="lg" />);

  t.equal(wrapper.find('div').length, 1);
  t.equal(wrapper.find('span').length, 0);
  t.equal(wrapper.find('.icon').length, 1);
  t.equal(wrapper.find('.more-class').length, 1);
  t.equal(wrapper.find('.icon-alert').length, 1);
  t.equal(wrapper.find('.icon-border').length, 1);
  t.equal(wrapper.find('.icon-noborder').length, 1);
  t.equal(wrapper.find('.icon-outline').length, 1);
  t.equal(wrapper.find('.icon-toggler').length, 1);
  t.equal(wrapper.find('.icon-color-success').length, 1);
  t.equal(wrapper.find('.icon-radius-round').length, 1);
  t.equal(wrapper.find('.icon-lg').length, 1);
  t.equal(wrapper.find('.icon-alert-lg').length, 1);

  t.end();
});

test('Icon:: should not render "icon-alert-size" class if not an alert', (t) => {
  const wrapper = shallow(<Icon size="lg" />);

  t.equal(wrapper.find('.icon').length, 1);
  t.equal(wrapper.find('.icon-alert').length, 0);
  t.equal(wrapper.find('.icon-lg').length, 1);
  t.equal(wrapper.find('.icon-alert-lg').length, 0);

  t.end();
});

test('Icon:: should not render "icon-alert-size" class if not given a size prop', (t) => {
  const wrapper = shallow(<Icon alert />);

  t.equal(wrapper.find('.icon').length, 1);
  t.equal(wrapper.find('.icon-alert').length, 1);
  t.equal(wrapper.find('.icon-lg').length, 0);
  t.equal(wrapper.find('.icon-alert-lg').length, 0);

  t.end();
});
