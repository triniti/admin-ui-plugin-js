import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { PopoverHeader } from '../../../src/components';

test('PopoverHeader:: should render children', (t) => {
  const wrapper = shallow(<PopoverHeader>Ello world</PopoverHeader>);

  t.equal(wrapper.text(), 'Ello world');
  t.true(wrapper.hasClass('popover-header'));
  t.end();
});
