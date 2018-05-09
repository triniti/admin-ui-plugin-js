import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import DropdownUnit from './DropdownUnit';
import ItemUnit from './ItemUnit';

class NavContent extends React.Component {
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
        navType, navId, dpLinks, to,
      } = dropdownUnit;

      const dropdownOpen = !!activeSections.includes(navId);

      switch (navType) {
        case 'item':
          return (
            <ItemUnit
              key={navId.replace(/\s+/g, '')}
              to={to}
              navId={navId}
              location={location}
            />
          );
        case 'dropdown':
          return (
            <DropdownUnit
              key={navId.replace(/\s+/g, '')}
              dropdownOpen={dropdownOpen}
              onTitleClick={(nextLocation) => { this.handleTitleClick(nextLocation, navId); }}
              location={location}
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
