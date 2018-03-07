import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Col, Icon, Loading, Row, Screen, Spinner, UncontrolledTooltip } from '../../../../src/components';
import IconTooltip from './IconTooltip';
import IconList from './IconList';

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
      <Card key="icons6">
        <CardHeader>Icon Names</CardHeader>
        <CardBody indent>
          <Row>
            <IconList iconName="activity"/>
            <IconList iconName="add-item"/>
            <IconList iconName="apps"/>
            <IconList iconName="archive"/>
            <IconList iconName="arrow-double-left"/>
            <IconList iconName="arrow-double-right"/>
            <IconList iconName="arrow-left"/>
            <IconList iconName="arrow-right"/>
            <IconList iconName="arrow-left-thick"/>
            <IconList iconName="arrow-right-thick"/>
            <IconList iconName="arrow-up-thick"/>
            <IconList iconName="arrow-down-thick"/>
            <IconList iconName="arrow-back"/>
            <IconList iconName="arrow-down"/>
            <IconList iconName="arrow-forward"/>
            <IconList iconName="arrow-up"/>
            <IconList iconName="audio"/>
            <IconList iconName="back"/>
            <IconList iconName="backspace"/>
            <IconList iconName="bold"/>
            <IconList iconName="book-open"/>
            <IconList iconName="bookmark"/>
            <IconList iconName="bookmark-outline"/>
            <IconList iconName="box"/>
            <IconList iconName="calendar"/>
            <IconList iconName="camera"/>
            <IconList iconName="caret-down"/>
            <IconList iconName="caret-up"/>
            <IconList iconName="check-line"/>
            <IconList iconName="check-line-thick"/>
            <IconList iconName="check-outline"/>
            <IconList iconName="check-outline-square"/>
            <IconList iconName="check-solid"/>
            <IconList iconName="check-solid-square"/>
            <IconList iconName="circle"/>
            <IconList iconName="circle-outline"/>
            <IconList iconName="compress"/>
            <IconList iconName="clipboard"/>
            <IconList iconName="clock-outline"/>
            <IconList iconName="clock-solid"/>
            <IconList iconName="close"/>
            <IconList iconName="close-sm"/>
            <IconList iconName="cloud-download"/>
            <IconList iconName="cloud-upload"/>
            <IconList iconName="code"/>
            <IconList iconName="cog"/>
            <IconList iconName="cog-outline"/>
            <IconList iconName="comment"/>
            <IconList iconName="comment-oval"/>
            <IconList iconName="data-download"/>
            <IconList iconName="data-upload"/>
            <IconList iconName="data-transfer-download"/>
            <IconList iconName="data-transfer-upload"/>
            <IconList iconName="delete"/>
            <IconList iconName="delete-key"/>
            <IconList iconName="delete-line"/>
            <IconList iconName="delete-line-thick"/>
            <IconList iconName="delete-outline"/>
            <IconList iconName="delete-solid"/>
            <IconList iconName="directory"/>
            <IconList iconName="document"/>
            <IconList iconName="documents"/>
            <IconList iconName="download"/>
            <IconList iconName="edit"/>
            <IconList iconName="expand"/>
            <IconList iconName="external"/>
            <IconList iconName="eye"/>
            <IconList iconName="folder"/>
            <IconList iconName="full-screen"/>
            <IconList iconName="grid-four-up"/>
            <IconList iconName="grid-three-up"/>
            <IconList iconName="grid-two-up"/>
            <IconList iconName="headphones"/>
            <IconList iconName="heart"/>
            <IconList iconName="highlight"/>
            <IconList iconName="info-outline"/>
            <IconList iconName="info-solid"/>
            <IconList iconName="insert"/>
            <IconList iconName="italic"/>
            <IconList iconName="link"/>
            <IconList iconName="list"/>
            <IconList iconName="list-cards"/>
            <IconList iconName="locked"/>
            <IconList iconName="locked-solid"/>
            <IconList iconName="login"/>
            <IconList iconName="logout"/>
            <IconList iconName="mail"/>
            <IconList iconName="menu"/>
            <IconList iconName="microphone"/>
            <IconList iconName="minus"/>
            <IconList iconName="minus-line"/>
            <IconList iconName="minus-line-thick"/>
            <IconList iconName="minus-outline"/>
            <IconList iconName="minus-outline-square"/>
            <IconList iconName="minus-solid"/>
            <IconList iconName="more-horizontal"/>
            <IconList iconName="more-vertical"/>
            <IconList iconName="move"/>
            <IconList iconName="notification"/>
            <IconList iconName="notification-outline"/>
            <IconList iconName="ordered-list"/>
            <IconList iconName="paperclip"/>
            <IconList iconName="pencil"/>
            <IconList iconName="photo"/>
            <IconList iconName="plus"/>
            <IconList iconName="plus-line"/>
            <IconList iconName="plus-line-thick"/>
            <IconList iconName="plus-outline"/>
            <IconList iconName="plus-outline-square"/>
            <IconList iconName="plus-solid"/>
            <IconList iconName="print"/>
            <IconList iconName="question"/>
            <IconList iconName="question-outline"/>
            <IconList iconName="refresh"/>
            <IconList iconName="revert"/>
            <IconList iconName="save"/>
            <IconList iconName="save-disk"/>
            <IconList iconName="search"/>
            <IconList iconName="services"/>
            <IconList iconName="social"/>
            <IconList iconName="sort"/>
            <IconList iconName="sort-horizontal"/>
            <IconList iconName="sound-histogram"/>
            <IconList iconName="sound-wave"/>
            <IconList iconName="star"/>
            <IconList iconName="star-outline"/>
            <IconList iconName="status"/>
            <IconList iconName="strikethrough"/>
            <IconList iconName="tag-outline"/>
            <IconList iconName="tag-solid"/>
            <IconList iconName="triniti"/>
            <IconList iconName="trash"/>
            <IconList iconName="underline"/>
            <IconList iconName="unknown"/>
            <IconList iconName="unlocked"/>
            <IconList iconName="unlocked-solid"/>
            <IconList iconName="upload"/>
            <IconList iconName="user"/>
            <IconList iconName="users"/>
            <IconList iconName="user-solid"/>
            <IconList iconName="video"/>
            <IconList iconName="video-camera"/>
            <IconList iconName="warning"/>
            <IconList iconName="warning-outline"/>
            <IconList iconName="warning-outline-alt"/>
            <IconList iconName="warning-outline-triangle"/>
            <IconList iconName="warning-solid"/>
            <IconList iconName="warning-solid-alt"/>
            <IconList iconName="warning-solid-triangle"/>
            <IconList iconName="zip"/>
            <IconList iconName="zoom-in"/>
            <IconList iconName="zoom-out"/>
          </Row>
        </CardBody>
      </Card>,
      <Card key="icons1">
        <CardHeader>Icons at 1rem Height</CardHeader>
        <CardBody indent>
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
              <IconTooltip iconName="cog-outline"/>
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
              <IconTooltip iconName="check-outline-square"/>
              <IconTooltip iconName="check-solid-square"/>
              <IconTooltip iconName="status"/>
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
              <IconTooltip iconName="users"/>
              <IconTooltip iconName="directory"/>
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
              <IconTooltip iconName="video-camera"/>
              <IconTooltip iconName="calendar"/>
              <IconTooltip iconName="comment"/>
              <IconTooltip iconName="comment-oval"/>
              <IconTooltip iconName="eye"/>
              <IconTooltip iconName="bookmark-outline"/>
              <IconTooltip iconName="bookmark"/>
              <IconTooltip iconName="audio"/>
              <IconTooltip iconName="headphones"/>
              <IconTooltip iconName="sound-histogram"/>
              <IconTooltip iconName="sound-wave"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <IconTooltip iconName="info-outline"/>
              <IconTooltip iconName="info-solid"/>
              <IconTooltip iconName="question"/>
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
              <IconTooltip iconName="locked-solid"/>
              <IconTooltip iconName="unlocked-solid"/>
              <IconTooltip iconName="circle"/>
              <IconTooltip iconName="circle-outline"/>
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
              <IconTooltip iconName="archive"/>
              <IconTooltip iconName="box"/>
              <IconTooltip iconName="zip"/>
              <IconTooltip iconName="document"/>
              <IconTooltip iconName="documents"/>
              <IconTooltip iconName="book-open"/>
              <IconTooltip iconName="unknown"/>
              <IconTooltip iconName="add-item"/>
              <IconTooltip iconName="clipboard"/>
              <IconTooltip iconName="tag-outline"/>
              <IconTooltip iconName="tag-solid"/>
              <IconTooltip iconName="link"/>
              <IconTooltip iconName="paperclip"/>
              <IconTooltip iconName="delete-key"/>
              <IconTooltip iconName="code"/>
              <IconTooltip iconName="print"/>
              <IconTooltip iconName="services"/>
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
        <CardBody indent>
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
              <IconTooltip iconName="delete-line-thick" size="alert-xxs" />
              <IconTooltip iconName="plus-line-thick" size="alert-xs" border />
              <IconTooltip iconName="check-line-thick" size="alert-sm" color="success" />
              <IconTooltip iconName="code" size="alert-md" color="info" border />
              <IconTooltip iconName="document" size="alert-lg" color="dark" border />
              <IconTooltip iconName="check-line-thick" size="alert-xl" color="success" border />
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons3">
        <CardHeader>Icon Colors</CardHeader>
        <CardBody indent>
          <Row>
            <Col>
              <IconTooltip iconName="check-outline" size="default"/>
              <IconTooltip iconName="check-outline" size="md" color="warning"/>
              <IconTooltip iconName="check-outline" size="lg" color="info"/>
              <IconTooltip iconName="check-outline" size="xl" color="danger"/>
              <IconTooltip iconName="check-outline" size="xxl" color="success"/>
              <IconTooltip iconName="cloud-upload" size="alert-sm" color="dark" radius="rounded" border />
              <IconTooltip iconName="warning-solid-triangle" size="alert-sm" color="warning" />
              <IconTooltip iconName="warning" size="alert-md" border />
              <IconTooltip iconName="check-line-thick" size="alert-md" color="success" />
              <IconTooltip iconName="delete-line-thick" size="alert-lg" color="danger" />
              <IconTooltip iconName="question" size="alert-xl" color="info" border />
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons4">
        <CardHeader>Button Icons</CardHeader>
        <CardBody indent>
          <Row>
            <Col>
              <Button outline radius="circle" color="link"><Icon imgSrc="cog" alt="edit" /></Button>
              <Button outline radius="circle" color="link"><Icon imgSrc="eye" alt="details" /></Button>
              <Button outline radius="circle" color="link"><Icon imgSrc="more-vertical" alt="more" /></Button>
              <Button outline radius="circle" color="link"><Icon imgSrc="close" alt="close" /></Button>
              <Button outline radius="circle" color="link"><Icon imgSrc="search" alt="search" /></Button>
              <Button outline radius="circle" color="link"><Icon imgSrc="user" alt="user" /></Button>
              <Button outline radius="circle" color="link"><Icon imgSrc="arrow-left" alt="arrow" /></Button>
              <Button radius="circle" color="success" size="sm"><Icon imgSrc="check-line-thick" alt="check-line-thick" size="sm"/></Button>
              <Button radius="circle" color="success"><Icon imgSrc="check-line-thick" alt="check-line-thick" /></Button>
              <Button radius="circle" color="success" size="md"><Icon imgSrc="check-line-thick" alt="check-line-thick" size="md"/></Button>
              <Button radius="circle" color="success" size="lg"><Icon imgSrc="check-line-thick" alt="check-line-thick" size="lg"/></Button>
              <Button radius="circle" color="success" size="xl"><Icon imgSrc="check-line-thick" alt="check-line-thick" size="xl"/></Button>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons5">
        <CardHeader>Toggle Icons</CardHeader>
        <CardBody indent>
          <Row>
            <Col>
              <Button outline color="light">Toggle</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons6">
        <CardHeader>Spinner</CardHeader>
        <CardBody indent>
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
