import React from 'react';
import tape from 'tape';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { Tooltip } from '../../../src/components';

let isOpen;
let toggle;
let element;
let container;
let target;
let innerTarget;
let clock;

const setup = () => {
  isOpen = false;
  toggle = () => { isOpen = !isOpen; };
  element = document.createElement('div');
  container = document.createElement('div');
  element.innerHTML = '<p id="target">This is the tooltip <span id="innerTarget">target</span>.</p>';
  element.setAttribute('id', 'testContainer');
  container.setAttribute('id', 'container');
  element.appendChild(container);
  document.body.appendChild(element);
  target = document.getElementById('target');
  innerTarget = document.getElementById('innerTarget');

  clock = sinon.useFakeTimers();
};

const teardown = () => {
  clock.restore();
  document.body.removeChild(element);
  element = null;
  container = null;
  target = null;
  innerTarget = null;
};

const test = (description, fn) => {
  tape(description, (t) => {
    setup();
    fn(t);
    teardown();
  });
};

test('Tooltip:: should not render children if isOpen is false', (t) => {
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );

  const tooltips = document.getElementsByClassName('tooltip');

  t.equal(wrapper.find('.tooltip.show').length, 0);
  t.equal(target.className, '');
  t.equal(tooltips.length, 0);
  wrapper.detach();
  t.end();
});

test('Tooltip:: should render if isOpen is true', (t) => {
  isOpen = true;
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );

  const tooltips = document.getElementsByClassName('tooltip');

  t.equal(wrapper.find('.tooltip.show').hostNodes().length, 0);
  t.equal(tooltips.length, 1);
  t.equal(tooltips[0].textContent, 'Tooltip Content');
  wrapper.detach();
  t.end();
});

test('Tooltip:: should render with target object', (t) => {
  isOpen = true;
  const wrapper = mount(
    <Tooltip target={document.getElementById('target')} isOpen={isOpen} toggle={toggle}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );

  const tooltips = document.getElementsByClassName('tooltip');

  t.equal(wrapper.find('.tooltip.show').hostNodes().length, 0);
  t.equal(tooltips.length, 1);
  t.equal(tooltips[0].textContent, 'Tooltip Content');
  wrapper.detach();
  t.end();
});

test('Tooltip:: should toggle isOpen', (t) => {
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );

  t.equal(document.getElementsByClassName('tooltip').length, 0);
  wrapper.setProps({ isOpen: true });
  t.equal(document.getElementsByClassName('tooltip').length, 1);
  wrapper.setProps({ isOpen: false });
  t.equal(document.getElementsByClassName('tooltip').length, 0);
  wrapper.detach();
  t.end();
});

test('Tooltip:: should handle target clicks', (t) => {
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.equal(isOpen, false);
  instance.handleDocumentClick({ target });
  t.equal(isOpen, true);
  instance.handleDocumentClick({ target });
  t.equal(isOpen, false);

  wrapper.detach();
  t.end();
});

test('Tooltip:: should handle inner target clicks', (t) => {
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.equal(isOpen, false);
  instance.handleDocumentClick({ target: innerTarget });
  t.equal(isOpen, true);
  wrapper.detach();
  t.end();
});

test('Tooltip:: should not do anything when document click outside of target', (t) => {
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={toggle}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.equal(isOpen, false);
  instance.handleDocumentClick({ target: container });
  t.equal(isOpen, false);

  wrapper.detach();
  t.end();
});

test('Tooltip:: should clear hide timeout if it exists on target click', (t) => {
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={toggle} delay={200}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.onMouseLeaveTooltip();
  t.equal(isOpen, false);
  instance.handleDocumentClick({ target });
  clock.tick(200);
  t.equal(isOpen, true);
  wrapper.setProps({ isOpen });
  instance.handleDocumentClick({ target });
  t.equal(isOpen, true);

  wrapper.detach();
  t.end();
});

test('Tooltip:: should allow custom classes to be added to the tooltip-inner', (t) => {
  const wrapper = mount(
    <Tooltip isOpen target="target" innerClassName="tooltip-special">
      Tooltip Content
    </Tooltip>,
  );

  t.equal(document.getElementsByClassName('tooltip-inner')[0].className.indexOf('tooltip-special') > -1, true);

  wrapper.unmount();
  t.end();
});

test('Tooltip:: should allow custom classes to be added to the tooltip', (t) => {
  const wrapper = mount(
    <Tooltip isOpen target="target" className="tooltip-special">
      Tooltip Content
    </Tooltip>,
  );

  t.equal(document.getElementsByClassName('tooltip')[0].className.indexOf('tooltip-special') > -1, true);

  wrapper.unmount();
  t.end();
});

