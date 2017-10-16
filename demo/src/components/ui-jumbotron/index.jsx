import React from 'react';
import { Button, Card, CardBlock, CardHeader, CardTitle, Col, Container, Jumbotron, HeaderDisplay, Row } from '../../../../src/components';

const UiJumbotron = () => (
  <Card>
    <CardHeader>Jumbotron Theme Dark</CardHeader>
    <Jumbotron className={'mb-0'} theme="dark">
      <Container fluid>
        <CardTitle display="1">Fluid Jumbotron</CardTitle>
        <p className="lead">This is a modified jumbotron that occupies the entire
            horizontal space of its parent.</p>
      </Container>
    </Jumbotron>

    <CardHeader>Jumbotron Theme Light</CardHeader>
    <Jumbotron theme="light">
      <CardBlock>
        <CardTitle display="1">CardBlock Jumbotron</CardTitle>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its
            parent.</p>
      </CardBlock>
    </Jumbotron>

    <CardHeader>Jumbotron Default inside CardBlock</CardHeader>
    <CardBlock>
      <Jumbotron>
        <CardBlock>
        <CardTitle display="3">Hello, world!</CardTitle>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
            attention to featured content or information.</p>
        <hr/>
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger
            container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
        </CardBlock>
      </Jumbotron>
    </CardBlock>

    <CardHeader>Jumbotron inside CardBlock</CardHeader>
    <CardBlock>
      <Jumbotron>
        <Container fluid>
        <CardTitle display="2">Fluid Jumbotron</CardTitle>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its
            parent.</p>
        </Container>
      </Jumbotron>
    </CardBlock>
  </Card>
  );

export default UiJumbotron;
