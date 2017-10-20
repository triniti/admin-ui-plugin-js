import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert2';
import { TabContent, Badge, NavbarTabs, NavbarTabsItem, ScrollableContainer } from '../';
import UserSettingsTabPane from './UserSettingsTabPane';
import MiscTabPane from './UserNavMiscTabPane';
import UserNavCloser from './UserNavCloser';


/* fixme:: create notification component, get unread numbers from redux stroe */
const UnreadMsgBadge = () => <Badge color="warning" className="round">3</Badge>;

class UserNavContent extends React.Component {
  static propTypes = {
    activeTab: PropTypes.string,
    currentTheme: PropTypes.string,
    toggleTheme: PropTypes.func,
    toggleUserNav: PropTypes.func,
    handleTabClick: PropTypes.func,
    handleLogout: PropTypes.func,
    position: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.getTabItemClass = this.getTabItemClass.bind(this);
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

  render() {
    const {
      activeTab,
      handleTabClick,
      currentTheme,
      position,
      toggleTheme,
      toggleUserNav,
    } = this.props;

    return (
      <div id="usernav-container" className={`usernav-container ${position}`}>
        <NavbarTabs>
          <NavbarTabsItem
            title="Account Info"
            handleClick={() => handleTabClick('1')}
            classes={this.getTabItemClass('1')}
          />
          <NavbarTabsItem
            title="Alerts"
            handleClick={() => handleTabClick('2')}
            classes={this.getTabItemClass('2')}
          >
            <UnreadMsgBadge />
          </NavbarTabsItem>
          <UserNavCloser handleClick={toggleUserNav} />
        </NavbarTabs>

        <ScrollableContainer>
          <TabContent activeTab={activeTab}>
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
