/* eslint-disable no-alert */
import React from 'react';
import { ActionButton, CreateModalButton } from '../../../../src/components';
import kebabCase from 'lodash/kebabCase';

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
      action="action-create-page"
      className="flex-order-mobile-4"
      color="info"
      icon="add-item"
      key="demo-create-modal-button"
      modal={import('components/creation-modal')}
      outline
      onClick={() => console.info('%c [onClick] This button open up a modal', 'background: #222; color: #bada55')}
      text="Create Page"
    />,
  ]
);
