import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CardHeader as CardHeaderRS } from 'reactstrap';

const CardHeader = ({ className, toggler, ...attributes }) => {
  const classes = classNames(
    className,
    {
      'card-header-toggler': toggler,
    },
  );

  return (
    <CardHeaderRS {...attributes} className={classes} />
  );
};

CardHeader.propTypes = {
  className: PropTypes.string,
  toggler: PropTypes.bool,
};

CardHeader.defaultProps = {
  className: '',
  toggler: false,
};

export default CardHeader;
