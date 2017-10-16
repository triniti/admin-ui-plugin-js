// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const MainContainer = ({ children }) => (
  <div className="main-container">{children}</div>
);

MainContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default MainContainer;
