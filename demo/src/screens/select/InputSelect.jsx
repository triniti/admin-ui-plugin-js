import React from 'react';
import { Select } from '../../../../src/components';

const OPTIONS = [
  { label: 'Triniti', value: 'trinit' },
  { label: 'Raven', value: 'raven' },
  { label: 'EME', value: 'eme' },
  { label: 'BOTS', value: 'bots' },
  { label: 'Crowd Fusion', value: 'crowdfusion' },
  { label: 'React', value: 'react' },
];

const customStyles = {
  control: styles => ({ minWidth: '12rem', backgroundColor: 'white' }),
};

export default class InputSelectField extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: [] };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(value) {
    console.log('You\'ve selected:', value);
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return (
      <Select
        multi
        onChange={this.handleSelectChange}
        options={OPTIONS}
        placeholder="Select your option(s)"
        simpleValue
        value={value}
        styles={customStyles}
        isClearable={true}
      />
    );
  }
}
