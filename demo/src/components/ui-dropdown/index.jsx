import React from 'react';
import { Card, CardBlock, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '../../../../src/components';

class UiDropdown extends React.Component {
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
        <CardBlock>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="mb-4">
            <DropdownToggle caret color="default" outline>
            Dropdown
          </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBlock>
      </Card>
    );
  }
}

export default UiDropdown;
