/* eslint-disable no-alert */
import React from 'react';
import { ActionButton, CreateModalButton } from '../../../../src/components';

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
    <CreateModalButton
      key="demo-create-modal-button"
      text="Create Page"
      modal={import('components/link-creation-modal')}
      color="info"
      icon="add-item"
      outline
      onShow={() => console.info('%c [onShow] not only this button creates a popup modal, but also runs custom code onShow', 'background: #222; color: #bada55')}
      onHide={() => console.info('%c [onHide] you closed it', 'color: purple; font-weight: bold;')}
    />,
  ]
);
