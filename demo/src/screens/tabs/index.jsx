/* eslint-disable jsx-a11y/no-static-element-interactions jsx-a11y/click-events-have-key-events */
import React from 'react';
import classnames from 'classnames';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Nav,
  NavItem,
  Row,
  Screen,
  TabContent,
  TabPane,
} from '../../../../src/components';

export default class TabsScreen extends React.Component {
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
      <Screen
        sidenav={<Sidenav activeScreen="tabs" />}
        sidenavHeader
        header="Tabs"
        primaryActions={<PrimaryActions />}
        tabs={[
          { to: '#/tabs', text: 'Inactive Tab' },
          { to: '/tabs', text: 'Active Tab' },
        ]}
        sidebar={
          <Card>
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              body
            </CardBody>
          </Card>
        }
        body={
          <Card>
            <TabContent activeTab={this.state.activeTab1}>
              <TabPane tabId="1">
                <Card>
                  <CardBody>
                    <Row>
                      <Col xs="12" sm="6">
                        <Card>
                          <CardTitle>Underline Tabs, Sticky Top, No Sidebar</CardTitle>
                          <CardText>If using tabs as navigation for main-content, should probably
                            follow sidebar template since it has additional containers in case
                            sidebar is used in the
                            future.
                          </CardText>
                          <Button>Go somewhere</Button>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tabId="2">
                <Card>
                  <CardBody>
                    <Row>
                      <Col sm="6">
                        <Card>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>
                            With supporting text below as a natural lead-in to
                            additional content.
                          </CardText>
                          <Button>Go somewhere</Button>
                        </Card>
                      </Col>
                      <Col sm="6">
                        <Card>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>
                            With supporting text below as a natural lead-in
                            to additional content.
                          </CardText>
                          <Button>Go somewhere</Button>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </TabPane>
            </TabContent>

            <CardHeader>Classic Standard Version</CardHeader>
            <CardBody>
              <Nav tabs>
                <NavItem>
                  <div
                    className={classnames('nav-link tabindex', { active: this.state.activeTab2 === '3' })}
                    onClick={() => {
                      this.toggle2('3');
                    }}
                  >
                    Tab1
                  </div>
                </NavItem>
                <NavItem>
                  <div
                    className={classnames('nav-link tabindex', { active: this.state.activeTab2 === '4' })}
                    onClick={() => {
                      this.toggle2('4');
                    }}
                  >
                    Moar Tabs
                  </div>
                </NavItem>
              </Nav>

              <TabContent activeTab={this.state.activeTab2}>
                <TabPane tabId="3">
                  <Card>
                    <CardBody>
                      <Row>
                        <Col sm="6">
                          <Card>
                            <CardTitle>CardsContainer</CardTitle>
                            <CardText>
                              With supporting text below as a natural
                              lead-in to additional content.
                            </CardText>
                            <Button>Go somewhere</Button>
                          </Card>
                        </Col>
                        <Col sm="6">
                          <Card>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>
                              With supporting text below as a natural lead-in
                              to additional content.
                            </CardText>
                            <Button>Go somewhere</Button>
                          </Card>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </TabPane>
                <TabPane tabId="4">
                  <Card>
                    <CardBody>
                      <Row>
                        <Col sm="6">
                          <Card>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>
                              With supporting text below as a natural lead-in
                              to additional content.
                            </CardText>
                            <Button>Go somewhere</Button>
                          </Card>
                        </Col>
                        <Col sm="6">
                          <Card>
                            <CardTitle>CardsContainer</CardTitle>
                            <CardText>
                              With supporting text below as a natural lead-in
                              to additional content.
                            </CardText>
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
        }
      />
    );
  }
}
