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
      <CardHeader>Full Width Content Alerts</CardHeader>
      <CardBody>
        <Alert color="success" fullWidth className="mb-3">
          <strong>Well done!</strong> You successfully read this important alert message.
        </Alert>
        <Alert color="info" fullWidth className="mb-3">
          <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
        </Alert>
        <Alert color="warning" fullWidth className="mb-3">
          <strong>Warning!</strong> Better check yourself, you're not looking too good.
        </Alert>
        <Alert color="danger" fullWidth className="mb-3">
          <strong>Oh snap!</strong> Change a few things up and try submitting again.
        </Alert>
        <UncontrolledAlert color="info" fullWidth className="mb-3">
          I am an alert and I can be dismissed!
        </UncontrolledAlert>
      </CardBody>
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
      <CardHeader>Full Width Content Alerts (alert-inverse)</CardHeader>
      <UncontrolledAlert color="info" inverse fullWidth sticky>
        <span><strong>Full Width</strong> Alert outside of Card Container and Sticky</span>
      </UncontrolledAlert>
      <CardBody>
        <Alert color="success" inverse fullWidth className="mb-3">
          <strong>Well done!</strong> Full Width inside Section Container
        </Alert>
        <Alert color="info" inverse fullWidth className="mb-3">
          <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
        </Alert>
        <Alert color="warning" inverse fullWidth className="mb-3">
          <strong>Warning!</strong> Better check yourself, you're not looking too good.
        </Alert>
        <Alert color="danger" inverse fullWidth className="mb-3">
          <strong>Oh snap!</strong> Change a few things up and try submitting again.
        </Alert>
        <UncontrolledAlert color="info" inverse fullWidth className="mb-3">
          I am an alert and I can be dismissed!
        </UncontrolledAlert>
      </CardBody>
    </Card>,

    <Card key="alert5">
      <CardHeader>Border Alerts (has-border)</CardHeader>
      <CardBody>
        <div className="has-border border-primary mb-4">
          <strong>Well done!</strong> Example Border Alert - Primary
        </div>
        <div className="has-border border-success mb-4">
          <strong>Well done!</strong> Example Border Alert - Success
        </div>
        <div className="has-border border-info mb-4">
          <strong>Well done!</strong> Example Border Alert - Info
        </div>
        <div className="has-border border-warning mb-4">
          <strong>Well done!</strong> Example Border Alert - Warning
        </div>
        <div className="has-border border-danger mb-4">
          <strong>Well done!</strong> Example Border Alert - Danger
        </div>
        <div className="has-border border-inverse mb-4">
          <strong>Well done!</strong> Example Border Alert - Inverse
        </div>
        <div className="has-border border-secondary mb-4">
          <strong>Well done!</strong> Example Border Alert - Secondary
        </div>
        <div className="has-border mb-4">
          <strong>Well done!</strong> Example Border Alert - Default
        </div>
      </CardBody>
    </Card>,

    <Card key="alert6">
      <CardHeader>Border Alerts (has-border, border-indent)</CardHeader>
      <CardBody>
        <div className="has-border border-indent border-primary mb-4">
          <strong>Well done!</strong> Example Border Alert - Primary
        </div>
        <div className="has-border border-indent border-success mb-4">
          <strong>Well done!</strong> Example Border Alert - Success
        </div>
        <div className="has-border border-indent border-info mb-4">
          <strong>Well done!</strong> Example Border Alert - Info
        </div>
        <div className="has-border border-indent border-warning mb-4">
          <strong>Well done!</strong> Example Border Alert - Warning
        </div>
        <div className="has-border border-indent border-danger mb-4">
          <strong>Well done!</strong> Example Border Alert - Danger
        </div>
        <div className="has-border border-indent border-inverse mb-4">
          <strong>Well done!</strong> Example Border Alert - Inverse
        </div>
        <div className="has-border border-indent border-secondary mb-4">
          <strong>Well done!</strong> Example Border Alert - Secondary
        </div>
        <div className="has-border border-indent mb-4">
          <strong>Well done!</strong> Example Border Alert - Default
        </div>
      </CardBody>
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
