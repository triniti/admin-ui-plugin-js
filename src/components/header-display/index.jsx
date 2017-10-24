// react
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const HeaderDisplay = ({ title, className, children }) => (
  <div className="header-display">
    <h1 className={classnames('header-display-title', className)}>
      {title}
    </h1>
    {children}
  </div>
);

HeaderDisplay.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

HeaderDisplay.defaultProps = {
  title: '',
};

export default HeaderDisplay;
