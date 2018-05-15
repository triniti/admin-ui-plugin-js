import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Row as RowRS } from 'reactstrap';
import Row from './';

test('Row:: should import Row from reactstrap', (t) => {
  const wrapper = shallow(<Row />);

  t.equal(wrapper.find(RowRS).length, 1);
  t.end();
});

test('Row:: should render custom classNames', (t) => {
  const wrapper = shallow(<Row className="test-class" gutter="sm" />);

  t.equal(wrapper.find(RowRS).length, 1);
  t.equal(wrapper.find('.gutter-sm').length, 1);
  t.equal(wrapper.find('.test-class').length, 1);

  t.end();
});
