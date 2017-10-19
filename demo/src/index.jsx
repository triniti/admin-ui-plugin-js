import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../../src/components/app';
import './assets/styles/main.scss';
import '../../src/components/app/styles.scss';
import routes from './config/routes';
import nav from './config/main-nav.json';
import store from './config/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App routes={routes} navConfig={nav} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
