import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Jumbotron as JumbotronRS } from 'reactstrap';
import Jumbotron from './';

test('Jumbotron:: should import Jumbotron component from reactstrap', (t) => {
  const wrapper = shallow(<Jumbotron />);

  t.equal(wrapper.find(JumbotronRS).length, 1);
  t.end();
});

test('Jumbotron:: should render custom props and classNames', (t) => {
  const wrapper = shallow(<Jumbotron theme="success" className="additional-class" />);

  t.equal(wrapper.find('.jumbotron-success').length, 1);
  t.equal(wrapper.find('.additional-class').length, 1);

  t.end();
});
