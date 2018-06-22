/* eslint-disable no-alert */
import React from 'react';
import { ActionButton } from '../../../../src/components';
import { Divider } from '../../../../src/components';

export default () => (
  [
    <ActionButton key="reset" text="Reset" disabled className="flex-order-mobile-4 disabled" />,
    <ActionButton key="save" text="Save" icon="save" className="btn-action-save flex-order-mobile-1 disabled" />,
    <ActionButton key="delete" text="Delete" icon="delete" className="flex-order-mobile-3" />,
    <ActionButton key="view" text="View" onClick={() => window.alert('View clicked')} className="flex-order-mobile-2" />,
  ]
);
