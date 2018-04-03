import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Icon, IconGroup, Loading, Row, Screen, Spinner, UncontrolledTooltip } from '../../../../src/components';
import './styles.scss';

const UiSpinners = () => (
  <Screen
    sidenav={<Sidenav activeScreen="spinners" />}
    sidenavHeader
    header="Icons"
  // tabs={[
  //   { to: '/welcome', text: 'Tab1' },
  //   { to: '#/test2', text: 'Tab2' },
  // ]}
    primaryActions={<PrimaryActions />}
    body={[
      <Card key="icons1">
        <CardHeader>Spinner</CardHeader>
        <CardBody indent>
          <CardTitle></CardTitle>
          <Row>
            <Col>
              <Spinner className="mb-3 mr-3" color="#03caa5" width="16" strokeWidth="10" />
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
        <CardHeader>Spinner Centered</CardHeader>
        <CardBody indent>
          <Row>
            <Col style={{height:'400px'}}>
              <Spinner centered width="56">Loading...</Spinner>
            </Col>
          </Row>
        </CardBody>
      </Card>,

    ]}
  />
);

export default UiSpinners;