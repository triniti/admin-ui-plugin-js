import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbItem, NavItem } from 'reactstrap';

import AlertBar from '../alert-bar';
import Button from '../button';
import Breadcrumb from '../breadcrumb';
import Icon from '../icon';
import Nav from '../nav';
import RouterLink from '../router-link';
import ScreenPrimaryActions from './screen-primary-actions';

import dismissAlert from '../../actions/dismissAlert';
import './styles.scss';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true,
      isSidenavOpen: true,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleSidenav = this.toggleSidenav.bind(this);
  }

  toggleSidebar() {
    this.setState({
      isSidebarOpen: !this.state.isSidebarOpen,
    });
  }

  toggleSidenav() {
    this.setState({
      isSidenavOpen: !this.state.isSidenavOpen,
    });
  }

  render() {
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
      maxWidth,
      pageCount,
    } = this.props;

    const { isSidebarOpen, isSidenavOpen } = this.state;
    const sidenavClassess = `screen-sidenav ${isSidenavOpen ? '' : 'offcanvas-left'}`;
    const sidebarClassess = `screen-sidebar ${isSidebarOpen ? 'screen-sidebar-is-open' : ''}`;

    return (
      <div className="screen">
        {sidenav &&
        <div className={sidenavClassess} id="sidenav">
          {sidenavHeader !== null &&
          <div className="screen-sidenav-header">
            {sidenavHeader && <h3 className="screen-sidenav-header-title">{sidenavHeader}</h3>}
            <Button outline color="hover" className="screen-sidenav-toggler" onClick={this.toggleSidenav}>
              <Icon imgSrc="arrow-left" alt="close" className="screen-sidenav-toggler-img" />
            </Button>
          </div>}
          <div className="screen-sidenav-body">{sidenav}</div>
        </div>}

        <div className="screen-main">
          {(header || primaryActions || breadcrumbs.length) &&
          <div className="screen-header-container">
            {breadcrumbs.length > 0 && !pageCount &&
            <h1 className="screen-header-title">
              <Breadcrumb>
                {breadcrumbs.map(breadcrumb => (
                  <BreadcrumbItem key={breadcrumb.text}>
                    {breadcrumb.to && <RouterLink to={breadcrumb.to}>{breadcrumb.text}</RouterLink>}
                    {!breadcrumb.to && breadcrumb.text}
                  </BreadcrumbItem>
                ))}
              </Breadcrumb>
            </h1>}
            {breadcrumbs.length > 0 && pageCount &&
            <h1 className="screen-header-title">
              <Breadcrumb>
                {breadcrumbs.map(breadcrumb => (
                  <BreadcrumbItem key={breadcrumb.text}>
                    {breadcrumb.to && <RouterLink to={breadcrumb.to}>{breadcrumb.text}</RouterLink>}
                    {!breadcrumb.to && breadcrumb.text}
                  </BreadcrumbItem>
                ))}
              </Breadcrumb>
              {pageCount}
            </h1>}
            {breadcrumbs.length === 0 && header && !pageCount && <h1 className="screen-header-title">{header}</h1>}
            {breadcrumbs.length === 0 && header && pageCount && <h1 className="screen-header-title">{header} {pageCount}</h1>}
            {primaryActions && <ScreenPrimaryActions>{primaryActions}</ScreenPrimaryActions>}
          </div>}

          <AlertBar alerts={alerts} onDismiss={id => dispatch(dismissAlert(id))} />

          {tabs.length > 0 &&
          <Nav underline className="screen-navtabs">
            {tabs.map(tab => (
              <NavItem key={tab.to}>
                <RouterLink navTab to={tab.to}>{tab.text}</RouterLink>
              </NavItem>
            ))}
          </Nav>}

          <div className="screen-body-container">
            <div className="screen-body">
              <div className="screen-body-content" style={{ maxWidth }}>{body}</div>
            </div>
            {sidebar &&
            <div className={sidebarClassess} id="screen-sidebar">
              <Button radius="circle" color="info" className="screen-sidebar-toggler" onClick={this.toggleSidebar}>
                <Icon imgSrc="arrow-left-thick" alt="arrow" />
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
  }
}

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
  maxWidth: PropTypes.string,
  pageCount: PropTypes.node,
};

Screen.defaultProps = {
  alerts: [],
  breadcrumbs: [],
  dispatch: () => {},
  footer: null,
  maxWidth: '1008px',
  sidenavHeader: null,
  tabs: [],
  pageCount: null,
};

export default Screen;
