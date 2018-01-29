import React from 'react';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row } from '../../../../src/components';

const UiListGroup = () => [
  <Card key="list-group1">
    <CardHeader spacing="lg" inset>List Group Items</CardHeader>
    <CardBody spacing="lg">
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
    <CardHeader spacing="lg" inset>Buttons</CardHeader>
    <CardBody spacing="lg">
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
    <CardHeader spacing="lg" inset>Buttons Flush</CardHeader>
    <CardBody spacing="lg">
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
    <CardHeader spacing="lg" inset>Buttons Borderless</CardHeader>
    <CardBody spacing="lg">
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
    <CardHeader spacing="lg" inset>Contextual Color Alert</CardHeader>
    <CardBody spacing="lg">
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
    <CardHeader spacing="lg" inset>Heading and Item Text</CardHeader>
    <CardBody spacing="lg">
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
    <CardHeader spacing="lg" inset>List Group Nav</CardHeader>
    <CardBody spacing="lg">
      <Row>
        <Col>
          <ListGroup nav>
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

  <Card key="list-group8">
    <CardHeader spacing="lg" inset>List Group Nav Borderless</CardHeader>
    <CardBody spacing="lg">
      <Row>
        <Col>
          <ListGroup borderless nav>
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
];

export default UiListGroup;
