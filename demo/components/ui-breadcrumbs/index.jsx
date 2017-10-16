import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, ButtonGroup, Card, CardBlock, CardTitle, iconClose } from '../../../src/components';

const UiBreadcrumb = () => (
  <Card>
    <CardBlock>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
      <br/>
      <Card>
        <div className="breadcrumbs">
          <Breadcrumb>
            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
            <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
            <BreadcrumbItem active>Data</BreadcrumbItem>
          </Breadcrumb>
          <Button outline color="link" className={'rounded-circle mr-2'}>
            <img src={iconClose} alt="x" />
          </Button>
        </div>
      </Card>

      <CardTitle tag="h4"><span>No List Markup</span>
        <ButtonGroup size="sm">
          <Button outline color="default">5</Button>
          <Button outline color="default">6</Button>
          <Button outline color="default">7</Button>
        </ButtonGroup>
      </CardTitle>
      <div className="breadcrumbs pl-0">
        <Breadcrumb tag="nav">
          <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
          <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </CardBlock>
  </Card>
);

export default UiBreadcrumb;
