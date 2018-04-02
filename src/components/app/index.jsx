import React from 'react';
import PropTypes from 'prop-types';
import { Switch, withRouter } from 'react-router';
import './styles.scss';
// fixme: components ideally are not requesting containers
// they should given them via props or children
import NavbarContainer from '../../containers/navbar';
import createRoutes from './createRoutes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.routes = createRoutes(props.routes, props.authHoc);
  }

  render() {
    const { location, navConfig, routes, authHoc } = this.props;
    return (
      <div id="wrapper" data-slidedirection="">
        {location.pathname !== '/login' && <NavbarContainer navConfig={navConfig} />}
        <Switch>
          { this.routes }
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  authHoc: PropTypes.func,
  navConfig: PropTypes.array,
};

App.defaultProps = {
  navConfig: [],
  authHoc: null,
};

export default withRouter(App);
