import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { Icon, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from '../';

class UserNav extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const { onLogout } = this.props;

    Swal.fire({
      title: 'Logout from current session?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout!',
      confirmButtonClass: 'btn btn-secondary',
      cancelButtonClass: 'btn btn-outline-text-secondary',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        onLogout();
      }
    });
  }

  render() {
    const { userName } = this.props;

    return (
      <UncontrolledDropdown className="dropdown-usernav">
        <DropdownToggle color="usernav" className="btn-radius-circle">
          <Icon imgSrc="user" />
        </DropdownToggle>
        <DropdownMenu right className="dropdown-menu-arrow-right">
          <DropdownItem header>
            {userName}
          </DropdownItem>
          <DropdownItem onClick={this.handleLogout}>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

UserNav.propTypes = {
  userName: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

UserNav.defaultProps = {
  userName: 'Current User',
};

export default UserNav;
