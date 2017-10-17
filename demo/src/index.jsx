import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import DemoScreen from './DemoScreen';
import './assets/styles/main.scss';
import '../../src/components/app/styles.scss';

ReactDOM.render(
  <BrowserRouter>
    <div id="wrapper" data-slidedirection="">
      <Route exact path="/:componentId" component={DemoScreen} />
      <Route exact path="/" render={() => <Redirect to="/alerts" />} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);
