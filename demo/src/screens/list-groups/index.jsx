import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, Screen } from '../../../../src/components';

const UiListGroup = () => (
  <Screen
    sidenav={<Sidenav activeScreen="list-groups" />}
    sidenavHeader
    header="List Groups"
  // tabs={[
  //   { to: '/welcome', text: 'Tab1' },
  //   { to: '#/test2', text: 'Tab2' },
  // ]}
    primaryActions={<PrimaryActions />}
    body={[
      <Card key="list-group1">
        <CardHeader>List Group Items</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <ListGroup>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem tag="a" href="#">This is a linked list item</ListGroupItem>
                <ListGroupItem>List item with badge in pill style<Badge
                  pill
                >1
                </Badge>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="list-group2">
        <CardHeader>Buttons</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <ListGroup>
                <ListGroupItem tag="a" href="#" action>Link</ListGroupItem>
                <ListGroupItem active tag="button" action>Active Button</ListGroupItem>
                <ListGroupItem tag="button" action>Button</ListGroupItem>
                <ListGroupItem disabled tag="button" action>Disabled Button</ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="list-group3">
        <CardHeader>Buttons Flush</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <ListGroup flush>
                <ListGroupItem tag="a" href="#" action>Link</ListGroupItem>
                <ListGroupItem active tag="button" action>Active Button</ListGroupItem>
                <ListGroupItem tag="button" action>Button</ListGroupItem>
                <ListGroupItem disabled tag="button" action>Disabled Button</ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="list-group4">
        <CardHeader>Buttons Borderless</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <ListGroup borderless>
                <ListGroupItem tag="a" href="#" action>Link</ListGroupItem>
                <ListGroupItem active tag="button" action>Active Button</ListGroupItem>
                <ListGroupItem tag="button" action>Button</ListGroupItem>
                <ListGroupItem disabled tag="button" action>Disabled Button</ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="list-group5">
        <CardHeader>Contextual Color Alert</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <ListGroup>
                <ListGroupItem color="success">Cras justo odio</ListGroupItem>
                <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
                <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="list-group6">
        <CardHeader>Heading and Item Text</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <ListGroup>
                <ListGroupItem active>
                  <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                  <ListGroupItemText className="mb-0">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                  <ListGroupItemText className="mb-0">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                  <ListGroupItemText className="mb-0">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="list-group7">
        <CardHeader>List Group Nav</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <ListGroup nav>
                <ListGroupItem active>
                  <a href="">
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText className="mb-0">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </ListGroupItemText>
                  </a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="">
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText className="mb-0">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </ListGroupItemText>
                  </a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="">
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText className="mb-0">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </ListGroupItemText>
                  </a>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="list-group8">
        <CardHeader>List Group Nav Borderless</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <ListGroup borderless nav>
                <ListGroupItem active>
                  <a href="">
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText className="mb-0">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </ListGroupItemText>
                  </a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="">
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText className="mb-0">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </ListGroupItemText>
                  </a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="">
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText className="mb-0">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </ListGroupItemText>
                  </a>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>,
  ]}
  />
);

export default UiListGroup;
