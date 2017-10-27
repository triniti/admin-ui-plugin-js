import DemoScreen from '../DemoScreen';

const r = id => `demo/${id}`;

const routes = {
  [r('demo')]: {
    path: '/:componentId',
    component: DemoScreen,
  },
  [r('indexRedirect')]: {
    path: '/',
    exact: false,
    redirect: {
      to: '/alerts',
    },
  },
};

export default routes;
