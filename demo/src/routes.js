/* globals DEMO_SCREENS */

const r = id => `demo/${id}`;

const routes = DEMO_SCREENS.reduce((acc, cur) => {
  acc[r(cur)] = {
    path: `/${cur}`,
    component: import(`./screens/${cur}`),
  };
  return acc;
}, {});

routes[r('indexRedirect')] = {
  path: '/',
  exact: false,
  redirect: {
    to: '/welcome',
  },
};

export default routes;
