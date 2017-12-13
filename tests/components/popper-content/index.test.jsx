import React from 'react';
import tape from 'tape';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { Arrow } from 'react-popper';
import { PopperContent } from '../../../src/components';

let element;
let container;
let clock;

const setup = () => {
  element = document.createElement('div');
  container = document.createElement('div');
  element.innerHTML = '<p id="outerTarget">This is the popover <span id="target">target</span>.</p>';
  container.setAttribute('id', 'container');
  element.appendChild(container);
  document.body.appendChild(element);

  clock = sinon.useFakeTimers();
};

const teardown = () => {
  clock.restore();
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

test('PopperContent:: should render a null by default', (t) => {
  const wrapper = shallow(<PopperContent target="target">Yo!</PopperContent>);

  t.same(wrapper.type(), null);
  t.end();
});

test('PopperContent:: should NOT render children when isOpen is false', (t) => {
  const wrapper = shallow(<PopperContent target="target">Yo!</PopperContent>);

  t.same(wrapper.type(), null);
  t.end();
});

test('PopperContent:: should render children when isOpen is true and container is inline', (t) => {
  const wrapper = mount(<PopperContent target="target" isOpen container="inline">Yo!</PopperContent>);

  t.equal(wrapper.text(), 'Yo!');
  t.end();
});

test('PopperContent:: should render an Arrow in the Popper when isOpen is true and container is inline', (t) => {
  const wrapper = mount(<PopperContent target="target" isOpen container="inline">Yo!</PopperContent>);

  t.true(wrapper.containsMatchingElement(<Arrow />));
  t.end();
});

test('PopperContent:: should not render children', (t) => {
  const wrapper = shallow(<PopperContent target="target">Yo!</PopperContent>);

  t.same(wrapper.type(), null);
  t.end();
});

test('PopperContent:: should pass additional classNames to the popper', (t) => {
  const wrapper = shallow(<PopperContent className="extra" target="target" isOpen container="inline">Yo!</PopperContent>);

  t.true(wrapper.hasClass('extra'));
  t.end();
});

test('PopperContent:: should have placement class of top by default', (t) => {
  const wrapper = shallow(<PopperContent target="target" isOpen container="inline">Yo!</PopperContent>);

  t.true(wrapper.find('.auto').exists());
  t.end();
});

test('PopperContent:: should override placement class', (t) => {
  const wrapper = shallow(<PopperContent placement="top" target="target" isOpen container="inline">Yo!</PopperContent>);

  t.false(wrapper.find('.auto').exists());
  t.true(wrapper.find('.top').exists());
  t.end();
});

test('PopperContent:: should allow for a placement prefix', (t) => {
  const wrapper = shallow(<PopperContent placementPrefix="dropdown" target="target" isOpen container="inline">Yo!</PopperContent>);

  t.true(wrapper.find('.dropdown-auto').exists());
  t.end();
});

test('PopperContent:: should allow for a placement prefix with custom placement', (t) => {
  const wrapper = shallow(<PopperContent placementPrefix="dropdown" placement="top" target="target" isOpen container="inline">Yo!</PopperContent>);

  t.false(wrapper.find('.dropdown-auto').exists());
  t.true(wrapper.find('.dropdown-top').exists());
  t.end();
});

test('PopperContent:: should render custom tag for the popper', (t) => {
  const wrapper = mount(<PopperContent tag="main" target="target" isOpen container="inline">Yo!</PopperContent>);

  t.equal(wrapper.getDOMNode().tagName.toLowerCase(), 'main');
  t.end();
});

test('PopperContent:: should handle placement changes from popperjs', (t) => {
  const setState = sinon.spy(PopperContent.prototype, 'setState');
  const wrapper = mount(<PopperContent tag="main" target="target" isOpen container="inline">Yo!</PopperContent>);

  const instance = wrapper.instance();
  const placement = 'top';
  t.true(setState.notCalled);
  instance.handlePlacementChange({ placement });
  t.true(setState.called);
  t.equal(wrapper.state('placement'), placement);

  setState.restore();
  t.end();
});

test('PopperContent:: should not update when placement does not change', (t) => {
  const setState = sinon.spy(PopperContent.prototype, 'setState');
  const wrapper = mount(<PopperContent tag="main" target="target" isOpen container="inline">Yo!</PopperContent>);

  const instance = wrapper.instance();
  const placement = 'top';
  t.true(setState.notCalled);
  instance.handlePlacementChange({ placement });
  t.true(setState.called);
  setState.reset();
  instance.handlePlacementChange({ placement });
  t.true(setState.notCalled);
  t.equal(wrapper.state('placement'), placement);

  setState.restore();
  t.end();
});

test('PopperContent:: should return data from handle placement changes', (t) => {
  const wrapper = mount(<PopperContent tag="main" target="target" isOpen container="inline">Yo!</PopperContent>);

  const instance = wrapper.instance();
  const data = { placement: 'top' };
  const result = instance.handlePlacementChange(data);
  t.same(result, data);
  t.end();
});
