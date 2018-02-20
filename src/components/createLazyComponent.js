import universal from 'react-universal-component';
import Loading from './loading';

/**
 * Wrapper for creating a universal component. Provides defaults.
 *
 * @param {React.Component|function} component
 * @param {Object} options
 * @return {React.Component}
 * @see https://github.com/faceyspacey/react-universal-component
 */
export default (component, options) => {
  const defaults = {
    loading: Loading,
    timeout: 1500,
    minDelay: 0,
    alwaysDelay: false,
    loadingTransition: true,
  };

  return universal(component, Object.assign(defaults, options));
};
