import React from 'react';
import tape from 'tape';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { Popover, PopoverHeader, PopoverBody } from '../../../src/components';

const clock = sinon.useFakeTimers();
let element;
let container;
let outerTarget;
let innerTarget;
let isOpen;
let toggle;
let placement;

const setup = () => {
  element = document.createElement('div');
  container = document.createElement('div');
  element.innerHTML = '<p id="outerTarget">This is the popover <span id="innerTarget">target</span>.</p>';
  container.setAttribute('id', 'container');
  element.appendChild(container);
  document.body.appendChild(element);
  outerTarget = document.getElementById('outerTarget');
  innerTarget = document.getElementById('innerTarget');
  isOpen = false;
  toggle = () => { isOpen = !isOpen; };
  placement = 'top';

  clock.restore();
};

const teardown = () => {
  document.body.removeChild(element);
  element = null;
};

const test = (description, fn) => {
  tape(description, (t) => {
    setup();
    fn(t);
    teardown();
  });
};

test('Popover:: should render inner popper when isOpen', (t) => {
  isOpen = true;
  const wrapper = shallow(
    <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="innerTarget">
      <PopoverHeader>Title</PopoverHeader>
      <PopoverBody>Content</PopoverBody>
    </Popover>,
  );

  t.equal(document.getElementsByClassName('popover').length, 1);
  t.equal(document.getElementsByClassName('popover-inner').length, 1);
  t.equal(document.getElementsByClassName('popover-header').length, 1);
  t.equal(document.getElementsByClassName('popover-body').length, 1);
  wrapper.unmount();
  t.end();
});

test('Popover:: should not render inner popper when not isOpen', (t) => {
  const wrapper = mount(
    <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="innerTarget">
      <PopoverHeader>Title</PopoverHeader>
      <PopoverBody>Content</PopoverBody>
    </Popover>,
  );

  t.equal(document.getElementsByClassName('popover').length, 0);
  t.equal(document.getElementsByClassName('popover-inner').length, 0);
  t.equal(document.getElementsByClassName('popover-header').length, 0);
  t.equal(document.getElementsByClassName('popover-body').length, 0);
  wrapper.unmount();
  t.end();
});

test('Popover:: should be able to show the popover', (t) => {
  const wrapper = mount(
    <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="innerTarget">
      <PopoverHeader>Title</PopoverHeader>
      <PopoverBody>Content</PopoverBody>
    </Popover>,
  );

  t.false(isOpen);
  t.equal(document.getElementsByClassName('show').length, 0);
  t.equal(document.getElementsByClassName('popover').length, 0);
  t.equal(document.getElementsByClassName('popover-inner').length, 0);
  t.equal(document.getElementsByClassName('popover-header').length, 0);
  t.equal(document.getElementsByClassName('popover-body').length, 0);

  toggle();
  wrapper.setProps({ isOpen });

  t.true(isOpen);
  t.equal(document.getElementsByClassName('show').length, 1);
  t.equal(document.getElementsByClassName('popover').length, 1);
  t.equal(document.getElementsByClassName('popover-inner').length, 1);
  t.equal(document.getElementsByClassName('popover-header').length, 1);
  t.equal(document.getElementsByClassName('popover-body').length, 1);

  wrapper.unmount();
  t.end();
});

test('Popover:: should be able to hide the popover', (t) => {
  isOpen = true;
  const wrapper = mount(
    <Popover isOpen={isOpen} toggle={toggle} placement={placement} target="innerTarget">
      <PopoverHeader>Title</PopoverHeader>
      <PopoverBody>Content</PopoverBody>
    </Popover>,
  );

  t.true(isOpen);
  t.equal(document.getElementsByClassName('popover').length, 1);
  t.equal(document.getElementsByClassName('popover-inner').length, 1);
  t.equal(document.getElementsByClassName('popover-header').length, 1);
  t.equal(document.getElementsByClassName('popover-body').length, 1);

  toggle();
  wrapper.setProps({ isOpen });

  t.false(isOpen);
  t.equal(document.getElementsByClassName('popover').length, 0);
  t.equal(document.getElementsByClassName('popover-inner').length, 0);
  t.equal(document.getElementsByClassName('popover-header').length, 0);
  t.equal(document.getElementsByClassName('popover-body').length, 0);

  wrapper.unmount();
  t.end();
});

