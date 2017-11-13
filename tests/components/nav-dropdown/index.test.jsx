import React from 'react';
import test from 'tape';
import { mount, shallow } from 'enzyme';
import { NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from '../../../src/components';

let isOpen = false;
const toggle = () => { isOpen = !isOpen; };

test('NavDropdown::  should render a single child', (t) => {
  const wrapper = shallow(<NavDropdown isOpen={isOpen} toggle={toggle}>Ello world</NavDropdown>);

  t.equal(wrapper.text(), '<Dropdown />');
  t.true(wrapper.hasClass('nav-item'));
  t.end();
});

test('NavDropdown::  should render multiple children when isOpen', (t) => {
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
  t.equal(wrapper.find('.nav-item').length, 3);
  t.equal(wrapper.find('.dropdown-item').length, 1);
  t.end();
});

