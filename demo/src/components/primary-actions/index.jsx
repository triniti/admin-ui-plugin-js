/* eslint-disable no-alert */
import React from 'react';
import { ActionButton, CreateModalButton } from '../../../../src/components';
console.dir(import('components/link-creation-modal'));
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
      onClick={() => console.log('not only this create a popup modal, but also run custom code onClick')}
    />,
  ]
);
