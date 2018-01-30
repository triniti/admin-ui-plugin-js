import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import universal from 'react-universal-component';
import Loading from '../loading';

/**
 * Chooses to return either a standard component if `route.eager` is set to true or a universal
 * component for a lazy loaded component.
 *
 * If universal component, then `route.component` must be a method or import (promise).
 *
 * Ie: import('somepath/component');
 * Ie: (props) => import('somepath/component');
 *
 * @param {Boolean|undefined} [route.eager]
 * @param {React.Component|function} route.component
 * @returns React.Component
 * @see https://github.com/faceyspacey/react-universal-component
 */
const getComponent = (route) => {
  if (route.eager) {
    return route.component;
  }

  return universal(route.component, Object.assign({ loading: Loading }, route.async || {}));
};

export default (routes, authHoc = null) =>
  Object.values(routes).map((route) => {
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
