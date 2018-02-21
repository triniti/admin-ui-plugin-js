import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Col, Icon, Loading, Row, Screen, Spinner, UncontrolledTooltip } from '../../../../src/components';

const UiIcons = () => (
  <Screen
    sidenav={<Sidenav activeScreen="icons" />}
    sidenavHeader
    header="Icons"
  // tabs={[
  //   { to: '/welcome', text: 'Tab1' },
  //   { to: '#/test2', text: 'Tab2' },
  // ]}
    primaryActions={<PrimaryActions />}
    body={[
      <Card key="icons1">
        <CardHeader>Icons</CardHeader>
        <CardBody>
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
              <Icon imgSrc="more-vertical" id="more-vertical" />
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
          <Row>
            <Col>
              <Icon imgSrc="upload" id="upload" />
              <UncontrolledTooltip placement="top" target="upload">upload</UncontrolledTooltip>
              <Icon imgSrc="download" id="download" />
              <UncontrolledTooltip placement="top" target="download">download</UncontrolledTooltip>
              <Icon imgSrc="plus-sign" id="plus-sign" />
              <UncontrolledTooltip placement="top" target="plus-sign">plus-sign</UncontrolledTooltip>
              <Icon imgSrc="minus-sign" id="minus-sign" />
              <UncontrolledTooltip placement="top" target="minus-sign">minus-sign</UncontrolledTooltip>
              <Icon imgSrc="plus-sign-outline" id="plus-sign-outline" />
              <UncontrolledTooltip placement="top" target="plus-sign-outline">plus-sign-outline</UncontrolledTooltip>
              <Icon imgSrc="minus-sign-outline" id="minus-sign-outline" />
              <UncontrolledTooltip placement="top" target="minus-sign-outline">minus-sign-outline</UncontrolledTooltip>
              <Icon imgSrc="apps" id="apps" />
              <UncontrolledTooltip placement="top" target="apps">apps</UncontrolledTooltip>
              <Icon imgSrc="arrow-back" id="arrow-back" />
              <UncontrolledTooltip placement="top" target="arrow-back">arrow-back</UncontrolledTooltip>
              <Icon imgSrc="arrow-forward" id="arrow-forward" />
              <UncontrolledTooltip placement="top" target="arrow-forward">arrow-forward</UncontrolledTooltip>
              <Icon imgSrc="circle-x" id="circle-x" />
              <UncontrolledTooltip placement="top" target="circle-x">circle-x</UncontrolledTooltip>
              <Icon imgSrc="data-transfer-download" id="data-transfer-download" />
              <UncontrolledTooltip placement="top" target="data-transfer-download">data-transfer-download</UncontrolledTooltip>
              <Icon imgSrc="data-transfer-upload" id="data-transfer-upload" />
              <UncontrolledTooltip placement="top" target="data-transfer-upload">data-transfer-upload</UncontrolledTooltip>
              <Icon imgSrc="keyboard-arrow-down" id="keyboard-arrow-down" />
              <UncontrolledTooltip placement="top" target="keyboard-arrow-down">keyboard-arrow-down</UncontrolledTooltip>
              <Icon imgSrc="keyboard-arrow-left" id="keyboard-arrow-left" />
              <UncontrolledTooltip placement="top" target="keyboard-arrow-left">keyboard-arrow-left</UncontrolledTooltip>
              <Icon imgSrc="keyboard-arrow-right" id="keyboard-arrow-right" />
              <UncontrolledTooltip placement="top" target="keyboard-arrow-right">keyboard-arrow-right</UncontrolledTooltip>
              <Icon imgSrc="keyboard-arrow-up" id="keyboard-arrow-up" />
              <UncontrolledTooltip placement="top" target="keyboard-arrow-up">keyboard-arrow-up</UncontrolledTooltip>
              <Icon imgSrc="keyboard-backspace" id="keyboard-backspace" />
              <UncontrolledTooltip placement="top" target="keyboard-backspace">keyboard-backspace</UncontrolledTooltip>
            </Col>
          </Row>
          <Row>
            <Col>
              <Icon imgSrc="list" id="list" />
              <UncontrolledTooltip placement="top" target="list">list</UncontrolledTooltip>
              <Icon imgSrc="grid-four-up" id="grid-four-up" />
              <UncontrolledTooltip placement="top" target="grid-four-up">grid-four-up</UncontrolledTooltip>
              <Icon imgSrc="grid-three-up" id="grid-three-up" />
              <UncontrolledTooltip placement="top" target="grid-three-up">grid-three-up</UncontrolledTooltip>
              <Icon imgSrc="grid-two-up" id="grid-two-up" />
              <UncontrolledTooltip placement="top" target="grid-two-up">grid-two-up</UncontrolledTooltip>
              <Icon imgSrc="move" id="move" />
              <UncontrolledTooltip placement="top" target="move">move</UncontrolledTooltip>
              <Icon imgSrc="trash" id="trash" />
              <UncontrolledTooltip placement="top" target="trash">trash</UncontrolledTooltip>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons2">
        <CardHeader>Icon Sizes</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <UncontrolledTooltip placement="top" target="plus-sign-outline-xs">size="xs"</UncontrolledTooltip>
              <Icon imgSrc="plus-sign-outline" id="plus-sign-outline-xs" size="xs"/>
              <UncontrolledTooltip placement="top" target="plus-sign-outline-sm">size="sm"</UncontrolledTooltip>
              <Icon imgSrc="plus-sign-outline" id="plus-sign-outline-sm" size="sm"/>
              <UncontrolledTooltip placement="top" target="plus-sign-outline-default">size="default"</UncontrolledTooltip>
              <Icon imgSrc="plus-sign-outline" id="plus-sign-outline-default"/>
              <UncontrolledTooltip placement="top" target="plus-sign-outline-sd">size="sd"</UncontrolledTooltip>
              <Icon imgSrc="plus-sign-outline" id="plus-sign-outline-sd" size="sd"/>
              <UncontrolledTooltip placement="top" target="plus-sign-outline-md">size="md"</UncontrolledTooltip>
              <Icon imgSrc="plus-sign-outline" id="plus-sign-outline-md" size="md"/>
              <UncontrolledTooltip placement="top" target="plus-sign-outline-lg">size="lg"</UncontrolledTooltip>
              <Icon imgSrc="plus-sign-outline" id="plus-sign-outline-lg" size="lg"/>
              <UncontrolledTooltip placement="top" target="plus-sign-outline-xl">size="xl"</UncontrolledTooltip>
              <Icon imgSrc="plus-sign-outline" id="plus-sign-outline-xl" size="xl"/>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons3">
        <CardHeader>Button Icons</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <Button outline radius="circle" color="link"><Icon imgSrc="cog" alt="edit" /></Button>
              <Button outline radius="circle" color="link"><Icon imgSrc="eye" alt="details" /></Button>
              <Button outline radius="circle" color="link"><Icon imgSrc="more-vertical" alt="more" /></Button>
              <Button outline radius="circle" color="link"><Icon imgSrc="close" alt="close" /></Button>
              <Button outline radius="circle" color="link"><Icon imgSrc="search" alt="search" /></Button>
              <Button outline radius="circle" color="link"><Icon imgSrc="user" alt="user" /></Button>
              <Button outline radius="circle" color="link"><Icon imgSrc="arrow-left" alt="arrow" /></Button>
              <Button radius="circle" color="dark"><Icon imgSrc="menu" alt="menu" inverse /></Button>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons4">
        <CardHeader>Spinner</CardHeader>
        <CardBody>
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
      </Card>,
    ]}
  />
);

export default UiIcons;
