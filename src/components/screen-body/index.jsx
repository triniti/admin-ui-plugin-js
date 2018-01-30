import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import TabNav from '../tab-nav';

const propTypes = {
  tabs: PropTypes.node,
  body: PropTypes.node,
  sidebar: PropTypes.node,
};

const ScreenBody = (props) => {
  const {
    tabs,
    body,
    sidebar,
  } = props;

  return [
    tabs && <TabNav>{tabs}</TabNav>,
    <div className="screen-body-container">
        <div className="screen-body">{body}</div>
        {sidebar && <div className="screen-sidebar">{sidebar}</div>}
    </div>
  ];
};

ScreenBody.propTypes = propTypes;

export default ScreenBody;
