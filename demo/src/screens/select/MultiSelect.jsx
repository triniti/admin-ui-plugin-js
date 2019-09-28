import React from 'react';
import { FormGroup, Checkbox, Select } from '../../../../src/components';

const FLAVOURS = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'Vanilla', value: 'vanilla' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Caramel', value: 'caramel' },
  { label: 'Cookies and Cream', value: 'cookiescream' },
  { label: 'Peppermint', value: 'peppermint' },
];

const WHY_WOULD_YOU = [
  { label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
].concat(FLAVOURS.slice(1));

export default class MultiSelectField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      removeSelected: true,
      disabled: false,
      crazy: false,
      stayOpen: false,
      value: [],
      rtl: false,
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.toggleRtl = this.toggleRtl.bind(this);
  }

  handleSelectChange(value) {
    console.log('You\'ve selected:', value);
    this.setState({ value });
  }

  toggleCheckbox(e) {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  }

  toggleRtl(e) {
    const rtl = e.target.checked;
    this.setState({ rtl });
  }

  render() {
    const { crazy, disabled, stayOpen, value } = this.state;
    const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
    return (
      <div className="section">
        <FormGroup>
          <Select
            closeOnSelect={!stayOpen}
            disabled={disabled}
            multi
            onChange={this.handleSelectChange}
            options={options}
            placeholder="Select your favourite(s)"
            removeSelected={this.state.removeSelected}
            rtl={this.state.rtl}
            simpleValue
            size="lg"
            value={value}
          />
        </FormGroup>

        <FormGroup>
          <FormGroup check>
            <Checkbox size="sm" name="removeSelected" checked={this.state.removeSelected} onChange={this.toggleCheckbox}>Remove selected options</Checkbox>
          </FormGroup>
          <FormGroup check>
            <Checkbox size="sm" name="disabled" checked={this.state.disabled} onChange={this.toggleCheckbox}>Disable the control</Checkbox>
          </FormGroup>
          <FormGroup check>
            <Checkbox size="sm" name="crazy" checked={crazy} onChange={this.toggleCheckbox}>I don't like Chocolate (disabled the option)</Checkbox>
          </FormGroup>
          <FormGroup check>
            <Checkbox size="sm" name="stayOpen" checked={stayOpen} onChange={this.toggleCheckbox}>Stay open when an Option is selected</Checkbox>
          </FormGroup>
          <FormGroup check>
            <Checkbox size="sm" name="rtl" checked={this.state.rtl} onChange={this.toggleCheckbox}>rtl</Checkbox>
          </FormGroup>
        </FormGroup>
      </div>
    );
  }
}
