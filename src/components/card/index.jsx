import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card as CardRS } from 'reactstrap';

import './styles.scss';

const Card = ({ className, border, hover, shadow, ...attributes }) => {
  const classes = classNames(
    className,
    {
      'card-border': border,
      'card-hover': hover,
      'card-shadow': shadow,
    },
  );

  return (
    <CardRS className={classes} {...attributes} />
  );
};

Card.propTypes = {
  className: PropTypes.string,
  border: PropTypes.bool,
  hover: PropTypes.bool,
  shadow: PropTypes.bool,
};

export default Card;
