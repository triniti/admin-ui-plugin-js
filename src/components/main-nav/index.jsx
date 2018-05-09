import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../nav';
import NacContent from './NavContent';
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
      classesMain,
      currentSection,
      navConfig,
      requestChangeRoute,
    } = this.props;
    return (
      <div className={`navbar-toggleable-md main-nav ${classesMain}`}>
        <Nav navbar>
          <NacContent
            activeSections={this.state.activeSections}
            currentSection={currentSection}
            navConfig={navConfig}
            requestChangeRoute={requestChangeRoute}
            updateActiveSections={this.updateActiveSections}
          />
        </Nav>
      </div>
    );
  }
}

MainNav.propTypes = {
  navConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
  classesMain: PropTypes.string,
  currentSection: PropTypes.string,
  requestChangeRoute: PropTypes.func.isRequired,
};

MainNav.defaultProps = {
  classesMain: '',
  currentSection: '',
};

export default MainNav;
