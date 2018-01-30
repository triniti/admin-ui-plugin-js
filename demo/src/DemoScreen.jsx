import React from 'react';
import { withRouter } from 'react-router';
import Screen from '../../src/components/screen';
import UiSideNavContainer from './components/UiSideNavContainer';
import UiComponentContainer from './components/UiComponentContainer';
import UiScreenActions from './components/UiScreenActions';
import UiScreenHeader from './components/UiScreenHeader';

export default () => {
  const SideNavWithRouter = withRouter(UiSideNavContainer);
  const UiComponentWithRouter = withRouter(UiComponentContainer);
  const UiScreenHeaderWithRouter = withRouter(UiScreenHeader);

  return (
    <Screen
        sidenav={<SideNavWithRouter />}
        screenBody={<UiComponentWithRouter />}
        sidenavHeader
        header={<UiScreenHeaderWithRouter />}
        primaryActions={<UiScreenActions />}
        >
    </Screen>
  );
};
