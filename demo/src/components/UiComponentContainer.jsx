import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import UiComponents from '../config.module';

const UiComponentContainer = ({ match }) => {
  const elem = UiComponents[match.params.componentId];

  return (
      elem
  );
};

UiComponentContainer.propTypes = {
  match: PropTypes.object,
};

export default UiComponentContainer;
