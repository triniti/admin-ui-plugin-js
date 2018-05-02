import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Nav as NavRS } from 'reactstrap';
import Nav from './';

test('Nav:: should import Nav component from reactstrap', (t) => {
  const wrapper = shallow(<Nav />);

  t.equal(wrapper.find(NavRS).length, 1);
  t.end();
});

test('Nav:: should render custom props and classNames', (t) => {
  const wrapper = shallow(<Nav sticky underline theme="success" className="additional-class" />);

  t.equal(wrapper.find('.nav-sticky').length, 1);
  t.equal(wrapper.find('.nav-underline').length, 1);
  t.equal(wrapper.find('.nav-theme-success').length, 1);
  t.equal(wrapper.find('.additional-class').length, 1);

  t.end();
});
