import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Media } from '../../../src/components';

test('Media:: should render a div tag by default', (t) => {
  const wrapper = shallow(<Media />);

  t.equal(wrapper.type(), 'div');
  t.end();
});

test('Media:: should render an h5 tag by default for heading', (t) => {
  const wrapper = shallow(<Media heading />);

  t.equal(wrapper.type(), 'h5');
  t.end();
});

test('Media:: should render an a tag by default for left', (t) => {
  const wrapper = shallow(<Media left />);

  t.equal(wrapper.type(), 'a');
  t.end();
});

test('Media:: should render an a tag by default for right', (t) => {
  const wrapper = shallow(<Media right />);

  t.equal(wrapper.type(), 'a');
  t.end();
});

test('Media:: should render an img tag by default for object', (t) => {
  const wrapper = shallow(<Media object />);

  t.equal(wrapper.type(), 'img');
  t.end();
});

test('Media:: should render a ul tag by default for list', (t) => {
  const wrapper = shallow(<Media list />);

  t.equal(wrapper.type(), 'ul');
  t.end();
});

test('Media:: should pass additional classNames', (t) => {
  const wrapper = shallow(<Media className="extra" />);

  t.true(wrapper.hasClass('extra'));
  t.end();
});

test('Media:: should render custom tag', (t) => {
  const wrapper = shallow(<Media tag="main" />);

  t.equal(wrapper.type(), 'main');
  t.end();
});

test('Media:: should render body', (t) => {
  const wrapper = shallow(<Media body />);

  t.true(wrapper.hasClass('media-body'));
  t.end();
});

test('Media:: should render heading', (t) => {
  const wrapper = shallow(<Media heading />);

  t.true(wrapper.hasClass('media-heading'));
  t.end();
});

test('Media:: should render left', (t) => {
  const wrapper = shallow(<Media left />);

  t.true(wrapper.hasClass('media-left'));
  t.end();
});

test('Media:: should render right', (t) => {
  const wrapper = shallow(<Media right />);

  t.true(wrapper.hasClass('media-right'));
  t.end();
});

test('Media:: should render top', (t) => {
  const wrapper = shallow(<Media top />);

  t.true(wrapper.hasClass('media-top'));
  t.end();
});

test('Media:: should render bottom', (t) => {
  const wrapper = shallow(<Media bottom />);

  t.true(wrapper.hasClass('media-bottom'));
  t.end();
});

test('Media:: should render middle', (t) => {
  const wrapper = shallow(<Media middle />);

  t.true(wrapper.hasClass('media-middle'));
  t.end();
});

test('Media:: should render object', (t) => {
  const wrapper = shallow(<Media object />);

  t.true(wrapper.hasClass('media-object'));
  t.end();
});

test('Media:: should render media', (t) => {
  const wrapper = shallow(<Media />);

  t.true(wrapper.hasClass('media'));
  t.end();
});

test('Media:: should render list', (t) => {
  const wrapper = shallow(
    <Media list>
      <Media tag="li" />
      <Media tag="li" />
      <Media tag="li" />
    </Media>,
  );

  t.true(wrapper.hasClass('media-list'));
  t.equal(wrapper.find({ tag: 'li' }).length, 3);
  t.end();
});

test('Media:: should render children', (t) => {
  const wrapper = shallow(<Media><Media body /></Media>);

  t.equal(wrapper.find({ body: true }).length, 1);
  t.end();
});
