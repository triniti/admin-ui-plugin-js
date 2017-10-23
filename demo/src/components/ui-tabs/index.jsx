import React from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, CardText, Col, Nav, NavItem, Row, TabContent, TabPane } from '../../../../src/components';
import classnames from 'classnames';

import NavbarTabs from '../../../../src/components/navbar-tabs';


class UiTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      activeTab1: '1',
      activeTab2: '3',
    };
  }

  toggle1(tab1) {
    if (this.state.activeTab1 !== tab1) {
      this.setState({
        activeTab1: tab1,
      });
    }
  }

  toggle2(tab2) {
    if (this.state.activeTab2 !== tab2) {
      this.setState({
        activeTab2: tab2,
      });
    }
  }

  render() {
    return (
      <Card>
        <NavbarTabs>
          <div
            className={classnames('navbar-tabs-link', { active: this.state.activeTab1 === '1' })}
            onClick={() => { this.toggle1('1'); }}
          >
            Tab1
          </div>
          <div
            className={classnames('navbar-tabs-link', { active: this.state.activeTab1 === '2' })}
            onClick={() => { this.toggle1('2'); }}
          >
            More Tabs
          </div>
        </NavbarTabs>

        <TabContent activeTab={this.state.activeTab1}>
          <TabPane tabId="1">
            <Card>
              <CardBody spacing="lg">
                <h3>Full Width Simple Tabs, Sticky Top - .tabs-simple</h3>
                <Card block className="col col-12 col-sm-6">
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </CardBody>
            </Card>
          </TabPane>
          <TabPane tabId="2">
            <Card>
              <CardBody spacing="lg">
                <Row>
                  <Col sm="6">
                    <Card block>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card block>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </TabPane>
        </TabContent>

        <CardHeader className={'sticky-off'} spacing="lg">Classic Standard Version</CardHeader>
        <CardBody spacing="lg">
          <Nav tabs>
            <NavItem>
              <div
                className={classnames('nav-link tabindex', { active: this.state.activeTab2 === '3' })}
                onClick={() => { this.toggle2('3'); }}
              >
                Tab1
              </div>
            </NavItem>
            <NavItem>
              <div
                className={classnames('nav-link tabindex', { active: this.state.activeTab2 === '4' })}
                onClick={() => { this.toggle2('4'); }}
              >
                Moar Tabs
              </div>
            </NavItem>
          </Nav>

          <TabContent activeTab={this.state.activeTab2}>
            <TabPane tabId="3">
              <Card>
                <CardBody spacing="lg">
                  <h4>Classic Tab Syle - .tabs-classic</h4>
                </CardBody>
              </Card>
            </TabPane>
            <TabPane tabId="4">
              <Card>
                <CardBody spacing="lg">
                  <Row>
                    <Col sm="6">
                      <Card block>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card block>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    );
  }
}

export default UiTabs;
