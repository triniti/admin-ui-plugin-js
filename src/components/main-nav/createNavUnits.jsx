import React from 'react';
import DropdownUnit from './DropdownUnit';
import NavItemUnit from './NavItemUnit';

export default (
  activeSections,
  currentSection,
  history,
  navConfig,
  requestChangeRoute,
  updateActiveSections,
) =>
  navConfig.map((dropdownUnit) => {
    const {
      navType, navId, dpLinks, to,
    } = dropdownUnit;
    const classes = currentSection.toLowerCase() === navId.toLowerCase() ? 'is-current' : '';
    const dropdownOpen = !!activeSections.includes(navId);

    switch (navType) {
      case 'item':
        return (
          <NavItemUnit
            key={navId.replace(/\s+/g, '')}
            to={to}
            navId={navId}
            classes={classes}
            onClick={() => requestChangeRoute(navId)}
          />
        );
      case 'dropdown':
        return (
          <DropdownUnit
            key={navId.replace(/\s+/g, '')}
            dropdownOpen={dropdownOpen}
            onTitleClick={(nextLocation) => {
              updateActiveSections(navId);
              if ((window.innerWidth >= 1024) && !!history && !!nextLocation) {
                history.push(nextLocation);
                requestChangeRoute(navId);
              }
            }}
            onDropdownMenuClick={() => requestChangeRoute(navId)}
            classes={classes}
            title={navId}
            links={dpLinks}
          />
        );
      default:
        return <div />;
    }
  });
