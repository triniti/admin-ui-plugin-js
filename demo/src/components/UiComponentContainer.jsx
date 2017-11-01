import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, MainContainer, MainContent, PageActions, PageHeader } from '../../../src/components';
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
        <PageActions/>
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
