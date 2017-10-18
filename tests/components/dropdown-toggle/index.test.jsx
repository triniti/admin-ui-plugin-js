import React from 'react';
import PropType from 'prop-types';
import tape from 'tape';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { DropdownToggle } from '../../../src/components';

let isOpen;
let popperManager;
let toggle;

const setup = () => {
  isOpen = false;
  popperManager = {
    setTargetNode: () => {},
  };
  toggle = () => {
    isOpen = !isOpen;
  };
};

const test = (description, fn) => {
  tape(description, (t) => {
    setup();
    fn(t);
  });
};

test('DropdownToggle:: should wrap text', (t) => {
  const wrapper = mount(
    <DropdownToggle>Ello world</DropdownToggle>,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.text(), 'Ello world');
  t.end();
});

test('DropdownToggle:: should add default sr-only content', (t) => {
  const wrapper = mount(
    <DropdownToggle />,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.text(), 'Toggle Dropdown');
  t.equal(wrapper.find('.sr-only').length, 1);
  t.end();
});

test('DropdownToggle:: should add default sr-only content', (t) => {
  const wrapper = mount(
    <DropdownToggle aria-label="Dropup Toggle" />,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.text(), 'Dropup Toggle');
  t.equal(wrapper.find('.sr-only').length, 1);

  t.end();
});

test('DropdownToggle:: should render elements', (t) => {
  const wrapper = mount(
    <DropdownToggle>Click Me</DropdownToggle>,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.text(), 'Click Me');
  t.equal(wrapper.find('button').length, 1);
  t.end();
});

test('DropdownToggle:: should render a caret', (t) => {
  const wrapper = mount(
    <DropdownToggle caret>Ello world</DropdownToggle>,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.true(wrapper.find('.dropdown-toggle'));
  t.end();
});

test('DropdownToggle::color:: should render the dropdown as a BUTTON element with default color secondary', (t) => {
  const wrapper = mount(
    <DropdownToggle />,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.find('button').length, 1);
  t.true(wrapper.find('button').hasClass('btn-secondary'));
  t.end();
});

test('DropdownToggle::color:: should render the dropdown as a BUTTON element with explicit color success', (t) => {
  const wrapper = mount(
    <DropdownToggle color="success" />,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.find('button').length, 1);
  t.true(wrapper.find('button').hasClass('btn-success'));
  t.end();
});

test('DropdownToggle::color should render the dropdown as an A element with no color attribute', (t) => {
  const wrapper = mount(
    <DropdownToggle tag="a" />,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.find('a').length, 1);
  t.equal(wrapper.find('a[color]').length, 0);
  t.end();
});


test('DropdownToggle::color should render the dropdown as a DIV element with no color attribute', (t) => {
  const wrapper = mount(
    <DropdownToggle tag="div" color="success" />,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.find('div').length, 1);
  t.equal(wrapper.find('div[color]').length, 0);
  t.end();
});


test('DropdownToggle::color should render a split', (t) => {
  const wrapper = mount(
    <DropdownToggle split>Ello world</DropdownToggle>,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.true(wrapper.find('.dropdown-toggle-split'));
  t.end();
});

test('DropdownToggle::color should call props.onClick if it exists', (t) => {
  const onClick = sinon.spy();
  const wrapper = mount(
    <DropdownToggle onClick={() => onClick()}>Ello world</DropdownToggle>,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );
  const instance = wrapper.instance();

  instance.onClick({});
  t.true(onClick.called);
  t.end();
});

test('DropdownToggle::onClick should call context.toggle when present ', (t) => {
  toggle = sinon.spy();
  const wrapper = mount(
    <DropdownToggle>Ello world</DropdownToggle>,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );
  const instance = wrapper.instance();

  instance.onClick({ preventDefault: () => {} });
  t.true(toggle.called);
  t.end();
});

test('DropdownToggle:: should preventDefault when disabled', (t) => {
  const preventDefault = sinon.spy();
  const wrapper = mount(
    <DropdownToggle disabled>Ello world</DropdownToggle>,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );
  const instance = wrapper.instance();

  instance.onClick({ preventDefault });
  t.true(preventDefault.called);
  t.end();
});

test('DropdownToggle::nav:: should add .nav-link class', (t) => {
  const wrapper = mount(
    <DropdownToggle nav>Ello world</DropdownToggle>,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.find('a').length, 1, 'a');
  t.true(wrapper.find('a').hasClass('nav-link'));
  t.end();
});

test('DropdownToggle::nav:: should not set the tag prop when the tag is defined', (t) => {
  const wrapper = mount(
    <DropdownToggle nav>Ello world</DropdownToggle>,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.same(wrapper.prop('tag'), undefined);
  t.end();
});

test('DropdownToggle::nav:: should preventDefault', (t) => {
  const preventDefault = sinon.spy();
  const wrapper = mount(
    <DropdownToggle nav>Ello world</DropdownToggle>,
    {
      context: { isOpen, toggle, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );
  const instance = wrapper.instance();

  instance.onClick({ preventDefault });
  t.true(preventDefault.called);
  t.end();
});
