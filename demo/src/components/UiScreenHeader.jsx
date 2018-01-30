import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from '../../../src/components';

import UiComponents from '../config.module';

const UiScreenHeader = ({ match }) => {

  return (
      match.params.componentId
  );
};

UiScreenHeader.propTypes = {
  match: PropTypes.object,
};

export default UiScreenHeader;
