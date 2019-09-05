import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, withRouter } from 'react-router-dom';
import './styles.scss';
import createRoutes from './createRoutes';

const InnerApp = withRouter(({ location, navComponent, routes }) => (
  <div id="wrapper" data-slidedirection="">
    {/* {location.pathname !== '/login' && navComponent} */}
    <Switch>
      { routes }
    </Switch>
  </div>
));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.routes = createRoutes(props.routes, props.authHoc);
  }
  render() {
    const { getUserConfirmation, navComponent } = this.props;
    return (
      <BrowserRouter getUserConfirmation={getUserConfirmation}>
        <InnerApp routes={this.routes} navComponent={navComponent}></InnerApp>
      </BrowserRouter>
    );
  }
}
App.propTypes = {
  routes: PropTypes.object.isRequired,
  authHoc: PropTypes.func,
  navComponent: PropTypes.node,
};
App.defaultProps = {
  navComponent: null,
  authHoc: null,
};
export default App;
