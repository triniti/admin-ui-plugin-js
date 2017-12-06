// react
import React from 'react';
import PropTypes from 'prop-types';

// external components
import Alert from '../alert';

class AlertBar extends React.Component {
  static propTypes = {
    alerts: PropTypes.array.isRequired,
    onDismiss: PropTypes.func.isRequired,
  };

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

  dismiss({ id }) {
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
          if (alert.isDismissible) {
            return (
              <Alert color={alert.type} isOpen={this.state[alert.id].isOpen} toggle={() => this.dismiss(alert)} key={`${alert.type}-${index}`}>
                {alert.message}
              </Alert>
            );
          }
          return (
            <Alert color={alert.type} key={`${alert.type}-${index}`}>
              {alert.message}
            </Alert>
          );
        })}
      </div>
    );
  }
}

export default AlertBar;
