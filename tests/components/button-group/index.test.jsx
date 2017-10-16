import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { ButtonGroup } from '../../../src/components';

test('ButtonGroup', (t) => {
  let wrapper = shallow(<ButtonGroup>Ello world</ButtonGroup>);
  t.equal('Ello world', wrapper.text(), 'should render children');
  t.true(wrapper.hasClass('btn-group'), 'should render children');

  const small = shallow(<ButtonGroup size="sm">Small Button</ButtonGroup>);
  const large = shallow(<ButtonGroup size="lg">Large Button</ButtonGroup>);

  t.true(small.hasClass('btn-group-sm'), 'should render different size classes');
  t.true(large.hasClass('btn-group-lg'), 'should render different size classes');

  wrapper = shallow(<ButtonGroup vertical>Vertical Group</ButtonGroup>);
  t.true(wrapper.hasClass('btn-group-vertical'), 'should render vertical class');

  wrapper = shallow(<ButtonGroup tag="main">Yo!</ButtonGroup>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.equal('main', wrapper.type(), 'should render custom tag');
  t.true(wrapper.hasClass('btn-group'), 'should render custom tag');

  t.end();
});
