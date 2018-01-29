import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import universal from 'react-universal-component';
import Loading from '../loading';

/**
 * Chooses to return either a standard component if `eager` is set to true or a universal component
 * for a lazy loaded component.
 *
 * @param route.component
 * @returns React.Component
 */
function getComponent(route) {
  let component = { route };
  if (!route.eager) {
    const asyncOpts = Object.assign({}, { loading: Loading }, route.async || {});
    component = universal(route.component, asyncOpts);
  }
  return component;
}

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
    const component = getComponent(route);

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
