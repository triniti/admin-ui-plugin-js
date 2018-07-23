import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { Backdrop, Navbar } from '../../components';
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import UserNav from './UserNav';
import actions from '../../actions';
import { settings } from '../../constants';
import './styles.scss';

class TrinitiAppNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMainNavOpen: false,
    };

    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleDropdownOptionClick = this.handleDropdownOptionClick.bind(this);
    this.handleToggleMainNav = this.handleToggleMainNav.bind(this);
  }

  handleBackdropClick() {
    this.setState({
      isMainNavOpen: false,
    });
  }

  handleDropdownOptionClick() {
    this.setState({
      isMainNavOpen: false,
    });
  }

  handleToggleMainNav() {
    this.setState({
      isMainNavOpen: !this.state.isMainNavOpen,
    });
  }

  render() {
    const { handleLogout, navConfig } = this.props;
    const { isMainNavOpen } = this.state;

    return (
      <Navbar className={`navbar-dark navbar-main-wrapper`}>
        <MobileNav onTogglerClick={this.handleToggleMainNav} />
        <MainNav
          navConfig={navConfig}
          isOpen={isMainNavOpen}
          onDropdownOptionClick={this.handleDropdownOptionClick}
        />
        <Backdrop onClick={this.handleBackdropClick} />
        <UserNav
          onLogout={handleLogout}
        />
      </Navbar>
    );
  }
}

TrinitiAppNav.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  navConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  navConfig: ownProps.navConfig,
});

const mapDispatchToProps = {
  handleLogout: actions.requestLogout,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrinitiAppNav));
