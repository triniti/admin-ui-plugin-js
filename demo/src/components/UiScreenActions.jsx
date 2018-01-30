import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { PageActionButton } from '../../../src/components';

import EnvelopeIcon from 'assets/img/svg/icon/fa-envelope.svg';

const UiPageActions = () => {

  return [
      <PageActionButton text="Back" icon="back" key="action1"/> ,
      <PageActionButton text="Delete" icon="delete" key="action2"/> ,
      <PageActionButton text="Save" icon="save" key="action3"/> ,
      <PageActionButton text="save & close" iconUrl={EnvelopeIcon} onClick={() => alert('save & close!')} key="action4"/>,
  ];
};

export default UiPageActions;
