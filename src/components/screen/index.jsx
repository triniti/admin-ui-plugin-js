import React from 'react';
import PropTypes from 'prop-types';
import dismissAlert from '../../actions/dismissAlert';
import AlertBar from '../alert-bar';
import Button from '../button';
import Icon from '../icon';
import './styles.scss';

// fixme: this seems not very reacty
const toggleSideWrapper = () => {
  const sideNavWrapper = document.getElementById('sidenav');
  if (sideNavWrapper.classList.contains('offcanvas-left')) {
    sideNavWrapper.classList.remove('offcanvas-left');
  } else {
    sideNavWrapper.classList.add('offcanvas-left');
  }
};

const Screen = (props) => {
  const {
    dispatch,
    alerts,
    header,
    sidenav,
    sidenavHeader,
    body,
    footer,
    primaryActions,
    secondaryActions,
  } = props;

  return (
    <div className="screen">

      {sidenav &&
      <div className="screen-sidenav" id="sidenav">
        {sidenavHeader !== null &&
        <div className="screen-sidenav__header">
          {sidenavHeader && <h3 className="screen-sidenav__header-title">{sidenavHeader}</h3>}
          <Button outline color="hover" className="screen-sidenav__toggler" onClick={toggleSideWrapper}>
            <Icon imgSrc="angle-left" alt="close" className="screen-sidenav__toggler-img" />
          </Button>
        </div>}
        <div className="screen-sidenav__body">{sidenav}</div>
      </div>}

      <div className="screen-main">
        {(header || primaryActions) &&
        <div className="screen-header__container">
          {header && <h1 className="screen-header__title">{header}</h1>}
          {primaryActions && <div className="screen-primary-actions">{primaryActions}</div>}
        </div>}

        <AlertBar alerts={alerts} onDismiss={id => dispatch(dismissAlert(id))} />
        {body}
      </div>

      {(footer || secondaryActions) &&
      <div className="screen-footer-container">
        {footer && <div className="screen-footer">{footer}</div>}
        {secondaryActions && <div className="screen-secondary-actions">{secondaryActions}</div>}
      </div>}

    </div>
  );
};

Screen.propTypes = {
  dispatch: PropTypes.func,
  alerts: PropTypes.array,
  header: PropTypes.node,
  sidenav: PropTypes.node,
  sidenavHeader: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
  primaryActions: PropTypes.node,
  secondaryActions: PropTypes.node,
};

const noop = () => {
};

Screen.defaultProps = {
  dispatch: noop,
  alerts: [],
  sidenavHeader: null,
};

export default Screen;
