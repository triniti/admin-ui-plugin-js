import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import moment from 'moment';
import { Button, Card, CardBody, CardHeader, DatePicker, Icon, InputGroup, InputGroupAddon, Input, Screen } from '../../../../src/components';

class UiDatePicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="datepicker" />}
        sidenavHeader
        header="Date Picker"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="datepicker1">
            <CardHeader>Datepicker</CardHeader>
            <CardBody indent>
              <DatePicker selected={this.state.startDate} onChange={this.handleChange}/>
            </CardBody>
          </Card>,

          <Card key="datepicker2">
            <CardHeader>Datepicker with Time inside Ipnut Group</CardHeader>
            <CardBody indent>
              <InputGroup size="sm" radius="round">
                <InputGroupAddon addonType="prepend"><Button outline><Icon imgSrc="calendar" size="sd"/></Button></InputGroupAddon>
                <InputGroupAddon addonType="append"><DatePicker selected={this.state.startDate} onChange={this.handleChange} showTimeSelect dateFormat="LLL"/></InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>,

        ]}
      />
    );
  }
}

export default UiDatePicker;