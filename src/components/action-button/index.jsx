import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';

const ActionButton = ({ text, icon, iconUrl, ...rest }) => (
  <Button className="btn-action" {...rest}>
    {(iconUrl || icon) && <Icon imgSrc={icon} src={iconUrl} alt={text} />}
    {text}
  </Button>
);

ActionButton.propTypes = {
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
