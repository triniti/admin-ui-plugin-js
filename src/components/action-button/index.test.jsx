import React from 'react';
import test from 'tape';
import { mount } from 'enzyme';
import ActionButton from './';

test('ActionButton:: should render default props', (t) => {
  const wrapper = mount(<ActionButton />);

  t.equal(wrapper.html(), '<button class="btn-action btn-action-click btn btn-light">Click</button>');
  t.end();
});

test('ActionButton:: should render custom props', (t) => {
  const wrapper = mount(<ActionButton text="Save" />);

  t.equal(wrapper.text(), 'Save');
  t.end();
});

test('ActionButton:: should render custom icon', (t) => {
  const wrapper = mount(<ActionButton text="Save" icon="save" />);

  t.equal(wrapper.html(), '<button class="btn-action btn-action-save btn btn-light"><span alt="Save" class="icon">[object Object]</span>Save</button>');
  t.end();
});

test('ActionButton:: should pass all other props', (t) => {
  const wrapper = mount(<ActionButton color="primary" />);

  t.equal(wrapper.html(), '<button class="btn-action btn-action-click btn btn-primary">Click</button>');
  t.end();
});
