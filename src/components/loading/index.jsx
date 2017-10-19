// react
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const Loading = ({ className, children }) => (
  <div className={classnames('loading-container', className)}>
    <ul className="loading-animation">
      <li className="loading-dot" />
      <li className="loading-dot" />
      <li className="loading-dot" />
    </ul>
    <span className="loading-children">{ children }</span>
  </div>
);

Loading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Loading;
