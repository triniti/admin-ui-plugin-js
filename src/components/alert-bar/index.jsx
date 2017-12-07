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
    url,
  }) {
    if (openInNewTab) {
      return <span> <a className="alert-link" target="_blank" href={url}>{text}</a></span>;
    }
    return <span> <RouterLink className="alert-link" to={url}>{text}</RouterLink></span>;
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

  updateState(props) {
    const newState = { ...this.state };
    const { alerts } = props;

    alerts.forEach((alert) => {
      const { delay, id, isDismissible } = alert;

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

    if (typeof newState[id].timeoutId !== 'undefined') {
      clearTimeout(newState[id].timeoutId);
    }

    newState[id].isOpen = false;
    this.setState(newState);

    this.props.onDismiss(id);
  }

  render() {
    const { alerts } = this.props;
    return (
      <div>
        {alerts.map((alert, index) => {
          const {
            id,
            isDismissible,
            link,
            message,
            type,
          } = alert;

          if (isDismissible) {
            return (
              <Alert color={type} isOpen={this.state[id].isOpen} toggle={() => this.dismiss(id)} key={`${type}-${index}`}>
                {message}
                {link && AlertBar.renderLink(link)}
              </Alert>
            );
          }
          return (
            <Alert color={type} key={`${type}-${index}`}>
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

