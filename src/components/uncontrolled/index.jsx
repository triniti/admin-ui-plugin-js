import React from 'react';
import { ButtonDropdown, NavDropdown } from 'reactstrap';
import Alert from '../alert';
import Dropdown from '../dropdown';
import Tooltip from '../tooltip';

const components = {
  UncontrolledAlert: Alert,
  UncontrolledButtonDropdown: ButtonDropdown,
  UncontrolledDropdown: Dropdown,
  UncontrolledNavDropdown: NavDropdown,
  UncontrolledTooltip: Tooltip,
};

Object.keys(components).forEach((key) => {
  const Tag = components[key];
  const defaultValue = Tag === Alert;

  class Uncontrolled extends React.Component {
    constructor(props) {
      super(props);

      this.state = { isOpen: defaultValue };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
      return <Tag isOpen={this.state.isOpen} toggle={this.toggle} {...this.props} />;
    }
  }

  Uncontrolled.displayName = key;

  components[key] = Uncontrolled;
});

const {
  UncontrolledAlert,
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  UncontrolledNavDropdown,
  UncontrolledTooltip,
} = components;

export {
  UncontrolledAlert,
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  UncontrolledNavDropdown,
  UncontrolledTooltip,
};
