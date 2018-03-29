import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Icon, IconGroup, Loading, Row, Screen, Spinner, UncontrolledTooltip } from '../../../../src/components';
import IconTooltip from './IconTooltip';
import IconList from './IconList';
import './styles.scss';

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
        <CardHeader>Icon Names</CardHeader>
        <CardBody indent>
          <Row>
            <IconList iconName="activity"/>
            <IconList iconName="add-item"/>
            <IconList iconName="alarm"/>
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
            <IconList iconName="bolt-outline"/>
            <IconList iconName="bolt-solid"/>
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
            <IconList iconName="collection"/>
            <IconList iconName="comment"/>
            <IconList iconName="comment-oval"/>
            <IconList iconName="compress"/>
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
            <IconList iconName="home-outline"/>
            <IconList iconName="home-solid"/>
            <IconList iconName="iframe"/>
            <IconList iconName="info-outline"/>
            <IconList iconName="info-solid"/>
            <IconList iconName="insert"/>
            <IconList iconName="italic"/>
            <IconList iconName="link"/>
            <IconList iconName="list"/>
            <IconList iconName="list-cards"/>
            <IconList iconName="location-outline"/>
            <IconList iconName="location-solid"/>
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
            <IconList iconName="pause"/>
            <IconList iconName="pause-outline"/>
            <IconList iconName="pencil"/>
            <IconList iconName="phone-mobile"/>
            <IconList iconName="phone-outline"/>
            <IconList iconName="phone-solid"/>
            <IconList iconName="photo"/>
            <IconList iconName="pin"/>
            <IconList iconName="pin-outline-slanted"/>
            <IconList iconName="pin-slanted"/>
            <IconList iconName="play"/>
            <IconList iconName="play-outline"/>
            <IconList iconName="play-stroke"/>
            <IconList iconName="playlist"/>
            <IconList iconName="plus"/>
            <IconList iconName="plus-line"/>
            <IconList iconName="plus-line-thick"/>
            <IconList iconName="plus-outline"/>
            <IconList iconName="plus-outline-square"/>
            <IconList iconName="plus-solid"/>
            <IconList iconName="print"/>
            <IconList iconName="question"/>
            <IconList iconName="question-outline"/>
            <IconList iconName="question-solid"/>
            <IconList iconName="refresh"/>
            <IconList iconName="revert"/>
            <IconList iconName="save"/>
            <IconList iconName="save-disk"/>
            <IconList iconName="save-diskette"/>
            <IconList iconName="search"/>
            <IconList iconName="services"/>
            <IconList iconName="settings"/>
            <IconList iconName="social"/>
            <IconList iconName="sort"/>
            <IconList iconName="sort-horizontal"/>
            <IconList iconName="sort-vertical"/>
            <IconList iconName="sound-histogram"/>
            <IconList iconName="sound-wave"/>
            <IconList iconName="star"/>
            <IconList iconName="star-outline"/>
            <IconList iconName="status"/>
            <IconList iconName="strikethrough"/>
            <IconList iconName="tag-outline"/>
            <IconList iconName="tag-outline-slanted"/>
            <IconList iconName="tag-slanted"/>
            <IconList iconName="tag-solid"/>
            <IconList iconName="timeline"/>
            <IconList iconName="triniti"/>
            <IconList iconName="trash"/>
            <IconList iconName="tweet"/>
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

      <Card key="social-icons">
        <CardHeader>Social Icons</CardHeader>
        <CardBody indent>
          <Row className="mb-3">
            <Col>
              <IconTooltip iconName="facebook"/>
              <IconTooltip iconName="google"/>
              <IconTooltip iconName="imgur"/>
              <IconTooltip iconName="instagram"/>
              <IconTooltip iconName="linkedin"/>
              <IconTooltip iconName="pinterest"/>
              <IconTooltip iconName="twitter"/>
              <IconTooltip iconName="vevo"/>
              <IconTooltip iconName="youtube"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Icon imgSrc="facebook" alert size="xxs" />
              <Icon imgSrc="google" alert size="xxs" />
              <Icon imgSrc="imgur" alert size="xxs" />
              <Icon imgSrc="instagram" alert size="xxs" />
              <Icon imgSrc="linkedin" alert size="xxs" />
              <Icon imgSrc="pinterest" alert size="xxs" />
              <Icon imgSrc="twitter" alert size="xxs" />
              <Icon imgSrc="vevo" alert size="xxs" />
              <Icon imgSrc="youtube" alert size="xxs" />
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons2">
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
              <IconTooltip iconName="sort-vertical"/>
              <IconTooltip iconName="apps"/>
              <IconTooltip iconName="list"/>
              <IconTooltip iconName="ordered-list"/>
              <IconTooltip iconName="list-cards"/>
              <IconTooltip iconName="grid-four-up"/>
              <IconTooltip iconName="grid-three-up"/>
              <IconTooltip iconName="grid-two-up"/>
              <IconTooltip iconName="collection"/>
              <IconTooltip iconName="playlist"/>
              <IconTooltip iconName="timeline"/>
              <IconTooltip iconName="settings"/>
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
              <IconTooltip iconName="phone-mobile"/>
              <IconTooltip iconName="phone-outline"/>
              <IconTooltip iconName="phone-solid"/>
              <IconTooltip iconName="activity"/>
              <IconTooltip iconName="social"/>
              <IconTooltip iconName="login"/>
              <IconTooltip iconName="logout"/>
              <IconTooltip iconName="move"/>
              <IconTooltip iconName="trash"/>
              <IconTooltip iconName="microphone"/>
              <IconTooltip iconName="camera"/>
              <IconTooltip iconName="save-disk"/>
              <IconTooltip iconName="save-diskette"/>
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
              <IconTooltip iconName="question-solid"/>
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
              <IconTooltip iconName="location-solid"/>
              <IconTooltip iconName="location-outline"/>
              <IconTooltip iconName="pin"/>
              <IconTooltip iconName="pin-slanted"/>
              <IconTooltip iconName="pin-outline-slanted"/>
              <IconTooltip iconName="bolt-outline"/>
              <IconTooltip iconName="bolt-solid"/>
              <IconTooltip iconName="play-stroke"/>
              <IconTooltip iconName="play"/>
              <IconTooltip iconName="pause"/>
              <IconTooltip iconName="play-outline"/>
              <IconTooltip iconName="pause-outline"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <IconTooltip iconName="home-outline"/>
              <IconTooltip iconName="home-solid"/>
              <IconTooltip iconName="pencil"/>
              <IconTooltip iconName="edit"/>
              <IconTooltip iconName="insert"/>
              <IconTooltip iconName="bold"/>
              <IconTooltip iconName="italic"/>
              <IconTooltip iconName="underline"/>
              <IconTooltip iconName="strikethrough"/>
              <IconTooltip iconName="highlight"/>
              <IconTooltip iconName="external"/>
              <IconTooltip iconName="alarm"/>
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
              <IconTooltip iconName="tag-outline-slanted"/>
              <IconTooltip iconName="tag-slanted"/>
              <IconTooltip iconName="tag-solid"/>
              <IconTooltip iconName="link"/>
              <IconTooltip iconName="paperclip"/>
              <IconTooltip iconName="delete-key"/>
              <IconTooltip iconName="code"/>
              <IconTooltip iconName="iframe"/>
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

      <Card key="icons3">
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
              <IconTooltip iconName="question" alert size="xxs" color="secondary" />
              <IconTooltip iconName="delete-line-thick" alert size="xxs" />
              <IconTooltip iconName="plus-line-thick" alert size="xs" border />
              <IconTooltip iconName="check-line-thick" alert size="sm" color="success" />
              <IconTooltip iconName="code" alert size="md" color="info" border />
              <IconTooltip iconName="document" alert size="lg" color="dark" border />
              <IconTooltip iconName="check-line-thick" alert size="xl" color="success" border />
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons4">
        <CardHeader>Icon Colors</CardHeader>
        <CardBody indent>
          <Row>
            <Col>
              <IconTooltip iconName="check-outline" size="default"/>
              <IconTooltip iconName="check-outline" size="md" color="warning"/>
              <IconTooltip iconName="check-outline" size="lg" color="info"/>
              <IconTooltip iconName="check-outline" size="xl" color="danger"/>
              <IconTooltip iconName="check-outline" size="xxl" color="success"/>
              <IconTooltip iconName="warning" alert size="xxs" color="danger" border />
              <IconTooltip iconName="warning" alert size="xs" color="warning" border />
              <IconTooltip iconName="cloud-upload" alert size="sm" color="dark" radius="rounded" border />
              <IconTooltip iconName="warning-solid-triangle" alert size="sm" color="warning" />
              <IconTooltip iconName="warning" alert size="md" border />
              <IconTooltip iconName="check-line-thick" alert size="md" color="success" />
              <IconTooltip iconName="delete-line-thick" alert size="lg" color="danger" />
              <IconTooltip iconName="question" alert size="xl" color="info" border />
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons5">
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
              <Button radius="circle" color="secondary" size="xxs"><Icon imgSrc="question" size="xs"/></Button>
              <Button radius="circle" color="secondary" size="xs"><Icon imgSrc="question" size="sm"/></Button>
              <Button radius="circle" color="secondary" size="sm"><Icon imgSrc="question" size="md"/></Button>
              <Button radius="circle" color="success" size="sm"><Icon imgSrc="check-line-thick" alt="check-line-thick" size="sm"/></Button>
              <Button radius="circle" color="success"><Icon imgSrc="check-line-thick" alt="check-line-thick" /></Button>
              <Button radius="circle" color="success" size="md"><Icon imgSrc="check-line-thick" alt="check-line-thick" size="md"/></Button>
              <Button radius="circle" color="success" size="lg"><Icon imgSrc="check-line-thick" alt="check-line-thick" size="lg"/></Button>
              <Button radius="circle" color="success" size="xl"><Icon imgSrc="check-line-thick" alt="check-line-thick" size="xl"/></Button>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons6">
        <CardHeader>Icon Group</CardHeader>
        <CardBody indent>
          <Row>
            <Col>
              <IconGroup className="mb-2 mr-4">
                <Icon imgSrc="search" alert size="lg" radius="rounded" border color="dark" />
                <Icon imgSrc="users" alert size="sm" border className="bg-white" color="dark" outline />
              </IconGroup>
              <IconGroup className="mb-2 mr-4">
                <Icon imgSrc="twitter" alert size="lg" radius="rounded" border/>
                <Icon imgSrc="tweet" alert size="sm"/>
              </IconGroup>
              <IconGroup className="mb-2 mr-4">
                <Icon imgSrc="pinterest" alert size="lg" radius="rounded" border/>
                <Icon imgSrc="pin-slanted" alert size="sm"/>
              </IconGroup>
              <IconGroup className="mb-2 mr-4">
                <Icon imgSrc="facebook" alert size="lg" radius="rounded" border/>
                <Icon imgSrc="play" alert size="sm"/>
              </IconGroup>
              <IconGroup className="mb-2 mr-4" bottom left>
                <Icon imgSrc="instagram" alert size="lg" radius="rounded" border/>
                <Icon imgSrc="camera" alert size="sm"/>
              </IconGroup>
              <IconGroup className="mb-2 mr-3" bottom>
                <Icon imgSrc="twitter" alert size="md" radius="rounded" border/>
                <Icon imgSrc="play" alert size="xs"/>
              </IconGroup>
              <IconGroup className="mb-2 mr-3">
                <Icon imgSrc="twitter" alert radius="rounded" border/>
                <Icon imgSrc="play" alert size="xxs" color="secondary"/>
              </IconGroup>
              <IconGroup className="mb-2 mr-3">
                <Icon imgSrc="youtube" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="playlist" alert size="xxs" color="secondary"/>
              </IconGroup>
              <IconGroup className="mb-2 mr-3">
                <Icon imgSrc="facebook" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="warning" size="md" color="warning" className="bg-warning text-white"/>
              </IconGroup>
              <IconGroup className="mb-2 mr-3">
                <Icon imgSrc="instagram" size="md"/>
                <Icon imgSrc="locked-solid" size="sm" color="danger" className="bg-warning text-white"/>
              </IconGroup>
              <IconGroup className="mb-2 mr-3">
                <Icon imgSrc="facebook" size="md"/>
                <Icon imgSrc="user" size="sm" color="secondary"  className="bg-warning text-white"/>
              </IconGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons7">
        <CardHeader>File Types using IconGroup</CardHeader>
        <CardBody indent>
          <Row className="mb-3">
            <Col>
              <Icon imgSrc="code" alert size="sm" radius="rounded" border className="mb-4 mr-3"/>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="pencil" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="facebook" size="lg" className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="play-stroke" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="facebook" size="lg" className="bg-white"/>
              </IconGroup>
              <Icon imgSrc="google-maps" size="xxl" className="mb-4 mr-3"/>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="location-outline" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="google" size="lg" className="bg-white"/>
              </IconGroup>
              <Icon imgSrc="iframe-text" size="xxl" className="mb-4 mr-3"/>
              <Icon imgSrc="iframe" alert size="sm" radius="rounded" border className="ml-0 mb-4 mr-3"/>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="pencil" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="imgur" size="lg" className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="camera" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="instagram" size="lg" className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="pin-outline-slanted" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="pinterest" size="lg" className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="user" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="pinterest" size="lg" className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="timeline" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="twitter" size="lg" className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="collection" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="twitter" size="lg" className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="bolt-outline" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="twitter" size="lg" className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="search" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="twitter" size="lg" className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="tweet" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="twitter" size="lg" className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="user" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="twitter" size="lg" className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="play-stroke" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="twitter" size="lg" className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="play-stroke" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="vevo" size="lg" className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="playlist" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="youtube" alert size="xxs" outline/>
              </IconGroup>
              <IconGroup className="mb-4 mr-3" left>
                <Icon imgSrc="play-stroke" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="youtube" alert size="xxs" outline/>
              </IconGroup>

            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Icon imgSrc="code" alert size="sm" radius="rounded" border className="mb-2 mr-3"/>
              <IconGroup className="mb-2 mr-3" left>
                <Icon imgSrc="facebook" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="pencil" alert size="xxs" outline/>
              </IconGroup>
              <IconGroup className="mb-2 mr-3" left>
                <Icon imgSrc="facebook" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="play" alert size="xxs" outline/>
              </IconGroup>
              <Icon imgSrc="google-maps" size="xxl" className="mb-2 mr-3"/>
              <Icon imgSrc="iframe-text" size="xxl" className="ml-0 mb-2 mr-3"/>
              <IconGroup className="mb-2 mr-3" left>
                <Icon imgSrc="imgur" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="pencil" alert size="xxs" outline/>
              </IconGroup>
              <IconGroup className="mb-2 mr-3" left>
                <Icon imgSrc="instagram" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="camera" alert size="xxs" outline/>
              </IconGroup>
              <IconGroup className="mb-2 mr-3" left>
                <Icon imgSrc="pinterest" alert size="sm" radius="rounded" border/>
                <Icon imgSrc="pin-slanted" alert size="xxs" outline/>
              </IconGroup>

            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Icon imgSrc="code" alert size="md" radius="rounded" border className="mb-2 mr-3"/>
              <IconGroup className="mb-2 mr-3" left>
                <Icon imgSrc="facebook" alert size="md" radius="rounded" border/>
                <Icon imgSrc="pencil" alert size="xs" border outline className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-2 mr-3" left>
                <Icon imgSrc="facebook" alert size="md" radius="rounded" border/>
                <Icon imgSrc="play" alert size="xs" border outline className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-2 mr-3" left>
                <Icon imgSrc="imgur" alert size="md" radius="rounded" border/>
                <Icon imgSrc="pencil" alert size="xs" border outline className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-2 mr-3" left>
                <Icon imgSrc="instagram" alert size="md" radius="rounded" border/>
                <Icon imgSrc="camera" alert size="xs" border outline className="bg-white"/>
              </IconGroup>
              <IconGroup className="mb-2 mr-3" left>
                <Icon imgSrc="pinterest" alert size="md" radius="rounded" border/>
                <Icon imgSrc="pin" alert size="xs" border outline className="bg-white"/>
              </IconGroup>
              <Icon imgSrc="iframe-text" alert size="md" className="mb-2 mr-3" radius="none" noborder />
              <Icon imgSrc="google-maps" alert size="md" className="mb-2 mr-3" radius="none" noborder />
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="deprecated">
        <CardHeader>File Types - *deprecated</CardHeader>
        <CardBody indent>
          <Row>
            <Col>
              <Icon imgSrc="code" alert size="md" radius="rounded" border className="mb-2 ml-2"/>
              <Icon imgSrc="facebook-post" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="facebook-video" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="google-maps" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="iframe-text" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="imgur-post" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="instagram-media" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="pinterest-pin" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="pinterest-profile" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="twitter-collection-timeline" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="twitter-list-timeline" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="twitter-moment" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="twitter-search-timeline" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="twitter-tweet" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="twitter-user-timeline" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="twitter-video" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="vevo-video" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="youtube-playlist" alert size="md" radius="rounded" border className="mb-2" />
              <Icon imgSrc="youtube-video" alert size="md" radius="rounded" border className="mb-2" />
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons8">
        <CardHeader>Spinner</CardHeader>
        <CardBody indent>
          <CardTitle></CardTitle>
          <Row>
            <Col>
              <Spinner className="mb-3 mr-3" color="#03caa5" width="16" strokeWidth="10" />
              <Spinner className="mb-3 mr-3" color="#7a7a7c" width="24" strokeWidth="4" />
              <Spinner className="mb-3 mr-3" color="#08a0e8" strokeWidth="10" />
              <Spinner className="mb-3 mr-3" color="black" width="48" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Spinner className="mb-3">Loading...</Spinner>

            </Col>
          </Row>
          <Row>
            <Col>
              <Button><Spinner width="20" className="mr-2"/> Loading</Button>

            </Col>
          </Row>
          <Row>
            <Col>
              <Button size="sm" outline><Spinner width="16" className="mr-2"/> Loading</Button>

            </Col>
          </Row>
          <Row>
            <Col>
              <Button size="sm" color="secondary"><Spinner width="16" color="white" className="mr-2"/> Loading</Button>

            </Col>
          </Row>
        </CardBody>
      </Card>,

       <Card key="icons9">
        <CardHeader>Spinner Centered</CardHeader>
        <CardBody indent>
          <Row>
            <Col style={{height:'400px'}}>
              <Spinner centered width="56">Loading...</Spinner>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="icons10">
        <CardHeader>Loading</CardHeader>
        <CardBody indent>
          <Row>
            <Col>
              <Loading />
            </Col>
          </Row>
        </CardBody>
      </Card>,
    ]}
  />
);

export default UiIcons;