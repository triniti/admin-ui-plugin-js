import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, CardHeader, Icon, Screen, Stepper } from '../../../../src/components';

const UiStepper = () => (
  <Screen
    sidenav={<Sidenav activeScreen="stepper" />}
    sidenavHeader
    header="Stepper"
  // tabs={[
  //   { to: '/welcome', text: 'Tab1' },
  //   { to: '#/test2', text: 'Tab2' },
  // ]}
    primaryActions={<PrimaryActions />}
    body={[
      <Card key="stepper">
        <CardHeader>Stepper</CardHeader>
        <CardBody indent>
          <Stepper steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'}, {title: 'Step Four'}] } activeStep={ 1 } />
        </CardBody>
      </Card>,

    ]}
  />
);

export default UiStepper;