import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Jumbotron as JumbotronRS } from 'reactstrap';
import './styles.scss';

const Jumbotron = ({ className, theme, ...attributes }) => {
  const classes = classNames(
    className,
    {
      [`jumbotron-${theme}`]: !!theme,
    },
  );

  return <JumbotronRS {...attributes} className={classes} />;
};

Jumbotron.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
};
Jumbotron.defaultProps = {
  className: '',
  theme: '',
};

export default Jumbotron;
