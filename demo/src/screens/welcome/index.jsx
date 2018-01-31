import React from 'react';
// import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardHeader, CardBody, Jumbotron, Screen } from '../../../../src/components';

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
        <CardHeader>Sidebar Card</CardHeader>
        <CardBody>Card Body</CardBody>
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
