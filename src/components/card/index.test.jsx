import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Card as CardRS } from 'reactstrap';
import Card from './';

test('Card:: should import Card component from reactstrap', (t) => {
  const wrapper = shallow(<Card />);

  t.equal(wrapper.find(CardRS).length, 1);
  t.end();
});

test('Card:: should use custom props to modify class names', (t) => {
  const wrapper = shallow(<Card border hover hoverBorder shadow className="additional-class" />);

  t.equal(wrapper.find('.card-border').length, 1);
  t.equal(wrapper.find('.card-hover-border').length, 1);
  t.equal(wrapper.find('.card-shadow').length, 1);
  t.equal(wrapper.find('.additional-class').length, 1);
  t.end();
});
