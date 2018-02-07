import React from 'react';
import test from 'tape';
import { shallow, mount } from 'enzyme';
import { Button, InputGroupAddon, InputGroupText } from '../../../src/components';

test('InputGroupAddon:: should render with "div" tag', (t) => {
  const wrapper = shallow(<InputGroupAddon addonType="prepend">Yo!</InputGroupAddon>);

  t.equal(wrapper.type(), 'div');
  t.end();
});

test('InputGroupAddon:: should render text children', (t) => {
  const wrapper = mount(<InputGroupAddon addonType="prepend">Yo!</InputGroupAddon>);

  t.equal(wrapper.find(InputGroupText).length, 1);
  t.equal(wrapper.text(), 'Yo!');
  t.end();
});

test('InputGroupAddon:: should render component children', (t) => {
  const wrapper = mount(<InputGroupAddon addonType="prepend"><Button>not a text child</Button></InputGroupAddon>);

  t.equal(wrapper.children().length, 1);
  t.equal(wrapper.find(Button).length, 1);
  t.equal(wrapper.text(), 'not a text child');
  t.equal(wrapper.html(), '<div class="input-group-prepend"><button class="btn btn-light">not a text child</button></div>');
  t.end();
});

test('InputGroupAddon:: should render based on prop addonType', (t) => {
  const prependAddon = shallow(<InputGroupAddon addonType="prepend">Yo!</InputGroupAddon>);
  t.true(prependAddon.hasClass('input-group-prepend'));

  const appendAddon = shallow(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);
  t.true(appendAddon.hasClass('input-group-append'));
  t.end();
});

test('InputGroupAddon:: should render additional classes', (t) => {
  const wrapper = shallow(<InputGroupAddon addonType="append" className="other">Yo!</InputGroupAddon>);

  t.true(wrapper.hasClass('other'));
  t.true(wrapper.hasClass('input-group-append'));
  t.end();
});

test('InputGroupAddon:: should render custom tag', (t) => {
  const wrapper = shallow(<InputGroupAddon tag="main" addonType="append">Yo!</InputGroupAddon>);

  t.equal(wrapper.type(), 'main', wrapper.type());
  t.end();
});
