import UiScreen from './UiScreen';

const r = id => `@triniti/ui/${id}`;

const routes = {
  [r('components')]: {
    path: '/ui/:componentId',
    component: UiScreen,
  },
  [r('uiRedirect')]: {
    path: '/ui',
    redirect: {
      to: '/ui/alerts',
    },
  },
};

export default routes;
