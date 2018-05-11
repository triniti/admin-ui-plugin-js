import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { CardBody as CardBodyRS } from 'reactstrap';
import CardBody from './';

test('CardBody:: should import CardBody component from reactstrap', (t) => {
  const wrapper = shallow(<CardBody />);

  t.equal(wrapper.find(CardBodyRS).length, 1);
  t.equal(wrapper.find('.card-body-indent').length, 0);
  t.end();
});

test('CardBody:: should use custom props to modify class names', (t) => {
  const wrapper = shallow(<CardBody indent className="additional-class" />);

  t.equal(wrapper.find('.card-body-indent').length, 1);
  t.equal(wrapper.find('.additional-class').length, 1);
  t.end();
});
