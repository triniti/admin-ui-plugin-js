import React from 'react';
import { render } from 'react-dom';
import './assets/styles/main.scss';
import navConfig from './config/main-nav.json';
import Root from './Root';
import routes from './routes';
import store from './store';

const MOUNT_NODE = document.getElementById('root');
render(<Root store={store} routes={routes} navConfig={navConfig} />, MOUNT_NODE);
