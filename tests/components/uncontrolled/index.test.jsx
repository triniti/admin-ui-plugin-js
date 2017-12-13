import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import {
  Alert,
  ButtonDropdown,
  Dropdown,
  NavDropdown,
  Tooltip,
  UncontrolledAlert,
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  UncontrolledNavDropdown,
  UncontrolledTooltip,
} from '../../../src/components';

test('UncontrolledAlert:: should be an Alert', (t) => {
  const alert = shallow(<UncontrolledAlert>Yo!</UncontrolledAlert>);
  t.same(alert.type(), Alert);
  t.end();
});

test('UncontrolledAlert:: should have isOpen default to true', (t) => {
  const alert = shallow(<UncontrolledAlert>Yo!</UncontrolledAlert>);
  t.true(alert.prop('isOpen'));
  t.end();
});

test('UncontrolledAlert:: should have toggle function', (t) => {
  const alert = shallow(<UncontrolledAlert>Yo!</UncontrolledAlert>);
  t.is(typeof alert.prop('toggle'), 'function');
  t.end();
});

test('UncontrolledAlert:: should toggle isOpen when toggle is called', (t) => {
  const alert = shallow(<UncontrolledAlert>Yo!</UncontrolledAlert>);
  const instance = alert.instance();
  instance.toggle();
  alert.update();
  t.false(alert.prop('isOpen'));
  t.end();
});

test('UncontrolledButtonDropdown:: should be an ButtonDropdown', (t) => {
  const buttonDropdown = shallow(<UncontrolledButtonDropdown>Yo!</UncontrolledButtonDropdown>);
  t.equal(buttonDropdown.type(), ButtonDropdown);
  t.end();
});

test('UncontrolledButtonDropdown:: should have isOpen default to false', (t) => {
  const buttonDropdown = shallow(<UncontrolledButtonDropdown>Yo!</UncontrolledButtonDropdown>);
  t.false(buttonDropdown.prop('isOpen'));
  t.end();
});

test('UncontrolledButtonDropdown:: should have toggle function', (t) => {
  const buttonDropdown = shallow(<UncontrolledButtonDropdown>Yo!</UncontrolledButtonDropdown>);
  t.equal(typeof buttonDropdown.prop('toggle'), 'function');
  t.end();
});

test('UncontrolledButtonDropdown:: should toggle isOpen when toggle is called', (t) => {
  const buttonDropdown = shallow(<UncontrolledButtonDropdown>Yo!</UncontrolledButtonDropdown>);
  const instance = buttonDropdown.instance();
  instance.toggle();
  buttonDropdown.update();
  t.true(buttonDropdown.prop('isOpen'));
  t.end();
});

test('UncontrolledDropdown:: should be an Dropdown', (t) => {
  const dropdown = shallow(<UncontrolledDropdown>Yo!</UncontrolledDropdown>);
  t.equal(dropdown.type(), Dropdown);
  t.end();
});

test('UncontrolledDropdown:: should have isOpen default to false', (t) => {
  const dropdown = shallow(<UncontrolledDropdown>Yo!</UncontrolledDropdown>);
  t.false(dropdown.prop('isOpen'));
  t.end();
});

test('UncontrolledDropdown:: should have toggle function', (t) => {
  const dropdown = shallow(<UncontrolledDropdown>Yo!</UncontrolledDropdown>);
  t.equal(typeof dropdown.prop('toggle'), 'function');
  t.end();
});

test('UncontrolledDropdown:: should toggle isOpen when toggle is called', (t) => {
  const dropdown = shallow(<UncontrolledDropdown>Yo!</UncontrolledDropdown>);
  const instance = dropdown.instance();
  instance.toggle();
  dropdown.update();
  t.true(dropdown.prop('isOpen'));
  t.end();
});

test('UncontrolledNavDropdown:: should be an NavDropdown', (t) => {
  const navDropdown = shallow(<UncontrolledNavDropdown>Yo!</UncontrolledNavDropdown>);
  t.equal(navDropdown.type(), NavDropdown);
  t.end();
});

test('UncontrolledNavDropdown:: should have isOpen default to false', (t) => {
  const navDropdown = shallow(<UncontrolledNavDropdown>Yo!</UncontrolledNavDropdown>);
  t.false(navDropdown.prop('isOpen'));
  t.end();
});

test('UncontrolledNavDropdown:: should have toggle function', (t) => {
  const navDropdown = shallow(<UncontrolledNavDropdown>Yo!</UncontrolledNavDropdown>);
  t.equal(typeof navDropdown.prop('toggle'), 'function');
  t.end();
});

test('UncontrolledNavDropdown:: should toggle isOpen when toggle is called', (t) => {
  const navDropdown = shallow(<UncontrolledNavDropdown>Yo!</UncontrolledNavDropdown>);
  const instance = navDropdown.instance();
  instance.toggle();
  navDropdown.update();
  t.true(navDropdown.prop('isOpen'));
  t.end();
});

test('UncontrolledTooltip:: should be an Tooltip', (t) => {
  const tooltip = shallow(<UncontrolledTooltip target="blah">Yo!</UncontrolledTooltip>);
  t.equal(tooltip.type(), Tooltip);
  t.end();
});

test('UncontrolledTooltip:: should have isOpen default to false', (t) => {
  const tooltip = shallow(<UncontrolledTooltip target="blah">Yo!</UncontrolledTooltip>);
  t.false(tooltip.prop('isOpen'));
  t.end();
});

test('UncontrolledTooltip:: should have toggle function', (t) => {
  const tooltip = shallow(<UncontrolledTooltip target="blah">Yo!</UncontrolledTooltip>);
  t.equal(typeof tooltip.prop('toggle'), 'function');
  t.end();
});

test('UncontrolledTooltip:: should toggle isOpen when toggle is called', (t) => {
  const tooltip = shallow(<UncontrolledTooltip target="blah">Yo!</UncontrolledTooltip>);
  const instance = tooltip.instance();
  instance.toggle();
  tooltip.update();
  t.true(tooltip.prop('isOpen'));
  t.end();
});
