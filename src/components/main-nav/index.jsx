import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../nav';
import NavContent from './NavContent';
import './styles.scss';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
    };
    this.updateActiveSections = this.updateActiveSections.bind(this);
  }

  updateActiveSections(navId) {
    const { activeSections } = this.state;
    if (activeSections.includes(navId)) {
      const index = activeSections.indexOf(navId);
      this.setState({
        activeSections: [
          ...activeSections.slice(0, index),
          ...activeSections.slice(index + 1),
        ],
      });
    } else {
      this.setState({
        activeSections: [
          ...activeSections,
          navId,
        ],
      });
    }
  }

  render() {
    const {
      navConfig,
      isOpen,
    } = this.props;

    const classes = isOpen ? 'is-active' : '';
    return (
      <div className={`navbar-toggleable-md main-nav ${classes}`}>
        <Nav navbar>
          <NavContent
            activeSections={this.state.activeSections}
            navConfig={navConfig}
            updateActiveSections={this.updateActiveSections}
          />
        </Nav>
      </div>
    );
  }
}

MainNav.propTypes = {
  navConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpen: PropTypes.bool,
};

MainNav.defaultProps = {
  isOpen: false,
};

export default MainNav;
