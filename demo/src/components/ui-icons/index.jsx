import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Icon, Loading, Row, Spinner, UncontrolledTooltip } from '../../../../src/components';

export default () => (
  <Card>
    <CardHeader>Icons</CardHeader>
    <CardBody spacing="lg">
      <Row>
        <Col>
          <Icon imgSrc="angle-double-left" id="angle-double-left" />
          <UncontrolledTooltip placement="top" target="angle-double-left">angle-double-left</UncontrolledTooltip>
          <Icon imgSrc="angle-double-right" id="angle-double-right" />
          <UncontrolledTooltip placement="top" target="angle-double-right">angle-double-right</UncontrolledTooltip>
          <Icon imgSrc="angle-left" id="angle-left" />
          <UncontrolledTooltip placement="top" target="angle-left">angle-left</UncontrolledTooltip>
          <Icon imgSrc="angle-right" id="angle-right" />
          <UncontrolledTooltip placement="top" target="angle-right">angle-right</UncontrolledTooltip>
          <Icon imgSrc="arrow-left" id="arrow-left" />
          <UncontrolledTooltip placement="top" target="arrow-left">arrow-left</UncontrolledTooltip>
          <Icon imgSrc="back" id="back" />
          <UncontrolledTooltip placement="top" target="back">back</UncontrolledTooltip>
          <Icon imgSrc="close" id="close" />
          <UncontrolledTooltip placement="top" target="close">close</UncontrolledTooltip>
          <Icon imgSrc="cog" id="cog" />
          <UncontrolledTooltip placement="top" target="cog">cog</UncontrolledTooltip>
          <Icon imgSrc="delete" id="delete" />
          <UncontrolledTooltip placement="top" target="delete">delete</UncontrolledTooltip>
          <Icon imgSrc="eye" id="eye" />
          <UncontrolledTooltip placement="top" target="eye">eye</UncontrolledTooltip>
          <Icon imgSrc="menu" id="menu" />
          <UncontrolledTooltip placement="top" target="menu">menu</UncontrolledTooltip>
          <Icon imgSrc="more-vertical" id="more-vertical" size="lg" />
          <UncontrolledTooltip placement="top" target="more-vertical">more-vertical</UncontrolledTooltip>
          <Icon imgSrc="save" id="save" />
          <UncontrolledTooltip placement="top" target="save">save</UncontrolledTooltip>
          <Icon imgSrc="search" id="search" />
          <UncontrolledTooltip placement="top" target="search">search</UncontrolledTooltip>
          <Icon imgSrc="sort" id="sort" />
          <UncontrolledTooltip placement="top" target="sort">sort</UncontrolledTooltip>
          <Icon imgSrc="user" id="user" />
          <UncontrolledTooltip placement="top" target="user">user</UncontrolledTooltip>
        </Col>
      </Row>
    </CardBody>

    <CardHeader>Button Icons</CardHeader>
    <CardBody spacing="lg">
      <Row>
        <Col>
          <Button outline radius="circle" color="link"><Icon imgSrc="cog" alt="edit" /></Button>
          <Button outline radius="circle" color="link"><Icon imgSrc="eye" alt="details" /></Button>
          <Button outline radius="circle" color="link"><Icon imgSrc="more-vertical" alt="more" size="md" /></Button>
          <Button outline radius="circle" color="link"><Icon imgSrc="close" alt="close" /></Button>
          <Button outline radius="circle" color="link"><Icon imgSrc="search" alt="search" /></Button>
          <Button outline radius="circle" color="link"><Icon imgSrc="user" alt="user" /></Button>
          <Button outline radius="circle" color="link"><Icon imgSrc="arrow-left" alt="arrow" /></Button>
          <Button radius="circle" color="dark"><Icon imgSrc="menu" alt="menu" inverse /></Button>
        </Col>
      </Row>
    </CardBody>

    <CardHeader>Spinner</CardHeader>
    <CardBody spacing="lg">
      <Row>
        <Col>
          <Spinner />

        </Col>
      </Row>
      <Row>
        <Col>
          <Spinner>Loading...</Spinner>

        </Col>
      </Row>
      <Row>
        <Col>
          <Loading />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="loading-container">
            <ul className="loading-animation">
              <li className="loading-dot" />
              <li className="loading-dot" />
              <li className="loading-dot" />
            </ul>
            <span className="loading-children">children</span>
          </div>
        </Col>
      </Row>
    </CardBody>
  </Card>
);
