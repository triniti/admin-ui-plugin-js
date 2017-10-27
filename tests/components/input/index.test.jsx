import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Input } from '../../../src/components';

test('Input:: should render with "input" tag when no type is provided', (t) => {
  const wrapper = shallow(<Input>Yo!</Input>);

  t.equal(wrapper.type(), 'input');
  t.end();
});

test('Input:: should render with "select" tag when type is "select"', (t) => {
  const wrapper = shallow(<Input type="select">Yo!</Input>);

  t.equal(wrapper.type(), 'select');
  t.end();
});

test('Input:: should render with "textarea" tag when type is "textarea"', (t) => {
  const wrapper = shallow(<Input type="textarea">Yo!</Input>);

  t.equal(wrapper.type(), 'textarea');
  t.end();
});

test('Input:: should render with "p" tag when plaintext prop is truthy', (t) => {
  const wrapper = shallow(<Input type="select" plaintext />);

  t.equal(wrapper.type(), 'p');
  t.end();
});

test('Input:: should render with "form-control-plaintext" class when plaintext prop is truthy', (t) => {
  const wrapper = shallow(<Input type="select" plaintext />);

  t.true(wrapper.hasClass('form-control-plaintext'));
  t.end();
});

test('Input:: should not render with "form-control" class when plaintext prop is truthy', (t) => {
  const wrapper = shallow(<Input type="select" plaintext />);

  t.false(wrapper.hasClass('form-control'));
  t.end();
});

test('Input:: should render with custom tag when plaintext prop is truthy and tag is provided', (t) => {
  const wrapper = shallow(<Input type="select" plaintext tag="div" />);

  t.equal(wrapper.type(), 'div');
  t.end();
});

test('Input:: should not render with custom tag when plaintext prop is not truthy and tag is provided', (t) => {
  const wrapper = shallow(<Input type="select" tag="div" />);

  t.equal(wrapper.type(), 'select');
  t.end();
});

test('Input:: should render with "input" tag when type is not a special case', (t) => {
  const wrapper = shallow(<Input type="email" />);

  t.equal(wrapper.type(), 'input');
  t.end();
});

test('Input:: should render children', (t) => {
  const wrapper = shallow(<Input>Yo!</Input>);

  t.equal(wrapper.text(), 'Yo!');
  t.end();
});

test('Input:: should render with "is-invalid" class when state is "danger" [DEPRECATED]', (t) => {
  const wrapper = shallow(<Input state="danger" />);

  t.true(wrapper.hasClass('is-invalid'));
  t.end();
});

test('Input:: should render with "is-valid" class when state is "success" [DEPRECATED]', (t) => {
  const wrapper = shallow(<Input state="success" />);

  t.true(wrapper.hasClass('is-valid'));
  t.end();
});

test('Input:: should not render with "is-valid" nor "is-invalid" class when state is "warning" [DEPRECATED]', (t) => {
  const wrapper = shallow(<Input state="warning" />);

  t.false(wrapper.hasClass('is-valid'));
  t.false(wrapper.hasClass('is-invalid'));
  t.end();
});

test('Input:: should render with "is-invalid" class when valid is false', (t) => {
  const wrapper = shallow(<Input valid={false} />);

  t.true(wrapper.hasClass('is-invalid'));
  t.end();
});

test('Input:: should render with "is-valid" class when valid is true', (t) => {
  const wrapper = shallow(<Input valid />);

  t.true(wrapper.hasClass('is-valid'));
  t.end();
});

test('Input:: should render with "form-control-${size}" class when size is provided', (t) => {
  const wrapper = shallow(<Input size="lg" />);

  t.true(wrapper.hasClass('form-control-lg'));
  t.end();
});

test('Input:: should render with "form-control" class by default', (t) => {
  const wrapper = shallow(<Input />);

  t.true(wrapper.hasClass('form-control'));
  t.end();
});

test('Input:: should not render with "form-control-file" nor "form-control-plaintext" nor "form-check-input" class by default', (t) => {
  const wrapper = shallow(<Input />);

  t.false(wrapper.hasClass('form-control-file'));
  t.false(wrapper.hasClass('form-control-plaintext'));
  t.false(wrapper.hasClass('form-check-input'));
  t.end();
});

test('Input:: should not render with "form-control" nor "form-control-plaintext" nor "form-check-input" class when type is file', (t) => {
  const wrapper = shallow(<Input type="file" />);

  t.false(wrapper.hasClass('form-control'));
  t.false(wrapper.hasClass('form-control-plaintext'));
  t.false(wrapper.hasClass('form-check-input'));
  t.end();
});

test('Input:: should not render with "form-control-file" nor "form-control" nor "form-check-input" class when plaintext prop is truthy', (t) => {
  const wrapper = shallow(<Input type="file" plaintext />);

  t.false(wrapper.hasClass('form-control-file'));
  t.false(wrapper.hasClass('form-control'));
  t.false(wrapper.hasClass('form-check-input'));
  t.end();
});

test('Input:: should not render with "form-control-file" nor "form-control" nor "form-check-input" class when static prop is truthy [DEPRECATED]', (t) => {
  const wrapper = shallow(<Input type="file" static />);

  t.false(wrapper.hasClass('form-control-file'));
  t.false(wrapper.hasClass('form-control'));
  t.false(wrapper.hasClass('form-check-input'));

  t.end();
});

test('Input:: should not render with "form-control-file" nor "form-control-plaintext" nor "form-control" class when type is radio', (t) => {
  const wrapper = shallow(<Input type="radio" />);

  t.false(wrapper.hasClass('form-control-file'));
  t.false(wrapper.hasClass('form-control-plaintext'));
  t.false(wrapper.hasClass('form-control'));
  t.end();
});

test('Input:: should not render with "form-control-file" nor "form-control-plaintext" nor "form-control" class when type is checkbox', (t) => {
  const wrapper = shallow(<Input type="checkbox" />);

  t.false(wrapper.hasClass('form-control-file'));
  t.false(wrapper.hasClass('form-control-plaintext'));
  t.false(wrapper.hasClass('form-control'));
  t.end();
});

test('Input:: should render with "form-check-input" class when type is checkbox', (t) => {
  const wrapper = shallow(<Input type="checkbox" />);

  t.true(wrapper.hasClass('form-check-input'));
  t.end();
});

test('Input:: should render with "form-check-input" class when type is radio', (t) => {
  const wrapper = shallow(<Input type="radio" />);

  t.true(wrapper.hasClass('form-check-input'));
  t.end();
});

test('Input:: should not render with "form-check-input" nor "form-control" class when type is checkbox and addon is truthy', (t) => {
  const wrapper = shallow(<Input addon type="checkbox" />);

  t.false(wrapper.hasClass('form-check-input'));
  t.false(wrapper.hasClass('form-control'));
  t.end();
});

test('Input:: should not render with "form-check-input" nor "form-control" class when type is radio and addon is truthy', (t) => {
  const wrapper = shallow(<Input addon type="radio" />);

  t.false(wrapper.hasClass('form-check-input'));
  t.false(wrapper.hasClass('form-control'));
  t.end();
});

test('Input:: should render with "form-control-file" class when type is file', (t) => {
  const wrapper = shallow(<Input type="file" />);

  t.true(wrapper.hasClass('form-control-file'));
  t.end();
});

test('Input:: should render additional classes', (t) => {
  const wrapper = shallow(<Input className="other">Yo!</Input>);

  t.true(wrapper.hasClass('other'));
  t.end();
});
