import React from 'react';
import PropType from 'prop-types';
import tape from 'tape';
import { mount, shallow } from 'enzyme';
import { Popper } from 'react-popper';
import { DropdownMenu } from '../../../src/components';

let isOpen;
let dropup;
let popperManager;

const setup = () => {
  isOpen = false;
  dropup = false;
  popperManager = {
    getTargetNode: () => ({}),
  };
};

const test = (description, fn) => {
  tape(description, (t) => {
    setup();
    fn(t);
  });
};

test('DropdownMenu:: should render children', (t) => {
  isOpen = true;
  const wrapper = mount(
    <DropdownMenu>
      <p>Content</p>
    </DropdownMenu>,
    {
      context: { isOpen, dropup, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.find('.dropdown-menu').find('p').text(), 'Content');
  t.equal(wrapper.find('.dropdown-menu').find('p').length, 1);
  t.end();
});

test('DropdownMenu:: should not have the class "show" when isOpen context is false', (t) => {
  isOpen = false;
  const wrapper = mount(
    <DropdownMenu>
      <p>Content</p>
    </DropdownMenu>,
    {
      context: { isOpen, dropup, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.find('.show').length, 0);
  t.end();
});

test('DropdownMenu:: should have the class "show" when isOpen context is true', (t) => {
  isOpen = true;
  const wrapper = shallow(
    <DropdownMenu>
      <p>Content</p>
    </DropdownMenu>,
    {
      context: { isOpen, dropup, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.find('.show').length, 1);
  t.end();
});

test('DropdownMenu:: should render left aligned menus by default', (t) => {
  isOpen = true;
  const wrapper = mount(
    <DropdownMenu>Ello world</DropdownMenu>,
    {
      context: { isOpen, dropup, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.find('.dropdown-menu-righ').length, 0);
  t.end();
});

test('DropdownMenu:: should render right aligned menus', (t) => {
  isOpen = true;
  const wrapper = shallow(
    <DropdownMenu right>Ello world</DropdownMenu>,
    {
      context: { isOpen, dropup, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.find('.dropdown-menu-right').length, 1);
  t.end();
});

test('DropdownMenu:: should render down when dropup is false on the context', (t) => {
  isOpen = true;
  const wrapper = shallow(
    <DropdownMenu>Ello world</DropdownMenu>,
    {
      context: { isOpen, dropup, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.find(Popper).prop('placement'), 'bottom-start');
  t.end();
});

test('DropdownMenu:: should render up when dropup is true on the context', (t) => {
  isOpen = true;
  dropup = true;
  const wrapper = shallow(
    <DropdownMenu>Ello world</DropdownMenu>,
    {
      context: { isOpen, dropup, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.find(Popper).prop('placement'), 'top-start');
  t.end();
});

test('DropdownMenu:: should render down when dropup is false on the context', (t) => {
  isOpen = true;
  const wrapper = shallow(
    <DropdownMenu>Ello world</DropdownMenu>,
    {
      context: { isOpen, dropup, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.find(Popper).prop('placement'), 'bottom-start');
  t.end();
});


test('DropdownMenu:: should not disable flip modifier by default', (t) => {
  isOpen = true;
  const wrapper = shallow(
    <DropdownMenu>Ello world</DropdownMenu>,
    {
      context: { isOpen, dropup, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.same(wrapper.find(Popper).prop('modifiers').flip, undefined);
  t.end();
});

test('DropdownMenu:: should disable flip modifier when flip is false', (t) => {
  isOpen = true;
  const wrapper = shallow(
    <DropdownMenu flip={false}>Ello world</DropdownMenu>,
    {
      context: { isOpen, dropup, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.same(
    wrapper.find(Popper).prop('modifiers'),
    { flip: { enabled: false } },
  );
  t.end();
});

test('DropdownMenu:: should not render multiple children when isOpen is false', (t) => {
  const wrapper = mount(
    <DropdownMenu right>Ello world</DropdownMenu>,
    {
      context: { isOpen, dropup, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.find('dropdown-menu').length, 0);
  t.end();
});


test('DropdownMenu:: should render custom tag', (t) => {
  const wrapper = mount(
    <DropdownMenu tag="main">Yo!</DropdownMenu>,
    {
      context: { isOpen, dropup, popperManager },
      childContextTypes: { popperManager: PropType.object },
    },
  );

  t.equal(wrapper.text(), 'Yo!');
  t.true(wrapper.find('.dropdown-menu').length > 0);
  t.equal(wrapper.getDOMNode().tagName.toLowerCase(), 'main');
  t.end();
});
