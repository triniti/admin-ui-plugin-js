import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { CardText } from '../../../src/components';

test('CardText', (t) => {
  let wrapper = shallow(<CardText>Yo!</CardText>);
  t.equal('Yo!', wrapper.text(), 'should render with "card-text" class');
  t.true(wrapper.hasClass('card-text'), 'should render with "card-text" class');

  wrapper = shallow(<CardText className="other">Yo!</CardText>);
  t.true(wrapper.hasClass('card-text'), 'should render additional classes');
  t.true(wrapper.hasClass('other'), 'should render additional classes');

  wrapper = shallow(<CardText tag="span">Yo!</CardText>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.equal(1, wrapper.find('span').length, 'should render custom tag');
  t.true(wrapper.hasClass('card-text'), 'should render custom tag');

  t.end();
});
