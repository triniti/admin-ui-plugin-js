import React from 'react';
import test from 'tape';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { ListGroupItem } from '../../../src/components';

test('ListGroupItem:: should render children', (t) => {
  const wrapper = shallow(<ListGroupItem>Yo!</ListGroupItem>);
  t.equal(wrapper.find('li').text(), 'Yo!');
  t.true(wrapper.hasClass('list-group-item'));
  t.end();
});

test('ListGroupItem:: should render with "active" class when active is passed', (t) => {
  const wrapper = shallow(<ListGroupItem active>Yo!</ListGroupItem>);
  t.true(wrapper.hasClass('active'));
  t.end();
});

test('ListGroupItem:: should render with "disabled" class when disabled is passed', (t) => {
  const wrapper = shallow(<ListGroupItem disabled>Yo!</ListGroupItem>);
  t.true(wrapper.hasClass('disabled'));
  t.end();
});

test('ListGroupItem:: should render with "list-group-item-action" class when action is passed', (t) => {
  const wrapper = shallow(<ListGroupItem action>Yo!</ListGroupItem>);
  t.true(wrapper.hasClass('list-group-item-action'));
  t.end();
});

test('ListGroupItem:: should render with "list-group-item-${color}" class when color is passed', (t) => {
  const wrapper = shallow(<ListGroupItem color="success">Yo!</ListGroupItem>);
  t.true(wrapper.hasClass('list-group-item-success'));
  t.end();
});

test('ListGroupItem:: should prevent click event when disabled is passed', (t) => {
  const onDisableClick = sinon.spy();
  const wrapper = mount(<ListGroupItem disabled onClick={onDisableClick}>Yo!</ListGroupItem>);
  wrapper.find('li').simulate('click');
  t.true(onDisableClick.notCalled);
  t.end();
});
