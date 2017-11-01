import React from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Container, Jumbotron, Row } from '../../../../src/components';

const UiJumbotron = () => (
  <Card spacing="lg">
    <CardHeader>Jumbotron Theme Dark</CardHeader>
    <Jumbotron theme="dark">
      <Container fluid>
        <CardTitle display="1">Fluid Jumbotron</CardTitle>
        <p className="lead">This is a modified jumbotron that occupies the entire
            horizontal space of its parent.</p>
      </Container>
    </Jumbotron>

    <CardHeader>Jumbotron Theme Light</CardHeader>
    <Jumbotron theme="light">
      <CardBody>
        <CardTitle display="1">CardBody Jumbotron</CardTitle>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its
            parent.</p>
      </CardBody>
    </Jumbotron>

    <CardHeader>Jumbotron Default inside CardBody</CardHeader>
    <CardBody>
      <Jumbotron>
        <CardBody>
        <CardTitle display="3">Hello, world!</CardTitle>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
            attention to featured content or information.</p>
        <hr/>
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger
            container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
        </CardBody>
      </Jumbotron>
    </CardBody>

    <CardHeader>Jumbotron inside CardBody</CardHeader>
    <CardBody>
      <Jumbotron>
        <Container fluid>
        <CardTitle display="2">Fluid Jumbotron</CardTitle>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its
            parent.</p>
        </Container>
      </Jumbotron>
    </CardBody>
  </Card>
  );

export default UiJumbotron;
