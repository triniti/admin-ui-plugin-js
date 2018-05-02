import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { FormGroup as FormGroupRS } from 'reactstrap';
import FormGroup from './index';

test('FormGroup:: should import FormGroupRS from reactstrap', (t) => {
  const wrapper = shallow(<FormGroup />);

  t.equal(wrapper.find(FormGroupRS).length, 1);
  t.false(wrapper.props().check);
  t.false(wrapper.props().inline);

  t.end();
});

test('FormGroup:: should render "form-inline" style when it is not check but has inline prop', (t) => {
  const wrapper = shallow(<FormGroup inline className="more-class" />);

  t.equal(wrapper.find(FormGroupRS).length, 1);
  t.equal(wrapper.find('.form-inline').length, 1);
  t.equal(wrapper.find('.more-class').length, 1);
  t.false(wrapper.props().check);
  t.true(wrapper.props().inline);

  t.end();
});

test('FormGroup:: should not render "form-inline" style when check prop is true', (t) => {
  const wrapper = shallow(<FormGroup inline check />);

  t.equal(wrapper.find('.form-inline').length, 0);
  t.true(wrapper.props().check);
  t.true(wrapper.props().inline);

  t.end();
});
