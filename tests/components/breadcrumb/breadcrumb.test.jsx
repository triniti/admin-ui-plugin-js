import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Breadcrumb } from '../../../src/components';

test('Breadcrumb', (t) => {
  let wrapper = shallow(<Breadcrumb>Yo!</Breadcrumb>);
  t.equal('Yo!', wrapper.text(), 'should render children');
  t.equal('ol', wrapper.type(), 'should render "ol" by default');
  t.true(wrapper.hasClass('breadcrumb'), 'should render with the "breadcrumb" class');

  wrapper = shallow(<Breadcrumb tag="main">Yo!</Breadcrumb>);
  t.equal('main', wrapper.type(), 'should render custom tag');

  t.end();
});
