import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '../alert';

const FlashMessage = ({ message, showNotification }) => (
  <div className={'alertbar-container'}>
    <Alert isOpen={showNotification} className={'alert-inverse alert-info'}>
      { message }
    </Alert>
  </div>
);

FlashMessage.propTypes = {
  message: PropTypes.string,
  showNotification: PropTypes.bool,
};

export default FlashMessage;
