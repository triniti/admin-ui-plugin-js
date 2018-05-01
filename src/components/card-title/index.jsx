import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CardTitle as CardTitleRS } from 'reactstrap';

const CardTitle = ({ className, section, tag, ...attributes }) => {
  const classes = classNames(
    className,
    {
      'card-section-title': section,
    },
  );

  return (
    <CardTitleRS {...attributes} className={classes} tag={tag} />
  );
};

CardTitle.propTypes = {
  className: PropTypes.string,
  section: PropTypes.bool,
  tag: PropTypes.string,
};

CardTitle.defaultProps = {
  className: '',
  section: false,
  tag: 'h3',
};

export default CardTitle;
