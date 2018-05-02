import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table as TableRS } from 'reactstrap';
import './styles.scss';

const Table = ({ className, borderless, ...attributes }) => {
  const classes = classNames(
    className,
    { 'table-borderless': borderless },
  );

  return <TableRS {...attributes} className={classes} />;
};

Table.propTypes = {
  className: PropTypes.string,
  borderless: PropTypes.bool,
};

Table.defaultProps = {
  className: '',
  borderless: false,
};

export default Table;
