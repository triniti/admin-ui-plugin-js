import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { CardSubtitle } from '../../../src/components';

test('CardSubtitle', (t) => {
  let wrapper = shallow(<CardSubtitle>Yo!</CardSubtitle>);
  t.equal('Yo!', wrapper.text(), 'should render with "card-subtitle" class');
  t.true(wrapper.hasClass('card-subtitle'), 'should render with "card-subtitle" class');

  wrapper = shallow(<CardSubtitle className="other">Yo!</CardSubtitle>);
  t.true(wrapper.hasClass('card-subtitle'), 'should render additional classes');
  t.true(wrapper.hasClass('other'), 'should render additional classes');

  wrapper = shallow(<CardSubtitle tag="h3">Yo!</CardSubtitle>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.equal(1, wrapper.find('h3').length, 'should render custom tag');
  t.true(wrapper.hasClass('card-subtitle'), 'should render custom tag');

  t.end();
});
