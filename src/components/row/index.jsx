import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Row as RowRS } from 'reactstrap';

const Row = ({ className, gutter, ...attributes }) => {
  const classes = classNames(
    className,
    {
      [`gutter-${gutter}`]: !!gutter,
    },
  );

  return <RowRS {...attributes} className={classes} />;
};

Row.propTypes = {
  className: PropTypes.string,
  gutter: PropTypes.string,
};

Row.defaultProps = {
  className: '',
  gutter: '',
};

export default Row;
