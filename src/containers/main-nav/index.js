import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import actions from '../../actions';
import getMainNavClasses from '../../selectors/getMainNavClasses';
import getActiveMainSections from '../../selectors/getActiveMainSections';
import getCurrentMainSection from '../../selectors/getCurrentMainSection';
import MainNav from '../../components/main-nav';

const mapStateToProps = (state, ownProps) => ({
  navConfig: ownProps.navConfig,
  classesMain: getMainNavClasses(state),
  activeSections: getActiveMainSections(state),
  currentSection: getCurrentMainSection(state),
});

const mapDispatchToProps = {
  onDropdownTitleClick: actions.clickDropdownTitle,
  requestChangeRoute: actions.requestChangeRoute,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNav));