test('Popover:: default toggle prop does nothing', (t) => {
  const wrapper = mount(
    <Popover isOpen={isOpen} placement={placement} target="innerTarget">
      <PopoverHeader>Title</PopoverHeader>
      <PopoverBody>Content</PopoverBody>
    </Popover>,
  );
  const instance = wrapper.instance();

  t.false(isOpen);
  instance.props.toggle();
  t.false(isOpen);

  wrapper.unmount();
  t.end();
});

test('Popover:: should allow custom classes to be added to the popover-inner', (t) => {
  const wrapper = mount(
    <Popover isOpen placement={placement} target="innerTarget" innerClassName="popover-special">
      <PopoverHeader>Title</PopoverHeader>
      <PopoverBody>Content</PopoverBody>
    </Popover>,
  );

  t.equal(document.getElementsByClassName('popover-inner')[0].className.indexOf('popover-special') > -1, true);

  wrapper.unmount();
  t.end();
});

test('Popover:: should allow custom classes to be added to the popover', (t) => {
  const wrapper = mount(
    <Popover isOpen placement={placement} target="innerTarget" className="popover-special">
      <PopoverHeader>Title</PopoverHeader>
      <PopoverBody>Content</PopoverBody>
    </Popover>,
  );

  t.true(document.getElementsByClassName('popover')[0].className.indexOf('popover-special') > -1);

  wrapper.unmount();
  t.end();
});

