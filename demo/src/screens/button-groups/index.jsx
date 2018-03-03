import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, Button, ButtonGroup, ButtonToolbar, Screen } from '../../../../src/components';

const UiButtonGroup = () => (
  <Screen
    sidenav={<Sidenav activeScreen="button-groups" />}
    sidenavHeader
    header="Button Groups"
    // tabs={[
    //   { to: '/welcome', text: 'Tab1' },
    //   { to: '#/test2', text: 'Tab2' },
    // ]}
    primaryActions={<PrimaryActions />}
    body={
      <Card>
        <CardBody indent>
          <ButtonToolbar>
            <ButtonGroup className="mr-3">
              <Button outline>1</Button>
              <Button outline>2</Button>
              <Button outline>3</Button>
              <Button outline>4</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-3">
              <Button>5</Button>
              <Button>6</Button>
              <Button>7</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button color="primary">8</Button>
              <Button color="primary">9</Button>
              <Button color="primary">10</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </CardBody>
      </Card>
   }
  />
);


export default UiButtonGroup;
