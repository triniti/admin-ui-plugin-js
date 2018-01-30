import React from 'react';
// import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Jumbotron, Screen } from '../../../../src/components';

export default () => (
  <Screen
    sidenav={<Sidenav activeScreen="welcome" />}
    sidenavHeader
    header="Welcome"
    // primaryActions={<PrimaryActions />}
    body={
      <Jumbotron>
        <h1>Triniti Admin UI Demos</h1>
        <p className="lead">Use the sidenav to view different examples.</p>
      </Jumbotron>
    }
  />
);
