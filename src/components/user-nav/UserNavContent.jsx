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
    activeTab: PropTypes.string,
    currentTheme: PropTypes.string,
    toggleTheme: PropTypes.func,
    toggleUserNav: PropTypes.func,
    handleLogout: PropTypes.func,
    position: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.getTabItemClass = this.getTabItemClass.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  getTabItemClass(tabId) {
    return this.props.activeTab === tabId ? 'active' : '';
  }

  handleLogoutClick() {
    const { handleLogout } = this.props;

    swal({
      title: 'Logout from current session?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f74b4b',
      confirmButtonText: 'Yes, logout!',
    }).then(() => {
      handleLogout();
    });
  }

  toggle(tab1) {
    if (this.state.activeTab !== tab1) {
      this.setState({
        activeTab: tab1,
      });
    }
  }

  render() {
    const {
      currentTheme,
      position,
      toggleTheme,
      toggleUserNav,
    } = this.props;

    return (
      <div id="usernav-container" className={`usernav-container ${position}`}>
        <Nav underline className="pl-0">
          <NavItem>
            <NavLink href="#" className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>Account Info</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>Alerts <UnreadMsgBadge /></NavLink>
          </NavItem>
          <UserNavCloser handleClick={toggleUserNav} />
        </Nav>

        <ScrollableContainer>
          <TabContent activeTab={this.state.activeTab}>
            <UserSettingsTabPane
              tabId="1"
              handleLogout={this.handleLogoutClick}
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
