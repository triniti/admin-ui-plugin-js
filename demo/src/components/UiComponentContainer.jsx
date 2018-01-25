import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, MainContainer, MainContent, PageActionButton, PageActions, PageHeader } from '../../../src/components';
import UiComponents from '../config.module';

import EnvelopeIcon from '../assets/img/svg/icon/fa-envelope.svg';

const UiComponentContainer = ({ match }) => {
  const elem = UiComponents[match.params.componentId];

  return (
    <MainContainer id="ui-component-container">
      <PageHeader>
        <Breadcrumb>
          <BreadcrumbItem><NavLink to="/">Demo</NavLink></BreadcrumbItem>
          <BreadcrumbItem active>{(match.params.componentId)}</BreadcrumbItem>
        </Breadcrumb>
        <PageActions>
          <PageActionButton text="Back" icon="back" />
          <PageActionButton text="Delete" icon="delete" />
          <PageActionButton text="Save" icon="save" />
          <PageActionButton text="save & close" iconUrl={EnvelopeIcon} onClick={() => alert('save & close!')} />
        </PageActions>
      </PageHeader>
      {/* The UI component to be displayed, @see component-config */}
        {elem}
    </MainContainer>
  );
};

UiComponentContainer.propTypes = {
  match: PropTypes.object,
};

export default UiComponentContainer;
