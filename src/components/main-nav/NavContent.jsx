import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import DropdownUnit from './DropdownUnit';
import ItemUnit from './ItemUnit';

class NavContent extends React.Component {
  static propTypes = {
    activeSections: PropTypes.arrayOf(PropTypes.string),
    currentSection: PropTypes.string,
    history: PropTypes.object.isRequired,
    navConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
    requestChangeRoute: PropTypes.func.isRequired,
    updateActiveSections: PropTypes.func.isRequired,
  };

  static defaultProps = {
    activeSections: [],
    currentSection: '',
  };

  constructor(props) {
    super(props);
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick(nextLocation, navId) {
    const { history, updateActiveSections, requestChangeRoute } = this.props;
    updateActiveSections(navId);
    if ((window.innerWidth >= 1024) && !!nextLocation) {
      history.push(nextLocation);
      requestChangeRoute(navId);
    }
  }

  render() {
    const {
      activeSections,
      currentSection,
      navConfig,
      requestChangeRoute,
    } = this.props;

    return navConfig.map((dropdownUnit) => {
      const {
        navType, navId, dpLinks, to,
      } = dropdownUnit;
      const classes = currentSection.toLowerCase() === navId.toLowerCase() ? 'is-current' : '';
      const dropdownOpen = !!activeSections.includes(navId);

      switch (navType) {
        case 'item':
          return (
            <ItemUnit
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
              onTitleClick={(location) => { this.handleTitleClick(location, navId); }}
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
  }
}

export default withRouter(NavContent);
