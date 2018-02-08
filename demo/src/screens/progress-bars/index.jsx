import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, CardHeader, Row, Col, Progress, Screen } from '../../../../src/components';

const UiProgress = () => (
  <Screen
    sidenav={<Sidenav activeScreen="progress-bars" />}
    sidenavHeader
    header="Progress Bars"
  // tabs={[
  //   { to: '/welcome', text: 'Tab1' },
  //   { to: '#/test2', text: 'Tab2' },
  // ]}
    primaryActions={<PrimaryActions />}
    body={[
      <Card key="progress1">
        <CardHeader>Plain</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <Progress multi>
                <Progress bar value="15" />
                <Progress bar color="success" value="20" />
                <Progress bar color="info" value="25" />
                <Progress bar color="warning" value="20" />
                <Progress bar color="danger" value="15" />
              </Progress>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="progress2">
        <CardHeader>With Labels</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <Progress multi>
                <Progress bar value="15">Meh</Progress>
                <Progress bar color="success" value="35">Wow!</Progress>
                <Progress bar color="warning" value="25">25%</Progress>
                <Progress bar color="danger" value="25">LOOK OUT!!</Progress>
              </Progress>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="progress3">
        <CardHeader>Stripes and Animations</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <Progress multi>
                <Progress bar striped value="15">Stripes</Progress>
                <Progress bar animated color="success" value="30">Animated Stripes</Progress>
                <Progress bar color="info" value="25">Plain</Progress>
              </Progress>
            </Col>
          </Row>
        </CardBody>
      </Card>,
  ]}
  />
);

export default UiProgress;
