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
                      <Label className="form-label-strong">Yes</Label>
                    </Radio>
                  </FormGroup>
                  <FormGroup check inline>
                    <Radio size="sm" onClick={() => this.onRadioBtnClick(11)}>
                      <Label className="form-label-strong">No</Label>
                    </Radio>
                  </FormGroup>
                  <FormGroup check inline>
                    <Radio size="sm" onClick={() => this.onRadioBtnClick(11)}>
                      <Label className="form-label-strong">Maybe</Label>
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
                    <th scope="row">children</th>
                    <td>node</td>
                    <td></td>
                    <td>Adds label content with classes 'form-check-label checkbox-label'</td>
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
                    <th scope="row">right</th>
                    <td>bool</td>
                    <td></td>
                    <td>Adds class 'radio-label-right' which changes flex order so that input is on the right of the label</td>
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
                    <td>'radio'</td>
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
