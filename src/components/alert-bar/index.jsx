import React from 'react';
import PropTypes from 'prop-types';
import Alert from '../alert';
import RouterLink from '../router-link';

export default class AlertBar extends React.Component {
  static propTypes = {
    alerts: PropTypes.array.isRequired,
    onDismiss: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = this.updateState(props);
    this.dismiss = this.dismiss.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
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

  clickLink(dismissOnClick, id) {
    if (dismissOnClick) {
      this.dismiss(id);
    }
  }

  renderLink({ dismissOnClick, openInNewTab, text, href }, id) {
    if (openInNewTab) {
      return (
        <span>
          <a
            className="alert-link"
            target="_blank"
            onClick={() => this.clickLink(dismissOnClick, id)}
            href={href}
          >
            {text}
          </a>
        </span>
      );
    }
    return (
      <span>
        <RouterLink
          className="alert-link"
          onClick={() => this.clickLink(dismissOnClick, id)}
          to={href}
        >
          {text}
        </RouterLink>
      </span>
    );
  }

  render() {
    return (
      <div className="alert-wrapper">
        <div className="alert-container">
          {this.props.alerts.map((alert) => {
            const {
              id,
              isDismissible,
              link,
              message,
              type,
            } = alert;

            if (isDismissible) {
              return (
                <Alert
                  color={type}
                  isOpen={this.state[id].isOpen}
                  toggle={() => this.dismiss(id)}
                  key={id}
                  inverse
                >
                  {message}
                  {link && this.renderLink(link, id)}
                </Alert>
              );
            }
            return (
              <Alert color={type} key={id} inverse>
                {message}
                {link && this.renderLink(link, id)}
              </Alert>
            );
          })}
        </div>
      </div>
    );
  }
}
