import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Badge, Button, Card, CardBody, CardTitle, Screen } from '../../../../src/components';

const UiBadge = () => (
  <Screen
    sidenav={<Sidenav activeScreen="badges" />}
    sidenavHeader
    header="Badges"
    // tabs={[
    //   { to: '/welcome', text: 'Tab1' },
    //   { to: '#/test2', text: 'Tab2' },
    // ]}
    primaryActions={<PrimaryActions />}
    body={
      <Card>
        <CardBody>
          <h1>H1 Heading .h1 <Badge>New</Badge></h1>
          <h2>H2 Heading .h2 <Badge color="primary">New</Badge></h2>
          <h3>H3 Heading .h3 <Badge color="success" pill>New</Badge></h3>
          <h4>H4 Heading .h4 <Badge color="info">New</Badge></h4>
          <h5>H5 Heading .h5 <Badge color="danger">New</Badge></h5>
          <h6>h6 Heading .h6 <Badge pill>New</Badge></h6>

          <CardTitle tag="h4">Variations</CardTitle>
          <Badge>default</Badge>{' '}
          <Badge color="primary">primary</Badge>{' '}
          <Badge color="secondary">secondary</Badge>{' '}
          <Badge color="success">success</Badge>{' '}
          <Badge color="info">info</Badge>{' '}
          <Badge color="warning">warning</Badge>{' '}
          <Badge color="danger">danger</Badge>{' '}
          <Badge color="dark">dark</Badge>{' '}
          <Badge color="light">light</Badge>{' '}

          <CardTitle tag="h4">Pills</CardTitle>
          <Badge pill>default</Badge>{' '}
          <Badge color="primary" pill>primary</Badge>{' '}
          <Badge color="secondary" pill>seondary</Badge>{' '}
          <Badge color="success" pill>success</Badge>{' '}
          <Badge color="info" pill>info</Badge>{' '}
          <Badge color="warning" pill>warning</Badge>{' '}
          <Badge color="danger" pill>danger</Badge>{' '}
          <Badge color="dark" pill>dark</Badge>{' '}
          <Badge color="light" pill>light</Badge>{' '}

          <CardTitle tag="h4">Badge Alert</CardTitle>
          <Button outline radius="round" className="mr-3">outline <Badge color="primary" alert>3</Badge></Button>
          <Button color="info" radius="round" className="mr-3">info <Badge color="warning" alert>0</Badge></Button>
          <Button className="mr-3">inline<Badge color="danger" inline>24</Badge></Button>
          <Button className="mr-3">inline pill<Badge inline pill>24</Badge></Button>
          <Button outline color="link" radius="round" className="mr-3">link <Badge color="danger" alert>24</Badge></Button>
        </CardBody>
      </Card>
    }
  />
);

export default UiBadge;
