import React from 'react';
import test from 'tape';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Async from 'react-select/async';
import AsyncCreatable from 'react-select/async-creatable';
import Creatable from 'react-select/creatable';
import ReactSelect from 'react-select';
import Select from './';

test('Select:: should import ReactSelect and render default props', (t) => {
  const wrapper = shallow(<Select />);

  t.equal(wrapper.find(ReactSelect).length, 1);
  // t.equal(wrapper.find('.select-form-control').length, 1);
  t.end();
});

test('Select:: should import ReactSelect.Async if async prop is true', (t) => {
  const wrapper = shallow(<Select async />);

  t.equal(wrapper.find(Async).length, 1);
  // t.equal(wrapper.find('.select-form-control').length, 1);
  t.end();
});

test('Select:: should import ReactSelect.Creatable if creatable prop is true', (t) => {
  const wrapper = shallow(<Select creatable />);

  t.equal(wrapper.find(Creatable).length, 1);
  // t.equal(wrapper.find('.select-form-control').length, 1);
  t.end();
});

test('Select:: should import ReactSelect.AsyncCreatable if both async and creatable prop are true', (t) => {
  const wrapper = shallow(<Select async creatable />);

  t.equal(wrapper.find(AsyncCreatable).length, 1);
  // t.equal(wrapper.find('.select-form-control').length, 1);
  t.end();
});

test('Select:: should use the given component props no matter what async and creatable props value', (t) => {
  const wrapper = mount(<Select async component={Creatable} />);

  t.equal(wrapper.find(Creatable).length, 1);
  // t.true(wrapper.find(Creatable).props().className.includes('select-form-control'));
  t.true(wrapper.at(0).prop('async'));
  t.false(wrapper.at(0).prop('creatable'));
  t.end();
});

test('Select:: should import ReactSelect and render custom props and classNames', (t) => {
  const wrapper = shallow(<Select size="lg" radius="round" theme="light" />);

  t.equal(wrapper.find(ReactSelect).length, 1);
  // t.equal(wrapper.find('.select-form-control').length, 1);
  // t.equal(wrapper.find('.select-form-control-radius-round').length, 1);
  // t.equal(wrapper.find('.select-form-control-lg').length, 1);
  // t.equal(wrapper.find('.select-form-control-theme-light').length, 1);

  t.end();
});

test('Select:: should should call the forwardRef method to lift ReactSelect ref up', (t) => {
  const forwardRef = sinon.spy();
  const wrapper = mount(<Select forwardRef={forwardRef} />);

  t.true(forwardRef.calledOnce);

  wrapper.unmount();
  t.end();
});
