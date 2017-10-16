import React from 'react';
import test from 'tape';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { Button } from '../../../src/components';

test('Button', (t) => {
  let wrapper = shallow(<Button>Ello world</Button>);
  t.equal('Ello world', wrapper.text(), 'should render children');

  const Link = props => <a href="/home" {...props}>{props.children}</a>;
  wrapper = mount(<Button tag={Link}>Home</Button>);

  t.equal(wrapper.find('a').length, 1, 'should render custom element');
  t.equal('Home', wrapper.text(), 'should render custom element');

  wrapper = mount(<Button href="/home">Home</Button>);
  t.equal(1, wrapper.find('a').length, 'should render an anchor element if href exists');
  t.equal('Home', wrapper.text(), 'should render an anchor element if href exists');

  wrapper = mount(<Button>Home</Button>);
  t.same(undefined, wrapper.find('button').prop('type'), 'should render type as undefined by default when tag is "button"');
  t.equal('Home', wrapper.text());

  wrapper = mount(<Button onClick={() => {}}>Home</Button>);
  t.equal('button', wrapper.find('button').prop('type'), 'should render type as "button" by default when tag is "button" and onClick is provided');
  t.equal('Home', wrapper.text());

  wrapper = mount(<Button type="submit">Home</Button>);
  t.equal('submit', wrapper.find('button').prop('type'), 'should render type as user defined when defined by the user');
  t.equal('Home', wrapper.text());

  wrapper = mount(<Button tag="a">Home</Button>);
  t.same(undefined, wrapper.find('a').prop('type'), 'should not render type by default when the type is not defined and the tag is not "button"');
  t.equal('Home', wrapper.text());

  wrapper = mount(<Button href="#">Home</Button>);
  t.same(undefined, wrapper.find('a').prop('type'), 'should not render type by default when the type is not defined and the href is defined');
  t.equal('Home', wrapper.text());

  wrapper = shallow(<Button>Default Button</Button>);
  t.true(wrapper.hasClass('btn-primary'), 'should render buttons with default color');

  wrapper = shallow(<Button color="danger">Default Button</Button>);
  t.true(wrapper.hasClass('btn-danger'), 'should render buttons with other colors');

  wrapper = shallow(<Button outline>Default Button</Button>);
  t.true(wrapper.hasClass('btn-outline-primary'), 'should render buttons with outline variant');

  wrapper = shallow(<Button outline color="info">Default Button</Button>);
  t.true(wrapper.hasClass('btn-outline-info'), 'should render buttons with outline variant with different colors');

  const small = shallow(<Button size="sm">Small Button</Button>);
  const large = shallow(<Button size="lg">Large Button</Button>);
  t.true(small.hasClass('btn-sm'), 'should render buttons at different sizes');
  t.true(large.hasClass('btn-lg'), 'should render buttons at different sizes');

  const block = shallow(<Button block>Block Level Button</Button>);
  t.true(block.hasClass('btn-block'), 'should render block level buttons');

  t.end();
});

test('Button onClick', (t) => {
  const onClick = sinon.spy();
  let wrapper = mount(<Button onClick={onClick}>Testing Click</Button>);
  wrapper.find('button').simulate('click');
  t.true(onClick.calledOnce, 'calls props.onClick if it exists');

  wrapper = mount(<Button>Testing Click</Button>);
  const preventDefault = sinon.spy();

  wrapper.instance().onClick({ preventDefault });
  t.equal(preventDefault.callCount, 0, 'is not called when disabled');

  wrapper.setProps({ disabled: true });
  wrapper.instance().onClick({ preventDefault });
  t.equal(preventDefault.callCount, 1, 'is not called when disabled');

  t.end();
});
