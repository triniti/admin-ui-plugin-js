import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import Button from '../button';
import Icon from '../icon';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

class ScreenPrimaryActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        active: false,
    };

    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    console.log('hey girl!');
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    let {
      className,
      cssModule,
      children,
    } = this.props;

    const classes = mapToCssModules(classNames(
      className,
      'screen-primary-actions-mobile',
      'fade',
      this.state.active ? 'show' : 'hide',
    ), cssModule);

    return (
      <div className="screen-primary-actions">

        <Button color="primary" className="btn-primary-actions-toggle" onClick={this.toggleClass}>
          <Icon imgSrc="status" className="mr-0" size="md" />
        </Button>
        <div className={classes}>
          <div className="screen-primary-actions-mobile-body">
            <div className="screen-primary-actions-mobile-close" onClick={this.toggleClass}/>
            {children}
          </div>
        </div>

      </div>
    );
  }
}

ScreenPrimaryActions.propTypes = propTypes;

export default ScreenPrimaryActions;
