import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Collapse, Icon, Screen, Table } from '../../../../src/components';
import CarouselExample from './carousel';


class UiCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapseCode1: false,
    };

    this.toggleCode1 = this.toggleCode1.bind(this);
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="carousel" />}
        sidenavHeader
        header="Carousel"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="button0">
            <CardHeader>
              Carousel Component
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md" />
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode1}>
              <CardBody className="pl-0 pr-0 bg-light">
                <pre className="pl-5 pr-3">
                  <code>{`import React from 'react';
import { Label, Switch } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (

  );
};`}
                  </code>
                </pre>
              </CardBody>
            </Collapse>
            <CardBody>
              <CarouselExample />
            </CardBody>
          </Card>,

          <Card key="props1">
            <CardHeader>Carousel Properties</CardHeader>
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
                    <th scope="row">children</th>
                    <td>array</td>
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
                    <th scope="row">disabled</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">id</th>
                    <td>string</td>
                    <td></td>
                    <td>*isRequired</td>
                  </tr>
                  <tr>
                    <th scope="row">label1</th>
                    <td>string</td>
                    <td></td>
                    <td>Inactive text that appears inside a Switch component</td>
                  </tr>
                  <tr>
                    <th scope="row">label2</th>
                    <td>string</td>
                    <td></td>
                    <td>Active text that appears inside a Switch component</td>
                  </tr>
                  <tr>
                    <th scope="row">size</th>
                    <td>string</td>
                    <td></td>
                    <td>'xs', 'sm', 'sd', 'md', 'lg'</td>
                  </tr>
                  <tr>
                    <th scope="row">type</th>
                    <td>string</td>
                    <td>'checkbox'</td>
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

export default UiCarousel;
