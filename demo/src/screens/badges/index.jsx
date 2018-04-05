import React, { Component } from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Badge, Button, Card, CardBody, CardHeader, CardTitle, Collapse, Icon, Screen, Table } from '../../../../src/components';

class UiBadge extends Component {
  constructor(props) {
    super(props);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.state = {
      collapseCode1: false,
    };
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  render() {
    return (
  <Screen
    sidenav={<Sidenav activeScreen="badges" />}
    sidenavHeader
    header="Badges"
    // tabs={[
    //   { to: '/welcome', text: 'Tab1' },
    //   { to: '#/test2', text: 'Tab2' },
    // ]}
    primaryActions={<PrimaryActions />}
    body={[
      <Card key="badges">
        <CardHeader>
            Status Colors
            <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
            <Icon imgSrc="code" size="md"/>
          </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode1}>
           <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
             <code>
{`import React from 'react';
import { UiBadges } from '@triniti/admin-ui-plugin/components';

export default class Example extends React.Component {
  render() {
    return (
      <Badge>New</Badge> <Badge><Icon imgSrc="warning-outline" className="mr-2" size="sd"/>New</Badge>
      <Badge color="primary">New</Badge> <Badge color="primary"><Icon imgSrc="warning-outline" className="mr-1"/>New</Badge>
      <Badge color="success" pill>New</Badge> <Badge color="success" pill><Icon imgSrc="warning-outline" className="mr-1"/>New</Badge>
      <Badge color="info">New</Badge> <Badge color="info"><Icon imgSrc="warning-outline" className="mr-1" size="sm"/>New</Badge>
      <Badge color="danger">New</Badge> <Badge color="danger"><Icon imgSrc="warning-outline" className="mr-1" size="xs"/>New</Badge>
      <Badge pill>New</Badge> <Badge pill><Icon imgSrc="warning-outline" className="mr-1" size="xxs"/>New</Badge>

      <Badge>default</Badge>{' '}
      <Badge color="primary">primary</Badge>{' '}
      <Badge color="secondary">secondary</Badge>{' '}
      <Badge color="success">success</Badge>{' '}
      <Badge color="info">info</Badge>{' '}
      <Badge color="warning">warning</Badge>{' '}
      <Badge color="danger">danger</Badge>{' '}
      <Badge color="dark">dark</Badge>{' '}
      <Badge color="light">light</Badge>{' '}
      <Badge color="danger"><Icon imgSrc="warning-outline" size="xxs" className="mr-1"/>Danger</Badge>{' '}

      <Badge pill>default</Badge>{' '}
      <Badge color="primary" pill>primary</Badge>{' '}
      <Badge color="secondary" pill>seondary</Badge>{' '}
      <Badge color="success" pill>success</Badge>{' '}
      <Badge color="info" pill>info</Badge>{' '}
      <Badge color="warning" pill>warning</Badge>{' '}
      <Badge color="danger" pill>danger</Badge>{' '}
      <Badge color="dark" pill>dark</Badge>{' '}
      <Badge color="light" pill>light</Badge>{' '}
      <Badge color="danger" pill><Icon imgSrc="warning-outline" size="xxs" className="mr-1"/>Danger</Badge>{' '}

      <Button outline radius="round" className="mr-3">outline <Badge color="primary" alert>3</Badge></Button>
      <Button color="info" radius="round" className="mr-3">info <Badge color="warning" alert>0</Badge></Button>
      <Button className="mr-3">inline <Badge color="danger" className="ml-1">24</Badge></Button>
      <Button className="mr-3">inline pill <Badge pill className="ml-1">24</Badge></Button>
      <Button outline color="link" radius="round" className="mr-3">link <Badge color="danger" alert>24</Badge></Button>
      <Button color="hover-bg" radius="circle" className="mr-3" size="md"><Icon imgSrc="user"/><Badge color="danger" alert><Icon imgSrc="warning-outline" size="xxs"/></Badge></Button>
    );
  }
}`}
               </code>
            </pre>
          </CardBody>
        </Collapse>
        <CardBody indent>
          <h1>H1 Heading .h1 <Badge>New</Badge> <Badge><Icon imgSrc="warning-outline" className="mr-2" size="sd"/>New</Badge></h1>
          <h2>H2 Heading .h2 <Badge color="primary">New</Badge> <Badge color="primary"><Icon imgSrc="warning-outline" className="mr-1"/>New</Badge></h2>
          <h3>H3 Heading .h3 <Badge color="success" pill>New</Badge> <Badge color="success" pill><Icon imgSrc="warning-outline" className="mr-1"/>New</Badge></h3>
          <h4>H4 Heading .h4 <Badge color="info">New</Badge> <Badge color="info"><Icon imgSrc="warning-outline" className="mr-1" size="sm"/>New</Badge></h4>
          <h5>H5 Heading .h5 <Badge color="danger">New</Badge> <Badge color="danger"><Icon imgSrc="warning-outline" className="mr-1" size="xs"/>New</Badge></h5>
          <h6>h6 Heading .h6 <Badge pill>New</Badge> <Badge pill><Icon imgSrc="warning-outline" className="mr-1" size="xxs"/>New</Badge></h6>

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
          <Badge color="danger"><Icon imgSrc="warning-outline" size="xxs" className="mr-1"/>Danger</Badge>{' '}

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
          <Badge color="danger" pill><Icon imgSrc="warning-outline" size="xxs" className="mr-1"/>Danger</Badge>{' '}

          <CardTitle tag="h4">Badge Alert</CardTitle>
          <Button outline radius="round" className="mr-3">outline <Badge color="primary" alert>3</Badge></Button>
          <Button color="info" radius="round" className="mr-3">info <Badge color="warning" alert>0</Badge></Button>
          <Button className="mr-3">inline <Badge color="danger" className="ml-1">24</Badge></Button>
          <Button className="mr-3">inline pill <Badge pill className="ml-1">24</Badge></Button>
          <Button outline color="link" radius="round" className="mr-3">link <Badge color="danger" alert>24</Badge></Button>
          <Button color="hover-bg" radius="circle" className="mr-3" size="md"><Icon imgSrc="user"/><Badge color="danger" alert><Icon imgSrc="warning-outline" size="xxs"/></Badge></Button>
        </CardBody>
      </Card>,

      <Card key="props">
        <CardHeader>Badge Properties</CardHeader>
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
              <th scope="row">alert</th>
              <td>node</td>
              <td></td>
              <td>Adds class "badge-alert" which absolutley aligns badge to the upper right corner of the containing object, usually a button set to radius, circle.</td>
            </tr>
            <tr>
              <th scope="row">children</th>
              <td>node</td>
              <td></td>
              <td>Content shown inside the badge.  Usually numbers or highlight text like "new".</td>
            </tr>
            <tr>
              <th scope="row">className</th>
              <td>string</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">color</th>
              <td>string</td>
              <td>'default'</td>
              <td>Adds class "badge-$color". Set background color of badge. Text is white for all badges.</td>
            </tr>
            <tr>
              <th scope="row">pill</th>
              <td>bool</td>
              <td></td>
              <td>Adds class "badge-pill", producing a pill shaped alert with round ends.  The default style is rounded corners.</td>
            </tr>
            <tr>
              <th scope="row">tag</th>
              <td>bool</td>
              <td>'span'</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">transition</th>
              <td>bool</td>
              <td>
                ...Fade.defaultProps,
                unmountOnExit: true,
              </td>
              <td></td>
            </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

        ]}
      />
    );
  }
}

export default UiBadge;
