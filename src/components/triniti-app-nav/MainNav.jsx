import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../nav/index';
import MainNavContent from './MainNavContent';

class MainNav extends React.Component {
  static propTypes = {
    navConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
    isOpen: PropTypes.bool,
    onDropdownOptionClick: PropTypes.func,
  };

  static defaultProps = {
    isOpen: false,
    onDropdownOptionClick: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeMobileSections: [],
    };
    this.updateActiveMobileSections = this.updateActiveMobileSections.bind(this);
  }

  updateActiveMobileSections(navId) {
    const { activeMobileSections } = this.state;
    if (activeMobileSections.includes(navId)) {
      const index = activeMobileSections.indexOf(navId);
      this.setState({
        activeMobileSections: [
          ...activeMobileSections.slice(0, index),
          ...activeMobileSections.slice(index + 1),
        ],
      });
    } else {
      this.setState({
        activeMobileSections: [
          ...activeMobileSections,
          navId,
        ],
      });
    }
  }

  render() {
    const {
      isOpen,
      navConfig,
      onDropdownOptionClick,
    } = this.props;
    const { activeMobileSections } = this.state;

    const classes = isOpen ? 'is-active' : '';
    return (
      <div className={`navbar-toggleable-md main-nav ${classes}`}>
        <Nav navbar>
          <MainNavContent
            activeMobileSections={activeMobileSections}
            navConfig={navConfig}
            updateActiveMobileSections={this.updateActiveMobileSections}
            onDropdownOptionClick={onDropdownOptionClick}
          />
        </Nav>
      </div>
    );
  }
}

export default MainNav;
