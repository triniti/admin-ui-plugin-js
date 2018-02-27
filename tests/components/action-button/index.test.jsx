import React from 'react';
import test from 'tape';
import { mount } from 'enzyme';
import { ActionButton, Icon } from '../../../src/components';

test('ActionButton:: should render default props', (t) => {
  const wrapper = mount(<ActionButton />);

  t.equal(wrapper.html(), '<button class="btn btn-light btn-action btn-action-click">Click</button>');
  t.end();
});

test('ActionButton:: should render custom props', (t) => {
  const wrapper = mount(<ActionButton text="Save" />);

  t.equal(wrapper.text(), 'Save');
  t.end();
});

test('ActionButton:: should render custom icon', (t) => {
  const wrapper = mount(<ActionButton text="Save" icon="save" />);

  t.equal(wrapper.html(), '<button class="btn btn-light btn-action btn-action-save"><span alt="Save" class="icon">[object Object]</span>Save</button>');
  t.end();
});

test('ActionButton:: should pass all other props', (t) => {
  const wrapper = mount(<ActionButton color="primary" />);

  t.equal(wrapper.html(), '<button class="btn btn-primary btn-action btn-action-click">Click</button>');
  t.end();
});
