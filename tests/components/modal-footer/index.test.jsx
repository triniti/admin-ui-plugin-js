import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { ModalFooter } from '../../../src/components';

test('ModalFooter:: should render with "modal-footer" class', (t) => {
  const wrapper = shallow(<ModalFooter>Yo!</ModalFooter>);

  t.equal(wrapper.text(), 'Yo!');
  t.equal(wrapper.hasClass('modal-footer'), true);
  t.end();
});

test('ModalFooter:: should render additional classes', (t) => {
  const wrapper = shallow(<ModalFooter className="other">Yo!</ModalFooter>);

  t.true(wrapper.hasClass('modal-footer'));
  t.true(wrapper.hasClass('other'));
  t.end();
});

test('ModalFooter:: should render custom tag', (t) => {
  const wrapper = shallow(<ModalFooter tag="main">Yo!</ModalFooter>);

  t.equal(wrapper.text(), 'Yo!');
  t.true(wrapper.hasClass('modal-footer'));
  t.equal(wrapper.type(), 'main');
  t.end();
});

