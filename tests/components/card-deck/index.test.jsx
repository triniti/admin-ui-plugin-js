import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { CardDeck } from '../../../src/components';

test('CardDeck', (t) => {
  let wrapper = shallow(<CardDeck>Yo!</CardDeck>);
  t.equal('Yo!', wrapper.text(), 'should render with "card-deck" class');
  t.equal(1, wrapper.find('.card-deck').length, 'should render with "card-deck" class');

  wrapper = shallow(<CardDeck className="other">Yo!</CardDeck>);
  t.true(wrapper.find('.card-deck').hasClass('other'), 'should render additional classes');
  t.equal(1, wrapper.find('.card-deck').length, 'should render additional classes');

  wrapper = shallow(<CardDeck tag="main">Yo!</CardDeck>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.equal(1, wrapper.find('.card-deck').length, 'should render custom tag');
  t.equal(1, wrapper.find('main').length, 'should render custom tag');

  t.end();
});
