import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Table as TableRS } from 'reactstrap';
import Table from './';

test('Table:: should import Table from reactstrap', (t) => {
  const wrapper = shallow(<Table />);

  t.equal(wrapper.find(TableRS).length, 1);
  t.end();
});

test('Table:: should render custom classNames', (t) => {
  const wrapper = shallow(<Table className="test-class" borderless fixed sticky="head" />);

  t.equal(wrapper.find(TableRS).length, 1);
  t.equal(wrapper.find('.table-borderless').length, 1);
  t.equal(wrapper.find('.table-fixed').length, 1);
  t.equal(wrapper.find('.sticky-thead').length, 1);

  t.end();
});

