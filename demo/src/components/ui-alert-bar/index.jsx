import React from 'react';
import { AlertBar, Card, CardBody, CardHeader } from '../../../../src/components';

const alerts = [
  {
    id: Math.ceil(Math.random() * 10000000),
    type: 'success',
    isDismissable: false,
    delay: false,
    message: (<p><strong>Well done!</strong> You successfully read this important alert message.</p>),
  },
  {
    id: Math.ceil(Math.random() * 10000000),
    type: 'info',
    isDismissable: false,
    delay: false,
    message: (<p><strong>Heads up!</strong> This alert needs your attention, but it's not super important.</p>),
  },
  {
    id: Math.ceil(Math.random() * 10000000),
    type: 'warning',
    isDismissable: false,
    delay: false,
    message: (<p><strong>Warning!</strong> Better check yourself, you're not looking too good.</p>),
  },
  {
    id: Math.ceil(Math.random() * 10000000),
    type: 'danger',
    isDismissable: false,
    delay: false,
    message: (<p><strong>Oh snap!</strong> Change a few things up and try submitting again.</p>),
  },
  {
    id: Math.ceil(Math.random() * 10000000),
    type: 'success',
    isDismissable: false,
    delay: false,
    message: (<p>I am an alert with a <a href="https://www.google.com/" className="alert-link">sweet link!</a></p>),
  },
  {
    id: Math.ceil(Math.random() * 10000000),
    type: 'info',
    isDismissable: true,
    delay: false,
    message: (<p>I am an alert and I can be dismissed!</p>),
  },
  {
    id: Math.ceil(Math.random() * 10000000),
    type: 'warning',
    isDismissable: true,
    delay: 5000,
    message: (<p>I am an alert and I can be dismissed, and I will dismiss myself after 5 seconds!</p>),
  },
];

const UiAlertBar = () => (
  <Card>
    <div>
      <CardHeader spacing="lg">Assorted Alert Bar Variants</CardHeader>
      <CardBody spacing="lg">
        <AlertBar alerts={alerts} />
      </CardBody>
    </div>
  </Card>
);

export default UiAlertBar;
