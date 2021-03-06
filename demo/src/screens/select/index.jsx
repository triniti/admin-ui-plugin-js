import React, { Fragment } from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import AsyncSelectField from './AsyncSelect';
import InputSelectField from './InputSelect';
import MultiSelectField from './MultiSelect';
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Icon, Input, InputGroup, InputGroupAddon, Label, Screen } from '../../../../src/components';

export default () => (
  <Screen
    sidenav={<Sidenav activeScreen="select" />}
    sidenavHeader
    header="Select"
    primaryActions={<PrimaryActions />}
    body={
      <Fragment>
        <Card>
          <CardHeader>Select</CardHeader>
          <CardBody indent>
            <MultiSelectField />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Async Select (Github Users)</CardHeader>
          <CardBody indent>
            <Label>This example uses whatwg-fetch for showing Async options with Promises (default search: "dog")</Label>
            <AsyncSelectField />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Select Styles</CardHeader>
          <CardBody indent>
            <Label>Input Group & size="sm"</Label>
            <InputGroup size="sm" style={{ maxWidth: '300px' }}>
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
        </Card>

        <Card>
          <CardHeader>Select Properties</CardHeader>
          <CardBody>
            <p>This component relies on the <a href="https://github.com/JedWatson/react-select" target="_blank" rel="noopener noreferrer"><strong>React Select</strong></a> component.</p>
            <ul>
              <li><a href="https://react-select.com" target="_blank" rel="noopener noreferrer">react-select.com</a></li>
              <li><a href="https://github.com/JedWatson/react-select" target="_blank" rel="noopener noreferrer">Code and Docs on GitHub</a></li>
              <li><a href="http://jedwatson.github.io/react-select/" target="_blank" rel="noopener noreferrer">Live Demos and V1 Examples (Shown Above, Deprecated)</a></li>
            </ul>
          </CardBody>
        </Card>
      </Fragment>
    }
  />
);
