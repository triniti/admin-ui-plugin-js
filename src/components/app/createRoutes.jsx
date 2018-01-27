import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import universal from 'react-universal-component';

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
    const component = route.eager ? route.component : universal(route.component, route.async || {});

    // handle public routes (no auth required, e.g: login)
    if (route.public || !authHoc) {
      return <Route key={route.path} {...Object.assign({}, route, {component: component})} />;
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
