import React from 'react';
import tape from 'tape';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { Collapse } from '../../../src/components';

let isOpen;
let toggle;
let clock;

const before = () => {
  isOpen = false;
  clock = sinon.useFakeTimers();
  toggle = () => { isOpen = !isOpen; };
};

const after = () => {
  // fast forward time for collapse to fade out
  clock.tick(400);
  toggle = null;
};

const test = (description, fn) => {
  tape(description, (t) => {
    before();
    fn(t);
    after();
  });
};

test('should accept a number', (t) => {
  const wrapper = mount(<Collapse isOpen={isOpen} delay={200} />);
  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(200);
  t.equal('SHOWN', wrapper.state('collapse'));
  wrapper.unmount();
  t.end();
});

test('should accept an object', (t) => {
  const wrapper = mount(<Collapse isOpen={isOpen} delay={{ show: 110, hide: 120 }} />);
  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(110);
  t.equal(wrapper.state('collapse'), 'SHOWN', 'SHOWN');

  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(120);
  t.equal(wrapper.state('collapse'), 'HIDDEN', 'HIDDEN');
  t.end();
});

test('should use default value if value is missing from object', (t) => {
  const wrapper = mount(<Collapse isOpen={isOpen} delay={{ show: 110 }} />);
  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(110);
  t.equal(wrapper.state('collapse'), 'SHOWN', 'SHOWN');

  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(350);
  t.equal(wrapper.state('collapse'), 'HIDDEN', 'HIDDEN');
  t.end();
});

tape('should render children', (t) => {
  const wrapper = shallow(<Collapse><p>hello</p></Collapse>).find('p');
  t.equal(wrapper.text(), 'hello', 'hello');
  t.end();
});

tape('should have default isOpen value', (t) => {
  const wrapper = shallow(<Collapse />);
  t.false(wrapper.instance().props.isOpen);
  t.end();
});

tape('should render with class "collapse"', (t) => {
  const wrapper = shallow(<Collapse />);
  t.true(wrapper.hasClass('collapse'));
  t.end();
});

tape('should render with class "navbar"', (t) => {
  const wrapper = shallow(<Collapse navbar />);
  t.true(wrapper.hasClass('navbar-collapse'));
  t.end();
});

tape('should render with class "show" when isOpen is true', (t) => {
  const wrapper = shallow(<Collapse isOpen />);
  t.true(wrapper.hasClass('show'));
  t.end();
});

tape('should set height to null when isOpen is true', (t) => {
  isOpen = true;
  const wrapper = shallow(<Collapse isOpen={isOpen} />);
  t.same(wrapper.state('height'), null);
  t.end();
});

tape('should not set height when isOpen is false', (t) => {
  const wrapper = shallow(<Collapse isOpen={isOpen} />);
  t.same(wrapper.state('height'), null);
  t.end();
});

test('should render with class "collapse" with default collapse state', (t) => {
  const wrapper = mount(<Collapse isOpen={isOpen} />);
  wrapper.setState({ collapse: null });
  clock.tick(360);
  wrapper.update();
  t.equal(wrapper.find('.collapse').length, 1);
  wrapper.unmount();
  t.end();
});

test('should change state with { collapse: ${State} } when isOpen change to true before transition', (t) => {
  const wrapper = mount(<Collapse isOpen={isOpen} />);
  toggle();
  wrapper.setProps({ isOpen });
  t.equal(wrapper.state('collapse'), 'SHOW', 'SHOW');
  wrapper.unmount();
  t.end();
});

test('should change state with { collapse: ${State} } when isOpen change to true after transition', (t) => {
  const wrapper = mount(<Collapse isOpen={isOpen} />);
  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(350);
  t.equal(wrapper.state('collapse'), 'SHOWN');
  wrapper.unmount();
  t.end();
});

test('should change state with { collapse: ${State} } when isOpen change to false before transition', (t) => {
  isOpen = true;
  const wrapper = mount(<Collapse isOpen={isOpen} />);
  toggle();
  wrapper.setProps({ isOpen });
  t.equal(wrapper.state('collapse'), 'HIDE', 'HIDE');
  wrapper.unmount();
  t.end();
});

test('should change state with { collapse: ${State} } when isOpen change to false after transition', (t) => {
  isOpen = true;
  const wrapper = mount(<Collapse isOpen={isOpen} />);
  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(360);
  t.equal(wrapper.state('collapse'), 'HIDDEN', 'HIDDEN');
  wrapper.unmount();
  t.end();
});

test('should set inline style to 0 when isOpen change to false', (t) => {
  isOpen = true;
  const wrapper = mount(<Collapse isOpen={isOpen} />);
  toggle();
  wrapper.setProps({ isOpen });
  t.equal(wrapper.state('height'), 0);
  wrapper.unmount();
  t.end();
});

test('should remove inline style when isOpen change to true after transition', (t) => {
  const wrapper = mount(<Collapse isOpen={isOpen} />);
  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(380);
  t.same(wrapper.state('height'), null);
  wrapper.unmount();
  t.end();
});

test('should remove timeout tag after unmount', (t) => {
  const componentWillUnmount = sinon.spy(Collapse.prototype, 'componentWillUnmount');
  const wrapper = mount(<Collapse isOpen={isOpen} />);
  wrapper.unmount();
  t.equal(componentWillUnmount.callCount, 1);
  componentWillUnmount.restore();
  t.end();
});

test('should call onOpened after opening', (t) => {
  const onOpened = sinon.spy();
  const onClosed = sinon.spy();
  const wrapper = mount(<Collapse isOpen={isOpen} onOpened={onOpened} onClosed={onClosed} />);

  clock.tick(300);
  t.false(isOpen);
  t.true(onOpened.notCalled);
  t.true(onClosed.notCalled);

  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(380);
  t.true(isOpen, 'is Open should be true');
  t.true(onOpened.called, 'should called opOpened');
  t.true(onClosed.notCalled, 'should not called onClosed');

  wrapper.unmount();
  t.end();
});

test('should call onClosed after closing', (t) => {
  const onOpened = sinon.spy();
  const onClosed = sinon.spy();
  toggle();
  const wrapper = mount(<Collapse isOpen={isOpen} onOpened={onOpened} onClosed={onClosed} />);

  clock.tick(380);
  t.true(isOpen);
  t.true(onOpened.notCalled);
  t.true(onClosed.notCalled);

  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(380);
  t.false(isOpen);
  t.true(onOpened.notCalled);
  t.true(onClosed.called);

  wrapper.unmount();

  t.end();
});
