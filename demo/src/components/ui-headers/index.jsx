import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Divider, MainContent } from '../../../../src/components';

const UiHeaders = () => (
  <MainContent>
  <Card>
    <CardBody spacing="lg">
      <h1>H1 Heading .h1</h1>
      <h2>H2 Heading .h2</h2>
      <h3>H3 Heading .h3</h3>
      <h4>H4 Heading .h4</h4>
      <h5>H5 Heading .h5</h5>
      <h6>h6 Heading .h6</h6>
      <Divider />
      <h1>H1 Heading .h1</h1>
    </CardBody>

    <CardHeader>Card Header</CardHeader>

    <CardHeader inset>Card Header - inset</CardHeader>

    <CardHeader spacing="lg">Card Header - spacing="lg"</CardHeader>

    <CardHeader spacing="lg" inset>Card Header - spacing="lg" inset</CardHeader>

    <CardBody spacing="lg">
      <CardTitle tag="h1">Card Title h1</CardTitle>
      <CardTitle tag="h2">Card Title h2</CardTitle>
      <CardTitle tag="h3">Card Title h3</CardTitle>
      <CardTitle tag="h4">Card Title h4 <span className="card-title-sm">extra top margin on h4 to separate content areas</span></CardTitle>
      <CardTitle tag="h5">Card Title h5</CardTitle>
      <CardTitle tag="h6">Card Title h6</CardTitle>
      <p>Standard paragraph tag</p>
      <p>Below is a standard hr tag</p>
      <hr />
      <p>Below is the <strong>Divider</strong> component with size prop</p>

      <CardTitle tag="h5">Divider size="sm"</CardTitle>
      <Divider size="sm" />


      <CardTitle tag="h5">Divider, defaults to size="md"</CardTitle>
      <Divider />

      <CardTitle tag="h5">Divider size="lg"</CardTitle>
      <Divider size="lg" />

      <h5>Card Header with no title, must be outside CardBody to be full width</h5>
    </CardBody>


    <CardHeader />
    <br />
    <CardHeader spacing="lg" inset>Dividers directly inside Card but outside CardBody</CardHeader>
    <hr />

    <CardBody spacing="lg">
      <CardTitle tag="h5">Divider size="sm"</CardTitle>
    </CardBody>
    <Divider size="sm" />

    <CardBody spacing="lg">
      <CardTitle tag="h5">Divider, defaults to size="md"</CardTitle>
    </CardBody>
    <Divider />

    <CardBody spacing="lg">
      <CardTitle tag="h5">Divider size="lg"</CardTitle>
    </CardBody>
    <Divider size="lg" />

    <CardBody spacing="lg">
      <CardTitle tag="h5">Dividing Line between stacked CardBodys</CardTitle>
    </CardBody>

    <CardBody spacing="lg" />

  </Card>
  </MainContent>
);

export default UiHeaders;
