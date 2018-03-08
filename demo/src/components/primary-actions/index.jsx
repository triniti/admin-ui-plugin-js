/* eslint-disable no-alert */
import React from 'react';
import { ActionButton } from '../../../../src/components';
import { Divider } from '../../../../src/components';

export default () => (
  [
    <ActionButton key="delete" text="Delete" icon="delete" outline className="flex-order-mobile-3" />,
    <ActionButton key="save" text="Save" icon="save" color="primary" className="flex-order-mobile-1" />,
    <ActionButton
      key="save-and-close"
      text="Save & Close"
      onClick={() => window.alert('Save & Close clicked')}
      color="primary"
      outline
      className="flex-order-mobile-2"
    />,
  ]
);
