import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { ModalHeader } from '../../../src/components';

test('ModalHeader:: should render with "modal-header" class', (t) => {
  const wrapper = shallow(<ModalHeader>Yo!</ModalHeader>);

  t.equal(wrapper.text(), 'Yo!');
  t.true(wrapper.hasClass('modal-header'));
  t.end();
});

test('ModalHeader:: should render additional classes', (t) => {
  const wrapper = shallow(<ModalHeader className="other">Yo!</ModalHeader>);

  t.true(wrapper.hasClass('other'));
  t.true(wrapper.hasClass('modal-header'));
  t.end();
});

test('ModalHeader:: should render close button', (t) => {
  const wrapper = shallow(<ModalHeader toggle={(t) => {}} className="other">Yo!</ModalHeader>);

  t.true(wrapper.hasClass('other'));
  t.true(wrapper.hasClass('modal-header'));
  t.equal(wrapper.find('button.close').length, 1);
  t.end();
});

test('ModalHeader:: should render custom tag', (t) => {
  const wrapper = shallow(<ModalHeader tag="p">Yo!</ModalHeader>).childAt(0);

  t.equal(wrapper.text(), 'Yo!');
  t.equal(wrapper.type(), 'p');
  t.end();
});

test('ModalHeader:: should render custom wrapping tag', (t) => {
  const wrapper = shallow(<ModalHeader wrapTag="main">Yo!</ModalHeader>);

  t.equal(wrapper.type(), 'main');
  t.end();
});

test('ModalHeader:: should render close button with custom aria-label', (t) => {
  const wrapper = shallow(<ModalHeader toggle={() => {}} className="other" closeAriaLabel="oseclay">Yo!</ModalHeader>);

  const closeButton = wrapper.find('button.close').first();
  t.equal(closeButton.prop('aria-label'), 'oseclay');
  t.end();
});
