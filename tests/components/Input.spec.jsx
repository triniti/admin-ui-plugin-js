import React from 'react';
import { shallow } from 'enzyme';
import { Input } from '../../../src/components';

describe('Input', () => {
  it('should render with "input" tag when no type is provided', () => {
    const wrapper = shallow(<Input>Yo!</Input>);

    expect(wrapper.type()).toBe('input');
  });

  it('should render with "select" tag when type is "select"', () => {
    const wrapper = shallow(<Input type="select">Yo!</Input>);

    expect(wrapper.type()).toBe('select');
  });

  it('should render with "textarea" tag when type is "textarea"', () => {
    const wrapper = shallow(<Input type="textarea">Yo!</Input>);

    expect(wrapper.type()).toBe('textarea');
  });

  it('should render with "p" tag when plaintext prop is truthy', () => {
    const wrapper = shallow(<Input type="select" plaintext />);

    expect(wrapper.type()).toBe('p');
  });

  it('should render with "form-control-plaintext" class when plaintext prop is truthy', () => {
    const wrapper = shallow(<Input type="select" plaintext />);

    expect(wrapper.hasClass('form-control-plaintext')).toBe(true);
  });

  it('should not render with "form-control" class when plaintext prop is truthy', () => {
    const wrapper = shallow(<Input type="select" plaintext />);

    expect(wrapper.hasClass('form-control')).toBe(false);
  });

  it('should render with custom tag when plaintext prop is truthy and tag is provided', () => {
    const wrapper = shallow(<Input type="select" plaintext tag="div" />);

    expect(wrapper.type()).toBe('div');
  });

  it('should not render with custom tag when plaintext prop is not truthy and tag is provided', () => {
    const wrapper = shallow(<Input type="select" tag="div" />);

    expect(wrapper.type()).toBe('select');
  });

  it('should render with "input" tag when type is not a special case', () => {
    const wrapper = shallow(<Input type="email" />);

    expect(wrapper.type()).toBe('input');
  });

  it('should render children', () => {
    const wrapper = shallow(<Input>Yo!</Input>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should render with "is-invalid" class when state is "danger" [DEPRECATED]', () => {
    const wrapper = shallow(<Input state="danger" />);

    expect(wrapper.hasClass('is-invalid')).toBe(true);
  });

  it('should render with "is-valid" class when state is "success" [DEPRECATED]', () => {
    const wrapper = shallow(<Input state="success" />);

    expect(wrapper.hasClass('is-valid')).toBe(true);
  });

  it('should not render with "is-valid" nor "is-invalid" class when state is "warning" [DEPRECATED]', () => {
    const wrapper = shallow(<Input state="warning" />);

    expect(wrapper.hasClass('is-valid')).toBe(false);
    expect(wrapper.hasClass('is-invalid')).toBe(false);
  });

  it('should render with "is-invalid" class when valid is false', () => {
    const wrapper = shallow(<Input valid={false} />);

    expect(wrapper.hasClass('is-invalid')).toBe(true);
  });

  it('should render with "is-valid" class when valid is true', () => {
    const wrapper = shallow(<Input valid />);

    expect(wrapper.hasClass('is-valid')).toBe(true);
  });

  it('should render with "form-control-${size}" class when size is provided', () => {
    const wrapper = shallow(<Input size="lg" />);

    expect(wrapper.hasClass('form-control-lg')).toBe(true);
  });

  it('should render with "form-control" class by default', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.hasClass('form-control')).toBe(true);
  });

  it('should not render with "form-control-file" nor "form-control-plaintext" nor "form-check-input" class by default', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.hasClass('form-control-file')).toBe(false);
    expect(wrapper.hasClass('form-control-plaintext')).toBe(false);
    expect(wrapper.hasClass('form-check-input')).toBe(false);
  });

  it('should not render with "form-control" nor "form-control-plaintext" nor "form-check-input" class when type is file', () => {
    const wrapper = shallow(<Input type="file" />);

    expect(wrapper.hasClass('form-control')).toBe(false);
    expect(wrapper.hasClass('form-control-plaintext')).toBe(false);
    expect(wrapper.hasClass('form-check-input')).toBe(false);
  });

  it('should not render with "form-control-file" nor "form-control" nor "form-check-input" class when plaintext prop is truthy', () => {
    const wrapper = shallow(<Input type="file" plaintext />);

    expect(wrapper.hasClass('form-control-file')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(false);
    expect(wrapper.hasClass('form-check-input')).toBe(false);
  });

  it('should not render with "form-control-file" nor "form-control" nor "form-check-input" class when static prop is truthy [DEPRECATED]', () => {
    const wrapper = shallow(<Input type="file" static />);

    expect(wrapper.hasClass('form-control-file')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(false);
    expect(wrapper.hasClass('form-check-input')).toBe(false);
  });

  it('should not render with "form-control-file" nor "form-control-plaintext" nor "form-control" class when type is radio', () => {
    const wrapper = shallow(<Input type="radio" />);

    expect(wrapper.hasClass('form-control-file')).toBe(false);
    expect(wrapper.hasClass('form-control-plaintext')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(false);
  });

  it('should not render with "form-control-file" nor "form-control-plaintext" nor "form-control" class when type is checkbox', () => {
    const wrapper = shallow(<Input type="checkbox" />);

    expect(wrapper.hasClass('form-control-file')).toBe(false);
    expect(wrapper.hasClass('form-control-plaintext')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(false);
  });

  it('should render with "form-check-input" class when type is checkbox', () => {
    const wrapper = shallow(<Input type="checkbox" />);

    expect(wrapper.hasClass('form-check-input')).toBe(true);
  });

  it('should render with "form-check-input" class when type is radio', () => {
    const wrapper = shallow(<Input type="radio" />);

    expect(wrapper.hasClass('form-check-input')).toBe(true);
  });

  it('should not render with "form-check-input" nor "form-control" class when type is checkbox and addon is truthy', () => {
    const wrapper = shallow(<Input addon type="checkbox" />);

    expect(wrapper.hasClass('form-check-input')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(false);
  });

  it('should not render with "form-check-input" nor "form-control" class when type is radio and addon is truthy', () => {
    const wrapper = shallow(<Input addon type="radio" />);

    expect(wrapper.hasClass('form-check-input')).toBe(false);
    expect(wrapper.hasClass('form-control')).toBe(false);
  });

  it('should render with "form-control-file" class when type is file', () => {
    const wrapper = shallow(<Input type="file" />);

    expect(wrapper.hasClass('form-control-file')).toBe(true);
  });

  it('should render additional classes', () => {
    const wrapper = shallow(<Input className="other">Yo!</Input>);

    expect(wrapper.hasClass('other')).toBe(true);
  });
});