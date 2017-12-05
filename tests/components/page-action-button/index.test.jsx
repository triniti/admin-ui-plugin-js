import React from 'react';
import test from 'tape';
import { mount } from 'enzyme';
import { PageActionButton, Icon } from '../../../src/components';

test('PageActionButton:: should render default props', (t) => {
  const wrapper = mount(<PageActionButton />);

  t.equal(wrapper.html(), '<button class="mb-0 btn-action btn btn-light btn-sm">Click</button>');
  t.end();
});

test('PageActionButton:: should render custom props', (t) => {
  const wrapper = mount(<PageActionButton text="Save" />);

  t.equal(wrapper.text(), 'Save');
  t.end();
});

test('PageActionButton:: should render custom icon', (t) => {
  const wrapper = mount(<PageActionButton text="Save" icon="save" />);

  t.equal(wrapper.find(Icon).length, 1);
  t.equal(wrapper.text(), 'Save');
  t.end();
});

test('PageActionButton:: should pass all other props', (t) => {
  const wrapper = mount(<PageActionButton color="primary" />);

  t.equal(wrapper.html(), '<button class="mb-0 btn-action btn btn-primary btn-sm">Click</button>', wrapper.html());
  t.end();
});
