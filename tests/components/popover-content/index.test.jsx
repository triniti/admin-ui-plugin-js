import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { PopoverContent, PopoverBody } from '../../../src/components';

test('PopoverContent:: should render PopoverBody', (t) => {
  const wrapper = shallow(<PopoverContent>Ello world</PopoverContent>);

  t.equal(wrapper.type(), PopoverBody);
  t.end();
});