test('Tooltip:: should not call props.toggle when disabled ', (t) => {
  const toggleFn = sinon.spy();
  const preventDefault = sinon.spy();

  const wrapper = mount(
    <Tooltip target="target" disabled isOpen={isOpen} toggle={toggleFn}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.toggle({ preventDefault });

  t.true(preventDefault.called);
  t.true(toggleFn.notCalled);

  wrapper.detach();
  t.end();
});

test('Tooltip:: should not throw when props.toggle is not provided ', (t) => {
  const preventDefault = sinon.spy();

  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.toggle({ preventDefault });

  wrapper.detach();
  t.end();
});


/* there are some popper.js issues in unit tests, block these temporarlly */
/** *************************** *************************** ***************************
test('Tooltip::delay:: should accept a number', (t) => {
  isOpen = true;
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={toggle} delay={200}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.onMouseLeaveTooltip();
  t.true(isOpen);
  clock.tick(200);
  t.false(isOpen);

  t.end();
});

test('Tooltip::delay:: should accept an object', (t) => {
  isOpen = true;
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={toggle} delay={{ show: 200, hide: 200 }}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.onMouseLeaveTooltip();
  t.true(isOpen);
  clock.tick(200);
  t.false(isOpen);

  t.end();
});

test('Tooltip::delay:: should use default value if value is missing from object', (t) => {
  isOpen = true;
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={toggle} delay={{ show: 0 }}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.onMouseLeaveTooltip();
  t.true(isOpen);
  clock.tick(250); // Default hide value: 250
  t.false(isOpen);
  t.end();
});

test('Tooltip::hide:: should call toggle when isOpen', (t) => {
  const spy = sinon.spy();
  isOpen = true;
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={spy}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.true(spy.notCalled);

  instance.hide();

  t.true(spy.called);

  wrapper.detach();
  t.end();
});

test('Tooltip::hide:: should not call toggle when isOpen is false', (t) => {
  const spy = sinon.spy();
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={spy}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.true(spy.notCalled);

  instance.hide();

  t.true(spy.notCalled);

  wrapper.detach();
  t.end();
});

test('Tooltip::show:: should call toggle when isOpen is false', (t) => {
  const spy = sinon.spy();
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={spy}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.true(spy.notCalled);

  instance.show();

  t.true(spy.called);

  wrapper.detach();
  t.end();
});

test('Tooltip::show:: should not call toggle when isOpen', (t) => {
  const spy = sinon.spy();
  isOpen = true;
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={spy}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.true(spy.notCalled);

  instance.show();

  t.true(spy.notCalled);

  wrapper.detach();
  t.end();
});

test('Tooltip::onMouseOverTooltip:: should clear timeout if it exists on target click', (t) => {
  const spy = sinon.spy();
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={spy} delay={200}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.onMouseLeaveTooltip();

  t.false(isOpen);
  t.true(spy.notCalled);

  instance.onMouseOverTooltip();
  clock.tick(200);

  t.true(spy.called);

  wrapper.detach();
  t.end();
});

test('Tooltip::onMouseOverTooltip:: should not call .toggle if isOpen', (t) => {
  const spy = sinon.spy();
  isOpen = true;
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={spy} delay={0}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.onMouseOverTooltip();
  clock.tick(0); // delay: 0 toggle is still async

  t.equal(isOpen, true);
  t.true(spy.notCalled);

  wrapper.detach();
  t.end();
});

test('Tooltip::onMouseLeaveTooltip:: should clear timeout if it exists on target click', (t) => {
  const spy = sinon.spy();
  isOpen = true;
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={spy} delay={200}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.onMouseOverTooltip();

  t.true(isOpen);
  t.true(spy.notCalled);

  instance.onMouseLeaveTooltip();
  clock.tick(200);

  t.true(spy.called);

  wrapper.detach();
  t.end();
});

test('Tooltip::onMouseLeaveTooltip:: should not call .toggle if isOpen is false', (t) => {
  const spy = sinon.spy();
  isOpen = false;
  const wrapper = mount(
    <Tooltip target="target" isOpen={isOpen} toggle={spy} delay={0}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.onMouseLeaveTooltip();
  clock.tick(0); // delay: 0 toggle is still async

  t.false(isOpen);
  t.true(spy.notCalled);

  wrapper.detach();
  t.end();
});

test('Tooltip::autohide:: should keep tooltip around when false and onmouseleave from tooltip content', (t) => {
  const spy = sinon.spy();
  isOpen = true;
  const wrapper = mount(
    <Tooltip target="target" autohide={false} isOpen={isOpen} toggle={spy} delay={200}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.true(isOpen);
  t.true(spy.notCalled);

  instance.onMouseLeaveTooltipContent();
  clock.tick(100);
  t.true(spy.notCalled);
  clock.tick(200);
  t.true(spy.called);

  wrapper.detach();
  t.end();
});

test('Tooltip::autohide:: clears showTimeout in onMouseLeaveTooltipContent', (t) => {
  const spy = sinon.spy();
  isOpen = true;
  const wrapper = mount(
    <Tooltip target="target" autohide={false} isOpen={isOpen} toggle={spy} delay={200}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  instance.onMouseOverTooltip();
  t.true(instance._showTimeout);
  instance.onMouseLeaveTooltipContent();
  clock.tick(300);
  t.false(instance._showTimeout);
  wrapper.detach();
  t.end();
});

test('Tooltip::autohide:: clears hide timeout in onMouseOverTooltipContent', (t) => {
  const spy = sinon.spy();
  isOpen = true;
  const wrapper = mount(
    <Tooltip target="target" autohide={false} isOpen={isOpen} toggle={spy} delay={200}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();

  t.true(isOpen);
  t.true(spy.notCalled);
  instance.onMouseLeaveTooltipContent();
  clock.tick(100);
  t.true(instance._hideTimeout);
  instance.onMouseOverTooltipContent();
  t.false(instance._hideTimeout);
  instance.onMouseOverTooltipContent();
  wrapper.detach();
  t.end();
});

test('Tooltip::autohide:: should not keep tooltip around when autohide is true and tooltip content is hovered over', (t) => {
  const spy = sinon.spy();
  isOpen = true;
  const wrapper = mount(
    <Tooltip target="target" autohide isOpen={isOpen} toggle={spy} delay={200}>
      Tooltip Content
    </Tooltip>,
    { attachTo: container },
  );
  const instance = wrapper.instance();
  t.true(isOpen);
  t.true(spy.notCalled);
  instance.onMouseLeaveTooltip();
  clock.tick(100);
  instance.onMouseOverTooltipContent();
  clock.tick(200);
  t.true(spy.called);
  instance.onMouseLeaveTooltipContent();
  t.false(instance._hideTimeout);

  wrapper.detach();
  t.end();
});
*************************** *************************** *************************
*/
