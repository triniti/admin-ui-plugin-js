import React from 'react';
import { Card, CardBody, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row } from '../../../../src/components';
import CardHeader from '../../../../src/components/card-header/index';

class UiDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      dropdownOpen: false,
      trinaryDefault: 0,
      trinaryCustom: 1,
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
      <Card>
        <CardHeader>Dropdown</CardHeader>
        <CardBody spacing="lg">
          <Row>
            <Col xs="6">
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="mb-4">
                <DropdownToggle caret color="default" outline>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu arrow="right" right>
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
    );
  }
}

export default UiDropdown;
