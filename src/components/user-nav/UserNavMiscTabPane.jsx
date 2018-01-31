import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardTitle, CardBody, CardText, TabPane } from '../';

const Misc = ({ tabId }) => (
  <TabPane tabId={tabId}>
    <Card>
      <CardBody>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>Go somewhere</Button>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>Go somewhere</Button>
      </CardBody>
    </Card>
  </TabPane>
);

Misc.propTypes = {
  tabId: PropTypes.string,
};

export default Misc;
