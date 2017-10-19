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
      to: '/alert',
    },
  },
}

export default routes;
