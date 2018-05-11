import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Badge as BadgeRS } from 'reactstrap';
import Badge from './';

test('Badge:: should import Badge component from reactstrap', (t) => {
  const wrapper = shallow(<Badge />);

  t.equal(wrapper.find(BadgeRS).length, 1);
  t.end();
});

test('Badge:: should use alert to modify class names', (t) => {
  const wrapper = shallow(<Badge alert className="additional-class" />);

  t.equal(wrapper.find('.badge-alert').length, 1);
  t.equal(wrapper.find('.additional-class').length, 1);
  t.end();
});
