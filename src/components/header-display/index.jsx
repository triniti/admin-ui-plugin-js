// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const HeaderDisplay = ({ title = null, styleName, children }) => (
  <div className="header-display">
    <h1 className="header-display-title">{title}</h1>{children}
  </div>
);

HeaderDisplay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default HeaderDisplay;
