import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Card } from '../../../src/components';

test('Card', (t) => {
  let wrapper = shallow(<Card>Yo!</Card>);
  t.equal('Yo!', wrapper.text(), 'should render with "card" class');
  t.true(wrapper.hasClass('card'), 'should render with "card" class');

  wrapper = shallow(<Card inverse body color="primary">Yo!</Card>);
  t.equal('Yo!', wrapper.text(), 'should render with "modal-header" class');
  t.true(wrapper.hasClass('card'), 'should render with "card" class');
  t.true(wrapper.hasClass('card-body'), 'should render with "card-body" class');
  t.true(wrapper.hasClass('card-primary'), 'should render with "card-primary" class');
  t.true(wrapper.hasClass('card-inverse'), 'should render with "card-inverse" class');

  wrapper = shallow(<Card outline body color="primary">Yo!</Card>);
  t.equal('Yo!', wrapper.text());
  t.true(wrapper.hasClass('card'), 'should render with "outline" class when a color is provided');
  t.true(wrapper.hasClass('card-body'), 'should render with "card-body" class when a color is provided');
  t.true(wrapper.hasClass('card-outline-primary'), 'should render with "card-outline-primary" class when a color is provided');

  wrapper = shallow(<Card outline body>Yo!</Card>);
  t.equal('Yo!', wrapper.text());
  t.true(wrapper.hasClass('card'), 'should not render with "card" class when a color is not provided (no default)');
  t.true(wrapper.hasClass('card-body'), 'should not render with "card-body" class when a color is not provided (no default)');
  t.equal(0, wrapper.find('.card-outline').length, 'should not render with "card-outline" class when a color is not provided (no default)');

  wrapper = shallow(<Card className="other">Yo!</Card>);
  t.equal('Yo!', wrapper.text(), 'should render additional classes');
  t.true(wrapper.hasClass('other'), 'should render additional classes');
  t.true(wrapper.hasClass('card'), 'should render additional classes');

  wrapper = shallow(<Card tag="main">Yo!</Card>);
  t.equal('Yo!', wrapper.text(), 'should render additional classes');
  t.true(wrapper.hasClass('card'), 'should render custom tag');
  t.equal(1, wrapper.find('main').length, 'should render custom tag');

  t.end();
});
