/* eslint-disable no-alert */
import React from 'react';
import { ActionButton } from '../../../../src/components';
import EnvelopeIcon from '../../assets/img/svg/icon/fa-envelope.svg';

export default () => (
  [
    <ActionButton key="back" text="Back" icon="back" />,
    <ActionButton key="delete" text="Delete" icon="delete" />,
    <ActionButton key="save" text="Save" icon="save" color="primary" />,
    <ActionButton
      key="save-and-close"
      text="Save & Close"
      iconUrl={EnvelopeIcon}
      onClick={() => window.alert('Save & Close clicked')}
    />,
  ]
);
