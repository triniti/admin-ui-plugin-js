import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/styles/main.scss';
import navConfig from './config/main-nav';
import Root from './Root';
import routes from './routes';
import store from './store';

const MOUNT_NODE = document.getElementById('root');
render(<Router><Root store={store} routes={routes} navConfig={navConfig} /></Router>, MOUNT_NODE);
