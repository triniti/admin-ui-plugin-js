import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container,
  Jumbotron,
  Screen,
} from '../../../../src/components';
import Sidenav from '../../components/sidenav';

export default () => (
  <Screen
    header="Jumbotrons"
    sidenav={<Sidenav activeScreen="jumbotrons" />}
    sidenavHeader
    body={[
      <Card key="jumbotron1">
        <CardHeader fullWidth>Jumbotron Theme Dark</CardHeader>
        <Jumbotron theme="dark">
          <Container fluid>
            <CardTitle display="1" tag="h1">Inside Container Fluid</CardTitle>
            <p className="lead">This is a modified jumbotron that occupies the entire
              horizontal space of its parent.
            </p>
          </Container>
        </Jumbotron>
      </Card>,

      <Card key="jumbotron2">
        <CardHeader fullWidth>Jumbotron Theme Light</CardHeader>
        <Jumbotron theme="light">
          <CardBody>
            <CardTitle display="1" tag="h1">Inside CardBody</CardTitle>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its
              parent.
            </p>
          </CardBody>
        </Jumbotron>
      </Card>,

      <Card key="jumbotron3">
        <CardHeader fullWidth>Jumbotron Default inside CardBody & Container</CardHeader>
        <CardBody>
          <Jumbotron>
            <CardBody>
              <CardTitle display="3" tag="h1">Hello, world!</CardTitle>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
                attention to featured content or information.
              </p>
              <hr />
              <p>
                It uses utility classes for typgraphy and spacing to space content out
                within the larger container.
              </p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </CardBody>
          </Jumbotron>
        </CardBody>
      </Card>,

      <Card key="jumbotron4">
        <CardHeader fullWidth>Jumbotron inside Container Fluid</CardHeader>

        <Jumbotron>
          <Container fluid>
            <CardTitle display="2" tag="h1">Fluid Jumbotron</CardTitle>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its
                parent.
            </p>
          </Container>
        </Jumbotron>

      </Card>,
    ]}
  />
);
