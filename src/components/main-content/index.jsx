// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const MainContent = ({ size, children }) => (
  <div className="main-content">
    {size &&
    <div className={`max-width max-width-${size}`}>
      {children}
    </div>
    }
    {!size && children }
  </div>
);

MainContent.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
};

MainContent.defaultProps = {
  size: '',
};

export default MainContent;
