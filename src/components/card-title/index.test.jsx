import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { CardTitle as CardTitleRS } from 'reactstrap';
import CardTitle from './';

test('CardTitle:: should import CardTitle component from reactstrap', (t) => {
  const wrapper = shallow(<CardTitle />);

  t.equal(wrapper.find(CardTitleRS).length, 1);
  t.equal(wrapper.find('.card-section-title').length, 0);
  t.end();
});

test('CardTitle:: should use custom props to modify class names', (t) => {
  const wrapper = shallow(<CardTitle section className="additional-class" />);

  t.equal(wrapper.find('.card-section-title').length, 1);
  t.equal(wrapper.find('.additional-class').length, 1);
  t.end();
});
