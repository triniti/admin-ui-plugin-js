import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Collapse, Icon, Table, Row, Col, Screen } from '../../../../src/components';
import PopoverItem from './PopoverItem';

class UiPopover extends React.Component {
  constructor(props) {
    super(props);

    this.toggleCode1 = this.toggleCode1.bind(this);

    this.state = {
      popovers: [
        {
          placement: 'left',
          text: 'Left',
        },
        {
          placement: 'top',
          text: 'Top',
        },
        {
          placement: 'bottom',
          text: 'Bottom',
        },

        {
          placement: 'right',
          text: 'Right',
        },
      ],
      collapseCode1: false,
    };
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="popovers" />}
        sidenavHeader
        header="Popovers"
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

          <Card key="popovers">
            <CardHeader>Popovers
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode1}>
              <CardBody className="pl-5 bg-light">
<pre>
<code>{`import React from 'react';
import { Tooltip } from '@triniti/admin-ui-plugin/components';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return ([
        <a href="#" id="TooltipExample">Hover Me</a>,
        <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggleTooltip}>
          Tooltip Text
        </Tooltip>,
    ]);
  }
};`}</code></pre>
              </CardBody>
            </Collapse>
            <CardBody className="text-center">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              { this.state.popovers.map((popover, i) => <PopoverItem key={i} item={popover} id={i} />)}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </CardBody>
          </Card>,
      ]}
      />
    );
  }
}

export default UiPopover;
