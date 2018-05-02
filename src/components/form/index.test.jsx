import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Form as FormRS } from 'reactstrap';
import Form from './';

test('Form:: should import Form from reactstrap', (t) => {
  const wrapper = shallow(<Form />);

  t.equal(wrapper.find(FormRS).length, 1);
  t.end();
});

test('Form:: should render custom classNames', (t) => {
  const wrapper = shallow(<Form inline theme="success" />);

  t.equal(wrapper.find(FormRS).length, 1);
  t.equal(wrapper.find('.form-inline').length, 1);
  t.equal(wrapper.find('.form-theme-success').length, 1);

  t.end();
});
