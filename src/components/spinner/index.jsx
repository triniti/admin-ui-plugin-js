// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Spinner = ({ styleName, children }) => (
  <div className={`spinner-container ${(styleName || '')}`}>
    <svg className="spinner-animation" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
    </svg>
    <span className="spinner-children">{ children }</span>
  </div>
);

Spinner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Spinner;
