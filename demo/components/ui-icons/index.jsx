import React from 'react';
import { Button, Card, CardBlock, Col, Row, Loading, Spinner } from '../../../src/components';

import iconEye from 'assets/img/svg/icons/eye.svg';
import iconCog from 'assets/img/svg/icons/cog.svg';
import iconMore from 'assets/img/svg/icons/more-vertical.svg';
import iconClose from 'assets/img/svg/icons/close.svg';
import iconSearch from 'assets/img/svg/icons/search.svg';
import iconUser from 'assets/img/svg/icons/user.svg';
import iconArrowLeft from 'assets/img/svg/icons/angle-left.svg';
import iconMenu from 'assets/img/svg/icons/menu.svg';

export default () => (
  <Card>
    <CardBlock>
      <Row>
        <Col>
          <Button className={'btn-icon rounded-circle mr-2'} color="outline-link"><img src={iconCog} alt="edit" /></Button>
          <Button className={'btn-icon rounded-circle mr-2'} color="outline-link"><img src={iconEye} alt="details" /></Button>
          <Button className={'btn-icon rounded-circle mr-2'} color="outline-link"><img src={iconMore} alt="more" /></Button>
          <Button className={'btn-icon rounded-circle mr-2'} color="outline-link"><img src={iconClose} alt="close" /></Button>
          <Button className={'btn-icon rounded-circle mr-2'} color="outline-link"><img src={iconSearch} alt="search" /></Button>
          <Button className={'btn-icon rounded-circle mr-2'} color="outline-link"><img src={iconUser} alt="user" /></Button>
          <Button className={'btn-icon rounded-circle mr-2'} color="outline-link"><img src={iconArrowLeft} alt="arrow" /></Button>
          <Button className={'btn-icon rounded-circle mr-2'} color="outline-link"><img src={iconMenu} alt="menu" /></Button>
        </Col>
      </Row>
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
    </CardBlock>
  </Card>
);
