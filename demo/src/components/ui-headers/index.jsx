import React from 'react';
import { Col, Card, CardBlock, CardHeader, CardTitle, Divider } from '../../../../src/components';

const UiHeaders = () => (
  <Card>
    <CardBlock>
      <h1>H1 Heading .h1</h1>
      <h2>H2 Heading .h2</h2>
      <h3>H3 Heading .h3</h3>
      <h4>H4 Heading .h4</h4>
      <h5>H5 Heading .h5</h5>
      <h6>h6 Heading .h6</h6>
      <Divider />
      <h1>H1 Heading .h1</h1>
    </CardBlock>
    <CardHeader>Card Header</CardHeader>

    <CardBlock>
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

      <h5>Divider size="sm"</h5>
      <Divider size="sm" />


      <h5>Divider, defaults to size="md"</h5>
      <Divider />

      <h5>Divider size="lg"</h5>
      <Divider size="lg" />

      <h5>Card Header with no title, must be outside CardBlock to be full width</h5>
    </CardBlock>


    <CardHeader />
    <br/>
    <CardHeader>Dividers directly inside Card but outside CardBlock</CardHeader>
    <hr />

    <h5 className="p-4">Divider size="sm"</h5>
    <Divider size="sm" />

    <h5 className="p-4">Divider, defaults to size="md"</h5>
    <Divider />

    <h5 className="p-4">Divider size="lg"</h5>
    <Divider size="lg" />

    <CardBlock>
    <h5 className="p-4">Dividing Line between stacked CardBlocks</h5>
    </CardBlock>
    <CardBlock/>

  </Card>
);

export default UiHeaders;
