import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { ButtonToolbar } from '../../../src/components';

test('ButtonToolbar', (t) => {
  let wrapper = shallow(<ButtonToolbar>Ello world</ButtonToolbar>);
  t.equal('Ello world', wrapper.text(), 'should render children');
  t.true(wrapper.hasClass('btn-toolbar'), 'should render children');

  wrapper = shallow(<ButtonToolbar tag="main">Yo!</ButtonToolbar>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.equal('main', wrapper.type(), 'should render custom tag');
  t.true(wrapper.hasClass('btn-toolbar'), 'should render custom tag');

  t.end();
});
