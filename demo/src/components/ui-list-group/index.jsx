import React from 'react';
import { Badge, Card, CardBlock, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row } from '../../../../src/components';

const UiListGroup = () => {
  return (
    <Card>
      <CardHeader>List Group Items</CardHeader>
      <CardBlock>
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
      </CardBlock>

      <CardHeader>Buttons</CardHeader>
      <CardBlock>
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
      </CardBlock>

      <CardHeader>Contextual Color Alert</CardHeader>
      <CardBlock>
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
      </CardBlock>

      <CardHeader>Heading and Item Text</CardHeader>
      <CardBlock>
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
      </CardBlock>

      <CardHeader>List Group .list-group-nav</CardHeader>
      <CardBlock>
        <Row>
          <Col>
            <ListGroup className={'list-group-nav'}>
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
      </CardBlock>

      <CardHeader>List Group w/ Underlines .list-group-nav.sidebar-nav</CardHeader>
      <CardBlock>
        <Row>
          <Col>
            <ListGroup className={'list-group-nav list-group-border'}>
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
      </CardBlock>
    </Card>
  );
};

export default UiListGroup;
