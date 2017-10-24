import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { ListGroupItemHeading } from '../../../src/components';

test('ListGroupItemHeading:: should render children', (t) => {
  const wrapper = shallow(<ListGroupItemHeading>Yo!</ListGroupItemHeading>).find('h5');
  t.equal(wrapper.text(), 'Yo!');
  t.end();
});

test('ListGroupItemHeading:: should render with "list-group-item-heading" class', (t) => {
  const wrapper = shallow(<ListGroupItemHeading>Yo!</ListGroupItemHeading>);
  t.true(wrapper.hasClass('list-group-item-heading'));
  t.end();
});
