import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Collapse } from 'reactstrap';
import Button from '../button';
// eslint-disable-next-line
import CardCollapse from './';

test('CardCollapse:: should import CardCollapse component from reactstrap', (t) => {
  const wrapper = shallow(<CardCollapse />);

  t.equal(wrapper.find(Collapse).length, 1);
  t.equal(wrapper.find('.card-collapse').length, 1);
  t.end();
});

test('CardCollapse:: should use custom props to modify class names', (t) => {
  const wrapper = shallow(<CardCollapse title="hello" isOpen isStacked className="additional-class" />);

  t.equal(wrapper.find('.mb-0').length, 1);
  t.equal(wrapper.find('.additional-class').length, 1);
  t.equal(wrapper.find(Button).children().text(), 'hello');
  t.true(wrapper.html().includes('collapse show'));
  t.true(wrapper.html().includes('btn btn-toggler active'));

  wrapper.setState({ isOpen: false });
  t.false(wrapper.html().includes('collapse show'));
  t.false(wrapper.html().includes('btn btn-toggler active'));

  t.end();
});
