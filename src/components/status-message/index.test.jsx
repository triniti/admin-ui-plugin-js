import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { STATUS_FULFILLED, STATUS_NONE, STATUS_PENDING, STATUS_REJECTED } from '@triniti/app/constants';
import Alert from '../alert';
import Loading from '../loading';
import StatusMessage from './';

test('StatusMessage:: should return null bu default', (t) => {
  const wrapper = shallow(<StatusMessage />);
  t.false(wrapper.instance());

  t.end();
});

test('StatusMessage:: should change rendering based on status', (t) => {
  const wrapper = shallow(<StatusMessage status={STATUS_NONE} />);
  t.false(wrapper.instance());

  wrapper.setProps({ status: STATUS_PENDING });
  t.equal(wrapper.find(Alert).length, 0);
  t.equal(wrapper.find(Loading).length, 1);

  wrapper.setProps({ status: STATUS_REJECTED, exception: { getMessage: () => 'something wrong' } });
  t.equal(wrapper.find(Alert).length, 1);
  t.true(wrapper.find(Alert).html().includes('something wrong'));
  t.equal(wrapper.find(Loading).length, 0);

  wrapper.setProps({ status: STATUS_FULFILLED });
  t.false(wrapper.instance());

  t.end();
});
