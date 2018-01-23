import React from 'react';
import PropTypes from 'prop-types';
import Exception from '@gdbots/common/Exception';
import { STATUS_NONE, STATUS_PENDING, STATUS_REJECTED } from '@triniti/app/constants';
import Alert from '../alert';

const StatusMessage = ({ status, exception }) => {
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

StatusMessage.defaultProps = {
  status: STATUS_NONE,
  exception: null,
};

export default StatusMessage;
