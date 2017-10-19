import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserNav from '../../components/user-nav';
import actions from '../../actions';
import selectors from '../../selectors';

const mapStateToProps = state => ({
  position: selectors.getUserNavPosition(state),
  currentTheme: selectors.getAppTheme(state),
  activeTab: selectors.getActiveUserNavTab(state),
});

const mapDispatchToProps = {
  handleLogout: actions.requestLogout,
  handleBtnClick: actions.clickDropdown,
  handleTabClick: actions.changeAsideActiveTab,
  toggleUserNav: actions.toggleUserNav,
  toggleTheme: actions.requestNewTheme,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserNav));
