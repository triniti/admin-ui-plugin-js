import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CardBody as CardBodyRS } from 'reactstrap';


const CardBody = ({ className, indent, ...attributes }) => {
  const classes = classNames(
    className,
    {
      'card-body-indent': indent,
    },
  );

  return (
    <CardBodyRS className={classes} {...attributes} />
  );
};

CardBody.propTypes = {
  className: PropTypes.string,
  indent: PropTypes.bool,
};

CardBody.defaultProps = {
  className: '',
  indent: false,
};

export default CardBody;
