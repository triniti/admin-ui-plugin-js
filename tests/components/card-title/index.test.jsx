import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { CardTitle } from '../../../src/components';

test('CardTitle', (t) => {
  let wrapper = shallow(<CardTitle>Yo!</CardTitle>);
  t.equal('Yo!', wrapper.text(), 'should render with "card-title" class');
  t.true(wrapper.hasClass('card-title'), 'should render with "card-title" class');

  wrapper = shallow(<CardTitle className="other">Yo!</CardTitle>);
  t.true(wrapper.hasClass('card-title'), 'should render additional classes');
  t.true(wrapper.hasClass('other'), 'should render additional classes');

  wrapper = shallow(<CardTitle tag="h1">Yo!</CardTitle>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.equal(1, wrapper.find('h1').length, 'should render custom tag');
  t.true(wrapper.hasClass('card-title'), 'should render custom tag');

  t.end();
});
