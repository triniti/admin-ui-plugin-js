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
          <CardTitle section>Card Title</CardTitle>
          {'Matt, I think card header should be used as the header rather than <CardTitle>.' +
           'There will be use cases where we want a title in addition to a header.' +
           'Visually it may look how you have it here, but <CardHeader> should be the header.' +
           'We will need to visually separate multiple cards.'}
        </CardBody>
      </Card>,
      <Card key="card2">
        <CardHeader>Another Card</CardHeader>
        <CardBody>
          <CardTitle section>Section Title</CardTitle>
          Moar text. (todo: test with tall sidebar)
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
