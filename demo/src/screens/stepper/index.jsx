import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Collapse, Icon, Screen, Stepper, Table } from '../../../../src/components';

class UiStepper extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.toggleCode2 = this.toggleCode2.bind(this);
    this.toggleCode3 = this.toggleCode3.bind(this);
    this.toggleCode4 = this.toggleCode4.bind(this);
    this.toggleCode5 = this.toggleCode5.bind(this);
    this.toggleCode6 = this.toggleCode6.bind(this);
    this.state = {
      collapseCode1: false,
      collapseCode2: false,
      collapseCode3: false,
      collapseCode4: false,
      collapseCode5: false,
      collapseCode6: false,
    };
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  toggleCode2() {
    this.setState({ collapseCode2: !this.state.collapseCode2 });
  }

  toggleCode3() {
    this.setState({ collapseCode3: !this.state.collapseCode3 });
  }

  toggleCode4() {
    this.setState({ collapseCode4: !this.state.collapseCode4 });
  }

  toggleCode5() {
    this.setState({ collapseCode5: !this.state.collapseCode5 });
  }

  toggleCode6() {
    this.setState({ collapseCode6: !this.state.collapseCode6 });
  }

  render() {
    return (
  <Screen
    sidenav={<Sidenav activeScreen="stepper" />}
    sidenavHeader
    header="Stepper"
  // tabs={[
  //   { to: '/welcome', text: 'Tab1' },
  //   { to: '#/test2', text: 'Tab2' },
  // ]}
    primaryActions={<PrimaryActions />}
    body={[
      <Card key="stepper">
        <CardHeader>
          Stepper - Three Steps
          <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
            <Icon imgSrc="code" size="md"/>
          </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode1}>
           <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
             <code>
{`import React from 'react';
import { UiStepper } from '@triniti/admin-ui-plugin/components';

export default class Example extends React.Component {
  render() {
    return (
      <Stepper steps={ [{title: 'Role Id'}, {title: 'Allowed Permissions'}, {title: 'Denied Permissions'}] } activeStep={ 1 } />
    );
  }
}`}
               </code>
            </pre>
          </CardBody>
        </Collapse>
        <CardBody indent>
          <Stepper steps={ [{title: 'Role Id'}, {title: 'Allowed Permissions'}, {title: 'Denied Permissions'}] } activeStep={ 1 } />
        </CardBody>
      </Card>,

      <Card key="stepper">
        <CardHeader>
          Stepper - Four Steps
          <Button radius="circle" color="hover-bg" onClick={this.toggleCode2} active={this.state.collapseCode2}>
            <Icon imgSrc="code" size="md"/>
          </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode2}>
           <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
             <code>
{`import React from 'react';
import { UiStepper } from '@triniti/admin-ui-plugin/components';

export default class Example extends React.Component {
  render() {
    return (
      <Stepper steps={ [{title: 'Like A Dream Come True'}, {title: 'Just Wanna Be With You'}, {title: 'Its Plain To See'}, {title: 'Repeat steps 1 to 3'}] } activeStep={ 1 } />
    );
  }
}`}
               </code>
            </pre>
          </CardBody>
        </Collapse>
        <CardBody indent>
          <Stepper steps={ [{title: 'Like A Dream Come True'}, {title: 'Just Wanna Be With You'}, {title: 'Its Plain To See'}, {title: 'Repeat steps 1 to 3'}] } activeStep={ 1 } />
        </CardBody>
      </Card>,

      <Card key="stepper">
        <CardHeader>
          Stepper - Five Steps
        <Button radius="circle" color="hover-bg" onClick={this.toggleCode3} active={this.state.collapseCode3}>
            <Icon imgSrc="code" size="md"/>
          </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode3}>
           <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
             <code>
{`import React from 'react';
import { UiStepper } from '@triniti/admin-ui-plugin/components';

export default class Example extends React.Component {
  render() {
    return (
      <Stepper steps={ [{title: 'Uno'}, {title: 'Dos'}, {title: 'Tres'}, {title: 'Quatro'}, {title: 'Cinco'}] } activeStep={ 2 } />
    );
  }
}`}
               </code>
            </pre>
          </CardBody>
        </Collapse>
        <CardBody indent>
          <Stepper steps={ [{title: 'Uno'}, {title: 'Dos'}, {title: 'Tres'}, {title: 'Quatro'}, {title: 'Cinco'}] } activeStep={ 2 } />
        </CardBody>
      </Card>,

      <Card key="stepper">
        <CardHeader>
          Stepper - Six Steps
        <Button radius="circle" color="hover-bg" onClick={this.toggleCode4} active={this.state.collapseCode4}>
            <Icon imgSrc="code" size="md"/>
          </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode4}>
           <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
             <code>
{`import React from 'react';
import { UiStepper } from '@triniti/admin-ui-plugin/components';

export default class Example extends React.Component {
  render() {
    return (
      <Stepper steps={ [{title: 'First'}, {title: 'Second'}, {title: 'Third'}, {title: 'Fourth'}, {title: 'Fifth'}, {title: 'Sixth'}] } activeStep={ 3 } />
    );
  }
}`}
               </code>
            </pre>
          </CardBody>
        </Collapse>
        <CardBody indent>
          <Stepper steps={ [{title: 'First'}, {title: 'Second'}, {title: 'Third'}, {title: 'Fourth'}, {title: 'Fifth'}, {title: 'Sixth'}] } activeStep={ 3 } />
        </CardBody>
      </Card>,

      <Card key="props">
        <CardHeader>Stepper Properties</CardHeader>
        <CardBody>
          <p>This component relies on the <a href="https://github.com/mu29/react-stepper" target="_blank"><strong>React Stepper</strong></a> component.</p>
        </CardBody>
      </Card>,

        ]}
  />
    );
  }
}

export default UiStepper;