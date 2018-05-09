import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import actions from '../../actions';
import getMainNavClasses from '../../selectors/getMainNavClasses';
import getCurrentMainSection from '../../selectors/getCurrentMainSection';
import MainNav from '../../components/main-nav';

const mapStateToProps = (state, ownProps) => ({
  navConfig: ownProps.navConfig,
  classesMain: getMainNavClasses(state),
  currentSection: getCurrentMainSection(state),
});

const mapDispatchToProps = {
  requestChangeRoute: actions.requestChangeRoute,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNav));
