import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { BreadcrumbItem } from '../../../src/components';

test('BreadcrumbItem', (t) => {
  let wrapper = shallow(<BreadcrumbItem>Yo!</BreadcrumbItem>);

  t.equal('Yo!', wrapper.text(), 'should render children');
  t.equal('li', wrapper.type(), 'should render "li" by default');
  t.true(wrapper.hasClass('breadcrumb-item'), 'should render with the "breadcrumb-item" class');
  t.false(wrapper.hasClass('active'), 'should not render with the "active" class by default');

  wrapper = shallow(<BreadcrumbItem active>Default BreadcrumbItem</BreadcrumbItem>);
  t.true(wrapper.hasClass('active'), 'should render with the "active" class when the avtive prop is truthy');

  wrapper = shallow(<BreadcrumbItem tag="main">Yo!</BreadcrumbItem>);
  t.equal('main', wrapper.type(), 'should render custom tag');

  t.end();
});
