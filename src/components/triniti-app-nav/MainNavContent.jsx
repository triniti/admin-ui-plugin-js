import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Dropdown, DropdownToggle, DropdownMenu, NavItem, RouterLink } from '../';

class MainNavContent extends React.Component {
  static propTypes = {
    activeSections: PropTypes.arrayOf(PropTypes.string),
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    navConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
    updateActiveSections: PropTypes.func.isRequired,
  };

  static defaultProps = {
    activeSections: [],
  };

  constructor(props) {
    super(props);
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick(nextLocation, navId) {
    const { history, updateActiveSections } = this.props;
    updateActiveSections(navId);
    if ((window.innerWidth >= 1024) && !!nextLocation) {
      history.push(nextLocation);
    }
  }

  render() {
    const {
      activeSections,
      navConfig,
      location,
    } = this.props;

    return navConfig.map((dropdownUnit) => {
      const {
        navType, navId, dpLinks, to: itemTo,
      } = dropdownUnit;

      const dropdownOpen = !!activeSections.includes(navId);
      let isCurrentDropdown = false;
      let navLinks = [];

      switch (navType) {
        case 'item':
          return (
            <NavItem key={navId.replace(/\s+/g, '')} className={location.pathname.includes(itemTo) ? 'is-current' : ''}>
              <RouterLink to={itemTo} navTab>{navId}</RouterLink>
            </NavItem>
          );
        case 'dropdown':
          navLinks = dpLinks.map((dpLink) => {
            const { to: linkTo, linkTitle } = dpLink;
            if (location.pathname.includes(linkTo)) {
              isCurrentDropdown = true;
            }
            return (
              <RouterLink key={linkTitle} to={linkTo} className="dropdown-item">
                {linkTitle}
              </RouterLink>
            );
          });

          return (
            <Dropdown
              className={isCurrentDropdown ? 'is-current' : ''}
              key={navId.replace(/\s+/g, '')}
              nav
              isOpen={dropdownOpen}
              toggle={() => undefined}
            >
              <DropdownToggle nav onClick={() => { this.handleTitleClick(dpLinks[0].to, navId); }}>
                {navId}
              </DropdownToggle>
              <DropdownMenu className="nav-dropdown-menu">
                {navLinks}
              </DropdownMenu>
            </Dropdown>
          );
        default:
          return <div />;
      }
    });
  }
}

export default withRouter(MainNavContent);
