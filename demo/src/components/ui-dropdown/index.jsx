import React from 'react';
import { Card, CardBody, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, TrinaryControl } from '../../../../src/components';
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
      <div>
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

        <Card>
          <CardHeader>Trinary Control - Default</CardHeader>
          <CardBody spacing="lg">
            <Row>
              <Col xs="3" xs="4">
                <div style={{width: '4rem'}}>
                  <TrinaryControl name="trinaryDefault" onChange={this.handleChange} value={this.state.trinaryDefault} />
                </div>
              </Col>
              <Col xs="6">
                <span>Selected Value: {`${this.state.trinaryDefault}`}</span>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Trinary Control - Custom</CardHeader>
          <CardBody spacing="lg">
            <Row>
              <Col xs="3" xs="4">
                <div style={{width: '105px'}}>
                  <TrinaryControl name="trinaryCustom" unsetText="Any User" trueText="Is Staff" falseText="Non Staff" radius="round" size="sm" value={this.state.trinaryCustom} onChange={this.handleChange} />
                </div>
              </Col>
              <Col xs="6">
                <span>Selected Value: {`${this.state.trinaryCustom}`}</span>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default UiDropdown;