test('Popover:: should not handle outside of target clicks when isOpen is false', (t) => {
  const wrapper = mount(
    <Popover target="innerTarget" isOpen={isOpen} toggle={toggle}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.false(isOpen);
  instance.handleDocumentClick({ target: outerTarget });
  clock.tick(0); // toggle is still async
  t.false(isOpen);

  wrapper.detach();
  t.end();
});

test('Popover:: should handle outside of target clicks when isOpen is true', (t) => {
  isOpen = true;
  const wrapper = mount(
    <Popover target="innerTarget" isOpen={isOpen} toggle={toggle}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.true(isOpen);
  instance.handleDocumentClick({ target: outerTarget });
  clock.tick(0); // toggle is still async
  t.false(isOpen);

  wrapper.detach();
  t.end();
});

test('Popover:: should clear the hide timeout when handling outside of target clicks when isOpen is true', (t) => {
  isOpen = true;
  const wrapper = mount(
    <Popover target="innerTarget" isOpen={isOpen} toggle={toggle}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.true(isOpen);
  instance._hideTimeout = 1;
  instance.handleDocumentClick({ target: outerTarget });
  clock.tick(0); // toggle is still async
  t.same(instance._hideTimeout, undefined);
  t.false(isOpen);

  wrapper.detach();
  t.end();
});

test('Popover:: should NOT handle inner target clicks when isOpen is false (user is responsible)', (t) => {
  const wrapper = mount(
    <Popover target="innerTarget" isOpen={isOpen} toggle={toggle}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.false(isOpen);
  instance.handleDocumentClick({ target: innerTarget });
  clock.tick(0); // toggle is still async
  t.false(isOpen);

  wrapper.detach();
  t.end();
});

test('Popover:: should NOT handle inner target clicks when isOpen is true (user is responsible)', (t) => {
  isOpen = true;
  const wrapper = mount(
    <Popover target="innerTarget" isOpen={isOpen} toggle={toggle}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.true(isOpen);
  instance.handleDocumentClick({ target: innerTarget });
  clock.tick(0); // toggle is still async
  t.true(isOpen);

  wrapper.detach();
  t.end();
});

test('Popover:: should NOT handle popover target clicks', (t) => {
  isOpen = true;
  const wrapper = mount(
    <Popover target="innerTarget" isOpen={isOpen} toggle={toggle}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.true(isOpen);
  instance.handleDocumentClick({ target: instance._popover });
  clock.tick(0); // toggle is still async
  t.true(isOpen);

  wrapper.detach();
  t.end();
});

test('Popover:: should not do anything when document click outside of target', (t) => {
  const wrapper = mount(
    <Popover target="innerTarget" isOpen={isOpen} toggle={toggle}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.false(isOpen);
  instance.handleDocumentClick({ target: container });
  t.false(isOpen);

  wrapper.detach();
  t.end();
});

test('Popover:: should not call props.toggle when disabled ', (t) => {
  const toggleFn = sinon.spy();
  const preventDefault = sinon.spy();

  const wrapper = mount(
    <Popover target="innerTarget" disabled isOpen={isOpen} toggle={toggleFn}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.toggle({ preventDefault });

  t.true(preventDefault.called);
  t.true(toggleFn.notCalled);

  wrapper.detach();
  t.end();
});

test('Popover:: should not throw when props.toggle is not provided ', (t) => {
  const preventDefault = sinon.spy();

  const wrapper = mount(
    <Popover target="innerTarget" isOpen={isOpen}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.toggle({ preventDefault });

  wrapper.detach();
});

test('Popover::delay:: should accept a number', (t) => {
  isOpen = true;
  const wrapper = mount(
    <Popover target="innerTarget" isOpen={isOpen} toggle={toggle} delay={200}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.hide();
  clock.tick(0); // toggle is still async
  t.true(isOpen);
  clock.tick(200);
  t.false(isOpen);

  t.end();
});

test('Popover::delay:: should accept an object', (t) => {
  isOpen = true;
  const wrapper = mount(
    <Popover target="innerTarget" isOpen={isOpen} toggle={toggle} delay={{ show: 200, hide: 200 }}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.hide();
  clock.tick(0); // toggle is still async
  t.true(isOpen);
  clock.tick(200);
  t.false(isOpen);

  t.end();
});

test('Popover::delay:: should use default value if value is missing from object', (t) => {
  isOpen = true;
  const wrapper = mount(
    <Popover target="innerTarget" isOpen={isOpen} toggle={toggle} delay={{ hide: 250 }}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.hide();
  clock.tick(0); // toggle is still async
  t.true(isOpen);
  clock.tick(250); // Default hide value: 250
  t.false(isOpen);

  t.end();
});

test('Popover::hide:: should call toggle when isOpen', (t) => {
  const spy = sinon.spy();
  isOpen = true;
  const wrapper = mount(
    <Popover target="innerTarget" isOpen={isOpen} toggle={spy}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.true(spy.notCalled);

  instance.hide();
  clock.tick(0); // toggle is still async

  t.true(spy.called);

  wrapper.detach();
  t.end();
});

test('Popover::hide:: should not call toggle when isOpen is false', (t) => {
  const spy = sinon.spy();
  const wrapper = mount(
    <Popover target="innerTarget" isOpen={isOpen} toggle={spy}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.true(spy.notCalled);

  instance.hide();
  clock.tick(0); // toggle is still async

  t.true(spy.notCalled);

  wrapper.detach();
  t.end();
});

test('Popover::show:: should call toggle when isOpen is false', (t) => {
  const spy = sinon.spy();
  const wrapper = mount(
    <Popover target="innerTarget" isOpen={isOpen} toggle={spy}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.true(spy.notCalled);

  instance.show();
  clock.tick(0); // toggle is still async

  t.true(spy.called);

  wrapper.detach();
  t.end();
});

test('Popover::show:: should not call toggle when isOpen', (t) => {
  const spy = sinon.spy();
  isOpen = true;
  const wrapper = mount(
    <Popover target="innerTarget" isOpen={isOpen} toggle={spy}>
      Popover Content
    </Popover>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.true(spy.notCalled);

  instance.show();
  clock.tick(0); // toggle is still async

  t.true(spy.notCalled);

  wrapper.detach();
  t.end();
});

