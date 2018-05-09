import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import getMainNavClasses from '../../selectors/getMainNavClasses';
import MainNav from '../../components/main-nav';

const mapStateToProps = (state, ownProps) => ({
  navConfig: ownProps.navConfig,
  classesMain: getMainNavClasses(state),
});

export default withRouter(connect(mapStateToProps)(MainNav));
