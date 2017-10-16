import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Badge } from '../../../src/components';

test('Badge', (t) => {
  let wrapper = shallow(<Badge>Yo!</Badge>);
  t.equal('Yo!', wrapper.text(), 'should render children');
  t.true(wrapper.hasClass('badge-default'), 'should render badges with default color');

  wrapper = shallow(<Badge color="danger">Danger Badge</Badge>);
  t.true(wrapper.hasClass('badge-danger'), 'should render Badges with other colors');

  wrapper = shallow(<Badge pill>Pill Badge</Badge>);
  t.true(wrapper.hasClass('badge-pill'), 'should render Badges as pills');

  t.end();
});
