import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardBody, CardTitle, CardText, TabPane } from '../';

const Misc = ({ tabId }) => (
  <TabPane tabId={tabId} className="px-3">
    <Card>
      <CardBody>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button outline color="inverse">Go somewhere</Button>
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
