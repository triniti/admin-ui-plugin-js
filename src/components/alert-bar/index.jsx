import React from 'react';
import PropTypes from 'prop-types';
import Alert from '../alert';
import RouterLink from '../router-link';

class AlertBar extends React.Component {
  static propTypes = {
    alerts: PropTypes.array.isRequired,
    onDismiss: PropTypes.func.isRequired,
  };

  static renderLink({
    openInNewTab,
    text,
    href,
  }) {
    if (openInNewTab) {
      return <span> <a className="alert-link" target="_blank" href={href}>{text}</a></span>;
    }
    return <span> <RouterLink className="alert-link" to={href}>{text}</RouterLink></span>;
  }

  constructor(props) {
    super(props);
    this.state = this.updateState(this.props);
    this.dismiss = this.dismiss.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.updateState(nextProps));
  }

  componentWillUnmount() {
    Object.entries(this.state).forEach(([, { timeoutId }]) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    });
  }

  updateState({ alerts }) {
    const newState = { ...this.state };

    alerts.forEach(({ delay, id, isDismissible }) => {
      if (!newState[id]) {
        newState[id] = {
          isOpen: true,
          willDismiss: false,
        };
      }
      if (
        isDismissible
        && Number.isInteger(delay)
        && newState[id].isOpen
        && !newState[id].willDismiss
      ) {
        newState[id].willDismiss = true;
        newState[id].timeoutId = setTimeout(() => {
          const futureState = { ...this.state };
          futureState[id].isOpen = false;
          this.setState(futureState);

          this.props.onDismiss(id);
        }, delay);
      }
    });
    return newState;
  }

  dismiss(id) {
    const newState = { ...this.state };
    newState[id].isOpen = false;
    this.setState(newState);

    if (typeof newState[id].timeoutId !== 'undefined') {
      clearTimeout(newState[id].timeoutId);
    }
    this.props.onDismiss(id);
  }

  render() {
    return (
      <div>
        {this.props.alerts.map((alert) => {
          const {
            id,
            isDismissible,
            link,
            message,
            color,
          } = alert;

          if (isDismissible) {
            return (
              <Alert color={color} isOpen={this.state[id].isOpen} toggle={() => this.dismiss(id)} key={id}>
                {message}
                {link && AlertBar.renderLink(link)}
              </Alert>
            );
          }
          return (
            <Alert color={color} key={id}>
              {message}
              {link && AlertBar.renderLink(link)}
            </Alert>
          );
        })}
      </div>
    );
  }
}

export default AlertBar;

