import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import universal from 'react-universal-component';
import Loading from '../loading';

/* eslint max-statements: ["warn", 30] */
export default function createRoutes(routes, authHoc = null) {
  return Object.values(routes).map((route) => {
    if (route.redirect) {
      return (
        <Route
          exact
          key={route.path}
          path={route.path}
          render={() => <Redirect {...route.redirect} />}
        />
      );
    }

    // Either standard or universal component
    let component = { route };
    if (!route.eager) {
      const asyncOpts = Object.assign({}, { loading: Loading }, route.async || {});
      component = universal(route.component, asyncOpts);
    }

    // handle public routes (no auth required, e.g: login)
    if (route.public || !authHoc) {
      return <Route key={route.path} {...route} component={component} />;
    }

    // handle private routes (default value, most pages in cms)
    return (
      <Route
        key={route.path}
        exact={route.exact || true}
        strict={route.strict || false}
        path={route.path}
        component={authHoc(component, route.extra || {})}
      />
    );
  });
}
