import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card as CardRS } from 'reactstrap';

import './styles.scss';

const Card = ({ className, border, hover, hoverBorder, shadow, ...attributes }) => {
  const classes = classNames(
    className,
    {
      'card-border': border,
      'card-hover': hover,
      'card-hover-border': hoverBorder,
      'card-shadow': shadow,
    },
  );

  return (
    <CardRS {...attributes} className={classes} />
  );
};

Card.propTypes = {
  className: PropTypes.string,
  border: PropTypes.bool,
  hover: PropTypes.bool,
  hoverBorder: PropTypes.bool,
  shadow: PropTypes.bool,
};

Card.defaultProps = {
  border: false,
  className: '',
  hover: false,
  hoverBorder: false,
  shadow: false,
};

export default Card;
