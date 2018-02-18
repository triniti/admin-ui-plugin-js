import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Screen } from '../../../../src/components';
import CardHeader from '../../../../src/components/card-header/index';

class UiDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: parseInt(value, 10),
    });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="dropdowns" />}
        sidenavHeader
        header="Dropdowns"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={
          <Card>
            <CardHeader>Dropdown</CardHeader>
            <CardBody>
              <Row>
                <Col xs="6">
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="mb-4">
                    <DropdownToggle caret>
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
                </Col>
              </Row>
            </CardBody>
          </Card>
      }
      />
    );
  }
}

export default UiDropdown;
