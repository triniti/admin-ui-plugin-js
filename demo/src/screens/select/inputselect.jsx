import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import { Select } from '../../../../src/components';

const FLAVOURS = [
	{ label: 'Triniti', value: 'trinit' },
	{ label: 'Raven', value: 'raven' },
	{ label: 'EME', value: 'eme' },
	{ label: 'BOTS', value: 'bots' },
	{ label: 'Crowd Fusion', value: 'crowdfusion' },
	{ label: 'React', value: 'react' },
];

var InputSelectField = createClass({
	displayName: 'InputSelectField',
	propTypes: {
		label: PropTypes.string,
	},
	getInitialState () {
		return {
			removeSelected: true,
			disabled: false,
			crazy: false,
			stayOpen: false,
			value: [],
			rtl: false,
		};
	},
	handleSelectChange (value) {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	},
	toggleCheckbox (e) {
		this.setState({
			[e.target.name]: e.target.checked,
		});
	},
	toggleRtl (e) {
		let rtl = e.target.checked;
		this.setState({ rtl });
	},

	render () {
		const { disabled, stayOpen, value } = this.state;
		const options = FLAVOURS;
		return (
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
				value={value}
				size="lg"
			/>
		);
	}
});


export default InputSelectField;