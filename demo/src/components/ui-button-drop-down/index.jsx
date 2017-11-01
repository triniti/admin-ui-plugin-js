import React from 'react';
import { ButtonDropdown, Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Row } from '../../../../src/components';

class UiButtonDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
      <Card>
        <CardBody spacing="lg">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="mb-4">
            <DropdownToggle caret outline color="light">
            Button Dropdown
          </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </CardBody>
      </Card>
    );
  }
}

export default UiButtonDropdown;
