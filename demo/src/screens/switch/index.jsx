import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, ButtonGroup, Card, CardBody, CardHeader, CardTitle, Checkbox, Col, Collapse, Divider, Form, FormGroup, Icon, Label, Radio, Row, Screen, Switch, Table } from '../../../../src/components';


class UiSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cSelected: [],
      collapseCode1: false
    };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    this.toggleCode1 = this.toggleCode1.bind(this);
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="switch" />}
        sidenavHeader
        header="Switch"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="button0">
            <CardHeader>
              Switch Component
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
             <Collapse isOpen={this.state.collapseCode1}>
              <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
<code>{`import React from 'react';
import { Label, Switch } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
    <FormGroup inline>
      <Label for="toggler1" className="ml-4 mr-2 text-label">size="xs"</Label>
      <Switch id="toggler1" size="xs" />

      <Label for="toggler2" className="ml-4 mr-2 text-label">size="sm"</Label>
      <Switch id="toggler2" size="sm" />

      <Divider horizontal="md" className="ml-4"/>

      <Label for="toggler3" strong>Off</Label>
      <Switch id="toggler3" className="ml-2"/>
      <Label for="toggler3" strong>On</Label>

      <Divider horizontal="md" />


      <Label for="toggler4" className="ml-4 mr-2 text-label">size="md"</Label>
      <Switch id="toggler4" size="md" />

      <Label for="toggler5" className="ml-4 mr-2 text-label">size="lg"</Label>
      <Switch id="toggler5" size="lg" />

    </FormGroup>
  );
};`}</code></pre>
              </CardBody>
            </Collapse>
            <CardBody>
              <Form className="mb-3">
                <FormGroup inline>
                  <Label for="toggler1" className="ml-4 mr-2 text-label">size="xs"</Label>
                  <Switch id="toggler1" size="xs" />

                  <Label for="toggler2" className="ml-4 mr-2 text-label">default (sm)</Label>
                  <Switch id="toggler2" />

                  <Divider horizontal="md" className="ml-4"/>

                  <Label for="toggler3" strong>Off</Label>
                  <Switch id="toggler3"  size="sd" className="ml-2"/>
                  <Label for="toggler3" strong>On</Label>

                  <Divider horizontal="md" />


                  <Label for="toggler4" className="ml-4 mr-2 text-label">size="md"</Label>
                  <Switch id="toggler4" size="md" />

                  <Label for="toggler5" className="ml-4 mr-2 text-label">size="lg"</Label>
                  <Switch id="toggler5" size="lg" />

                </FormGroup>
              </Form>

              <Form>
                <FormGroup inline>
                  <Switch id="toggler1b" size="xs" label1="Disabled" label2="Enabled"/>

                  <Switch id="toggler2b" label1="Disabled" label2="Enabled" className="ml-4"/>

                  <Switch id="toggler3b" size="sd" label1="off" label2="on" className="ml-4"/>

                  <Switch id="toggler4b" size="md" label1="Disabled" label2="Enabled" className="ml-4"/>

                  <Switch id="toggler5b" size="lg" label1="Disabled" label2="Enabled" className="ml-4"/>

                </FormGroup>
              </Form>
            </CardBody>
          </Card>,

          <Card key="props1">
            <CardHeader>Switch Properties</CardHeader>
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
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
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

export default UiSwitch;
