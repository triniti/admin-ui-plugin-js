import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table as TableRS } from 'reactstrap';
import './styles.scss';

const Table = ({ className, borderless, fixed, sticky, ...attributes }) => {
  const classes = classNames(
    className,
    { 'table-borderless': borderless },
    { 'table-fixed': fixed },
    {
      [`sticky-t${sticky}`]: !!sticky,
    },
  );

  return <TableRS {...attributes} className={classes} />;
};

Table.propTypes = {
  className: PropTypes.string,
  borderless: PropTypes.bool,
  fixed: PropTypes.bool,
  sticky: PropTypes.string,
};

Table.defaultProps = {
  className: '',
  borderless: false,
  fixed: false,
  sticky: '',
};

export default Table;
