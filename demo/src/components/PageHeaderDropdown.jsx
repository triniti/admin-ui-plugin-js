import React from 'react';
import { Badge, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, } from '../../../src/components';

/* todo: enable dropdown menu functionality based on loaded screen */

class PageHeaderDropdown extends React.Component {
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
      <ButtonDropdown className={'mr-2'}>
        <DropdownToggle caret size="sm" color="default" className="alert-wrapper">
          Active Edits
          <Badge color="warning" className={'badge-alert'}>1</Badge>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default PageHeaderDropdown;
