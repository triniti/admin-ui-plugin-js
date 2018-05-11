import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import Spinner from './';

test('Spinner:: should render default props', (t) => {
  const wrapper = shallow(<Spinner />);

  t.equal(wrapper.find('.spinner-container').length, 1);
  t.equal(wrapper.find('div').length, 1);
  t.equal(wrapper.find('span').length, 2);
  t.equal(wrapper.find('span').at(0).prop('style').height, '33px');
  t.equal(wrapper.find('svg').length, 1);

  t.end();
});

test('Spinner:: should render custom classNames', (t) => {
  const wrapper = shallow(<Spinner centered />);

  t.equal(wrapper.find('.spinner-centered').length, 1);

  t.end();
});

test('Spinner:: should render custom hieght and width', (t) => {
  const wrapper = shallow(<Spinner width="55" />);

  t.equal(wrapper.find('span').at(0).prop('style').height, '55px');

  t.end();
});

test('Spinner:: should render children', (t) => {
  const wrapper = shallow(<Spinner>Loading Text...</Spinner>);

  t.equal(wrapper.find('.spinner-children').length, 1);
  t.equal(wrapper.find('.spinner-children').text(), 'Loading Text...');

  t.end();
});
