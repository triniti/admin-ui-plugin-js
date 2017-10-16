import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { CardColumns } from '../../../src/components';

test('CardColumns', (t) => {
  let wrapper = shallow(<CardColumns>Yo!</CardColumns>);
  t.equal('Yo!', wrapper.text(), 'should render with "card-columns" class');
  t.true(wrapper.hasClass('card-columns'), 'should render with "card-columns" class');

  wrapper = shallow(<CardColumns className="other">Yo!</CardColumns>);
  t.true(wrapper.hasClass('other'), 'should render additional classes');
  t.true(wrapper.hasClass('card-columns'), 'should render additional classes');

  wrapper = shallow(<CardColumns tag="main">Yo!</CardColumns>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.true(wrapper.hasClass('card-columns'), 'should render custom tag');
  t.equal(1, wrapper.find('main').length, 'should render custom tag');

  t.end();
});
