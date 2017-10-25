import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, ButtonGroup, Card, CardBody, CardHeader, CardTitle } from '../../../../src/components';
import iconClose from '../../assets/img/svg/icons/close.svg';

const UiBreadcrumb = () => (
  <Card>
    <CardBody spacing="lg">
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
      <br/>
      <CardHeader>
        <Breadcrumb>
          <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
          <BreadcrumbItem active>Data</BreadcrumbItem>
        </Breadcrumb>
        <Button outline color="link" radius="circle">
          <img src={iconClose} alt="x" />
        </Button>
      </CardHeader>

      <CardTitle tag="h4">No List Markup</CardTitle>
      <div className="breadcrumbs pl-0">
        <Breadcrumb tag="nav">
          <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
          <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </CardBody>
  </Card>
);

export default UiBreadcrumb;
