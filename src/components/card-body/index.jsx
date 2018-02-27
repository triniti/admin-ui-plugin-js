import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  indent: PropTypes.bool,
};

const defaultProps = {
  tag: 'div',
};

const CardBody = (props) => {
  const {
    className,
    cssModule,
    indent,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-body',
    indent ? `card-body-indent` : false,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
