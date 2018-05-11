import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { ListGroup as ListGroupRS } from 'reactstrap';
import ListGroup from './';

test('ListGroup:: should import ListGroup component from reactstrap', (t) => {
  const wrapper = shallow(<ListGroup />);

  t.equal(wrapper.find(ListGroupRS).length, 1);
  t.end();
});

test('ListGroup:: should render custom props and classNames', (t) => {
  const wrapper = shallow(<ListGroup theme="success" className="additional-class" nav borderless />);

  t.equal(wrapper.find('.list-group-nav').length, 1);
  t.equal(wrapper.find('.list-group-borderless').length, 1);
  t.equal(wrapper.find('.list-group-success').length, 1);
  t.equal(wrapper.find('.additional-class').length, 1);

  t.end();
});
