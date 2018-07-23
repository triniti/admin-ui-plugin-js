import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert2';
import { Button, Icon, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from '../../components';

class UserNav extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const { onLogout } = this.props;

    swal({
      title: 'Logout from current session?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout!',
      confirmButtonClass: 'btn btn-secondary',
      cancelButtonClass: 'btn btn-outline-text-secondary',
    }).then(() => {
      onLogout();
    });
  }

  render() {
    const {
      editorUsername,
      onLogout,
    } = this.props;

    return (
      <UncontrolledDropdown className="dropdown-usernav">
        <DropdownToggle color="usernav" className="btn-radius-circle">
          <Icon imgSrc="user" />
        </DropdownToggle>
        <DropdownMenu right className="dropdown-menu-arrow-right">
          <DropdownItem header>{editorUsername}</DropdownItem>
          <DropdownItem onClick={onLogout}>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

UserNav.propTypes = {
  editorUsername: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

UserNav.defaultProps = {
  editorUsername: 'Current User',
};

export default UserNav;
