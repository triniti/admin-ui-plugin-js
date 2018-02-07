import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, CardHeader, Col, Container, Row, Screen } from '../../../../src/components';
import './styles.scss';

const UiLayout = () => (
  <Screen
    sidenav={<Sidenav activeScreen="layouts" />}
    sidenavHeader
    header="Layouts"
  // tabs={[
  //   { to: '/welcome', text: 'Tab1' },
  //   { to: '#/test2', text: 'Tab2' },
  // ]}
    primaryActions={<PrimaryActions />}
    body={[
      <Card key="layout1">
        <CardHeader>Full Width Columns</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <div className="ui-cols">
                <Row>
                  <Col>.col</Col>
                </Row>
                <Row>
                  <Col xs="3">.col-3</Col>
                  <Col xs="auto">.col-auto - variable width content</Col>
                  <Col xs="3">.col-3</Col>
                </Row>
                <Row>
                  <Col xs="6">.col-6</Col>
                  <Col xs="6">.col-6</Col>
                </Row>
                <Row>
                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                  <Col sm="4">.col .col-sm-4</Col>
                </Row>
                <Row>
                  <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>.col .col-sm-6 .col-sm-push-2 .col-sm-pull-2
                    .col-sm-offset-2
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md={{ size: 8, offset: 2 }}>.col .col-12 .col-md-6 .col-md-offset-2</Col>
                </Row>
                <Row>
                  <Col xs="3" sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
                  <Col xs="3" sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
                </Row>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="layout2">
        <CardHeader>Surrounded by a Container</CardHeader>
        <CardBody className="bg-gray">
          <Row>
            <Col>
              <Container className="ui-cols">
                <Row>
                  <Col>.col</Col>
                </Row>
                <Row>
                  <Col xs="3">.col-3</Col>
                  <Col xs="auto">.col-auto - variable width content</Col>
                  <Col xs="3">.col-3</Col>
                </Row>
                <Row>
                  <Col xs="6">.col-6</Col>
                  <Col xs="6">.col-6</Col>
                </Row>
                <Row>
                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                  <Col sm="4">.col .col-sm-4</Col>
                </Row>
                <Row>
                  <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
                  .col .col-sm-6 .col-sm-push-2 .col-sm-pull-2 .col-sm-offset-2
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md={{ size: 8, offset: 2 }}>.col .col-12 .col-md-6 .col-md-offset-2</Col>
                </Row>
                <Row>
                  <Col xs="3" sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
                  <Col xs="3" sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </CardBody>
      </Card>,
    ]}
  />
);

export default UiLayout;
