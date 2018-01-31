import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
  body: PropTypes.node,
  sidebar: PropTypes.node,
};

const ScreenBody = (props) => {
  const {
    body,
    sidebar,
  } = props;

  return [
    <div className="screen-body-container">
        <div className="screen-body">{body}</div>
        {sidebar && <div className="screen-sidebar">{sidebar}</div>}
    </div>
  ];
};

ScreenBody.propTypes = propTypes;

export default ScreenBody;
