import React, { Component } from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardTitle, CardBody, CardHeader, Collapse, Icon, Table, Row, Col, Pagination, PaginationItem, PaginationLink, Screen } from '../../../../src/components';

class UiPagination extends Component {
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
    sidenav={<Sidenav activeScreen="pagination" />}
    sidenavHeader
    header="Pagination"
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
      <Card key="pagination">
            <CardHeader>Pagination
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
        <CardBody indent>
          <Pagination>
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
              1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem disabled>
              <PaginationLink href="#">
              2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">
              3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
              4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
              5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>

          <CardTitle tag="h4">Large</CardTitle>
          <Pagination size="lg">
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
              1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
              2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
              3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>

          <CardTitle tag="h4">Small</CardTitle>
          <Pagination size="sm">
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
            1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
            2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
            3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>
        </CardBody>
      </Card>,
    ]}
  />
    );
  }
}
export default UiPagination;
