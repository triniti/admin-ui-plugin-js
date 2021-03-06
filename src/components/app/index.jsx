import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, withRouter } from 'react-router-dom';
import './styles.scss';
import createRoutes from './createRoutes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.routes = createRoutes(props.routes, props.authHoc);
  }

  render() {
    const { navComponent } = this.props;
    return (
      <div id="wrapper" data-slidedirection="">
        {location.pathname !== '/login' && navComponent}
        <Switch>
          { this.routes }
        </Switch>
      </div>
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

export default withRouter(App);
