/* eslint-disable no-alert */
import React from 'react';
import CreateModal1 from 'components/creation-modal';
import { ActionButton, CreateModalButton } from '../../../../src/components';

export default () => (
  [
    <ActionButton key="reset" text="Reset" disabled className="flex-order-mobile-4 disabled" />,
    <ActionButton key="save" text="Save" icon="save" className="btn-action-save flex-order-mobile-1 disabled" />,
    <ActionButton key="delete" text="Delete" icon="delete" className="flex-order-mobile-3" />,
    <ActionButton key="view" text="View" onClick={() => window.alert('View clicked')} className="flex-order-mobile-2" />,
    <CreateModalButton
      className="btn-action-create-page flex-order-mobile-4"
      color="info"
      icon="add-item"
      key="demo-create-modal-button"
      modal={CreateModal1}
      outline
      onClick={() => console.info('%c [onClick] This button open up a modal', 'background: #222; color: #bada55')}
      text="Create Page"
    />,
  ]
);
