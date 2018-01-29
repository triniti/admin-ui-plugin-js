import React from 'react';
import { withRouter } from 'react-router';
import Screen from '../../src/components/screen';
import UiSideNavContainer from './components/UiSideNavContainer';
import UiComponentContainer from './components/UiComponentContainer';
import UiPageActions from './components/UiPageActions';

export default () => {
  const SideNavWithRouter = withRouter(UiSideNavContainer);
  const UiComponentWithRouter = withRouter(UiComponentContainer);

  return (
    <Screen
        sidenav={<SideNavWithRouter />}
        body={<UiComponentWithRouter />}
        sidenavHeader
        header
        primaryActions={<UiPageActions />}
        >
    </Screen>
  );
};
