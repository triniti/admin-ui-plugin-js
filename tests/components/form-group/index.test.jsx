import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { FormGroup } from '../../../src/components';

test('FormGroup:: default', (t) => {
  const wrapper = shallow(<FormGroup>Yo!</FormGroup>);

  t.equal(wrapper.type(), 'div', 'should render with "form" tag by default');
  t.equal(wrapper.text(), 'Yo!', 'should render children');
  t.true(wrapper.hasClass('form-group'), 'should render with "form-group" class by default');

  t.false(wrapper.hasClass('form-check'), 'should not render with "form-check" nor "form-check-inline"  class by default');
  t.false(wrapper.hasClass('form-check-inline'), 'should not render with "form-check" nor "form-check-inline"  class by default');

  t.false(wrapper.hasClass('row'), 'should not render with "row" class when row prop is not truthy');
  t.end();
});

test('FormGroup:: check', (t) => {
  const wrapper = shallow(<FormGroup check>Yo!</FormGroup>);

  t.true(wrapper.hasClass('form-check'), 'should render with "form-check" class when check prop is truthy');
  t.false(wrapper.hasClass('form-check-inline'), 'should not render with "form-check-inline" class when check prop is truthy and inline prop is falsy');
  t.false(wrapper.hasClass('form-group'), 'should not render with "form-group" class when check prop is truthy');
  t.end();
});


test('FormGroup:: check inline', (t) => {
  const wrapper = shallow(<FormGroup check inline>Yo!</FormGroup>);

  t.true(wrapper.hasClass('form-check'), 'should render with "form-check" and "form-check-inline" classes when check prop and inline prop are both truthy');
  t.true(wrapper.hasClass('form-check-inline'), 'should render with "form-check" and "form-check-inline" classes when check prop and inline prop are both truthy');
  t.end();
});

test('FormGroup:: inline', (t) => {
  const wrapper = shallow(<FormGroup inline>Yo!</FormGroup>);

  t.false(wrapper.hasClass('form-check-inline'), 'should not render with "form-check-inline" class when check prop is falsy and inline prop is truthy');
  t.end();
});

test('FormGroup:: no check only disabled', (t) => {
  const wrapper = shallow(<FormGroup disabled>Yo!</FormGroup>);

  t.false(wrapper.hasClass('disabled'), 'should not render with "disabled" class when disabled prop is truthy but check is not');
  t.end();
});

test('FormGroup:: both check disabled', (t) => {
  const wrapper = shallow(<FormGroup check disabled>Yo!</FormGroup>);

  t.true(wrapper.hasClass('disabled'), 'should render with "disabled" class when both check disabled props are truthy');
  t.true(wrapper.hasClass('form-check'), 'should render with "disabled" class when both check disabled props are truthy');
  t.end();
});

test('FormGroup:: row', (t) => {
  const wrapper = shallow(<FormGroup row>Yo!</FormGroup>);

  t.true(wrapper.hasClass('row'), 'should render with "row" class when row prop is truthy');
  t.end();
});

test('FormGroup:: should render additional classes', (t) => {
  const wrapper = shallow(<FormGroup className="other">Yo!</FormGroup>);

  t.true(wrapper.hasClass('other'));
  t.end();
});

test('FormGroup:: should render custom tag', (t) => {
  const wrapper = shallow(<FormGroup tag="main">Yo!</FormGroup>);

  t.equal(wrapper.type(), 'main');
  t.end();
});
