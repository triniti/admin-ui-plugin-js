import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ListGroup as ListGroupRS } from 'reactstrap';
import './styles.scss';

const ListGroup = ({ className, borderless, nav, theme, ...attributes }) => {
  const classes = classNames(
    className,
    { 'list-group-nav': nav },
    { 'list-group-borderless': borderless },
    {
      [`list-group-${theme}`]: !!theme,
    },
  );

  return <ListGroupRS {...attributes} className={classes} />;
};

ListGroup.propTypes = {
  borderless: PropTypes.bool,
  className: PropTypes.string,
  nav: PropTypes.bool,
  theme: PropTypes.string,
};

ListGroup.defaultProps = {
  borderless: false,
  className: '',
  nav: false,
  theme: '',
};

export default ListGroup;
