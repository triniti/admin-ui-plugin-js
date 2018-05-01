import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Backdrop from './';

test('Backdrop:: should handle click', (t) => {
  const handleClick = sinon.spy();
  const wrapper = shallow(<Backdrop onClick={handleClick} />);

  t.equal(wrapper.find('div.tri-backdrop').length, 1);

  wrapper.find('.tri-backdrop').at(0).simulate('click');
  t.true(handleClick.called);

  t.end();
});
