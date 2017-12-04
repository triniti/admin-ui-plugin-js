import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { PopoverBody } from '../../../src/components';

test('PopoverBody:: should render children', (t) => {
  const wrapper = shallow(<PopoverBody>Ello world</PopoverBody>);

  t.equal(wrapper.text(), 'Ello world');
  t.true(wrapper.hasClass('popover-body'));

  t.end();
});
