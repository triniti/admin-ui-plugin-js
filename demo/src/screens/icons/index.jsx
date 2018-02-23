import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Col, Icon, Loading, Row, Screen, Spinner, UncontrolledTooltip } from '../../../../src/components';
import IconTooltip from './IconTooltip';

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
              <IconTooltip iconName="arrow-double-left"/>
              <IconTooltip iconName="arrow-double-right"/>
              <IconTooltip iconName="arrow-left"/>
              <IconTooltip iconName="arrow-right"/>
              <IconTooltip iconName="arrow-up"/>
              <IconTooltip iconName="arrow-down"/>
              <IconTooltip iconName="arrow-back"/>
              <IconTooltip iconName="arrow-forward"/>
              <IconTooltip iconName="back"/>
              <IconTooltip iconName="keyboard-backspace"/>
              <Icon imgSrc="close" id="close-tooltip" />
              <UncontrolledTooltip placement="top" target="close-tooltip">close</UncontrolledTooltip>
              <IconTooltip iconName="close-sm"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <IconTooltip iconName="more-vertical"/>
              <IconTooltip iconName="more-horizontal"/>
              <IconTooltip iconName="cog"/>
              <IconTooltip iconName="plus"/>
              <IconTooltip iconName="minus"/>
              <IconTooltip iconName="delete"/>
              <IconTooltip iconName="save"/>
              <IconTooltip iconName="caret-up"/>
              <IconTooltip iconName="caret-down"/>
              <IconTooltip iconName="sort"/>
              <IconTooltip iconName="apps"/>
              <IconTooltip iconName="list"/>
              <IconTooltip iconName="list-cards"/>
              <IconTooltip iconName="grid-four-up"/>
              <IconTooltip iconName="grid-three-up"/>
              <IconTooltip iconName="grid-two-up"/>
              <IconTooltip iconName="expand"/>
              <IconTooltip iconName="refresh"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <IconTooltip iconName="upload"/>
              <IconTooltip iconName="download"/>
              <IconTooltip iconName="data-transfer-download"/>
              <IconTooltip iconName="data-transfer-upload"/>
              <IconTooltip iconName="data-download"/>
              <IconTooltip iconName="data-upload"/>
              <IconTooltip iconName="plus-sign"/>
              <IconTooltip iconName="minus-sign"/>
              <IconTooltip iconName="delete-sign"/>
              <IconTooltip iconName="check-sign"/>
              <IconTooltip iconName="plus-outline"/>
              <IconTooltip iconName="minus-outline"/>
              <IconTooltip iconName="delete-outline"/>
              <IconTooltip iconName="check-outline"/>
              <IconTooltip iconName="plus-line"/>
              <IconTooltip iconName="minus-line"/>
              <IconTooltip iconName="delete-line"/>
              <IconTooltip iconName="check-line"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <IconTooltip iconName="menu"/>
              <IconTooltip iconName="search"/>
              <IconTooltip iconName="user"/>
              <IconTooltip iconName="move"/>
              <IconTooltip iconName="trash"/>
              <IconTooltip iconName="microphone"/>
              <IconTooltip iconName="camera"/>
              <IconTooltip iconName="save-disk"/>
              <IconTooltip iconName="mail"/>
              <IconTooltip iconName="photo"/>
              <IconTooltip iconName="calendar"/>
              <IconTooltip iconName="comment"/>
              <IconTooltip iconName="eye"/>
              <IconTooltip iconName="link"/>
              <IconTooltip iconName="paperclip"/>
              <IconTooltip iconName="bookmark-outline"/>
              <IconTooltip iconName="bookmark"/>
              <IconTooltip iconName="login"/>
              <IconTooltip iconName="logout"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <IconTooltip iconName="arrow-left-thick"/>
              <IconTooltip iconName="arrow-right-thick"/>
              <IconTooltip iconName="arrow-up-thick"/>
              <IconTooltip iconName="arrow-down-thick"/>
              <IconTooltip iconName="plus-line-thick"/>
              <IconTooltip iconName="minus-line-thick"/>
              <IconTooltip iconName="delete-line-thick"/>
              <IconTooltip iconName="check-line-thick"/>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons2">
        <CardHeader>Icon Sizes</CardHeader>
        <CardBody>
          <Row>
            <Col>

              <IconTooltip iconName="plus-outline" size="xxs"/>
              <IconTooltip iconName="plus-outline" size="xs"/>
              <IconTooltip iconName="plus-outline" size="sm"/>
              <IconTooltip iconName="plus-outline" size="default"/>
              <IconTooltip iconName="plus-outline" size="sd"/>
              <IconTooltip iconName="plus-outline" size="md"/>
              <IconTooltip iconName="plus-outline" size="lg"/>
              <IconTooltip iconName="plus-outline" size="xl"/>
              <IconTooltip iconName="plus-outline" size="xxl"/>
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
              <Button radius="circle" color="success"><Icon imgSrc="check-line-thick" alt="check-line-thick" /></Button>
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
