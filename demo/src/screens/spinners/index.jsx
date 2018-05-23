import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Icon, IconGroup, Loading, Row, Screen, Spinner, Table, UncontrolledTooltip } from '../../../../src/components';

const UiSpinners = () => (
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
        <CardHeader>Spinner</CardHeader>
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
        <CardHeader>Spinner Centered</CardHeader>
        <CardBody indent>
          <Row>
            <Col style={{height:'400px'}}>
              <Spinner centered width="56">Loading...</Spinner>
            </Col>
          </Row>
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

export default UiSpinners;