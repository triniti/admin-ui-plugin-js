// react
import React from 'react';
import PropTypes from 'prop-types';
/* @fixme: re-enable after triniti app
// external components
import { Alert } from '../alert';

// utilities
import Exception from '@gdbots/common/Exception';

// redux
import { STATUS_NONE, STATUS_PENDING, STATUS_REJECTED } from '@triniti/app/constants';


const StatusMessage = ({ status = STATUS_NONE, exception = null }) => {
  switch (status) {
    case STATUS_PENDING:
      return <Alert color="info">Loading...</Alert>;

    case STATUS_REJECTED:
      // fixme: we can derive a friendly message based on exception.getCode() as well
      return <Alert color="danger">{exception.getMessage()}</Alert>;

    default:
      return null;
  }
};

StatusMessage.propTypes = {
  status: PropTypes.string,
  exception: PropTypes.instanceOf(Exception),
};

export default StatusMessage;
*/
