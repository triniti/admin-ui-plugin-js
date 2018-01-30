import React from 'react';
import { ButtonDropdown, Card, CardBody, DropdownItem, DropdownMenu, DropdownToggle, ScreenBody } from '../../../../src/components';

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
    <ScreenBody
    body={
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
      }
      >
      </ScreenBody>
    );
  }
}

export default UiButtonDropdown;
