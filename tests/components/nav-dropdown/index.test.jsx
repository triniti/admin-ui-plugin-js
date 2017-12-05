import React from 'react';
import tape from 'tape';
import { mount } from 'enzyme';
import { NavDropdown, DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from '../../../src/components';

let isOpen;
const toggle = () => { isOpen = !isOpen; };

const setup = () => {
  isOpen = false;
};

const test = (description, fn) => {
  tape(description, (t) => {
    setup();
    fn(t);
  });
};

test('NavDropdown:: should render a single child', (t) => {
  const wrapper = mount(<NavDropdown isOpen={isOpen} toggle={toggle}>Ello world</NavDropdown>);

  t.equal(wrapper.find(Dropdown).text(), 'Ello world');
  t.equal(wrapper.find('li.nav-item').length, 1, wrapper.html());
  t.end();
});

test('NavDropdown:: should render multiple children when isOpen', (t) => {
  isOpen = true;
  const wrapper = mount(
    <NavDropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Test</DropdownItem>
      </DropdownMenu>
    </NavDropdown>,
  );

  t.equal(wrapper.find('.btn').text(), 'Toggle');
  t.equal(wrapper.find('li.nav-item').length, 1);
  t.equal(wrapper.find('.dropdown-item').length, 1);
  t.equal(wrapper.find('li').children().length, 2);
  t.end();
});

