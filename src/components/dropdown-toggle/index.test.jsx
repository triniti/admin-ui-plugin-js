import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { DropdownToggle as DropdownToggleRS } from 'reactstrap';
import DropdownToggle from './';

test('DropdownToggle:: should import DropdownToggle from reactstrap', (t) => {
  const wrapper = shallow(<DropdownToggle />);

  t.equal(wrapper.find(DropdownToggleRS).length, 1);
  t.end();
});

test('DropdownToggle:: should render custom classNames', (t) => {
  const wrapper = shallow(<DropdownToggle icon size="lg" outlineText radius="round" color="success" />);

  t.equal(wrapper.find(DropdownToggleRS).length, 1);
  t.equal(wrapper.find('.btn-icon').length, 1);
  t.equal(wrapper.find('.btn-lg').length, 1);
  t.equal(wrapper.find('.btn-outline-text-success').length, 1);
  t.equal(wrapper.find('.btn-radius-round').length, 1);

  t.end();
});
