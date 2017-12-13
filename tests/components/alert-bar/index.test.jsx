import React from 'react';
import test from 'tape';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { AlertBar } from '../../../src/components';
import { BrowserRouter } from 'react-router-dom';

test('AlertBar:: should render children with the correct message', (t) => {
  const alerts = [
    {
      id: Math.ceil(Math.random() * 10000000),
      type: 'success',
      isDismissible: false,
      delay: false,
      message: 'Well done! You successfully read this important alert message.',
    },
  ];

  const alert = mount(<AlertBar alerts={alerts} onDismiss={() => {}} />);
  t.equal(alert.find('div.alert').length, 1);
  t.equal(alert.find('div.alert').text(), 'Well done! You successfully read this important alert message.');
  t.end();
});

test('AlertBar:: should be able to make a success Alert', (t) => {
  const alerts = [
    {
      id: Math.ceil(Math.random() * 10000000),
      type: 'success',
      isDismissible: true,
      delay: false,
      message: (<p><strong>Well done!</strong> You successfully read this important alert message.</p>),
    },
  ];

  const alert = mount(<AlertBar alerts={alerts} onDismiss={() => {}} />);
  t.true(alert.find('div.alert').first().hasClass('alert-success'));
  t.end();
});

test('AlertBar:: should be able to make a dismissible Alert', (t) => {
  const alerts = [
    {
      id: Math.ceil(Math.random() * 10000000),
      type: 'success',
      isDismissible: true,
      delay: false,
      message: 'Well done! You successfully read this important alert message.',
    },
  ];

  const alert = mount(<AlertBar alerts={alerts} onDismiss={() => {}} />);
  t.true(alert.find('div.alert').first().hasClass('alert-dismissible'));
  t.end();
});

test('AlertBar:: should be able to make an indismissible Alert', (t) => {
  const alerts = [
    {
      id: Math.ceil(Math.random() * 10000000),
      type: 'success',
      isDismissible: false,
      delay: false,
      message: 'Well done! You successfully read this important alert message.',
    },
  ];

  const alert = mount(<AlertBar alerts={alerts} onDismiss={() => {}} />);
  t.false(alert.find('div.alert').first().hasClass('alert-dismissible'));
  t.end();
});

test('AlertBar:: should be able to make an Alert that will dismiss itself after a delay', (t) => {
  const alerts = [
    {
      id: Math.ceil(Math.random() * 10000000),
      type: 'success',
      isDismissible: true,
      delay: 0,
      message: 'Well done! You successfully read this important alert message.',
    },
  ];

  const alert = mount(<AlertBar alerts={alerts} onDismiss={() => {}} />);
  setTimeout(() => {
    t.equal(alert.find('div.alert').first().html().indexOf('show'), -1);
    t.end();
  }, 0);
});

test('AlertBar:: should be able to make an Alert that will not dismiss itself unless isDismissible (even with a delay value)', (t) => {
  const alerts = [
    {
      id: Math.ceil(Math.random() * 10000000),
      type: 'success',
      isDismissible: false,
      delay: 0,
      message: 'Well done! You successfully read this important alert message.',
    },
  ];

  const alert = mount(<AlertBar alerts={alerts} onDismiss={() => {}} />);
  setTimeout(() => {
    t.notEqual(alert.find('div.alert').first().html().indexOf('show'), -1);
    t.end();
  }, 0);
});

test('AlertBar:: should call the AlertBar onDismiss prop function when an Alert is dismissed manually', (t) => {
  const alerts = [
    {
      id: Math.ceil(Math.random() * 10000000),
      type: 'success',
      isDismissible: true,
      delay: false,
      message: 'Well done! You successfully read this important alert message.',
    },
  ];

  const handleDismiss = sinon.spy();
  const alert = mount(<AlertBar alerts={alerts} onDismiss={handleDismiss} />);
  alert.find('button').simulate('click');
  t.true(handleDismiss.called);
  t.end();
});

test('AlertBar:: should call the AlertBar onDismiss prop function when an Alert is dismissed after a delay', (t) => {
  const alerts = [
    {
      id: Math.ceil(Math.random() * 10000000),
      type: 'success',
      isDismissible: true,
      delay: 0,
      message: 'Well done! You successfully read this important alert message.',
    },
  ];

  const handleDismiss = sinon.spy();
  const alert = mount(<AlertBar alerts={alerts} onDismiss={handleDismiss} />);
  setTimeout(() => {
    t.true(handleDismiss.called);
    t.end();
  }, 0);
});

test('AlertBar:: should be able to make an alert with an href link for a new tab', (t) => {
  const alerts = [
    {
      id: Math.ceil(Math.random() * 10000000),
      type: 'success',
      isDismissible: false,
      delay: false,
      message: 'Well done! You successfully read this important alert message.',
      link: {
        openInNewTab: true,
        text: 'sweet link bro',
        href: 'https://google.com',
      },
    },
  ];

  const alert = mount(<AlertBar alerts={alerts} onDismiss={() => {}} />);
  t.notEqual(alert.find('a.alert-link').html().indexOf('sweet link bro'), -1);
  t.notEqual(alert.find('a.alert-link').html().indexOf('https://google.com'), -1);
  t.notEqual(alert.find('a.alert-link').html().indexOf('_blank'), -1);
  t.end();
});

test('AlertBar:: should be able to make an alert with a RouterLink for the same tab', (t) => {
  const alerts = [
    {
      id: Math.ceil(Math.random() * 10000000),
      type: 'success',
      isDismissible: false,
      delay: false,
      message: 'Well done! You successfully read this important alert message.',
      link: {
        openInNewTab: false,
        text: 'sweet link bro',
        href: 'https://google.com',
      },
    },
  ];

  const alert = mount(<BrowserRouter><AlertBar alerts={alerts} onDismiss={() => {}} /></BrowserRouter>);
  t.equal(alert.find('a.alert-link').html().indexOf('_blank'), -1);
  t.end();
});
