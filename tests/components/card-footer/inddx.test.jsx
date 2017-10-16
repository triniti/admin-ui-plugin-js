import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { CardFooter } from '../../../src/components';

test('CardFooter', (t) => {
  let wrapper = shallow(<CardFooter>Yo!</CardFooter>);
  t.equal('Yo!', wrapper.text(), 'should render with "card-footer" class');
  t.true(wrapper.hasClass('card-footer'), 'should render with "card-footer" class');

  wrapper = shallow(<CardFooter className="other">Yo!</CardFooter>);
  t.true(wrapper.hasClass('other'), 'should render additional classes');
  t.true(wrapper.hasClass('card-footer'), 'should render additional classes');

  wrapper = shallow(<CardFooter tag="main">Yo!</CardFooter>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.true(wrapper.hasClass('card-footer'), 'should render custom tag');
  t.equal(1, wrapper.find('main').length, 'should render custom tag');

  t.end();
});
