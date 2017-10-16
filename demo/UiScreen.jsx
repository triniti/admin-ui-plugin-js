import React from 'react';
import { withRouter } from 'react-router';
import ContentContainer from '../src/components/content-container';
import { UiSideNavContainer, UiComponentContainer } from './components';

export default () => {
  const SideNavWithRouter = withRouter(UiSideNavContainer);
  const UiComponentWithRouter = withRouter(UiComponentContainer);

  return (
    <ContentContainer>
      <SideNavWithRouter />
      <UiComponentWithRouter />
    </ContentContainer>
  );
};
