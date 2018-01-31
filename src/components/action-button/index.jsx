import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../button';
import Icon from '../icon';

const ActionButton = ({ className, text, icon, iconUrl, ...rest }) => (
  <Button {...rest} className={classNames('btn-action', className)}>
    {(iconUrl || icon) && <Icon imgSrc={icon} src={iconUrl} alt={text} />}
    {text}
  </Button>
);

ActionButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  iconUrl: PropTypes.string,
  text: PropTypes.string,
};

ActionButton.defaultProps = {
  text: 'Click',
  icon: '',
  iconUrl: '',
};

export default ActionButton;
