import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { CardLink } from '../../../src/components';

test('CardLink', (t) => {
  let wrapper = shallow(<CardLink>Yo!</CardLink>);
  t.equal('Yo!', wrapper.text(), 'should render with "card-link" class');
  t.true(wrapper.hasClass('card-link'), 'should render with "card-link" class');

  wrapper = shallow(<CardLink className="other">Yo!</CardLink>);
  t.true(wrapper.hasClass('card-link'), 'should render additional classes');
  t.true(wrapper.hasClass('other'), 'should render additional classes');

  wrapper = shallow(<CardLink tag="bottom">Yo!</CardLink>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.equal(1, wrapper.find('bottom').length, 'should render custom tag');
  t.true(wrapper.hasClass('card-link'), 'should render custom tag');

  t.end();
});
