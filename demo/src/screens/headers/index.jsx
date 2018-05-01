import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, CardHeader, CardTitle, Divider, Screen } from '../../../../src/components';

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
      <Card key="headers1">
        <CardHeader>Headlines
          <span className="mr-auto">
            <Divider horizontal className="ml-4" />
          </span>
        </CardHeader>
        <CardBody indent>
          <h1>H1 Headine .h1</h1>
          <h2>H2 Headine .h2</h2>
          <h3>H3 Headine .h3</h3>
          <h4>H4 Headine .h4</h4>
          <h5>H5 Headine .h5</h5>
          <h6>h6 Headine .h6</h6>
          <hr />
          <p>Lorem Ipsum standard paragraph</p>
        </CardBody>

        <CardBody indent>
          <CardTitle section>Card Title Section</CardTitle>
          <CardTitle tag="h1">Card Title h1</CardTitle>
          <CardTitle tag="h2">Card Title h2</CardTitle>
          <CardTitle tag="h3">Card Title h3</CardTitle>
          <CardTitle tag="h4">Card Title h4 <span className="card-title-sm">extra top margin on h4 to separate content areas</span></CardTitle>
          <CardTitle tag="h5">Card Title h5</CardTitle>
          <CardTitle tag="h6">Card Title h6</CardTitle>

          <Divider size="sm" />

          <p className="lead">Lead paragraph tag</p>
          <p>Standard paragraph tag</p>
          <p>HR</p>
          <hr />
          <p>Divider vertical="sm"</p>
          <Divider size="sm" />
        </CardBody>

        <CardBody>
          <CardTitle tag="h5" className="justify-content-center">Divider size="sm"</CardTitle>
        </CardBody>
        <Divider size="sm" />

        <CardBody>
          <CardTitle tag="h5" className="justify-content-center">Divider size="md"</CardTitle>
        </CardBody>
        <Divider size="md" />

        <CardBody>
          <CardTitle tag="h5" className="justify-content-center">Divider size="lg"</CardTitle>
        </CardBody>
        <Divider size="lg" />

        <CardBody>
          <CardTitle tag="h5" className="justify-content-center">Dividing Line between stacked CardBodys</CardTitle>
        </CardBody>

        <CardBody>
          <Divider horizontal size="sm" className="ml-3" /> horizontal divider sm
          <Divider horizontal size="md" className="ml-3" /> horizontal divider md
          <Divider horizontal  size="lg" className="ml-3" /> horizontal divider lg
        </CardBody>

      </Card>
    }
  />
);

export default UiHeaders;
