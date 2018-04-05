/* globals DEMO_SCREENS */

import React from 'react';
import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';
import { ListGroup, ListGroupItem, RouterLink } from '../../../../src/components';

const Sidenav = props => (
  <ListGroup nav className="pt-3 pb-4">
    {DEMO_SCREENS.filter(screen => screen !== 'welcome').map(screen => (
      <ListGroupItem key={screen} active={props.activeScreen === screen}>
        <RouterLink to={`/${screen}`} className="list-group-item-action">{screen.split('-').map(startCase).join(' ')}</RouterLink>
      </ListGroupItem>
    ))}
  </ListGroup>
);

Sidenav.propTypes = {
  activeScreen: PropTypes.string,
};

export default Sidenav;
