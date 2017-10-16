/* eslint-disable no-unused-vars, class-methods-use-this */
import Plugin from '@triniti/app/Plugin';
import routes from './routes';

export default class UiExamplesPlugin extends Plugin {
  constructor() {
    super('triniti', 'ui-examples', '0.1.0');
  }

  configure(app, bottle) {
    this.routes = routes;
  }
}
