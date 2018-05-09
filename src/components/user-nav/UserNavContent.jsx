import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert2';
import classnames from 'classnames';
import { TabContent, Badge, Nav, NavItem, NavLink, ScrollableContainer } from '../';
import UserSettingsTabPane from './UserSettingsTabPane';
import MiscTabPane from './UserNavMiscTabPane';
import UserNavCloser from './UserNavCloser';


/* fixme:: create notification component, get unread numbers from redux stroe */
const UnreadMsgBadge = () => <Badge color="warning" pill className="ml-1">3</Badge>;

class UserNavContent extends React.Component {
  static propTypes = {
    currentTheme: PropTypes.string,
    isOpen: PropTypes.bool,
    onLogout: PropTypes.func.isRequired,
    toggleTheme: PropTypes.func.isRequired,
    toggleUserNav: PropTypes.func.isRequired,
  };

  static defaultProps = {
    currentTheme: 'light',
    isOpen: false,
  };

  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  handleLogoutClick() {
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

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const {
      currentTheme,
      isOpen,
      toggleTheme,
      toggleUserNav,
    } = this.props;
    const position = isOpen ? 'offcanvas-right' : '';

    return (
      <div id="usernav-container" className={`usernav-container ${position}`}>
        <Nav underline className="pl-0">
          <NavItem>
            <NavLink href="#" className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>Account Info</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>Alerts <UnreadMsgBadge /></NavLink>
          </NavItem>
          <UserNavCloser onClick={toggleUserNav} />
        </Nav>

        <ScrollableContainer>
          <TabContent activeTab={this.state.activeTab}>
            <UserSettingsTabPane
              tabId="1"
              onLogoutBtnClick={this.handleLogoutClick}
              currentTheme={currentTheme}
              toggleTheme={toggleTheme}
            />
            <MiscTabPane tabId="2" />
          </TabContent>
        </ScrollableContainer>
      </div>
    );
  }
}

export default UserNavContent;
