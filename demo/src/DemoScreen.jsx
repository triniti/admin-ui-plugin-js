import React from 'react';
import { withRouter } from 'react-router';
import ContentContainer from '../../src/components/content-container';
import UiSideNavContainer from './components/UiSideNavContainer'
import UiComponentContainer from './components/UiComponentContainer';

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
