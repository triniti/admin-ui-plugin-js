import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, CardTitle, Checkbox, Col, Collapse, Form, FormGroup, Icon, Label, Row, Screen, Table } from '../../../../src/components';

class UiCheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseCode1: false
    };

    this.toggleCode1 = this.toggleCode1.bind(this);
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="checkbox" />}
        sidenavHeader
        header="Checkbox"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="button0">
            <CardHeader>
            Checkbox Component
              <Form>
                <FormGroup check inline>
                  <Checkbox size="sm" round>Maybe</Checkbox>
                </FormGroup>
                <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                  <Icon imgSrc="code" size="md"/>
                </Button>
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
        <Checkbox size="xs">size="xs"</Checkbox>
      </FormGroup>

      <FormGroup check inline>
        <Checkbox>default or size="sm"</Checkbox>
      </FormGroup>

      <FormGroup check inline>
        <Checkbox size="sd">size="sd"</Checkbox>
      </FormGroup>

      <FormGroup check inline>
        <Checkbox size="md">size="md"</Checkbox>
      </FormGroup>

      <FormGroup check inline>
        <Checkbox size="lg">size="lg"</Checkbox>
      </FormGroup>

      <FormGroup check inline>
        <Checkbox disabled>disabled</Checkbox>
      </FormGroup>

      <FormGroup check inline>
        <Checkbox disabled checked>disabled checked</Checkbox>
      </FormGroup>

      <FormGroup check inline>
        <Checkbox round>round</Checkbox>
      </FormGroup>

      <FormGroup check inline>
        <Checkbox right>right</Checkbox>
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
                    <Checkbox size="xs">size="xs"</Checkbox>
                  </FormGroup>

                  <FormGroup check inline>
                    <Checkbox>default or size="sm"</Checkbox>
                  </FormGroup>

                  <FormGroup check inline>
                    <Checkbox size="sd">size="sd"</Checkbox>
                  </FormGroup>

                  <FormGroup check inline>
                    <Checkbox size="md">size="md"</Checkbox>
                  </FormGroup>

                  <FormGroup check inline>
                    <Checkbox size="lg">size="lg"</Checkbox>
                  </FormGroup>

                  <FormGroup check inline>
                    <Checkbox disabled>disabled</Checkbox>
                  </FormGroup>

                  <FormGroup check inline>
                    <Checkbox disabled checked>disabled checked</Checkbox>
                  </FormGroup>

                  <FormGroup check inline>
                    <Checkbox round>round</Checkbox>
                  </FormGroup>

                  <FormGroup check inline>
                    <Checkbox right>right</Checkbox>
                  </FormGroup>

                </FormGroup>
              </Form>
              <hr/>
              <Checkbox id="showText" className="mr-3"><Label tag="span">Label</Label></Checkbox>
              <Checkbox id="showText"><Label tag="span" className="form-label-strong">Label Strong</Label></Checkbox>

              <hr/>
              <Label check>
                <Checkbox id="showText" />
                Deprecated
              </Label>

            </CardBody>
          </Card>,

          <Card key="props1">
            <CardHeader>Checkbox Properties</CardHeader>
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

export default UiCheckBox;
