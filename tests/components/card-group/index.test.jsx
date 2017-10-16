import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { CardGroup } from '../../../src/components';

test('CardGroup', (t) => {
  let wrapper = shallow(<CardGroup>Yo!</CardGroup>);
  t.equal('Yo!', wrapper.text(), 'should render with "card-group" class');
  t.true(wrapper.hasClass('card-group'), 'should render with "card-group" class');

  wrapper = shallow(<CardGroup className="other">Yo!</CardGroup>);
  t.true(wrapper.hasClass('card-group'), 'should render additional classes');
  t.true(wrapper.hasClass('other'), 'should render additional classes');

  wrapper = shallow(<CardGroup tag="main">Yo!</CardGroup>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.true(wrapper.hasClass('card-group'), 'should render custom tag');
  t.equal(1, wrapper.find('main').length, 'should render custom tag');

  t.end();
});
