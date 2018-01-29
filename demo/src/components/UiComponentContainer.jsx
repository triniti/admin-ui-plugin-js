import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import UiComponents from '../config.module';

const UiComponentContainer = ({ match }) => {
  const elem = UiComponents[match.params.componentId];

  return [
    <div>
        {elem}{/* The UI component to be displayed, @see component-config */}
    </div>
  ];
};

UiComponentContainer.propTypes = {
  match: PropTypes.object,
};

export default UiComponentContainer;
