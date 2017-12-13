import test from 'tape';
import sinon from 'sinon';
import * as Utils from '../../src/components/utils';

test('Utils::mapToCssModules:: should return a string', (t) => {
  t.equal(typeof Utils.mapToCssModules('btn btn-primary'), 'string');
  t.end();
});

test('Utils:: should return the classnames it was given, unchanged', (t) => {
  t.equal(Utils.mapToCssModules('btn btn-primary'), 'btn btn-primary');
  t.end();
});

test('Utils::mapToCssModules:: should return a string', (t) => {
  const cssModule = {
    btn: 'a1',
    'btn-success': 'b1',
    'btn-primary': 'c2',
  };
  t.equal(typeof Utils.mapToCssModules('btn btn-primary', cssModule), 'string');
  t.end();
});

test('Utils::mapToCssModules:: should return the mapped classnames', (t) => {
  const cssModule = {
    btn: 'a1',
    'btn-success': 'b1',
    'btn-primary': 'c2',
  };
  t.equal(Utils.mapToCssModules('btn btn-primary', cssModule), 'a1 c2');
  t.end();
});

test('Utils::mapToCssModules:: should return the original classname when it is not in the map', (t) => {
  const cssModule = {
    btn: 'a1',
    'btn-success': 'b1',
  };
  t.equal(Utils.mapToCssModules('btn btn-primary', cssModule), 'a1 btn-primary');
  t.end();
});

test('Utils::omit:: should omit keys', (t) => {
  const input = {
    hello: 'world',
    speed: 'fast',
    size: 'small',
  };
  t.same(Utils.omit(input, ['hello']), { speed: 'fast', size: 'small' });
  t.end();
});

test('Utils::omit:: should not alter source object', (t) => {
  const input = {
    hello: 'world',
    speed: 'fast',
    size: 'small',
  };
  t.same(Utils.omit(input, ['hello']), { speed: 'fast', size: 'small' });
  t.same(input, {
    hello: 'world',
    speed: 'fast',
    size: 'small',
  });
  t.end();
});

test('Utils::omit:: should ignore non-existing keys', (t) => {
  const input = {
    hello: 'world',
    speed: 'fast',
    size: 'small',
  };
  t.same(Utils.omit(input, ['non-existing', 'hello']), { speed: 'fast', size: 'small' });
  t.end();
});

test('Utils::omit:: should return a new object', (t) => {
  const input = {
    hello: 'world',
  };
  const result = Utils.omit(input, []);

  t.deepEqual(input, result);
  t.notOk(input === result);
  t.end();
});

test('Utils::DOMElement:: should not return an error when the prop is an instance of an Element', (t) => {
  const props = {
    dom: document.createElement('div'),
  };
  const propName = 'dom';
  const componentName = 'ComponentName';

  t.is(Utils.DOMElement(props, propName, componentName), undefined);
  t.end();
});

test('Utils::DOMElement:: should return an error when the prop is NOT an instance of an Element', (t) => {
  const props = {
    dom: 'not an Element',
  };
  const propName = 'dom';
  const componentName = 'ComponentName';

  t.same(Utils.DOMElement(props, propName, componentName), new Error(`Invalid prop \`${propName}\` supplied to \`${componentName
  }\`. Expected prop to be an instance of Element. Validation failed.`));
  t.end();
});

test('Utils::getTarget:: should return the result of target if target is a function', (t) => {
  const data = {};
  const spy = sinon.spy(() => data);
  t.same(Utils.getTarget(spy), data);
  t.true(spy.called);
  t.end();
});

test('Utils::getTarget:: should query the document for the target if the target is a string', (t) => {
  const element = document.createElement('div');
  element.className = 'thing';
  document.body.appendChild(element);
  const querySelector = sinon.spy(document, 'querySelector');
  t.same(Utils.getTarget('.thing'), element);
  t.true(querySelector.calledWith('.thing'));
  querySelector.restore();

  t.end();
});

test('Utils::getTarget:: should query the document for the id target if the target is a string and could not be found normally', (t) => {
  const element = document.createElement('div');
  element.setAttribute('id', 'thing');
  document.body.appendChild(element);
  const querySelector = sinon.spy(document, 'querySelector');
  t.same(Utils.getTarget('thing'), element);
  t.true(querySelector.calledWith('#thing'));
  querySelector.restore();

  t.end();
});

test('Utils::getTarget:: should return the input target if it is not a function nor a string', (t) => {
  const target = {};
  t.same(Utils.getTarget(target), target);
  t.end();
});
