import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { ModalFooter as ModalFooterRS } from 'reactstrap';
import ModalFooter from './';

test('ModalFooter:: should import ModalFooter component from reactstrap', (t) => {
  const wrapper = shallow(<ModalFooter />);

  t.equal(wrapper.find(ModalFooterRS).length, 1);
  t.end();
});

test('ModalFooter:: should render custom props and classNames', (t) => {
  const wrapper = shallow(<ModalFooter buttons className="additional-class" />);

  t.equal(wrapper.find('.modal-footer-buttons').length, 1);
  t.equal(wrapper.find('.additional-class').length, 1);

  t.end();
});
