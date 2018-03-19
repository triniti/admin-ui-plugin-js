import React, { Component } from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Alert, Button, Card, CardBody, CardHeader, Collapse, Col, Icon, Row, Screen, Table, UncontrolledAlert } from '../../../../src/components';

class UiAlert extends Component {
  constructor(props) {
    super(props);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.state = { collapseCode1: false };
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }


  render() {
    return (
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
          <Card key="props">
            <CardHeader>Alert Properties</CardHeader>
            <CardBody>
              <Table hover responsive>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">children</th>
                  <td>node</td>
                  <td></td>
                  <td>Message in the alert. Can include styling like <strong>strong</strong> and links using className="<a className="alert-link" href="#">alert-link</a>"</td>
                </tr>
                <tr>
                  <th scope="row">className</th>
                  <td>string</td>
                  <td></td>
                  <td>Add additional classes like <strong>alert-link</strong>, <strong>alert-heading</strong></td>
                </tr>
                <tr>
                  <th scope="row">closeClassName</th>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">closeAriaLabel</th>
                  <td>string</td>
                  <td>'Close'</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">color</th>
                  <td>string</td>
                  <td>'success'</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">isOpen</th>
                  <td>bool</td>
                  <td>true</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">inverse</th>
                  <td>bool</td>
                  <td></td>
                  <td>The default Alert theme with white text on solid backgrounds.</td>
                </tr>
                <tr>
                  <th scope="row">sticky</th>
                  <td>bool</td>
                  <td></td>
                  <td>Adds alert-sticky class to alert. Similar to sticky-top but with flex, drop-shadow, and a min-height to cover sticky card-header if present</td>
                </tr>
                <tr>
                  <th scope="row">toggle</th>
                  <td>bool</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">tag</th>
                  <td>bool</td>
                  <td>'div'</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">transition</th>
                  <td>bool</td>
                  <td>
                    ...Fade.defaultProps,
                    unmountOnExit: true,
                  </td>
                  <td>Controls the transition of the alert fading in and out. See Fade for more details.</td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="alert1">
            <CardHeader>Content Alerts (alert-inverse)
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode1}>
              <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-2">
<code>{`import React from 'react';
import { Alert, UncontrolledAlert } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
    <div>
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
    </div>
  );
};`}</code></pre>
              </CardBody>
            </Collapse>
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

          <Card key="alert2">
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

          <Card key="alert3">
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

          <Card key="alert4">
            <CardHeader className="mb-3">Full Width Content Alerts (alert-inverse)</CardHeader>
            <UncontrolledAlert color="info" inverse sticky>
              <span><strong>Full Width</strong> Alert outside of Card Container and Sticky</span>
            </UncontrolledAlert>

            <Alert color="success" inverse>
              <strong>Well done!</strong> Full Width inside Section Container
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
            <UncontrolledAlert color="info" inverse>
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
                    <td className="alert alert-dark">@dark</td>
                  </tr>
                  <tr>
                    <th scope="row" className="alert alert-warning">3</th>
                    <td className="alert alert-warning">Larry</td>
                    <td className="alert alert-info">the Bird</td>
                    <td className="alert alert-light">@light</td>
                  </tr>
                </tbody>
              </Table>
              <br />
              <Alert color="info" className="text-left">
                <h3 className="alert-heading" className="mb-1">
                  <Icon imgSrc="warning-outline-alt" className="mr-2" size="lg"/>
                  Example Alert Heading with Icon
                </h3>
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
  }
}


export default UiAlert;
