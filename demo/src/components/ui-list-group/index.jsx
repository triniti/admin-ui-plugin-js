import React from 'react';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row } from '../../../../src/components';

const UiListGroup = () => {
  return (
    <Card>
      <CardHeader spacing="lg">List Group Items</CardHeader>
      <CardBody spacing="lg">
        <Row>
          <Col>
            <ListGroup>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
              <ListGroupItem tag="a" href="#">This is a linked list item</ListGroupItem>
              <ListGroupItem>List item with badge in pill style<Badge
                  pill>1</Badge></ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </CardBody>

      <CardHeader spacing="lg">Buttons</CardHeader>
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

      <CardHeader spacing="lg">Buttons Flush</CardHeader>
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

      <CardHeader spacing="lg">Buttons Borderless</CardHeader>
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

      <CardHeader spacing="lg">Contextual Color Alert</CardHeader>
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

      <CardHeader spacing="lg">Heading and Item Text</CardHeader>
      <CardBody spacing="lg">
        <Row>
          <Col>
            <ListGroup>
              <ListGroupItem active>
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText className={'mb-0'}>
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText className={'mb-0'}>
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText className={'mb-0'}>
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </CardBody>

      <CardHeader spacing="lg">List Group Nav</CardHeader>
      <CardBody spacing="lg">
        <Row>
          <Col>
            <ListGroup nav>
              <ListGroupItem active>
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText className={'mb-0'}>
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText className={'mb-0'}>
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText className={'mb-0'}>
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </CardBody>

      <CardHeader spacing="lg">List Group Nav Borderless</CardHeader>
      <CardBody spacing="lg">
        <Row>
          <Col>
            <ListGroup borderless nav>
              <ListGroupItem active>
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText className={'mb-0'}>
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText className={'mb-0'}>
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText className={'mb-0'}>
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default UiListGroup;
