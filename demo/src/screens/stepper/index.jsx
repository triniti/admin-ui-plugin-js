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
        <CardHeader>Stepper - Three Steps</CardHeader>
        <CardBody indent>
          <Stepper steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'}] } activeStep={ 0 } />
        </CardBody>
      </Card>,

      <Card key="stepper">
        <CardHeader>Stepper - Four Steps</CardHeader>
        <CardBody indent>
          <Stepper steps={ [{title: 'Like A Dream Come True'}, {title: 'Just Wanna Be With You'}, {title: 'Its Plain To See'}, {title: 'Repeat steps 1 to 3'}] } activeStep={ 1 } />
        </CardBody>
      </Card>,

      <Card key="stepper">
        <CardHeader>Stepper - Five Steps</CardHeader>
        <CardBody indent>
          <Stepper steps={ [{title: 'Uno'}, {title: 'Dos'}, {title: 'Tres'}, {title: 'Quatro'}, {title: 'Cinco'}] } activeStep={ 2 } />
        </CardBody>
      </Card>,

      <Card key="stepper">
        <CardHeader>Stepper - Six Steps</CardHeader>
        <CardBody indent>
          <Stepper steps={ [{title: 'First'}, {title: 'Second'}, {title: 'Third'}, {title: 'Fourth'}, {title: 'Fifth'}, {title: 'Sixth'}] } activeStep={ 3 } />
        </CardBody>
      </Card>,

    ]}
  />
);

export default UiStepper;