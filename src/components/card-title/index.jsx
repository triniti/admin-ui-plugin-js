import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CardTitle as CardTitleRS } from 'reactstrap';


const CardTitle = ({ className, section, ...attributes }) => {
  const classes = classNames(
    className,
    {
      'card-section-title': section,
    },
  );

  return (
    <CardTitleRS className={classes} {...attributes} />
  );
};

CardTitle.propTypes = {
  className: PropTypes.string,
  section: PropTypes.bool,
};

CardTitle.defaultProps = {
  tag: 'h3',
};

export default CardTitle;
