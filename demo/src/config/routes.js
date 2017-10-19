import DemoScreen from '../DemoScreen';

const r = id => `demo/${id}`;

const routes = {
  [r('dashboard')]: {
    path: '/:componentId',
    component: DemoScreen,
  },
  [r('indexRedirect')]: {
    path: '/',
    redirect: {
      to: '/alerts',
    },
  },
};

export default routes;
