import React from 'react';
import 'whatwg-fetch';
import { Checkbox, FormGroup, Radio, Select } from '../../../../src/components';

export default class AsyncSelectField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backspaceRemoves: true,
      multi: true,
      value: [],
    };

    this.onChange = this.onChange.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.gotoUser = this.gotoUser.bind(this);
    this.switchToMulti = this.switchToMulti.bind(this);
    this.switchToSingle = this.switchToSingle.bind(this);
    this.toggleBackspaceRemoves = this.toggleBackspaceRemoves.bind(this);
  }

  onChange(value) {
    this.setState({
      value,
    });
  }

  getUsers(input) {
    if (!input) {
      return Promise.resolve({ options: [] });
    }

    return fetch(`https://api.github.com/search/users?q=${input}`)
      .then(response => response.json())
      .then(json => ({ options: json.items }));
  }

  gotoUser(value) {
    window.open(value.html_url);
  }

  switchToMulti() {
    this.setState({
      multi: true,
      value: [this.state.value],
    });
  }

  switchToSingle() {
    this.setState({
      multi: false,
      value: this.state.value ? this.state.value[0] : null,
    });
  }

  toggleBackspaceRemoves() {
    this.setState({
      backspaceRemoves: !this.state.backspaceRemoves,
    });
  }

  render() {
    const { multi, value, backspaceRemoves } = this.state;

    return (
      <div className="section">
        <FormGroup>
          <Select
            async
            multi={multi}
            value={value}
            onChange={this.onChange}
            onValueClick={this.gotoUser}
            valueKey="id"
            labelKey="login"
            loadOptions={this.getUsers}
            backspaceRemoves={backspaceRemoves}
          />
        </FormGroup>

        <FormGroup>
          <FormGroup>
            <Radio size="sm" checked={multi} onChange={this.switchToMulti}>Multiselect</Radio>
            <Radio size="sm" checked={!multi} onChange={this.switchToSingle} className="ml-3">Single Value</Radio>
          </FormGroup>
          <FormGroup check>
            <Checkbox size="sm" checked={backspaceRemoves} onChange={this.toggleBackspaceRemoves}>Backspace Removes?</Checkbox>
          </FormGroup>
        </FormGroup>
      </div>
    );
  }
}
