import { connect } from 'react-redux';
import MobileNav from '../components/mobile-nav';
import toggleMainNav from '../actions/toggleMainNav';

const mapStateToProps = () => ({
  title: 'CMS',
});

export default connect(
  mapStateToProps,
  { handleToggle: toggleMainNav },
)(MobileNav);
