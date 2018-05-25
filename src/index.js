/* eslint-disable no-unused-vars, class-methods-use-this */
import Plugin from '@triniti/app/Plugin';
import reducer from './reducers';

export default class AdminUiPlugin extends Plugin {
  constructor() {
    super('triniti', 'admin-ui', '0.5.3');
  }

  configure(app, bottle) {
    this.reducer = reducer;
  }
}
