import React, { Component } from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, CardHeader, Button, ButtonGroup, ButtonToolbar, Collapse, Icon, Screen, Table } from '../../../../src/components';

class UiButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.state = { collapseCode1: false };
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }


  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="button-groups" />}
        sidenavHeader
        header="Button Groups"
        // tabs={[
        //   { to: '/welcome', text: 'Tab1' },
        //   { to: '#/test2', text: 'Tab2' },
        // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="props">
            <CardHeader>Button Group Properties</CardHeader>
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
                  <th scope="row">'aria-label'</th>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">className</th>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">role</th>
                  <td>string</td>
                  <td>group</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">size</th>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">tag</th>
                  <td>string</td>
                  <td>'div'</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">vertical</th>
                  <td>bool</td>
                  <td></td>
                  <td>Stacks buttons in vertical alignment</td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="button-groups">
            <CardHeader>Button Groups
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode1}>
              <CardBody className="pl-5 bg-light">
<pre>
<code>{`import React from 'react';
import { ButtonGroup, Button } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
    <ButtonGroup>
      <Button outline>1</Button>
      <Button outline>2</Button>
      <Button outline>3</Button>
      <Button outline>4</Button>
    </ButtonGroup>
  );
};`}</code></pre>
              </CardBody>
            </Collapse>
            <CardBody indent>
              <ButtonGroup>
                <Button outline>1</Button>
                <Button outline>2</Button>
                <Button outline>3</Button>
                <Button outline>4</Button>
              </ButtonGroup>
            </CardBody>
            <CardBody indent>
              <ButtonGroup vertical>
                <Button color="primary">5</Button>
                <Button color="primary">6</Button>
                <Button color="primary">7</Button>
              </ButtonGroup>
            </CardBody>
          </Card>,
       ]}
      />
    );
  }
}


export default UiButtonGroup;
