import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import AsyncSelectField from './AsyncSelect';
import InputSelectField from './InputSelect';
import MultiSelectField from './MultiSelect';
import SelectWithRefs from './SelectWithRefs';
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Icon, Input, InputGroup, InputGroupAddon, Label, Screen } from '../../../../src/components';

export default () => (
  <Screen
    sidenav={<Sidenav activeScreen="select" />}
    sidenavHeader
    header="Select"
    primaryActions={<PrimaryActions />}
    body={[
      <Card key="select1">
        <CardHeader>Select</CardHeader>
        <CardBody indent>
          <MultiSelectField />
        </CardBody>
      </Card>,

      <Card key="select2">
        <CardHeader>Async Select (Github Users)</CardHeader>
        <CardBody indent>
          <Label>This example uses whatwg-fetch for showing Async options with Promises "async=true"</Label>
          <AsyncSelectField />
        </CardBody>
      </Card>,

      <Card key="select3">
        <CardHeader>Async Select with Refs prop (Github Users)</CardHeader>
        <CardBody indent>
          <Label>This example also fetches github users asynchronously using an init search for "dog" onOpen</Label>
          <SelectWithRefs />
        </CardBody>
      </Card>,

      <Card key="select4">
        <CardHeader>Select Styles</CardHeader>
        <CardBody indent>
          <Label>Input Group & size="sm"</Label>
          <InputGroup size="sm">
            <InputGroupAddon addonType="prepend"><Button color="secondary"><Icon imgSrc="search" size="sm" className="mx-1" /></Button></InputGroupAddon>
            <InputGroupAddon addonType="append" className="flex-grow-1"><InputSelectField /></InputGroupAddon>
          </InputGroup>
        </CardBody>
        <CardBody indent>
          <Label>Input Group & size="lg"</Label>
          <InputGroup size="lg">
            <InputGroupAddon addonType="prepend" className="flex-grow-1 d-block"><InputSelectField /></InputGroupAddon>
            <InputGroupAddon addonType="append"><Button outline><Icon imgSrc="search" size="md" /></Button></InputGroupAddon>
          </InputGroup>
        </CardBody>
        <CardBody indent>
          <Label>Inline</Label>
          <Form inline>
            <FormGroup style={{ minWidth: '170px' }}>
              <Label for="exampleEmail4" hidden>Email</Label>
              <InputSelectField radius="round" />
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
          <p>This component relies on the <a href="https://github.com/JedWatson/react-select" target="_blank" rel="noopener noreferrer"><strong>React Select</strong></a> component.</p>
          <ul>
            <li><a href="https://github.com/JedWatson/react-select" target="_blank" rel="noopener noreferrer">Code and Docs on GitHub</a></li>
            <li><a href="http://jedwatson.github.io/react-select/" target="_blank" rel="noopener noreferrer">Live Demos and Examples</a></li>
          </ul>
        </CardBody>
      </Card>,
    ]}
  />
);
