import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Backdrop, Navbar } from '../'; // eslint-disable-line
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import UserNav from './UserNav';
import actions from '../../actions';
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
    const { isMainNavOpen } = this.state;
    this.setState({
      isMainNavOpen: !isMainNavOpen,
    });
  }

  render() {
    const { userName, navConfig } = this.props;
    const { isMainNavOpen } = this.state;

    return (
      <Navbar className="navbar-dark navbar-main-wrapper">
        <MobileNav onTogglerClick={this.handleToggleMainNav} />
        <MainNav
          navConfig={navConfig}
          isOpen={isMainNavOpen}
          onDropdownOptionClick={this.handleDropdownOptionClick}
        />
        <Backdrop onClick={this.handleBackdropClick} />
        <UserNav onLogout={actions.requestLogout} userName={userName} />
      </Navbar>
    );
  }
}

TrinitiAppNav.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  navConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
  userName: PropTypes.string,
};

TrinitiAppNav.defaultProps = {
  userName: '',
};

const mapDispatchToProps = {
  handleLogout: actions.requestLogout,
};

export default connect(null, mapDispatchToProps)(withRouter(TrinitiAppNav));
