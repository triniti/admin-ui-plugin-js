import React from 'react';
import { Card, CardBody, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, TrinaryControl } from '../../../../src/components';

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
            <Col xs="6">
              <TrinaryControl unsetText="Any User" trueText="Is Staff" falseText="Non Staff" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default UiDropdown;
