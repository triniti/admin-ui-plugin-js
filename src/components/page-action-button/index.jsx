import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';

const PageActionButton = ({ text, icon, iconUrl, ...rest }) => (
  <Button size="sm" className="mb-0 btn-action" {...rest}>
    {(iconUrl || icon) && <Icon size="xs" imgSrc={icon} src={iconUrl} alt={text} />}
    {text}
  </Button>
);

PageActionButton.propTypes = {
  icon: PropTypes.string,
  iconUrl: PropTypes.string,
  text: PropTypes.string,
};

PageActionButton.defaultProps = {
  text: 'Click',
  icon: '',
  iconUrl: '',
};

export default PageActionButton;
