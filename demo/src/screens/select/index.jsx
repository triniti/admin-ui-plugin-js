import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Icon, Input, InputGroup, InputGroupAddon, InputGroupText, Screen, Select } from '../../../../src/components';

class UiSelect extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: '',
    }
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

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
              <Select
                name="form-field-name"
                value={value}
                onChange={this.handleChange}
                options={[
                  { value: 'one', label: 'One' },
                  { value: 'two', label: 'Two' },
                ]}
              />

            </CardBody>
          </Card>,

          <Card key="select2">
            <CardHeader>Datepicker with Time inside Input Group</CardHeader>
            <CardBody indent>
              <InputGroup size="sm" radius="round">
                <InputGroupAddon addonType="prepend"><InputGroupText><Icon imgSrc="calendar" size="sd" className="mx-1"/></InputGroupText></InputGroupAddon>
                <InputGroupAddon addonType="append">

                </InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>,

        ]}
      />
    );
  }
}

export default UiSelect;