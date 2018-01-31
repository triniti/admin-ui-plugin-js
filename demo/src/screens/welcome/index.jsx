import React from 'react';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, CardHeader, CardTitle, Jumbotron, Screen } from '../../../../src/components';

export default () => (
  <Screen
    sidenav={<Sidenav activeScreen="welcome" />}
    sidenavHeader
    header="Welcome"
    sidebar={[
      <Card key="card1">
        <CardHeader>Sample Card</CardHeader>
        <CardBody>
          <CardTitle section>Card Title</CardTitle>
          <p>Card text in p tag.</p>
        </CardBody>
      </Card>,
      <Card key="card2">
        <CardHeader>Another Card</CardHeader>
        <CardBody>
          <CardTitle section>Section Title</CardTitle>
          Moar text.
        </CardBody>
      </Card>,
    ]}
    body={
      <Jumbotron>
        <Card body>
          <CardTitle tag="h1" display="2">Triniti Admin UI Demos</CardTitle>
          <p className="lead">Use the sidenav to view different examples.</p>
        </Card>
      </Jumbotron>
    }
  />
);
