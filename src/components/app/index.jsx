import React from 'react';
import PropTypes from 'prop-types';
import { Switch, withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './styles.scss';
import createRoutes from './createRoutes';
import getUserConfirmation from '../../utils/getUserConfirmation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.routes = createRoutes(props.routes, props.authHoc);
  }

  render() {
    const { location, navComponent } = this.props;
    return (
      <div id="wrapper" data-slidedirection="">
        {location.pathname !== '/login' && navComponent}
        <BrowserRouter getUserConfirmation={getUserConfirmation}>
          <Switch>
            {this.routes}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  authHoc: PropTypes.func,
  navComponent: PropTypes.node,
};

App.defaultProps = {
  navComponent: null,
  authHoc: null,
};

export default withRouter(App);
