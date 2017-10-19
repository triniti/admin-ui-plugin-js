import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { FormText } from '../../../src/components';

test('FormText:: default', (t) => {
  const wrapper = shallow(<FormText>Yo!</FormText>);

  t.equal(wrapper.type(), 'small', 'should render with "form" tag\'');
  t.equal(wrapper.text(), 'Yo!', 'should render children');
  t.true(wrapper.hasClass('form-text'), 'should render with "form-text" class when not inline');
  t.true(wrapper.hasClass('text-muted'), 'should render with "text-muted" class by default');
  t.end();
});


test('FormText:: inline', (t) => {
  const wrapper = shallow(<FormText inline>Yo!</FormText>);

  t.false(wrapper.hasClass('form-text'), 'should not render with "form-text" class when inline');
  t.end();
});

test('FormText:: color', (t) => {
  const wrapper = shallow(<FormText color="">Yo!</FormText>);

  t.false(wrapper.hasClass('text-muted'), 'should render without "text-*" class when color is and empty string');
  t.false(wrapper.hasClass('text-'), 'should render without "text-*" class when color is and empty string');
  t.end();
});

test('FormText:: should render with "text-${color}" class when color is provided', (t) => {
  const wrapper = shallow(<FormText color="yoyo">Yo!</FormText>);

  t.true(wrapper.hasClass('text-yoyo'));
  t.end();
});

test('FormText:: should render additional classes', (t) => {
  const wrapper = shallow(<FormText className="other">Yo!</FormText>);

  t.true(wrapper.hasClass('other'));
  t.end();
});

test('FormText:: should render custom tag', (t) => {
  const wrapper = shallow(<FormText tag="main">Yo!</FormText>);

  t.equal(wrapper.type(), 'main');
  t.end();
});

