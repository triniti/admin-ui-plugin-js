import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { ButtonDropdown, Card, CardBody, DropdownItem, DropdownMenu, DropdownToggle, Icon, Screen } from '../../../../src/components';

class UiButtonDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpen2: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  toggle2() {
    this.setState({
      dropdownOpen2: !this.state.dropdownOpen2,
    });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="button-dropdowns" />}
        sidenavHeader
        header="Button Dropdowns"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={
          <Card>
            <CardBody>
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

              <ButtonDropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2} className="mb-4 ml-4">
                <DropdownToggle outline radius="circle" color="hover">
                    <Icon imgSrc="more-vertical" alt="more" size="md" />
                </DropdownToggle>
                <DropdownMenu right arrow="right">
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
      />
    );
  }
}

export default UiButtonDropdown;
