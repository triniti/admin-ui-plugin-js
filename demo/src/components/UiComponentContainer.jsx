import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BackButton, DeleteButton, MainContainer, MainContent, PageActions, PageHeader, SaveButton } from '../../../src/components';
import UiComponents from '../config.module';

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
          <BackButton />
          <DeleteButton />
          <SaveButton />
        </PageActions>
      </PageHeader>
      <MainContent>
        {/* The UI component to be displayed, @see component-config */}
        {elem}
      </MainContent>
    </MainContainer>
  );
};

UiComponentContainer.propTypes = {
  match: PropTypes.object,
};

export default UiComponentContainer;
