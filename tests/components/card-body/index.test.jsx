import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { CardBody } from '../../../src/components';

test('CardBody', (t) => {
  let wrapper = shallow(<CardBody>Yo!</CardBody>);
  t.equal('Yo!', wrapper.text(), 'should render with "card-body" class');
  t.true(wrapper.hasClass('card-body'), 'should render with "card-block" class');

  wrapper = shallow(<CardBody className="other">Yo!</CardBody>);
  t.true(wrapper.hasClass('other'), 'should render additional classes');
  t.true(wrapper.hasClass('card-body'), 'should render additional classes');

  wrapper = shallow(<CardBody tag="main">Yo!</CardBody>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.true(wrapper.hasClass('card-body'), 'should render custom tag');
  t.equal(1, wrapper.find('main').length, 'should render custom tag');

  t.end();
});
