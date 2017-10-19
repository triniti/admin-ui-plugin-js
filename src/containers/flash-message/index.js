import { connect } from 'react-redux';
import FlashMessage from '../../components/flash-message';
import getShowNotification from '../../selectors/getShowNotification';
import getNotificationMessage from '../../selectors/getNotificationMessage';

const mapStateToProps = state => ({
  showNotification: getShowNotification(state),
  message: getNotificationMessage(state),
});

export default connect(mapStateToProps)(FlashMessage);
