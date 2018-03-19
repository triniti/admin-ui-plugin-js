import React, { Component } from 'react';
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
  Collapse,
  Icon,
  Screen,
  Table,
} from '../../../../src/components';

class UiBreadcrumb extends Component {
  constructor(props) {
    super(props);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.toggleCode2 = this.toggleCode2.bind(this);
    this.state = {
      collapseCode1: false,
      collapseCode2: false
    };
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  toggleCode2() {
    this.setState({ collapseCode2: !this.state.collapseCode2 });
  }


  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="breadcrumbs" />}
        sidenavHeader
        header="Breadcrumbs"
        breadcrumbs={[
          { to: '/', text: 'Demos' },
          { text: 'Breadcrumbs' },
        ]}
        // tabs={[
        //   { to: '/welcome', text: 'Tab1' },
        //   { to: '#/test2', text: 'Tab2' },
        // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="props1">
            <CardHeader>Breadcrumb Properties</CardHeader>
            <CardBody>
              <Table hover responsive>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">tag</th>
                  <td>bool</td>
                  <td>'ol'</td>
                  <td>For "No List Markup" tag="nav".</td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props2">
            <CardHeader>BreadcrumbItem Properties</CardHeader>
            <CardBody>
              <Table hover responsive>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">tag</th>
                  <td>bool</td>
                  <td>'li'</td>
                  <td>For "No List Markup" tag="a" and include href inside component tag.</td>
                </tr>
                <tr>
                  <th scope="row">active</th>
                  <td>bool</td>
                  <td></td>
                  <td>Adds "active" class to show active item. For "No List Markup" tag="span".</td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="breadcrumbs1">
            <CardHeader>
              <Breadcrumb>
                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
              </Breadcrumb>
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode1}>
              <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-2">
<code>{`import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
    <Breadcrumb>
      <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
      <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>
  );
};`}</code></pre>
              </CardBody>
            </Collapse>
            <CardBody>
              <Breadcrumb>
                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
              </Breadcrumb>
            </CardBody>
          </Card>,

          <Card key="breadcrumbs2">
            <CardHeader>
              No List Markup
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode2} active={this.state.collapseCode2}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode2}>
              <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-2">
<code>{`import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
    <Breadcrumb tag="nav">
      <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
      <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
      <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
      <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
    </Breadcrumb>
  );
};`}</code></pre>
              </CardBody>
            </Collapse>
            <CardBody>
              <Breadcrumb tag="nav">
                <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
                <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
              </Breadcrumb>
            </CardBody>
          </Card>,
        ]}
      />
    );
  }
}

export default UiBreadcrumb;
