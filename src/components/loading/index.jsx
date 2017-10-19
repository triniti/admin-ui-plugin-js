// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Loading = ({ styleName, children }) => (
  <div className={`loading-container ${(styleName || '')}`}>
    <ul className="loading-animation">
      <li className="loading-dot" />
      <li className="loading-dot" />
      <li className="loading-dot" />
    </ul>
    <span className="loading-children">{ children }</span>
  </div>
);

Loading.propTypes = {
  styleName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Loading;
