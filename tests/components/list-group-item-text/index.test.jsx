import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { ListGroupItemText } from '../../../src/components';

test('ListGroupItemText:: should render children', (t) => {
  const listGroupItem = shallow(<ListGroupItemText>Yo!</ListGroupItemText>).find('p');
  t.equal(listGroupItem.text(), 'Yo!');
  t.end();
});

test('ListGroupItemText:: should render with "list-group-item-text" class', (t) => {
  const wrapper = shallow(<ListGroupItemText>Yo!</ListGroupItemText>);
  t.true(wrapper.hasClass('list-group-item-text'));
  t.end();
});

