import React from 'react';
// import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, CardTitle, Jumbotron, Screen } from '../../../../src/components';

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
    sidebar={
      <Card>
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          body
        </CardBody>
      </Card>
    }
    body={
      <Jumbotron>
        <h1>Triniti Admin UI Demos</h1>
        <p className="lead">Use the sidenav to view different examples.</p>
      </Jumbotron>
    }
  />
);
