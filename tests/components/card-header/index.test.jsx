import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { CardHeader } from '../../../src/components';

test('CardHeader', (t) => {
  let wrapper = shallow(<CardHeader>Yo!</CardHeader>);
  t.equal('Yo!', wrapper.text(), 'should render with "card-header" class');
  t.true(wrapper.hasClass('card-header'), 'should render with "card-header" class');

  wrapper = shallow(<CardHeader className="other">Yo!</CardHeader>);
  t.true(wrapper.hasClass('other'), 'should render additional classes');
  t.true(wrapper.hasClass('card-header'), 'should render additional classes');

  wrapper = shallow(<CardHeader tag="main">Yo!</CardHeader>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.equal(1, wrapper.find('main').length, 'should render custom tag');
  t.true(wrapper.hasClass('card-header'), 'should render custom tag');

  t.end();
});
