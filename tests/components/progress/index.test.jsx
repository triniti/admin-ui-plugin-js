import React from 'react';
import test from 'tape';
import { shallow, mount } from 'enzyme';
import { Progress } from '../../../src/components';

test('Progress:: should render with "div" tag by default', (t) => {
  const wrapper = shallow(<Progress />);

  t.equal(wrapper.type(), 'div');
  t.end();
});

test('Progress:: should render with "progress" class', (t) => {
  const wrapper = shallow(<Progress />);

  t.true(wrapper.hasClass('progress'));
  t.end();
});

test('Progress:: should render with "value" 0 by default', (t) => {
  const wrapper = mount(<Progress />);

  t.equal(wrapper.props().value, 0);
  t.end();
});

test('Progress:: should render with "max" 100 by default', (t) => {
  const wrapper = mount(<Progress />);

  t.equal(wrapper.props().max, 100);
  t.end();
});

test('Progress:: should render with the given "value" when passed as string prop', (t) => {
  const wrapper = mount(<Progress value="10" />);

  t.equal(wrapper.props().value, '10');
  t.end();
});

test('Progress:: should render with the given "value" when passed as number prop', (t) => {
  const wrapper = mount(<Progress value={10} />);

  t.equal(wrapper.props().value, 10);
  t.end();
});

test('Progress:: should render with the given "max" when passed as string prop', (t) => {
  const wrapper = mount(<Progress max="10" />);

  t.equal(wrapper.props().max, '10');
  t.end();
});

test('Progress:: should render with the given "max" when passed as number prop', (t) => {
  const wrapper = mount(<Progress max={10} />);

  t.equal(wrapper.props().max, 10);
  t.end();
});

test('Progress:: should render with "progress-bar-striped" class when striped prop is truthy', (t) => {
  const wrapper = shallow(<Progress striped />);

  t.true(wrapper.find('.progress-bar').hasClass('progress-bar-striped'));
  t.end();
});

test('Progress:: should render with "progress-bar-striped" and "progress-bar-animated" classes when animated prop is truthy', (t) => {
  const wrapper = shallow(<Progress animated />);

  t.true(wrapper.find('.progress-bar').hasClass('progress-bar-striped'));
  t.true(wrapper.find('.progress-bar').hasClass('progress-bar-animated'));
  t.end();
});

test('Progress:: should render with "bg-${color}" class when color prop is defined', (t) => {
  const wrapper = shallow(<Progress color="yo" />);

  t.true(wrapper.find('.progress-bar').hasClass('bg-yo'));
  t.end();
});

test('Progress:: should render additional classes', (t) => {
  const wrapper = shallow(<Progress className="other" />);

  t.true(wrapper.hasClass('other'));
  t.true(wrapper.hasClass('progress'));
  t.end();
});

test('Progress:: should render additional classes on the inner progress bar', (t) => {
  const wrapper = shallow(<Progress barClassName="other" />);

  t.false(wrapper.hasClass('other'));
  t.true(wrapper.hasClass('progress'));
  t.true(wrapper.find('.progress-bar').hasClass('other'));
  t.end();
});

test('Progress:: should render custom tag', (t) => {
  const wrapper = shallow(<Progress tag="main" />);

  t.equal(wrapper.type(), 'main');
  t.end();
});

test('Progress:: should render only the .progress when "multi" is passed', (t) => {
  const wrapper = shallow(<Progress multi />);

  t.equal(wrapper.type(), 'div');
  t.true(wrapper.hasClass('progress'));
  t.end();
});

test('Progress:: should render only the .progress-bar when "bar" is passed', (t) => {
  const wrapper = shallow(<Progress bar />);

  t.equal(wrapper.type(), 'div');
  t.true(wrapper.hasClass('progress-bar'));
  t.end();
});

test('Progress:: should render additional classes', (t) => {
  const wrapper = shallow(<Progress bar className="yo" />);

  t.equal(wrapper.type(), 'div');
  t.true(wrapper.hasClass('progress-bar'));
  t.true(wrapper.hasClass('yo'));
  t.end();
});

test('Progress:: should render additional classes using the barClassName', (t) => {
  const wrapper = shallow(<Progress bar barClassName="yo" />);

  t.equal(wrapper.type(), 'div');
  t.true(wrapper.hasClass('progress-bar'));
  t.true(wrapper.hasClass('yo'));
  t.end();
});

test('Progress:: should render the children (label)', (t) => {
  const wrapper = shallow(<Progress>0%</Progress>);

  t.equal(wrapper.text(), '0%');
  t.end();
});

test('Progress:: should render the children (label) (multi)', (t) => {
  const wrapper = mount(
    <Progress multi>
      <Progress bar value="15">15%</Progress>
      <Progress bar color="success" value="30">30%</Progress>
      <Progress bar color="info" value="25">25%</Progress>
      <Progress bar color="warning" value="20">20%</Progress>
      <Progress bar color="danger" value="5">5%</Progress>
    </Progress>,
  );

  t.equal(wrapper.text(), '15%30%25%20%5%');
  t.end();
});

test('Progress:: should render nested progress bars', (t) => {
  const wrapper = mount(
    <Progress multi>
      <Progress bar value="15" />
      <Progress bar color="success" value="30" />
      <Progress bar color="info" value="25" />
      <Progress bar color="warning" value="20" />
      <Progress bar color="danger" value="5" />
    </Progress>,
  );

  t.equal(wrapper.find('.progress').length, 1);
  t.equal(wrapper.find('.progress-bar').length, 5);
  t.end();
});
