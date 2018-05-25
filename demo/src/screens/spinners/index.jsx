import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Collapse, Icon, IconGroup, Loading, Row, Screen, Spinner, Table, UncontrolledTooltip } from '../../../../src/components';

class UiSpinners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseCode1: false
    };

    this.toggleCode1 = this.toggleCode1.bind(this);
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  render() {
    return (
  <Screen
    sidenav={<Sidenav activeScreen="spinners" />}
    sidenavHeader
    header="Spinners"
  // tabs={[
  //   { to: '/welcome', text: 'Tab1' },
  //   { to: '#/test2', text: 'Tab2' },
  // ]}
    primaryActions={<PrimaryActions />}
    body={[
      <Card key="icons1">
        <CardHeader>
          Spinner
          <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
            <Icon imgSrc="code" size="md"/>
          </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode1}>
          <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
<code>{`import React from 'react';
import { Col, Row, Spinner } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
      <div className="aspect-ratio aspect-ratio-16by9 bg-none">
        <Spinner centered width="56" className="position-absolute" style={{ top: '0' }}>Loading...</Spinner>
      </div>
  );
};`}</code></pre>
          </CardBody>
        </Collapse>
        <CardBody indent>
          <Row>
            <Col>
              <Spinner className="mb-3 mr-3" color="#08a0e8" width="12" strokeWidth="10" />
              <Spinner className="mb-3 mr-3" color="#7a7a7c" width="24" strokeWidth="4" />
              <Spinner className="mb-3 mr-3" color="#08a0e8" strokeWidth="10" />
              <Spinner className="mb-3 mr-3" color="black" width="48" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Spinner className="mb-3">Loading...</Spinner>

            </Col>
          </Row>
          <Row>
            <Col>
              <Button><Spinner width="20" className="mr-2"/> Loading</Button>

            </Col>
          </Row>
          <Row>
            <Col>
              <Button size="sm" outline><Spinner width="16" className="mr-2"/> Loading</Button>

            </Col>
          </Row>
          <Row>
            <Col>
              <Button size="sm" color="secondary"><Spinner width="16" color="white" className="mr-2"/> Loading</Button>

            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons2">
        <CardHeader>CSS Spinner</CardHeader>
        <CardBody indent>
          <Row>
            <Col>
              <div className="triniti-spinner">
                <div>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>,

       <Card key="icons3">
        <CardHeader>
          Spinner Centered
          <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
            <Icon imgSrc="code" size="md"/>
          </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode1}>
          <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
<code>{`import React from 'react';
import { Col, Row, Spinner } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
      <div className="aspect-ratio aspect-ratio-16by9 bg-none">
        <Spinner centered width="56" className="position-absolute" style={{ top: '0' }}>Loading...</Spinner>
      </div>
  );
};`}</code></pre>
          </CardBody>
        </Collapse>
        <CardBody indent>
          <div className="aspect-ratio aspect-ratio-16by9 bg-none">
            <Spinner centered width="56" className="position-absolute" style={{ top: '0' }}>Loading...</Spinner>
          </div>
        </CardBody>
      </Card>,

      <Card key="props1">
        <CardHeader>
          Spinner Properties
        </CardHeader>
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
                <th scope="row">centered</th>
                <td>bool</td>
                <td></td>
                <td>Will center Spinner inside container</td>
              </tr>
              <tr>
                <th scope="row">children</th>
                <td>node</td>
                <td></td>
                <td>Text that goes with Spinner</td>
              </tr>
              <tr>
                <th scope="row">className</th>
                <td>string</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">color</th>
                <td>string</td>
                <td>'#d9d9db'</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">strokeWidth</th>
                <td>string</td>
                <td>'6'</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">tag</th>
                <td>oneOfType</td>
                <td>'div'</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">width</th>
                <td>string</td>
                <td>'33'</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

    ]}
      />
    );
  }
}

export default UiSpinners;