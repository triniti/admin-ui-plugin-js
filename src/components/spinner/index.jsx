import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const Spinner = ({ className, children }) => (
  <div className={classnames('spinner-container', className)}>
    <svg
      className="spinner-animation"
      width="33px"
      height="33px"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
    </svg>
    <span className="spinner-children">{children}</span>
  </div>
);

Spinner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Spinner;
