import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import moment from 'moment';
import { Button, Card, CardBody, CardHeader, DatePicker, Icon, Input, InputGroup, InputGroupAddon, InputGroupText, Screen } from '../../../../src/components';

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
            <CardHeader>DatePicker</CardHeader>
            <CardBody indent>
              <DatePicker size="sm" selected={this.state.startDate} onChange={this.handleChange}/>
            </CardBody>
          </Card>,

          <Card key="datepicker2">
            <CardHeader>DatePicker with Time inside Input Group</CardHeader>
            <CardBody indent>
              <InputGroup size="sm" radius="round">
                <InputGroupAddon addonType="prepend"><InputGroupText><Icon imgSrc="calendar" size="sd" className="mx-1"/></InputGroupText></InputGroupAddon>
                <InputGroupAddon addonType="append"><DatePicker selected={this.state.startDate} onChange={this.handleChange} showTimeSelect dateFormat="LLL"/></InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>,

          <Card key="props">
          <CardHeader>DatePicker Properties</CardHeader>
          <CardBody>
            <p>This component relies on the <a href="https://reactdatepicker.com/" target="_blank"><strong>React DatePicker</strong></a> component.</p>
          </CardBody>
        </Card>,
        ]}
      />
    );
  }
}

export default UiDatePicker;