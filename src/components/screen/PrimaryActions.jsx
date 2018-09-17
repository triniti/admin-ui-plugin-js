import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../button';
import Icon from '../icon';
import { mapToCssModules } from '../utils';

class PrimaryActions extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    cssModule: PropTypes.object, // eslint-disable line
  };

  static defaultProps = {
    className: '',
    children: null,
    cssModule: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };

    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    const {
      className,
      cssModule,
      children,
    } = this.props;

    const { active } = this.state;
    const classes = mapToCssModules(classNames(
      className,
      'screen-primary-actions-mobile',
      'fade',
      active ? 'show' : 'hide',
    ), cssModule);

    return (
      <div className="screen-primary-actions">
        <Button color="primary" className="btn-primary-actions-toggle" onClick={this.toggleClass}>
          <Icon imgSrc="status" className="mr-0" size="md" />
        </Button>
        <div className={classes}>
          <div className="screen-primary-actions-mobile-body">
            <div className="screen-primary-actions-mobile-close" onClick={this.toggleClass} />
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default PrimaryActions;
