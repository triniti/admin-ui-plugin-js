import React from 'react';
import PropTypes from 'prop-types';
import dismissAlert from '../../actions/dismissAlert';
import AlertBar from '../alert-bar';
import './styles.scss';

const Screen = (props) => {
  const {
    dispatch,
    alerts,

    header,
    sidenav,
    sidenavHeader,
    sidebar,
    tabs,
    body,
    footer,

    primaryActions,
    secondaryActions,
  } = props;

  return (
    <div className="screen">
      {sidenav &&
      <div className="screen-sidenav">
        {sidenavHeader && {sidenavHeader}}
        {sidenav && <div className="screen-sidenav-body">{sidenav}</div>}
      </div>}

      {(header || primaryActions) &&
      <div className="screen-header-container">
        {header && <div className="screen-header">{header}</div>}
        {primaryActions && <div className="screen-primary-actions">{primaryActions}</div>}
      </div>}

      <AlertBar alerts={alerts} onDismiss={id => dispatch(dismissAlert(id))} />

      <div className="screen-body-container">
        {tabs && <div className="screen-tabs">{tabs}</div>}
        {body}
      </div>

      {sidebar && <div className="screen-sidebar">{sidebar}</div>}

      {(footer || secondaryActions) &&
      <div className="screen-footer-container">
        {footer && <div className="screen-footer">{footer}</div>}
        {secondaryActions && <div className="screen-secondary-actions">{secondaryActions}</div>}
      </div>}
    </div>
  );
};

Screen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  alerts: PropTypes.array,

  header: PropTypes.node,
  sidenav: PropTypes.node,
  sidenavHeader: PropTypes.node,
  sidebar: PropTypes.node,
  tabs: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,

  primaryActions: PropTypes.node,
  secondaryActions: PropTypes.node,
};

Screen.defaultProps = {
  alerts: [],
};

export default Screen;
