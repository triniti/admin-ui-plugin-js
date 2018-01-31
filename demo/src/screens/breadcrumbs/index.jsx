import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Screen,
} from '../../../../src/components';
import iconClose from '../../assets/img/svg/icons/close.svg';

const UiBreadcrumb = () => (
  <Screen
    sidenav={<Sidenav activeScreen="breadcrumbs" />}
    sidenavHeader
    header="Breadcrumbs"
    // tabs={[
    //   { to: '/welcome', text: 'Tab1' },
    //   { to: '#/test2', text: 'Tab2' },
    // ]}
    primaryActions={<PrimaryActions />}
    body={
      <Card>
        <CardHeader fullWidth>
          <Breadcrumb>
            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
            <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
            <BreadcrumbItem active>Data</BreadcrumbItem>
          </Breadcrumb>
          <Button outline color="link" radius="circle">
            <img src={iconClose} alt="x" />
          </Button>
        </CardHeader>
        <CardBody>
          <Breadcrumb>
            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
            <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
            <BreadcrumbItem active>Data</BreadcrumbItem>
          </Breadcrumb>
          <br />
          <br />
          <br />
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
    }
  />
);

export default UiBreadcrumb;
