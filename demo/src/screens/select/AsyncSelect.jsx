import React from 'react';
import 'whatwg-fetch';
import { Checkbox, FormGroup, Radio, Select } from '../../../../src/components';

const customStyles = {
  control: styles => ({ backgroundColor: 'white' }),
};

export default class AsyncSelectField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      backspaceRemovesValue: true,
      defaultOptions: [],
      hasLoadedDefaultOptions: false,
      isMulti: true,
      value: [],
    };

    this.fetchUsers = this.fetchUsers.bind(this);
    this.gotoUser = this.gotoUser.bind(this);
    this.handleLoadOptions = this.handleLoadOptions.bind(this);
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.onChange = this.onChange.bind(this);
    this.switchToMulti = this.switchToMulti.bind(this);
    this.switchToSingle = this.switchToSingle.bind(this);
    this.toggleBackspaceRemoves = this.toggleBackspaceRemoves.bind(this);
  }

  onChange(value) {
    this.setState(() => ({ value }));
  }

  fetchUsers(input) {
    return fetch(`https://api.github.com/search/users?q=${input}`)
      .then(response => response.json());
  }

  gotoUser(value) {
    window.open(value.html_url);
  }

  handleLoadOptions(input) {
    return this.fetchUsers(input)
      .then(json => json.items.map(item => ({ label: item.login, value: item.login, url: item.html_url })));
  }

  handleMenuOpen() {
    const { hasLoadedDefaultOptions } = this.state;
    if (hasLoadedDefaultOptions) {
      return;
    }
    this.setState(() => ({
      hasLoadedDefaultOptions: true,
    }), () => {
      this.fetchUsers('dog')
        .then(json => {
          this.setState(() => ({ defaultOptions: json.items.map(item => ({ label: item.login, value: item.login, url: item.html_url }))}))
        });
    });
  }

  switchToMulti() {
    this.setState(({ isMulti, value }) => ({
      isMulti: !isMulti,
      value: [value],
    }));
  }

  switchToSingle() {
    this.setState(({ isMulti, value }) => ({
      isMulti: !isMulti,
      value: value ? value[0] : null,
    }));
  }

  toggleBackspaceRemoves() {
    this.setState(({ backspaceRemovesValue }) => ({
      backspaceRemovesValue: !backspaceRemovesValue,
    }));
  }

  render() {
    const { defaultOptions, isMulti, value, backspaceRemovesValue } = this.state;

    return (
      <div className="section">
        <FormGroup>
          <Select
            async
            components={{
              MultiValueLabel: ({ data: { label, url } }) => <a href={url} target="_blank">{label}</a>,
              SingleValue: ({ data: { label, url } }) => <a href={url} target="_blank">{label}</a>
            }}
            defaultOptions={defaultOptions}
            isMulti={isMulti}
            value={value}
            onChange={this.onChange}
            onMenuOpen={this.handleMenuOpen}
            onValueClick={this.gotoUser}
            styles={customStyles}
            valueKey="id"
            labelKey="login"
            loadOptions={this.handleLoadOptions}
            backspaceRemovesValue={backspaceRemovesValue}
          />
        </FormGroup>

        <FormGroup>
          <FormGroup>
            <Radio size="sm" checked={isMulti} onChange={this.switchToMulti}>Multiselect</Radio>
            <Radio size="sm" checked={!isMulti} onChange={this.switchToSingle} className="ml-3">Single Value</Radio>
          </FormGroup>
          <FormGroup check>
            <Checkbox size="sm" checked={backspaceRemovesValue} onChange={this.toggleBackspaceRemoves}>Backspace Removes?</Checkbox>
          </FormGroup>
        </FormGroup>
      </div>
    );
  }
}
