import React from 'react';
// import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, CardHeader, CardTitle, Jumbotron, Screen } from '../../../../src/components';

export default () => (
  <Screen
    sidenav={<Sidenav activeScreen="welcome" />}
    sidenavHeader
    header="Welcome"
    // tabs={[
    //   { to: '/welcome', text: 'Tab1' },
    //   { to: '#/test2', text: 'Tab2' },
    // ]}
    // primaryActions={<PrimaryActions />}
    sidebar={[
      <Card key="card2">
        <CardHeader>Sample Card</CardHeader>
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <p>card body text in p tag.</p>
        </CardBody>
      </Card>,
      <Card key="card2">
        <CardHeader>Another Card</CardHeader>
        <CardBody>card body text.</CardBody>
      </Card>,
    ]}
    body={
      <Jumbotron>
        <Card body>
          <h1>Triniti Admin UI Demos</h1>
          <p className="lead">Use the sidenav to view different examples.</p>
        </Card>
      </Jumbotron>
    }
  />
);
