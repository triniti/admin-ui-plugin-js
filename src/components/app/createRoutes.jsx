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

    // handle public routes (no auth required, e.g: login)
    if (route.public || !authHoc) {
      return <Route key={route.path} {...route} />;
    }

    // handle private routes (default value, most pages in cms)
    let component = null;
    if (route.lazy) {
      const universalComponent = universal(props => route.component());
      component = authHoc(universalComponent, route.extra || {});
    } else {
      component = authHoc(route.component, route.extra || {});
    }
    return (
      <Route
        key={route.path}
        exact={route.exact || true}
        strict={route.strict || false}
        path={route.path}
        component={component}
      />
    );
  });
}
