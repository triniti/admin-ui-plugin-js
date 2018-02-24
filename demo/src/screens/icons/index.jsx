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
              <IconTooltip iconName="backspace"/>
              <IconTooltip iconName="back"/>
              <IconTooltip iconName="revert"/>
              <IconTooltip iconName="close"/>
              <IconTooltip iconName="close-sm"/>
              <IconTooltip iconName="expand"/>
              <IconTooltip iconName="full-screen"/>
              <IconTooltip iconName="compress"/>
              <IconTooltip iconName="refresh"/>
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
              <IconTooltip iconName="sort-horizontal"/>
              <IconTooltip iconName="apps"/>
              <IconTooltip iconName="list"/>
              <IconTooltip iconName="ordered-list"/>
              <IconTooltip iconName="list-cards"/>
              <IconTooltip iconName="grid-four-up"/>
              <IconTooltip iconName="grid-three-up"/>
              <IconTooltip iconName="grid-two-up"/>
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
              <IconTooltip iconName="cloud-download"/>
              <IconTooltip iconName="cloud-upload"/>
              <IconTooltip iconName="plus-outline-square"/>
              <IconTooltip iconName="minus-outline-square"/>
              <IconTooltip iconName="plus-solid"/>
              <IconTooltip iconName="minus-solid"/>
              <IconTooltip iconName="delete-solid"/>
              <IconTooltip iconName="check-solid"/>
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
              <IconTooltip iconName="zoom-in"/>
              <IconTooltip iconName="zoom-out"/>
              <IconTooltip iconName="user"/>
              <IconTooltip iconName="user-solid"/>
              <IconTooltip iconName="activity"/>
              <IconTooltip iconName="social"/>
              <IconTooltip iconName="login"/>
              <IconTooltip iconName="logout"/>
              <IconTooltip iconName="move"/>
              <IconTooltip iconName="trash"/>
              <IconTooltip iconName="microphone"/>
              <IconTooltip iconName="camera"/>
              <IconTooltip iconName="save-disk"/>
              <IconTooltip iconName="mail"/>
              <IconTooltip iconName="photo"/>
              <IconTooltip iconName="video"/>
              <IconTooltip iconName="calendar"/>
              <IconTooltip iconName="comment"/>
              <IconTooltip iconName="eye"/>
              <IconTooltip iconName="bookmark-outline"/>
              <IconTooltip iconName="bookmark"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <IconTooltip iconName="info-outline"/>
              <IconTooltip iconName="info-solid"/>
              <IconTooltip iconName="question-outline"/>
              <IconTooltip iconName="warning"/>
              <IconTooltip iconName="warning-outline"/>
              <IconTooltip iconName="warning-outline-alt"/>
              <IconTooltip iconName="warning-outline-triangle"/>
              <IconTooltip iconName="warning-solid"/>
              <IconTooltip iconName="warning-solid-alt"/>
              <IconTooltip iconName="warning-solid-triangle"/>
              <IconTooltip iconName="heart"/>
              <IconTooltip iconName="star-outline"/>
              <IconTooltip iconName="star"/>
              <IconTooltip iconName="notification-outline"/>
              <IconTooltip iconName="notification"/>
              <IconTooltip iconName="locked"/>
              <IconTooltip iconName="unlocked"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <IconTooltip iconName="pencil"/>
              <IconTooltip iconName="edit"/>
              <IconTooltip iconName="insert"/>
              <IconTooltip iconName="bold"/>
              <IconTooltip iconName="italic"/>
              <IconTooltip iconName="underline"/>
              <IconTooltip iconName="strikethrough"/>
              <IconTooltip iconName="highlight"/>
              <IconTooltip iconName="external"/>
              <IconTooltip iconName="clock-outline"/>
              <IconTooltip iconName="clock-solid"/>
              <IconTooltip iconName="folder"/>
              <IconTooltip iconName="document"/>
              <IconTooltip iconName="add-item"/>
              <IconTooltip iconName="clipboard"/>
              <IconTooltip iconName="tag-outline"/>
              <IconTooltip iconName="tag-solid"/>
              <IconTooltip iconName="link"/>
              <IconTooltip iconName="paperclip"/>
              <IconTooltip iconName="delete-key"/>
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
          <Row>
            <Col>
              <IconTooltip iconName="triniti" size="xl"/>
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
