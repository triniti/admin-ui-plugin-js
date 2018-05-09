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

const trinitiTheme = localStorage.getItem(settings.THEME_STORAGE) || settings.THEME_LIGHT;

class TrinitiAppNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMainNavOpen: false,
      isUserNavOpen: false,
      currentTheme: trinitiTheme,
    };

    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleDropdownOptionClick = this.handleDropdownOptionClick.bind(this);
    this.handleToggleMainNav = this.handleToggleMainNav.bind(this);
    this.handleToggleTheme = this.handleToggleTheme.bind(this);
    this.handleToggleUserNav = this.handleToggleUserNav.bind(this);
  }

  handleBackdropClick() {
    this.setState({
      isMainNavOpen: false,
      isUserNavOpen: false,
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

  handleToggleTheme() {
    const newTheme =
      this.state.currentTheme === settings.THEME_LIGHT ? settings.THEME_DARK : settings.THEME_LIGHT;
    this.setState({
      currentTheme: newTheme,
    }, () => localStorage.setItem(settings.THEME_STORAGE, newTheme));
  }

  handleToggleUserNav() {
    this.setState({
      isUserNavOpen: !this.state.isUserNavOpen,
    });
  }

  render() {
    const { handleLogout, navConfig } = this.props;
    const { currentTheme, isMainNavOpen, isUserNavOpen } = this.state;
    const navbarClass = currentTheme === settings.THEME_LIGHT ? 'navbar-light' : 'navbar-dark';

    return (
      <Navbar className={`${navbarClass} navbar-main-wrapper`}>
        <MobileNav onTogglerClick={this.handleToggleMainNav} />
        <MainNav navConfig={navConfig} isOpen={isMainNavOpen} onDropdownOptionClick={this.handleDropdownOptionClick} />
        <Backdrop onClick={this.handleBackdropClick} />
        <UserNav
          currentTheme={currentTheme}
          isOpen={isUserNavOpen}
          onLogout={handleLogout}
          toggleTheme={this.handleToggleTheme}
          toggleUserNav={this.handleToggleUserNav}
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
