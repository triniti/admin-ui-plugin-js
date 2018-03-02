import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Alert, Card, CardBody, CardHeader, Screen, Table, UncontrolledAlert } from '../../../../src/components';

const UiAlert = () => (
  <Screen
    sidenav={<Sidenav activeScreen="alerts" />}
    sidenavHeader
    header="Alerts"
    // tabs={[
    //   { to: '/welcome', text: 'Tab1' },
    //   { to: '#/test2', text: 'Tab2' },
    // ]}
    alerts={[
    {
      id: Math.ceil(Math.random() * 10000000),
      type: 'success',
      isDismissible: true,
      delay: false,
      message: 'I am an alert and I have',
      link: {
        openInNewTab: true,
        text: 'a link that will open in a new tab',
        href: 'https://google.com',
      },
      },
    ]}
    primaryActions={<PrimaryActions />}
    body={[
      <Card key="alert1">
        <CardHeader>Inline Content Alerts</CardHeader>
        <CardBody>
          <Alert color="success">
            <strong>Well done!</strong> You successfully read this important alert message.
          </Alert>
          <Alert color="info">
            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
          </Alert>
          <Alert color="warning">
            <strong>Warning!</strong> Better check yourself, you're not looking too good.
          </Alert>
          <Alert color="danger">
            <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </Alert>
          <UncontrolledAlert color="info">
          I am an alert and I can be dismissed!
          </UncontrolledAlert>
        </CardBody>
      </Card>,

      <Card key="alert2">
        <CardHeader className="mb-3">Full Width Content Alerts</CardHeader>
        <Alert color="success" className="mb-3">
          <strong>Well done!</strong> You successfully read this important alert message.
        </Alert>
        <Alert color="info" className="mb-3">
          <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
        </Alert>
        <Alert color="warning" className="mb-3">
          <strong>Warning!</strong> Better check yourself, you're not looking too good.
        </Alert>
        <Alert color="danger" className="mb-3">
          <strong>Oh snap!</strong> Change a few things up and try submitting again.
        </Alert>
        <UncontrolledAlert color="info" className="mb-3">
        I am an alert and I can be dismissed!
        </UncontrolledAlert>
      </Card>,

      <Card key="alert3">
        <CardHeader>Inline Content Alerts (alert-inverse)</CardHeader>
        <CardBody>
          <Alert color="success" inverse>
            <strong>Well done!</strong> You successfully read this important alert message.
          </Alert>
          <Alert color="info" inverse>
            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
          </Alert>
          <Alert color="warning" inverse>
            <strong>Warning!</strong> Better check yourself, you're not looking too good.
          </Alert>
          <Alert color="danger" inverse>
            <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </Alert>
          <UncontrolledAlert inverse color="primary">
          I am an alert and I can be dismissed!  Brand Color!
          </UncontrolledAlert>
        </CardBody>
      </Card>,


      <Card key="alert4">
        <CardHeader className="mb-3">Full Width Content Alerts (alert-inverse)</CardHeader>
        <UncontrolledAlert color="info" inverse sticky>
          <span><strong>Full Width</strong> Alert outside of Card Container and Sticky</span>
        </UncontrolledAlert>

        <Alert color="success" inverse className="mb-3">
          <strong>Well done!</strong> Full Width inside Section Container
        </Alert>
        <Alert color="info" inverse className="mb-3">
          <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
        </Alert>
        <Alert color="warning" inverse className="mb-3">
          <strong>Warning!</strong> Better check yourself, you're not looking too good.
        </Alert>
        <Alert color="danger" inverse className="mb-3">
          <strong>Oh snap!</strong> Change a few things up and try submitting again.
        </Alert>
        <UncontrolledAlert color="info" inverse className="mb-3">
        I am an alert and I can be dismissed!
        </UncontrolledAlert>

      </Card>,

      <Card key="alert7">
        <CardHeader>Striped Table</CardHeader>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr className="alert alert-success">
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td className="alert-danger">Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row" className="alert alert-warning">3</th>
                <td className="alert alert-warning">Larry</td>
                <td className="alert alert-info">the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
          <br />
          <Alert color="info">
            <span className="ion-android-alert float-left" />
            <strong>The complete list of common words:</strong><br />
          a, an, and, are, as, at, be, but, by, for, if, in, into, is, it,
          no, not, of, on, or, such, that, the, their, then, there, these,
          they, this, to, was, will, with
          </Alert>
        </CardBody>
      </Card>,
  ]}
  />
);


export default UiAlert;
