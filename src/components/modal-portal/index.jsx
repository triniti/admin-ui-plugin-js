import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// probably use a prop instead of static/pre-defined mount root?
const modalRoot = document.getElementById('modal-root');

/**
 * Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
 * @see https://reactjs.org/docs/portals.html
 */
export default class ModalPortal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

ModalPortal.propTypes = {
  // modalRoot: PropTypes.object,
  children: PropTypes.node,
};

ModalPortal.defaultProps = {
  children: null,
};
