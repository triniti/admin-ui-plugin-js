import React from 'react';
import { AlertBar, Card, CardBody, CardHeader } from '../../../../src/components';

const alerts = [
  {
    id: Math.ceil(Math.random() * 10000000),
    type: 'success',
    isDismissible: false,
    delay: false,
    message: 'Well done! You successfully read this important alert message.',
  },
  {
    id: Math.ceil(Math.random() * 10000000),
    type: 'info',
    isDismissible: false,
    delay: false,
    message: 'Heads up! This alert needs your attention, but it\'s not super important.',
  },
  {
    id: Math.ceil(Math.random() * 10000000),
    type: 'warning',
    isDismissible: false,
    delay: false,
    message: 'Warning! Better check yourself, you\'re not looking too good.',
  },
  {
    id: Math.ceil(Math.random() * 10000000),
    type: 'danger',
    isDismissible: false,
    delay: false,
    message: 'Oh snap! Change a few things up and try submitting again.',
  },
  {
    id: Math.ceil(Math.random() * 10000000),
    type: 'success',
    isDismissible: false,
    delay: false,
    message: 'I am an alert and I have',
    link: {
      openInNewTab: true,
      text: 'a link that will open in a new tab',
      href: 'https://google.com',
    },
  },
  {
    id: Math.ceil(Math.random() * 10000000),
    type: 'success',
    isDismissible: false,
    delay: false,
    message: 'I am an alert and I have',
    link: {
      openInNewTab: false,
      text: 'a link that will open in the same tab',
      href: '/alerts',
    },
  },
  {
    id: Math.ceil(Math.random() * 10000000),
    type: 'info',
    isDismissible: true,
    delay: false,
    message: 'I am an alert and I can be dismissed!',
  },
  {
    id: Math.ceil(Math.random() * 10000000),
    type: 'warning',
    isDismissible: true,
    delay: 5000,
    message: 'I am an alert and I can be dismissed, and I will dismiss myself after 5 seconds!',
  },
];

const UiAlertBar = () => (
  <Card>
    <div>
      <CardHeader spacing="lg">Assorted Alert Bar Variants</CardHeader>
      <CardBody spacing="lg">
        <AlertBar alerts={alerts} onDismiss={() => {}} />
      </CardBody>
    </div>
  </Card>
);

export default UiAlertBar;
