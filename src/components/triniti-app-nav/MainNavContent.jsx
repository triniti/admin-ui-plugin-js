import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Dropdown, DropdownToggle, DropdownMenu, NavItem, RouterLink } from '../';

class MainNavContent extends React.Component {
  static propTypes = {
    activeMobileSections: PropTypes.arrayOf(PropTypes.string),
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    navConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDropdownOptionClick: PropTypes.func,
    updateActiveMobileSections: PropTypes.func.isRequired,
  };

  static defaultProps = {
    activeMobileSections: [],
    onDropdownOptionClick: undefined,
  };

  constructor(props) {
    super(props);
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick(nextLocation, navId) {
    const { history, updateActiveMobileSections } = this.props;
    updateActiveMobileSections(navId);
    if ((window.innerWidth >= 1024) && !!nextLocation) {
      history.push(nextLocation);
    }
  }

  render() {
    const {
      activeMobileSections,
      navConfig,
      location,
      onDropdownOptionClick,
    } = this.props;

    return navConfig.map((dropdownUnit) => {
      const {
        navType, navId, dpLinks, to: itemTo,
      } = dropdownUnit;

      const isDropdownOpen = activeMobileSections.includes(navId);
      let isCurrentDropdown = false;
      let navLinks = [];

      switch (navType) {
        case 'item':
          return (
            <NavItem key={navId.replace(/\s+/g, '')} className={location.pathname.includes(itemTo) ? 'is-current' : ''}>
              <RouterLink to={itemTo} navTab onClick={onDropdownOptionClick}>{navId}</RouterLink>
            </NavItem>
          );
        case 'dropdown':
          navLinks = dpLinks.map((dpLink) => {
            const { to, linkTitle } = dpLink;
            if (location.pathname.includes(to)) {
              isCurrentDropdown = true;
            }
            return (
              <RouterLink key={linkTitle} to={to} className="dropdown-item" onClick={onDropdownOptionClick}>
                {linkTitle}
              </RouterLink>
            );
          });

          return (
            <Dropdown
              className={isCurrentDropdown ? 'is-current' : ''}
              key={navId.replace(/\s+/g, '')}
              nav
              isOpen={isDropdownOpen}
              toggle={() => undefined}
            >
              <DropdownToggle nav onClick={() => this.handleTitleClick(dpLinks[0].to, navId)}>
                {navId}
              </DropdownToggle>
              <DropdownMenu className="nav-dropdown-menu">
                {navLinks}
              </DropdownMenu>
            </Dropdown>
          );
        default:
          return null;
      }
    });
  }
}

export default withRouter(MainNavContent);
