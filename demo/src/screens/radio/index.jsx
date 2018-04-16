import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Collapse, Form, FormGroup, Icon, Label, Radio, Row, Screen, Table } from '../../../../src/components';

class UiRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseCode1: false
    };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.toggleCode1 = this.toggleCode1.bind(this);
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="radio" />}
        sidenavHeader
        header="Radio"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="button0">
            <CardHeader>
            Radio Component
              <Form>
                <FormGroup inline>
                  <FormGroup check inline>
                    <Radio size="sm" onClick={() => this.onRadioBtnClick(11)}>
                      <Label strong>Yes</Label>
                    </Radio>
                  </FormGroup>
                  <FormGroup check inline>
                    <Radio size="sm" onClick={() => this.onRadioBtnClick(11)}>
                      <Label strong>No</Label>
                    </Radio>
                  </FormGroup>
                  <FormGroup check inline>
                    <Radio size="sm" onClick={() => this.onRadioBtnClick(11)}>
                      <Label strong>Maybe</Label>
                    </Radio>
                  </FormGroup>
                  <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                    <Icon imgSrc="code" size="md"/>
                  </Button>
                </FormGroup>
              </Form>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode1}>
              <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
<code>{`import React from 'react';
import { Label, Radio } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
    <FormGroup inline>
      <FormGroup check inline>
        <Radio size="xs">size="xs"</Radio>
      </FormGroup>

      <FormGroup check inline>
        <Radio>default or size="sm"</Radio>
      </FormGroup>

      <FormGroup check inline>
        <Radio size="sd">size="sd"</Radio>
      </FormGroup>

      <FormGroup check inline>
        <Radio size="md">size="md"</Radio>
      </FormGroup>

      <FormGroup check inline>
        <Radio size="lg">size="lg"</Radio>
      </FormGroup>

      <FormGroup check inline>
        <Radio disabled>disabled</Radio>
      </FormGroup>

      <FormGroup check inline>
        <Radio disabled checked>disabled checked</Radio>
      </FormGroup>

    </FormGroup>
  );
};`}</code></pre>
              </CardBody>
            </Collapse>
            <CardBody>
              <Form>
                <FormGroup inline>
                  <FormGroup check inline>
                    <Radio size="xs">size="xs"</Radio>
                  </FormGroup>

                  <FormGroup check inline>
                    <Radio>default or size="sm"</Radio>
                  </FormGroup>

                  <FormGroup check inline>
                    <Radio size="sd">size="sd"</Radio>
                  </FormGroup>

                  <FormGroup check inline>
                    <Radio size="md">size="md"</Radio>
                  </FormGroup>

                  <FormGroup check inline>
                    <Radio size="lg">size="lg"</Radio>
                  </FormGroup>

                  <FormGroup check inline>
                    <Radio disabled>disabled</Radio>
                  </FormGroup>

                  <FormGroup check inline>
                    <Radio disabled checked>disabled checked</Radio>
                  </FormGroup>

                </FormGroup>
              </Form>
            </CardBody>
          </Card>,

          <Card key="props1">
            <CardHeader>Radio Properties</CardHeader>
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

export default UiRadio;
