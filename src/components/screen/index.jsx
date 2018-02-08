import React from 'react';
import PropTypes from 'prop-types';
import dismissAlert from '../../actions/dismissAlert';
import AlertBar from '../alert-bar';
import Button from '../button';
import Icon from '../icon';
import Nav from '../nav';
import NavItem from '../nav-item';
import RouterLink from '../router-link';
import Breadcrumb from '../breadcrumb';
import BreadcrumbItem from '../breadcrumb-item';
import './styles.scss';

// fixme: this seems not very reacty
const toggleSidenav = () => {
  const sideNavWrapper = document.getElementById('sidenav');
  if (sideNavWrapper.classList.contains('offcanvas-left')) {
    sideNavWrapper.classList.remove('offcanvas-left');
  } else {
    sideNavWrapper.classList.add('offcanvas-left');
  }
};

const toggleSidebar = () => {
  const sideBarWrapper = document.getElementById('screen-sidebar');
  if (sideBarWrapper.classList.contains('screen-sidebar-is-open')) {
    sideBarWrapper.classList.remove('screen-sidebar-is-open');
  } else {
    sideBarWrapper.classList.add('screen-sidebar-is-open');
  }
};

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
    breadcrumbs,
  } = props;

  return (
    <div className="screen">

      {sidenav &&
      <div className="screen-sidenav" id="sidenav">
        {sidenavHeader !== null &&
        <div className="screen-sidenav-header">
          {sidenavHeader && <h3 className="screen-sidenav-header-title">{sidenavHeader}</h3>}
          <Button outline color="hover" className="screen-sidenav-toggler" onClick={toggleSidenav}>
            <Icon imgSrc="angle-left" alt="close" className="screen-sidenav-toggler-img" />
          </Button>
        </div>}
        <div className="screen-sidenav-body">{sidenav}</div>
      </div>}

      <div className="screen-main">
        {(header || primaryActions || breadcrumbs) &&
        <div className="screen-header-container">
          {breadcrumbs && breadcrumbs.length > 0 &&
          <h1 className="screen-header-title">
            <Breadcrumb>
              {breadcrumbs.map(breadcrumb => (
                <BreadcrumbItem>
                  {breadcrumb.to &&
                  <RouterLink to={breadcrumb.to}>{breadcrumb.text}</RouterLink>
                  }
                  {!breadcrumb.to && breadcrumb.text}
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
          </h1>
          }
          {(!breadcrumbs && header) && <h1 className="screen-header-title">{header}</h1>}
          {primaryActions && <div className="screen-primary-actions">{primaryActions}</div>}
        </div>}

        <AlertBar alerts={alerts} onDismiss={id => dispatch(dismissAlert(id))} />

        {tabs.length > 0 &&
        <Nav underline className="pt-2" theme="light">
          {tabs.map(tab => (
            <NavItem key={tab.to}>
              <RouterLink navTab to={tab.to}>{tab.text}</RouterLink>
            </NavItem>
          ))}
        </Nav>}

        <div className="screen-body-container">
          <div className="screen-body">{body}</div>
          {sidebar &&
          <div className="screen-sidebar" id="screen-sidebar">
            <Button radius="circle" color="info" className="screen-sidebar-toggler" onClick={toggleSidebar}>
              <Icon imgSrc="arrow-left" alt="arrow" size="xl" inverse />
            </Button>
            <div className="screen-sidebar-body">{sidebar}</div>
          </div>}
        </div>
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
  breadcrumbs: PropTypes.array,
  sidenav: PropTypes.node,
  sidenavHeader: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  sidebar: PropTypes.node,
  tabs: PropTypes.array,
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
  tabs: [],
  breadcrumbs: [],
};

export default Screen;
