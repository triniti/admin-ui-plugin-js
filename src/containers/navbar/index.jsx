import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Backdrop, Navbar, MobileNav, MainNav, UserNav } from '../../components';

import selectors from '../../selectors';
import actions from '../../actions';

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMainNavOpen: false,
      isUserNavOpen: false,
    };

    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleToggleMainNav = this.handleToggleMainNav.bind(this);
    this.handleToggleUserNav = this.handleToggleUserNav.bind(this);
  }

  handleBackdropClick() {
    this.setState({
      isMainNavOpen: false,
      isUserNavOpen: false,
    });
  }

  handleToggleMainNav() {
    this.setState({
      isMainNavOpen: !this.state.isMainNavOpen,
    });
  }

  handleToggleUserNav() {
    this.setState({
      isUserNavOpen: !this.state.isUserNavOpen,
    });
  }

  render() {
    const { handleLogout, handleToggleTheme, navConfig, theme } = this.props;
    const { isMainNavOpen, isUserNavOpen } = this.state;
    const navbarThemeClass = theme === 'light' ? 'navbar-light' : 'navbar-dark';

    return (
      <Navbar className={`${navbarThemeClass} navbar-main-wrapper`}>
        <MobileNav onTogglerClick={this.handleToggleMainNav} />
        <MainNav navConfig={navConfig} isOpen={isMainNavOpen} />
        <Backdrop onClick={this.handleBackdropClick} />
        <UserNav
          currentTheme={theme}
          isOpen={isUserNavOpen}
          onLogout={handleLogout}
          toggleTheme={handleToggleTheme}
          toggleUserNav={this.handleToggleUserNav}
        />
      </Navbar>
    );
  }
}

NavbarContainer.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  handleToggleTheme: PropTypes.func.isRequired,
  navConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.string,
};

NavbarContainer.propTypes = {
  theme: 'light',
};

const mapStateToProps = state => ({
  theme: selectors.getAppTheme(state),
});

const mapDispatchToProps = {
  handleLogout: actions.requestLogout,
  handleToggleTheme: actions.requestNewTheme,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarContainer));
