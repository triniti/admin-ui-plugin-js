// react
import React from 'react';
import PropTypes from 'prop-types';

// external components
import Alert from '../alert';

class AlertBar extends React.Component {
  static propTypes = {
    alerts: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = this.newState(this.props);

    this.dismiss = this.dismiss.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.newState(nextProps));
  }

  newState(props) {
    const newState = Object.assign({}, this.state);
    const { alerts } = props;

    alerts.forEach((alert) => {
      if (!newState[alert.id]) {
        newState[alert.id] = {
          isOpen: true,
        };
      }
      if (newState[alert.id].isOpen && alert.isDismissable && Number.isInteger(alert.delay)) {
        setTimeout(() => {
          const futureState = Object.assign({}, this.state);
          futureState[alert.id].isOpen = false;
          this.setState(futureState);
        }, alert.delay);
      }
    });
    return newState;
  }

  dismiss(alert) {
    const newState = Object.assign({}, this.state);
    newState[alert.id].isOpen = false;
    this.setState(newState);
  }

  render() {
    const { alerts } = this.props;
    return (
      <div>
        {alerts.map((alert, index) => {
          if (alert.isDismissable) {
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

AlertBar.propTypes = {
  alerts: PropTypes.array.isRequired,
};

export default AlertBar;
