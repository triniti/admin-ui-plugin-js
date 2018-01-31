import React from 'react';
import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';
import { ListGroup, ListGroupItem, RouterLink } from '../../../../src/components';

// fixme: make this dynamic by reading screens/* dirs
const screens = [
  'welcome',
  'alert-bars',
  'alerts',
  'badges',
  'breadcrumbs',
  'button-dropdowns',
  'button-groups',
  'buttons',
  'cards',
  'datalists',
  'dropdowns',
  'forms',
  'headers',
  'icons',
  'input-groups',
  'jumbotrons',
  'layouts',
  'list-groups',
  'media',
  'modals',
  'navbars',
  'navs',
  'pagination',
  'popovers',
  'progress-bars',
  'tables',
  'tabs',
  'toggles',
  'tooltips',
];

const Sidenav = props => (
  <ListGroup nav className="pt-3 pb-4">
    {screens.map(screen => (
      <ListGroupItem key={screen} active={props.activeScreen === screen}>
        <RouterLink to={`/${screen}`}>{screen.split('-').map(startCase).join(' ')}</RouterLink>
      </ListGroupItem>
    ))}
  </ListGroup>
);

Sidenav.propTypes = {
  activeScreen: PropTypes.string,
};

export default Sidenav;