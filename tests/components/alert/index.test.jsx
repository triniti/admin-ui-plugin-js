import React from 'react';
import test from 'tape';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { Alert } from '../../../src/components';

test('should render children', (t) => {
  const alert = mount(<Alert>Yo!</Alert>);
  t.equal(alert.text(), 'Yo!');
  t.end();
});

test('should pass className down', (t) => {
  const alert = shallow(<Alert className="test-class-name">Yo!</Alert>);
  t.equal(alert.find('.test-class-name').length, 1);
  t.end();
});

test('should pass close className down', (t) => {
  function noop() { }
  const alert = shallow(<Alert toggle={noop} closeClassName="test-class-name">Yo!</Alert>);
  t.equal(alert.find('.test-class-name').length, 1);
  t.end();
});

test('should pass other props down', (t) => {
  const alert = shallow(<Alert data-testprop="testvalue">Yo!</Alert>);
  t.equal(alert.find('.alert').prop('data-testprop'), 'testvalue');
  t.end();
});

test('should have default transitionTimeouts', (t) => {
  const alert = mount(<Alert>Yo!</Alert>);

  const transition = alert.find('Transition');
  t.equal(transition.prop('timeout'), 150);
  t.true(transition.prop('appear'));
  t.true(transition.prop('enter'));
  t.true(transition.prop('exit'));
  t.end();
});

test('should have support configurable transitionTimeouts', (t) => {
  const alert = mount(<Alert transition={{
 timeout: 0, appear: false, enter: false, exit: false,
}}>
        Yo!
                      </Alert>);

  const transition = alert.find('Transition');
  t.equal(transition.prop('timeout'), 0);
  t.false(transition.prop('appear'));
  t.false(transition.prop('enter'));
  t.false(transition.prop('exit'));
  t.end();
});

test('should have "success" as default color', (t) => {
  const alert = mount(<Alert>Yo!</Alert>).find('div');
  t.true(alert.hasClass('alert-success'));
  t.end();
});

test('should accept color prop', (t) => {
  const alert = mount(<Alert color="warning">Yo!</Alert>).find('div');
  t.true(alert.hasClass('alert-warning'));
  t.end();
});

test('should use a div tag by default', (t) => {
  const alert = mount(<Alert>Yo!</Alert>);
  t.equal(alert.find('div').length, 1);
  t.end();
});

test('should be non dismissible by default', (t) => {
  const alert = mount(<Alert>Yo!</Alert>).find('div');
  t.equal(alert.find('button').length, 0);
  t.false(alert.hasClass('alert-dismissible'));

  t.end();
});

test('should show dismiss button if passed toggle', (t) => {
  const alert = mount(<Alert color="danger" toggle={(t) => { }}>Yo!</Alert>).find('div');
  t.equal(alert.find('button').length, 1);
  t.true(alert.hasClass('alert-dismissible'));
  t.end();
});

test('should support custom tag', (t) => {
  const alert = mount(<Alert tag="p">Yo!</Alert>);
  t.equal(alert.find('p').length, 1);
  t.end();
});

test('should be empty if not isOpen', (t) => {
  const alert = shallow(<Alert isOpen={false}>Yo!</Alert>);
  t.equal(alert.html(), '');
  t.end();
});

test('should be dismissible', (t) => {
  const onClick = sinon.spy();
  const alert = shallow(<Alert color="danger" toggle={onClick}>Yo!</Alert>);

  alert.find('button').simulate('click');
  t.true(onClick.called);
  t.end();
});

test('should render close button with custom aria-label', (t) => {
  const alert = mount(<Alert toggle={(t) => { }} closeAriaLabel="oseclay">Yo!</Alert>).find('div');
  const closeButton = alert.find('button').first();
  t.equal(closeButton.prop('aria-label'), 'oseclay');

  t.end();
});
