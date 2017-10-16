import React from 'react';
import { Alert, Card, CardBlock, CardHeader, Col, Row, Table, UncontrolledAlert } from '../../../src/components';

const UiAlert = () => (
  <Card>
    <div>
      <CardHeader>Inline Content Alerts</CardHeader>
      <CardBlock>
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
      </CardBlock>
    </div>

    <div>
      <CardHeader>Full Width Content Alerts</CardHeader>
      <CardBlock>
        <Alert color="success" className={'alert-full-width mb-3'}>
          <strong>Well done!</strong> You successfully read this important alert message.
        </Alert>
        <Alert color="info" className={'alert-full-width mb-3'}>
          <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
        </Alert>
        <Alert color="warning" className={'alert-full-width mb-3'}>
          <strong>Warning!</strong> Better check yourself, you're not looking too good.
        </Alert>
        <Alert color="danger" className={'alert-full-width mb-3'}>
          <strong>Oh snap!</strong> Change a few things up and try submitting again.
        </Alert>
        <UncontrolledAlert color="info" className={'alert-full-width mb-3'}>
          I am an alert and I can be dismissed!
        </UncontrolledAlert>
      </CardBlock>
    </div>

    <div>
      <CardHeader>Inline Content Alerts (alert-inverse)</CardHeader>
      <CardBlock>
        <Alert color="success" className={'alert-inverse'}>
          <strong>Well done!</strong> You successfully read this important alert message.
        </Alert>
        <Alert color="info" className={'alert-inverse'}>
          <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
        </Alert>
        <Alert color="warning" className={'alert-inverse'}>
          <strong>Warning!</strong> Better check yourself, you're not looking too good.
        </Alert>
        <Alert color="danger" className={'alert-inverse'}>
          <strong>Oh snap!</strong> Change a few things up and try submitting again.
        </Alert>
        <UncontrolledAlert className={'alert-brand alert-inverse'}>
          I am an alert and I can be dismissed!  Brand Color!
        </UncontrolledAlert>
      </CardBlock>
    </div>

    <CardHeader>Full Width Content Alerts (alert-inverse)</CardHeader>
    <div>
      <UncontrolledAlert color="info" className={'alert-inverse alert-full-width alert-sticky'}>
        <span><strong>Full Width</strong> Alert outside of Card Container and Sticky</span>
      </UncontrolledAlert>
      <CardBlock>
        <Alert color="success" className={'alert-inverse alert-full-width mb-3'}>
          <strong>Well done!</strong> Full Width inside Section Container
        </Alert>
        <Alert color="info" className={'alert-inverse alert-full-width mb-3'}>
          <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
        </Alert>
        <Alert color="warning" className={'alert-inverse alert-full-width mb-3'}>
          <strong>Warning!</strong> Better check yourself, you're not looking too good.
        </Alert>
        <Alert color="danger" className={'alert-inverse alert-full-width mb-3'}>
          <strong>Oh snap!</strong> Change a few things up and try submitting again.
        </Alert>
        <UncontrolledAlert color="info" className={'alert-inverse alert-full-width mb-3'}>
          I am an alert and I can be dismissed!
        </UncontrolledAlert>
      </CardBlock>
    </div>

    <div>
      <CardHeader>Border Alerts (has-border)</CardHeader>
      <CardBlock>
        <div className={'has-border border-primary mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Primary
        </div>
        <div className={'has-border border-success mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Success
        </div>
        <div className={'has-border border-info mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Info
        </div>
        <div className={'has-border border-warning mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Warning
        </div>
        <div className={'has-border border-danger mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Danger
        </div>
        <div className={'has-border border-inverse mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Inverse
        </div>
        <div className={'has-border border-secondary mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Secondary
        </div>
        <div className={'has-border mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Default
        </div>
      </CardBlock>
    </div>

    <div>
      <CardHeader>Border Alerts (has-border, border-indent)</CardHeader>
      <CardBlock>
        <div className={'has-border border-indent border-primary mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Primary
        </div>
        <div className={'has-border border-indent border-success mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Success
        </div>
        <div className={'has-border border-indent border-info mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Info
        </div>
        <div className={'has-border border-indent border-warning mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Warning
        </div>
        <div className={'has-border border-indent border-danger mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Danger
        </div>
        <div className={'has-border border-indent border-inverse mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Inverse
        </div>
        <div className={'has-border border-indent border-secondary mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Secondary
        </div>
        <div className={'has-border border-indent mb-4'}>
          <strong>Well done!</strong> Example Border Alert - Default
        </div>
      </CardBlock>
    </div>

    <div>
      <CardHeader>Striped Table</CardHeader>
      <CardBlock>
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
            <tr className={'alert alert-success'}>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td className={'alert-danger'}>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row" className={'alert alert-warning'}>3</th>
              <td className={'alert alert-warning'}>Larry</td>
              <td className={'alert alert-info'}>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        <br/>
        <Alert color="info">
          <span className={'ion-android-alert float-left'} />
          <strong>The complete list of common words:</strong><br />
          a, an, and, are, as, at, be, but, by, for, if, in, into, is, it, no, not, of, on, or, such, that, the, their, then, there, these, they, this, to, was, will, with
        </Alert>
      </CardBlock>
    </div>
  </Card>
);

export default UiAlert;
