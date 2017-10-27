import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { ModalBody } from '../../../src/components';

test('ModalBody:: should render with "modal-body" class', (t) => {
  const wrapper = shallow(<ModalBody>Yo!</ModalBody>);

  t.equal(wrapper.text(), 'Yo!');
  t.equal(wrapper.hasClass('modal-body'), true);
  t.end();
});

test('ModalBody:: should render additional classes', (t) => {
  const wrapper = shallow(<ModalBody className="other">Yo!</ModalBody>);

  t.equal(wrapper.hasClass('other'), true);
  t.equal(wrapper.hasClass('modal-body'), true);
  t.end();
});

test('ModalBody:: should render custom tag', (t) => {
  const wrapper = shallow(<ModalBody tag="main">Yo!</ModalBody>);

  t.equal(wrapper.text(), 'Yo!');
  t.equal(wrapper.hasClass('modal-body'), true);
  t.equal(wrapper.type(), 'main');
  t.end();
});

