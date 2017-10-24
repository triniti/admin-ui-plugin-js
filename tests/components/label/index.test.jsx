import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Label } from '../../../src/components';

test('Label:: should render a label tag by default', (t) => {
  const wrapper = shallow(<Label />);

  t.equal(wrapper.type(), 'label');
  t.end();
});

test('Label:: should render children', (t) => {
  const wrapper = shallow(<Label>Yo!</Label>);

  t.equal(wrapper.text(), 'Yo!');
  t.true(wrapper.hasClass('form-control-label'), 'should render with "form-control-label" class');
  t.false(wrapper.hasClass('col-form-label'), 'should not render with "col-form-label" class when a col is not provided');
  t.end();
});

test('Label:: should pass additional classNames', (t) => {
  const wrapper = shallow(<Label className="extra">Yo!</Label>);

  t.true(wrapper.hasClass('extra'));
  t.end();
});


test('Label:: should render with "form-control-label" class when inline prop is truthy', (t) => {
  const wrapper = shallow(<Label inline>Yo!</Label>);

  t.true(wrapper.hasClass('form-control-label'));
  t.end();
});

test('Label:: should not render with "form-control-label" class when a col is provided', (t) => {
  const wrapper = shallow(<Label sm="6">Yo!</Label>);

  t.true(wrapper.hasClass('col-form-label'), 'should render with "col-form-label" class when a col is provided');
  t.true(wrapper.hasClass('col-sm-6'), 'should pass col size specific classes as Strings');
  t.false(wrapper.hasClass('form-control-label'));
  t.end();
});

test('Label:: should not render with "form-control-label" class when check prop is truthy', (t) => {
  const wrapper = shallow(<Label check>Yo!</Label>);

  t.false(wrapper.hasClass('form-control-label'));
  t.end();
});

test('Label:: should pass col size specific classes as Strings (auto)', (t) => {
  const wrapper = shallow(<Label sm="auto">Yo!</Label>);

  t.true(wrapper.hasClass('col-sm-auto'));
  t.end();
});

test('Label:: should pass col size specific classes as Strings ("")', (t) => {
  const wrapper = shallow(<Label sm="">Yo!</Label>);

  t.true(wrapper.hasClass('col-sm'));
  t.end();
});

test('Label:: should pass col size specific classes as Strings (true)', (t) => {
  const wrapper = shallow(<Label sm>Yo!</Label>);

  t.true(wrapper.hasClass('col-sm'));
  t.end();
});

test('Label:: should pass col size specific classes as Strings (xs)', (t) => {
  const wrapper = shallow(<Label xs="6">Yo!</Label>);

  t.true(wrapper.hasClass('col-6'));
  t.end();
});

test('Label:: should pass col size specific classes as Strings (xs="")', (t) => {
  const wrapper = shallow(<Label xs="">Yo!</Label>);

  t.true(wrapper.hasClass('col'));
  t.end();
});

test('Label:: should pass col size specific classes as Strings (xs (true))', (t) => {
  const wrapper = shallow(<Label xs>Yo!</Label>);

  t.true(wrapper.hasClass('col'));
  t.end();
});

test('Label:: should pass col size specific classes as Strings (xs="auto")', (t) => {
  const wrapper = shallow(<Label xs="auto">Yo!</Label>);

  t.true(wrapper.hasClass('col-auto'));
  t.end();
});

test('Label:: should render with "sr-only" class when hidden prop is truthy', (t) => {
  const wrapper = shallow(<Label hidden>Yo!</Label>);

  t.true(wrapper.hasClass('sr-only'));
  t.end();
});

test('Label:: should render with "col-form-label-${size}" class when size is provided', (t) => {
  const wrapper = shallow(<Label size="lg">Yo!</Label>);

  t.true(wrapper.hasClass('col-form-label-lg'));
  t.end();
});

test('Label:: should pass col size specific classes as Numbers', (t) => {
  const wrapper = shallow(<Label sm={6}>Yo!</Label>);

  t.true(wrapper.hasClass('col-sm-6'));
  t.end();
});

test('Label:: should pass col size specific classes as Numbers (xs)', (t) => {
  const wrapper = shallow(<Label xs={6}>Yo!</Label>);

  t.true(wrapper.hasClass('col-6'));
  t.end();
});

test('Label:: should pass col size specific classes via Objects', (t) => {
  const wrapper = shallow(<Label sm={{ size: 6, push: 2, pull: 2, offset: 2 }}>Yo!</Label>);

  t.true(wrapper.hasClass('col-sm-6'));
  t.true(wrapper.hasClass('push-sm-2'));
  t.true(wrapper.hasClass('pull-sm-2'));
  t.true(wrapper.hasClass('offset-sm-2'));
  t.end();
});

test('Label:: should pass col size specific classes via Objects (xs)', (t) => {
  const wrapper = shallow(<Label xs={{ size: 6, push: 2, pull: 2, offset: 2 }}>Yo!</Label>);

  t.true(wrapper.hasClass('col-6'));
  t.true(wrapper.hasClass('push-2'));
  t.true(wrapper.hasClass('pull-2'));
  t.true(wrapper.hasClass('offset-2'));
  t.end();
});

test('Label:: should pass multiple col size specific classes via Objects', (t) => {
  const wrapper = shallow(
    <Label
      xs={{ size: 4, push: 3, pull: 3, offset: 3 }}
      sm={{ size: 6, push: 2, pull: 2, offset: 2 }}
      md={{ size: 7, push: 1, pull: 1, offset: 1 }}
    >
      Yo!
    </Label>,
  );

  t.true(wrapper.hasClass('col-4'));
  t.true(wrapper.hasClass('push-3'));
  t.true(wrapper.hasClass('pull-3'));
  t.true(wrapper.hasClass('offset-3'));
  t.true(wrapper.hasClass('col-sm-6'));
  t.true(wrapper.hasClass('push-sm-2'));
  t.true(wrapper.hasClass('pull-sm-2'));
  t.true(wrapper.hasClass('offset-sm-2'));
  t.true(wrapper.hasClass('col-md-7'));
  t.true(wrapper.hasClass('push-md-1'));
  t.true(wrapper.hasClass('pull-md-1'));
  t.true(wrapper.hasClass('offset-md-1'));
  t.end();
});

test('Label:: should render custom tag', (t) => {
  const wrapper = shallow(<Label tag="main">Yo!</Label>);

  t.equal(wrapper.type(), 'main');
  t.end();
});
