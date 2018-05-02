import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import TrinaryControl from './';

test('TrinaryControl:: should render default props', (t) => {
  const wrapper = shallow(<TrinaryControl onChange={() => {}} />);

  t.equal(wrapper.find('select').length, 1);
  t.equal(wrapper.find('option').length, 3);
  t.equal(wrapper.find('.form-control').length, 1);
  t.equal(wrapper.find('option').at(0).text(), 'Any');
  t.equal(wrapper.find('option').at(1).text(), 'Yes');
  t.equal(wrapper.find('option').at(2).text(), 'No');
  t.equal(wrapper.find('select').props().value, 0);

  t.end();
});

test('TrinaryControl:: should render custom classNames', (t) => {
  const wrapper = shallow(<TrinaryControl className="test-class" disabled radius="round" size="lg" onChange={() => {}} />);

  t.equal(wrapper.find('select').length, 1);
  t.equal(wrapper.find('option').length, 3);
  t.equal(wrapper.find('.form-control-disabled').length, 1);
  t.equal(wrapper.find('.form-control-radius-round').length, 1);
  t.equal(wrapper.find('.form-control-lg').length, 1);

  t.end();
});

test('TrinaryControl:: should render custom init value', (t) => {
  const wrapper = shallow(<TrinaryControl value={1} onChange={() => {}} />);

  t.equal(wrapper.find('select').props().value, 1);

  t.end();
});

test('TrinaryControl:: should render custom option text', (t) => {
  const wrapper = shallow(<TrinaryControl unsetText="unset" trueText="good" falseText="bad" onChange={() => {}} />);

  t.equal(wrapper.find('option').at(0).text(), 'unset');
  t.equal(wrapper.find('option').at(1).text(), 'good');
  t.equal(wrapper.find('option').at(2).text(), 'bad');

  t.end();
});

test('TrinaryControl:: should trigger onChange listener', (t) => {
  const handleChange = sinon.spy();
  const wrapper = shallow(<TrinaryControl unsetText="unset" trueText="good" falseText="bad" onChange={handleChange} />);

  t.equal(wrapper.find('select').props().value, 0);

  wrapper.find('select').simulate('change', { target: { value: 1 } });
  t.true(handleChange.called);

  t.end();
});
