import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Alert as AlertRS } from 'reactstrap';
import Alert from './';

test('Alert:: should import Alert component from reactstrap', (t) => {
  const wrapper = shallow(<Alert />);

  t.equal(wrapper.find(AlertRS).length, 1);
  t.end();
});

test('Alert:: should use inverse and sticky to modify class names', (t) => {
  const wrapper = shallow(<Alert inverse sticky className="additional-class" />);

  t.equal(wrapper.find('.alert-inverse').length, 1);
  t.equal(wrapper.find('.alert-sticky').length, 1);
  t.equal(wrapper.find('.additional-class').length, 1);
  t.end();
});
