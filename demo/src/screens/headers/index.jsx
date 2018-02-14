import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, CardHeader, CardTitle, Container, Divider, Screen } from '../../../../src/components';

const UiHeaders = () => (
  <Screen
    sidenav={<Sidenav activeScreen="headers" />}
    sidenavHeader
    header="Headers"
  // tabs={[
  //   { to: '/welcome', text: 'Tab1' },
  //   { to: '#/test2', text: 'Tab2' },
  // ]}
    primaryActions={<PrimaryActions />}
    body={
      <Card>
        <CardBody>
          <Container fluid>
            <h1>H1 Heading .h1</h1>
            <h2>H2 Heading .h2</h2>
            <h3>H3 Heading .h3</h3>
            <h4>H4 Heading .h4</h4>
            <h5>H5 Heading .h5</h5>
            <h6>h6 Heading .h6</h6>
            <hr />
            <h1>H1 Heading .h1</h1>
          </Container>
        </CardBody>

        <CardBody>
          <Container fluid>
            <CardTitle section>Card Title Section</CardTitle>
            <CardTitle tag="h1">Card Title h1</CardTitle>
            <CardTitle tag="h2">Card Title h2</CardTitle>
            <CardTitle tag="h3">Card Title h3</CardTitle>
            <CardTitle tag="h4">Card Title h4 <span className="card-title-sm">extra top margin on h4 to separate content areas</span></CardTitle>
            <CardTitle tag="h5">Card Title h5</CardTitle>
            <CardTitle tag="h6">Card Title h6</CardTitle>

            <Divider vertical="sm" />

            <p className="lead">Lead paragraph tag</p>
            <p>Standard paragraph tag</p>
            <p>HR</p>
            <hr />
            <p>Divider vertical="sm"</p>
            <Divider vertical="sm" />
          </Container>
        </CardBody>

        <CardBody>
          <CardTitle tag="h5" className="justify-content-center">Divider vertical="sm"</CardTitle>
        </CardBody>
        <Divider vertical="sm" />

        <CardBody>
          <CardTitle tag="h5" className="justify-content-center">Divider vertical="md"</CardTitle>
        </CardBody>
        <Divider vertical="md" />

        <CardBody>
          <CardTitle tag="h5" className="justify-content-center">Divider vertical="lg"</CardTitle>
        </CardBody>
        <Divider vertical="lg" />

        <CardBody>
          <CardTitle tag="h5" className="justify-content-center">Dividing Line between stacked CardBodys</CardTitle>
        </CardBody>

        <CardBody />

      </Card>
  }
  />
);

export default UiHeaders;
