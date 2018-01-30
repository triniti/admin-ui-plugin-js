import React from 'react';
import { Card, CardBody, CardHeader, Row, Col, Progress, ScreenBody } from '../../../../src/components';

const UiProgress = () => (
<ScreenBody
  body={[
  <Card key="progress1">
    <CardHeader spacing="lg" inset>Plain</CardHeader>
    <CardBody spacing="lg">
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
    <CardHeader spacing="lg" inset>With Labels</CardHeader>
    <CardBody spacing="lg">
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
    <CardHeader spacing="lg" inset>Stripes and Animations</CardHeader>
    <CardBody spacing="lg">
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
  </Card>
  ]}
  >
  </ScreenBody>
);

export default UiProgress;
