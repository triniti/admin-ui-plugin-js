import React from 'react';
import { Badge, Button, ButtonGroup, Card, CardBody, CardTitle, Col, Row } from '../../../../src/components';

const UiBadge = () => (
  <Card>
    <CardBody spacing="lg">
      <h1>H1 Heading .h1 <Badge>New</Badge></h1>
      <h2>H2 Heading .h2 <Badge color="primary">New</Badge></h2>
      <h3>H3 Heading .h3 <Badge color="success" pill>New</Badge></h3>
      <h4>H4 Heading .h4 <Badge color="info">New</Badge></h4>
      <h5>H5 Heading .h5 <Badge color="warning">New</Badge></h5>
      <h6>h6 Heading .h6 <Badge pill>New</Badge></h6>

      <CardTitle tag="h4">Variations</CardTitle>
      <Badge>default</Badge>{' '}
      <Badge color="primary">primary</Badge>{' '}
      <Badge color="secondary">secondary</Badge>{' '}
      <Badge color="success">success</Badge>{' '}
      <Badge color="info">info</Badge>{' '}
      <Badge color="warning">warning</Badge>{' '}
      <Badge color="danger">danger</Badge>{' '}
      <Badge color="inverse">inverse</Badge>{' '}

      <CardTitle tag="h4">Pills</CardTitle>
      <Badge pill>default</Badge>{' '}
      <Badge color="primary" pill>primary</Badge>{' '}
      <Badge color="secondary" pill>seondary</Badge>{' '}
      <Badge color="success" pill>success</Badge>{' '}
      <Badge color="info" pill>info</Badge>{' '}
      <Badge color="warning" pill>warning</Badge>{' '}
      <Badge color="danger" pill>danger</Badge>{' '}
      <Badge color="inverse" pill>inverse</Badge>{' '}

      <CardTitle tag="h4">Badge Alert</CardTitle>
      <Button outline color="inverse" className={'round mr-2 mb-2 alert-wrapper'}>inverse <Badge color="primary" className={'badge-alert'}>3</Badge></Button>
      <Button color="info" className={'round mr-2 mb-2 alert-wrapper'}>info <Badge color="warning" className={'badge-alert'}>0</Badge></Button>
      <Button color="default" className={'mr-2 mb-2 alert-wrapper'}>warning <Badge color="danger" className={'badge-alert'}>24</Badge></Button>
      <Button outline color="link" className={'round mr-1 mb-2 alert-wrapper'}>link <Badge color="danger" className={'badge-alert'}>24</Badge></Button>
    </CardBody>
  </Card>
);

export default UiBadge;
