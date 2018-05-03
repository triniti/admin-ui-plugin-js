import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import ReactStepper from 'react-stepper-horizontal';
import Stepper from './';

test('Stepper:: should import ReactStepper from react-stepper-horizontal', (t) => {
  const wrapper = shallow(<Stepper />);

  t.equal(wrapper.find(ReactStepper).length, 1);
  t.equal(wrapper.find('.stepper-container').length, 1);
  t.end();
});

test('Stepper:: shoud redner custom classNames', (t) => {
  const wrapper = shallow(<Stepper fullWidth horizontal />);

  t.equal(wrapper.find(ReactStepper).length, 1);
  t.equal(wrapper.find('.stepper-container').length, 1);
  t.equal(wrapper.find('.stepper-fullwidth').length, 1);
  t.equal(wrapper.find('.stepper-horizontal').length, 1);
  t.end();
});


test('Stepper:: shoud pass props to ReactStepper', (t) => {
  const wrapper = shallow(<Stepper activeColor="#111" size={30} titleFontSize={16} />);

  t.equal(wrapper.find(ReactStepper).length, 1);
  t.equal(wrapper.find(ReactStepper).at(0).prop('activeColor'), '#111');
  t.equal(wrapper.find(ReactStepper).at(0).prop('size'), 30);
  t.equal(wrapper.find(ReactStepper).at(0).prop('titleFontSize'), 16);

  t.end();
});
