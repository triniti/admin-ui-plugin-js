import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Media as MediaRS } from 'reactstrap';
import './styles.scss';

const Media = ({ aspectRatio, className, hover, ...attributes }) => {
  const classes = classNames(
    className,
    { [`media-hover-${hover}`]: !!hover },
    { [`aspect-ratio aspect-ratio-${aspectRatio}`]: !!aspectRatio },
  );

  return <MediaRS {...attributes} className={classes} />;
};

Media.propTypes = {
  aspectRatio: PropTypes.string,
  className: PropTypes.string,
  hover: PropTypes.string,
};

Media.defaultProps = {
  aspectRatio: '',
  className: '',
  hover: '',
};

export default Media;
