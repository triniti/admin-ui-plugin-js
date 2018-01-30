const r = id => `demo/${id}`;

const routes = {
  [r('demo')]: {
    path: '/:screen',
    component: props => import(`./screens/${props.match.params.screen}`),
  },
  [r('indexRedirect')]: {
    path: '/',
    exact: false,
    redirect: {
      to: '/welcome',
    },
  },
};

export default routes;
