import React from 'react';
import { withRouter } from 'react-router';
import ScreenContent from '../../src/components/screen-content';
import UiSideNavContainer from './components/UiSideNavContainer';
import UiComponentContainer from './components/UiComponentContainer';

export default () => {
  const SideNavWithRouter = withRouter(UiSideNavContainer);
  const UiComponentWithRouter = withRouter(UiComponentContainer);

  return (
    <ScreenContent>
      <SideNavWithRouter />
      <UiComponentWithRouter />
    </ScreenContent>
  );
};
