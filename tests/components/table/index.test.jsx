import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Table } from '../../../src/components';

test('Table:: should render with "table" class', (t) => {
  const wrapper = shallow(<Table>Yo!</Table>);

  t.equal(wrapper.text(), 'Yo!');
  t.true(wrapper.hasClass('table'));
  t.end();
});

test('Table:: should render additional classes', (t) => {
  const wrapper = shallow(<Table className="other">Yo!</Table>);

  t.true(wrapper.hasClass('other'));
  t.true(wrapper.hasClass('table'));
  t.end();
});

test('Table:: should render custom tag', (t) => {
  const wrapper = shallow(<Table tag="div">Yo!</Table>);

  t.equal(wrapper.text(), 'Yo!');
  t.true(wrapper.hasClass('table'));
  t.equal(wrapper.find('div').length, 1);
  t.end();
});

test('Table:: should render modifier classes', (t) => {
  const wrapper = shallow(<Table size="sm" bordered striped reflow inverse hover>Yo!</Table>);

  t.equal(wrapper.text(), 'Yo!');
  t.true(wrapper.hasClass('table'));
  t.true(wrapper.hasClass('table-sm'));
  t.true(wrapper.hasClass('table-bordered'));
  t.true(wrapper.hasClass('table-striped'));
  t.true(wrapper.hasClass('table-hover'));
  t.true(wrapper.hasClass('table-reflow'));
  t.true(wrapper.hasClass('table-inverse'));
  t.end();
});

test('Table:: should render responsive wrapper class', (t) => {
  const wrapper = shallow(<Table responsive>Yo!</Table>);

  t.equal(wrapper.text(), 'Yo!');
  t.true(wrapper.hasClass('table-responsive'));
  t.equal(wrapper.find('.table').length, 1);
  t.end();
});