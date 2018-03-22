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
import { PopoverItem } from '@triniti/admin-ui-plugin/components';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" onClick={this.toggle}>
          Launch Popover
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
      </div>
    );
  }
}`}</code></pre>
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

          <Card key="props">
            <CardHeader>Popover Properties</CardHeader>
            <CardBody>
              <Table hover responsive size="sm">
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
                  <th scope="row">className</th>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">container</th>
                  <td>oneOfType</td>
                  <td>body</td>
                  <td>Where to inject the popper DOM node<br/>
                      ([PropTypes.string, PropTypes.func, DOMElement])</td>
                </tr>
                <tr>
                  <th scope="row">delay</th>
                  <td>oneOfType</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">disabled</th>
                  <td>bool</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">hideArrow</th>
                  <td>bool</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">innerClassName</th>
                  <td>string</td>
                  <td></td>
                  <td>Apply class to the inner-popover</td>
                </tr>
                <tr>
                  <th scope="row">isOpen</th>
                  <td>bool</td>
                  <td></td>
                  <td>Boolean to control the state of the popover</td>
                </tr>
                <tr>
                  <th scope="row">modifiers</th>
                  <td>object</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">placement</th>
                  <td>oneOf</td>
                  <td></td>
                  <td>'auto',
                      'auto-start',
                      'auto-end',
                      'top',
                      'top-start',
                      'top-end',
                      'right',
                      'right-start',
                      'right-end',
                      'bottom',
                      'bottom-start',
                      'bottom-end',
                      'left',
                      'left-start',
                      'left-end',
                </td>
                </tr>
                <tr>
                  <th scope="row">placementPrefix</th>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">target</th>
                  <td>oneOfType</td>
                  <td>*<i>Required</i></td>
                  <td>PropTypes.string,<br/>
                      PropTypes.func,<br/>
                      DOMElement, (instanceof Element)</td>
                </tr>
                <tr>
                  <th scope="row">toggle</th>
                  <td>func</td>
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

export default UiPopover;
