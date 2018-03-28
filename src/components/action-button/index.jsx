import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import Button from '../button';
import Icon from '../icon';
import './styles.scss';

const ActionButton = ({ icon, iconUrl, text, ...rest }) => (
  <Button {...rest} action={kebabCase(`action-${text}`)}>
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
  icon: '',
  iconUrl: '',
  text: 'Click',
};

export default ActionButton;
