import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import classnames from 'classnames';
import { Button, Card, CardBody, CardHeader, CardTitle, CardText, Col, Nav, NavItem, NavLink, Row, Screen, TabContent, TabPane } from '../../../../src/components';

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
      <Screen
      sidenav={<Sidenav activeScreen="tabs" />}
      sidenavHeader
      header="Tabs"
      primaryActions={<PrimaryActions />}
      tabs={[
        { to: '/tabs', text: 'Tab1' },
        { to: '#/test2', text: 'Tab2' },
      ]}
      sidebar={
        <Card>
          <CardHeader>Sidebar Header</CardHeader>
          <CardBody>
            <CardTitle section>Card Title Section</CardTitle>
            body
          </CardBody>
        </Card>
      }

      // tabs={[
      //    <NavLink href="#" className={classnames({ active: this.state.activeTab1 === '1' })} onClick={() => { this.toggle1('1'); }}>Tab1</NavLink>,
      //    <NavLink href="#" className={classnames({ active: this.state.activeTab1 === '2' })} onClick={() => { this.toggle1('2'); }}>Tab2</NavLink>
      //    ]
      //  }
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
                          <CardText>If using tabs as navigation for main-content, should probably follow sidebar template since it has additional containers in case sidebar is used in the future.</CardText>
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
                          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Go somewhere</Button>
                        </Card>
                      </Col>
                      <Col sm="6">
                        <Card>
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

            <CardHeader>Classic Standard Version</CardHeader>
            <CardBody>
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
                    <CardBody>
                      <Row>
                        <Col sm="6">
                          <Card>
                            <CardTitle>CardsContainer</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                          </Card>
                        </Col>
                        <Col sm="6">
                          <Card>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
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
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                          </Card>
                        </Col>
                        <Col sm="6">
                          <Card>
                            <CardTitle>CardsContainer</CardTitle>
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
        }
      />
    );
  }
}

export default UiTabs;
