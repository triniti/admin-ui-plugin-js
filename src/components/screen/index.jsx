import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { BreadcrumbItem, NavItem } from 'reactstrap';
import get from 'lodash/get';

import AlertBar from '../alert-bar';
import Button from '../button';
import Breadcrumb from '../breadcrumb';
import Icon from '../icon';
import Nav from '../nav';
import RouterLink from '../router-link';
import PrimaryActions from './PrimaryActions';

import dismissAlert from '../../actions/dismissAlert';
import './styles.scss';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true,
      isSidenavOpen: true,
    };
    
    this.screenBodyRef = React.createRef();

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleSidenav = this.toggleSidenav.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
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

  componentDidMount() {
    document.title = this.props.title || 'Triniti';
    this.scrollToTop();
  }

  componentWillUpdate(nextProps) {
    document.title = nextProps.title || 'Triniti';
  }

  scrollToTop() {
    const screenBody = this.screenBodyRef.current;
    screenBody.scrollTo({ top: 0, behavior: 'auto' });
  }

  render() {
    const {
      badge,
      alerts,
      body,
      breadcrumbs,
      dispatch,
      footer,
      header,
      match,
      maxWidth,
      primaryActions,
      secondaryActions,
      sidebar,
      sidenav,
      sidenavHeader,
      tabs,
    } = this.props;

    const { isSidebarOpen, isSidenavOpen } = this.state;
    const sidenavClassess = `screen-sidenav ${isSidenavOpen ? '' : 'offcanvas-left'}`;
    const sidebarClassess = `screen-sidebar ${isSidebarOpen ? 'screen-sidebar-is-open' : ''}`;

    return (
      <div className="screen">
        {sidenav
        && (
          <div className={sidenavClassess} id="sidenav">
            {sidenavHeader !== null
            && (
              <div className="screen-sidenav-header">
                {sidenavHeader && (
                  <h3 className="screen-sidenav-header-title">
                    {sidenavHeader}
                  </h3>
                )}
                <Button outline color="hover" className="screen-sidenav-toggler" onClick={this.toggleSidenav}>
                  <Icon imgSrc="arrow-left" alt="close" className="screen-sidenav-toggler-img" />
                </Button>
              </div>
            )}
            <div className="screen-sidenav-body">
              {sidenav}
            </div>
          </div>
        )}

        <div className="screen-main">
          {(header || primaryActions || breadcrumbs.length)
          && (
            <div className="screen-header-container">
              {badge && <div>{badge}</div>}
              {breadcrumbs.length > 0
              && (
                <h1 className="screen-header-title">
                  <Breadcrumb>
                    {breadcrumbs.map(breadcrumb => (
                      <BreadcrumbItem key={breadcrumb.text}>
                        {breadcrumb.to && (
                          <RouterLink to={breadcrumb.to}>
                            {breadcrumb.text}
                          </RouterLink>
                        )}
                        {!breadcrumb.to && breadcrumb.text}
                      </BreadcrumbItem>
                    ))}
                  </Breadcrumb>
                </h1>
              )}
              {breadcrumbs.length === 0 && header && (
                <h1 className="screen-header-title">
                  {header}
                </h1>
              )}
              {primaryActions && (
                <PrimaryActions>
                  {primaryActions}
                </PrimaryActions>
              )}
            </div>
          )}

          <AlertBar alerts={alerts} onDismiss={id => dispatch(dismissAlert(id))} />

          {tabs.length > 0
          && (
            <Nav underline className="screen-navtabs">
              {tabs.map((tab, i) => {
                const className = i === 0 && !get(match, 'params.tab') ? 'active' : '';

                return (
                  <NavItem key={tab.to} onClick={this.scrollToTop}>
                    <RouterLink navTab to={tab.to} className={className}>
                      {tab.text}
                    </RouterLink>
                  </NavItem>
                );
              })}
            </Nav>
          )}

          <div className="screen-body-container">
            <div ref={this.screenBodyRef}  className="screen-body">
              <div className="screen-body-content" style={{ maxWidth }}>
                {body}
              </div>
            </div>
            {sidebar
            && (
              <div className={sidebarClassess} id="screen-sidebar">
                <Button radius="circle" color="info" className="screen-sidebar-toggler" onClick={this.toggleSidebar}>
                  <Icon imgSrc="arrow-left-thick" alt="arrow" />
                </Button>
                <div className="screen-sidebar-body">
                  {sidebar}
                </div>
              </div>
            )}
          </div>
        </div>

        {(footer || secondaryActions)
        && (
          <div className="screen-footer-container">
            {footer && (
              <div className="screen-footer">
                {footer}
              </div>
            )}
            {secondaryActions && (
              <div className="screen-secondary-actions">
                {secondaryActions}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

Screen.propTypes = {
  alerts: PropTypes.array, // eslint-disable-line
  badge: PropTypes.node,
  body: PropTypes.node,
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string,
    text: PropTypes.string,
  })),
  dispatch: PropTypes.func,
  footer: PropTypes.node,
  header: PropTypes.node,
  match: PropTypes.object.isRequired, // eslint-disable-line
  maxWidth: PropTypes.string,
  primaryActions: PropTypes.node,
  secondaryActions: PropTypes.node,
  sidebar: PropTypes.node,
  sidenav: PropTypes.node,
  sidenavHeader: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  tabs: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.string,
  })),
  title: PropTypes.string,
};

Screen.defaultProps = {
  alerts: [],
  badge: null,
  body: null,
  breadcrumbs: [],
  dispatch: () => {},
  footer: null,
  header: null,
  maxWidth: '1008px',
  primaryActions: null,
  secondaryActions: null,
  sidebar: null,
  sidenav: null,
  sidenavHeader: null,
  tabs: [],
  title: null,
};

export default withRouter(Screen);
