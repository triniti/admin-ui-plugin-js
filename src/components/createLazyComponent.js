import universal from 'react-universal-component';
import Loading from './loading';

/**
 * @link https://github.com/faceyspacey/react-universal-component
 *
 * Wrapper for creating a universal component. Provides defaults.
 *
 * @param {React.Component|function} component
 * @param {Object} options
 *
 * @returns {React.Component}
 */
export default (component, options) => {
  const defaults = {
    loading: Loading,
    timeout: 2500,
    minDelay: 0,
    alwaysDelay: false,
    loadingTransition: true,
  };

  return universal(component, Object.assign(defaults, options));
};
