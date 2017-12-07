import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Row } from '../../../src/components';

test('Row:: should render .row markup', (t) => {
  const wrapper = shallow(<Row />);

  t.equal(wrapper.html(), '<div class="row"></div>');
  t.end();
});

test('Row:: should render children', (t) => {
  const wrapper = shallow(<Row>Children</Row>);

  t.equal(wrapper.html(), '<div class="row">Children</div>');
  t.end();
});

test('Row:: should pass additional classNames', (t) => {
  const wrapper = shallow(<Row className="extra" />);

  t.true(wrapper.hasClass('extra'));
  t.true(wrapper.hasClass('row'));
  t.end();
});

test('Row:: show render noGutters classes', (t) => {
  const wrapper = shallow(<Row noGutters />);

  t.true(wrapper.hasClass('no-gutters'));
  t.true(wrapper.hasClass('row'));
  t.end();
});
