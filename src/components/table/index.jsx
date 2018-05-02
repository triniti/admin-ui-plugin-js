import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table as TableRS } from 'reactstrap';
import './styles.scss';

const Table = ({ className, borderless, fixed, ...attributes }) => {
  const classes = classNames(
    className,
    { 'table-borderless': borderless },
    { 'table-fixed': fixed },
  );

  return <TableRS {...attributes} className={classes} />;
};

Table.propTypes = {
  className: PropTypes.string,
  borderless: PropTypes.bool,
  fixed: PropTypes.bool,
};

Table.defaultProps = {
  className: '',
  borderless: false,
  fixed: false,
};

export default Table;
