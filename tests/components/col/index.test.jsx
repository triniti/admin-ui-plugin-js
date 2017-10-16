import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Col } from '../../../src/components';

test('Col', (t) => {
  let wrapper = shallow(<Col />);
  t.equal('<div class="col"></div>', wrapper.html(), 'should render default .col-* markup');

  wrapper = shallow(<Col>Children</Col>);
  t.equal('Children', wrapper.text(), 'should render children');

  wrapper = shallow(<Col className="extra" />);
  t.true(wrapper.hasClass('extra'), 'should pass additional classNames');
  t.true(wrapper.hasClass('col'), 'should pass additional classNames');

  wrapper = shallow(<Col widths={['base', 'jumbo']} base="4" jumbo="6" />);
  t.true(wrapper.hasClass('col-4'), 'should allow custom columns to be defined');
  t.true(wrapper.hasClass('col-jumbo-6'), 'should allow custom columns to be defined');

  wrapper = shallow(<Col widths={['base', 'jumbo', 'wtf']} wtf={{ size: 1, push: 2, pull: 3, offset: 4 }} />);
  t.true(wrapper.hasClass('col-wtf-1'), 'should allow custom columns to be defined with objects');
  t.true(wrapper.hasClass('push-wtf-2'), 'should allow custom columns to be defined with objects');
  t.true(wrapper.hasClass('pull-wtf-3'), 'should allow custom columns to be defined with objects');
  t.true(wrapper.hasClass('offset-wtf-4'), 'should allow custom columns to be defined with objects');
  t.true(wrapper.hasClass('col'), 'should allow custom columns to be defined with objects');

  wrapper = shallow(<Col sm="6" />);
  t.true(wrapper.hasClass('col-sm-6'), 'should pass col size specific classes as Strings');
  t.true(wrapper.hasClass('col'), 'should pass col size specific classes as Strings');

  wrapper = shallow(<Col sm={6} />);
  t.true(wrapper.hasClass('col-sm-6'), 'should pass col size specific classes as Numbers');
  t.true(wrapper.hasClass('col'), 'should pass col size specific classes as Numbers');

  wrapper = shallow(<Col xs="auto" sm />);
  t.true(wrapper.hasClass('col-auto'), 'should pass col size as flex with values "auto" or without value');
  t.true(wrapper.hasClass('col-sm'), 'should pass col size as flex with values "auto" or without value');

  wrapper = shallow(<Col sm={{ size: 6, push: 2, pull: 2, offset: 2 }} />);
  t.true(wrapper.hasClass('col-sm-6'), 'should pass col size specific classes via Objects');
  t.true(wrapper.hasClass('col'), 'should pass col size specific classes via Objects');
  t.true(wrapper.hasClass('push-sm-2'), 'should pass col size specific classes via Objects');
  t.true(wrapper.hasClass('pull-sm-2'), 'should pass col size specific classes via Objects');
  t.true(wrapper.hasClass('offset-sm-2'), 'should pass col size specific classes via Objects');

  wrapper = shallow(<Col sm={{ size: 6, push: 0, pull: 0, offset: 0 }} />);
  t.true(wrapper.hasClass('col-sm-6'), 'should pass col size specific classes via Objects including 0');
  t.true(wrapper.hasClass('col'), 'should pass col size specific classes via Objects including 0');
  t.true(wrapper.hasClass('push-sm-0'), 'should pass col size specific classes via Objects including 0');
  t.true(wrapper.hasClass('pull-sm-0'), 'should pass col size specific classes via Objects including 0');
  t.true(wrapper.hasClass('offset-sm-0'), 'should pass col size specific classes via Objects including 0');

  wrapper = shallow(<Col sm={{ size: 'auto', push: 2, pull: 2, offset: 2 }} />);
  t.true(wrapper.hasClass('col-sm-auto'), 'should pass col size when passing via object with size "auto"');

  wrapper = shallow(<Col tag="main">Yo!</Col>);
  t.equal('Yo!', wrapper.text(), 'should render custom tag');
  t.true(wrapper.hasClass('col'), 'should render custom tag');
  t.equal('main', wrapper.type(), 'should render custom tag');

  t.end();
});
