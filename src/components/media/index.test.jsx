import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Media as MediaRS } from 'reactstrap';
import Media from './';

test('Media:: should import Media component from reactstrap', (t) => {
  const wrapper = shallow(<Media />);

  t.equal(wrapper.find(MediaRS).length, 1);
  t.end();
});

test('Media:: should render custom props and classNames', (t) => {
  const wrapper = shallow(<Media hover="outline" aspectRatio="test" className="additional-class" />);

  t.equal(wrapper.find('.media-hover-outline').length, 1);
  t.equal(wrapper.find('.aspect-ratio').length, 1);
  t.equal(wrapper.find('.aspect-ratio-test').length, 1);

  t.end();
});
