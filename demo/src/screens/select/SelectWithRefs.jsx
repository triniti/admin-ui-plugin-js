import React from 'react';
import 'whatwg-fetch';
import { FormGroup, Select } from '../../../../src/components';

export default class SelectWithRefs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.onSelectOptionChange = this.onSelectOptionChange.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  onSelectOptionChange(value) {
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

  render() {
    const { value } = this.state;

    return (
      <div className="section">
        <FormGroup>
          <Select
            async
            autoload={false}
            value={value}
            onChange={this.onSelectOptionChange}
            valueKey="id"
            labelKey="login"
            forwardRef={(el) => { this.selectorRef = el; }}
            onOpen={() => this.selectorRef.loadOptions('dog')}
            loadOptions={this.getUsers}
          />
        </FormGroup>
      </div>
    );
  }
}
