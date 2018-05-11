import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Label } from 'reactstrap';
import Input from '../input';
import Switch from './';

test('Switch:: should render default props', (t) => {
  const wrapper = shallow(<Switch id="test" />);

  t.equal(wrapper.at(0).find(Input).length, 1);
  t.equal(wrapper.at(0).find(Label).length, 1);
  t.equal(wrapper.at(0).find('.switch-input').length, 1);
  t.equal(wrapper.at(0).find('.switch-input-label').length, 1);
  t.end();
});

test('Switch:: should render custom classNames to both Input and Label', (t) => {
  const wrapper = shallow(<Switch id="test" className="test-class" />);

  t.equal(wrapper.at(0).find(Input).length, 1);
  t.equal(wrapper.at(0).find(Label).length, 1);
  t.equal(wrapper.at(0).find('.test-class').length, 2);
  t.end();
});
