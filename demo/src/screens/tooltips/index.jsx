import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Collapse, Icon, Screen, Table, Tooltip, UncontrolledTooltip } from '../../../../src/components';
import TooltipItem from './TooltipItem';

export default class TooltipsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.toggleCode2 = this.toggleCode2.bind(this);

    this.state = {
      tooltips: [
        {
          placement: 'top',
          text: 'Top',
        },
        {
          placement: 'bottom',
          text: 'Bottom',
        },
        {
          placement: 'left',
          text: 'Left',
        },
        {
          placement: 'right',
          text: 'Right',
        },
      ],
      tooltipOpen: false,
      collapseCode1: false,
      collapseCode2: false,
    };
  }

  toggleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
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
        header="Tooltips"
        sidenav={<Sidenav activeScreen="tooltips" />}
        sidenavHeader
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="props">
            <CardHeader>Tooltip Properties</CardHeader>
            <CardBody className="pt-3">
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
                  <th scope="row">autohide</th>
                  <td>bool</td>
                  <td>true</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">className</th>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">container</th>
                  <td>oneOfType</td>
                  <td></td>
                  <td>
                    Where to inject the popper DOM node, default to body<br/>
                    PropTypes.string,<br/>
                    PropTypes.func,<br/>
                    DOMElement,
                  </td>
                </tr>
                <tr>
                  <th scope="row">delay</th>
                  <td>oneOfType</td>
                  <td>show: 0, hide: 250</td>
                  <td>
                    Optionally override show/hide delays <br/>
                    {`PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number })`},<br/>
                    PropTypes.number
                  </td>
                </tr>
                <tr>
                  <th scope="row">disabled</th>
                  <td>bool</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">innerClassName</th>
                  <td>string</td>
                  <td></td>
                  <td>Apply class to the inner-tooltip</td>
                </tr>
                <tr>
                  <th scope="row">isOpen</th>
                  <td>bool</td>
                  <td>false</td>
                  <td>Boolean to control the state of the tooltip</td>
                </tr>
                <tr>
                  <th scope="row">placement</th>
                  <td>oneOf(PopperPlacements)</td>
                  <td>top</td>
                  <td>'auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'right', 'right-start',
                      'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'
                  </td>
                </tr>
                <tr>
                  <th scope="row">placementPrefix</th>
                  <td>string</td>
                  <td nowrap>'bs-tooltip'</td>
                  <td>Adds ability to style using a different class.</td>
                </tr>
                <tr>
                  <th scope="row">target</th>
                  <td>oneOfType</td>
                  <td>*<i>Required</i></td>
                  <td>
                    Target element or element ID, popover is attached to this element<br/>
                    PropTypes.string,<br/>
                    PropTypes.func,<br/>
                    DOMElement,
                   </td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="tooltips">
            <CardHeader>Tooltip
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode1}>
              <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-2">
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
            <CardBody indent>
              <a href="#" id="TooltipExample">Hover Me to See Tooltip</a>
              <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggleTooltip}>
                Tooltip Text
              </Tooltip>
            </CardBody>
            <CardBody indent>
                {this.state.tooltips.map((tooltip, i) => (
                  <TooltipItem key={tooltip.placement} item={tooltip} id={i} />
                ))}
            </CardBody>
          </Card>,

          <Card key="uncontrolledtooltip">
            <CardHeader>UncontrolledTooltip
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode2} active={this.state.collapseCode2}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode2}>
              <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-2">
<code>{`import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';

export default function Example() {
    return (
        <a href="#" id="UncontrolledTooltipExample">Hover Me to See UncontrolledTooltip</a>,
        <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
          UncontrolledTooltip Text
        </UncontrolledTooltip>,
    );
}`}</code></pre>
              </CardBody>
            </Collapse>
            <CardBody indent>
              <a href="#" id="UncontrolledTooltipExample">Hover Me to See UncontrolledTooltip</a>
              <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
                UncontrolledTooltip Text
              </UncontrolledTooltip>
            </CardBody>
          </Card>,
        ]}
      />
    );
  }
}
