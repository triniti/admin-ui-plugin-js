import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { CardBlock } from '../../../src/components';

test('CardBlock', (t) => {
  let wrapper = shallow(<CardBlock>Yo!</CardBlock>);
  t.equal('Yo!', wrapper.text(), 'should render with "card-block" class');
  t.true(wrapper.hasClass('card-block'), 'should render with "card-block" class');

  wrapper = shallow(<CardBlock className="other">Yo!</CardBlock>);
  t.true(wrapper.hasClass('other'), 'should render additional classes');
  t.true(wrapper.hasClass('card-block'), 'should render additional classes');

  wrapper = shallow(<CardBlock tag="main">Yo!</CardBlock>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.true(wrapper.hasClass('card-block'), 'should render custom tag');
  t.equal(1, wrapper.find('main').length, 'should render custom tag');

  t.end();
});
