import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import InputSelectField from './inputselect';
import MultiSelectField from './multiselect';
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Icon, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Screen, Select } from '../../../../src/components';

class UiSelect extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: '',
    }
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="select" />}
        sidenavHeader
        header="Select"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="select1">
            <CardHeader>Select</CardHeader>
            <CardBody indent>
              <MultiSelectField />
            </CardBody>
          </Card>,

          <Card key="select2">
            <CardHeader>Select Styles</CardHeader>
            <CardBody indent>
              <Label>Input Group & size="sm"</Label>
              <InputGroup size="sm">
                <InputGroupAddon addonType="prepend"><Button color="secondary"><Icon imgSrc="search" size="sm" className="mx-1"/></Button></InputGroupAddon>
                <InputGroupAddon addonType="append" className="flex-grow-1"><InputSelectField /></InputGroupAddon>
              </InputGroup>
            </CardBody>
            <CardBody indent>
              <Label>Input Group & size="lg"</Label>
              <InputGroup size="lg">
                <InputGroupAddon addonType="prepend" className="flex-grow-1 d-block"><InputSelectField /></InputGroupAddon>
                <InputGroupAddon addonType="append"><Button outline><Icon imgSrc="search" size="md"/></Button></InputGroupAddon>
              </InputGroup>
            </CardBody>
            <CardBody indent>
              <Label>Inline</Label>
              <Form inline>
                <FormGroup style={{minWidth:'170px'}}>
                  <Label for="exampleEmail4" hidden>Email</Label>
                  <InputSelectField radius="round"/>
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword4" hidden>Password</Label>
                  <Input
                  type="password"
                  name="password"
                  id="examplePassword4"
                  placeholder="Password"
                />
                </FormGroup>

                <Button outline color="secondary">Submit</Button>
              </Form>
            </CardBody>
          </Card>,

          <Card key="props">
            <CardHeader>Select Properties</CardHeader>
            <CardBody>
              <p>This component relies on the <a href="https://github.com/JedWatson/react-select" target="_blank"><strong>React Select</strong></a> component.</p>
              <ul>
                <li><a href="https://github.com/JedWatson/react-select" target="_blank">Code and Docs on GitHub</a></li>
                <li><a href="http://jedwatson.github.io/react-select/" target="_blank">Live Demos and Examples</a></li>
              </ul>
            </CardBody>
          </Card>,

        ]}
      />
    );
  }
}

export default UiSelect;