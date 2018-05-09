import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Backdrop, Navbar, MobileNav, MainNav } from '../../components';

import UserNavContainer from '../user-nav';
import selectors from '../../selectors';

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMainNavOpen: false,
    };

    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleMobileNavToggle = this.handleMobileNavToggle.bind(this);
  }

  handleBackdropClick() {
    this.setState({
      isMainNavOpen: false,
    });
  }

  handleMobileNavToggle() {
    this.setState({
      isMainNavOpen: !this.state.isMainNavOpen,
    });
  }

  render() {
    const { navConfig, theme } = this.props;
    const { isMainNavOpen } = this.state;
    const navbarThemeClass = theme === 'light' ? 'navbar-light' : 'navbar-dark';

    return (
      <Navbar className={`${navbarThemeClass} navbar-main-wrapper`}>
        <MobileNav onTogglerClick={this.handleMobileNavToggle} />
        <MainNav navConfig={navConfig} isOpen={isMainNavOpen} />
        <Backdrop onClick={this.handleBackdropClick} />
        <UserNavContainer />
      </Navbar>
    );
  }
}

NavbarContainer.propTypes = {
  navConfig: PropTypes.arrayOf(PropTypes.object),
  theme: PropTypes.string,
};

const mapStateToProps = state => ({
  theme: selectors.getAppTheme(state),
});

export default withRouter(connect(mapStateToProps)(NavbarContainer));
