import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Container } from '../../../src/components';

test('Container', (t) => {
  let wrapper = shallow(<Container />);
  t.equal('<div class="container"></div>', wrapper.html(), 'should render .container markup');

  wrapper = shallow(<Container fluid />);
  t.equal('<div class="container-fluid"></div>', wrapper.html(), 'should render .container-fluid markup');

  wrapper = shallow(<Container>Children</Container>);
  t.equal('<div class="container">Children</div>', wrapper.html(), 'should render children');

  wrapper = shallow(<Container className="extra" />);
  t.true(wrapper.hasClass('extra'), 'should pass additional classNames');
  t.true(wrapper.hasClass('container'), 'should pass additional classNames');

  wrapper = shallow(<Container tag="main">Yo!</Container>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.true(wrapper.hasClass('container'), 'should render custom tag');
  t.equal('main', wrapper.type(), 'should render custom tag');

  t.end();
});
