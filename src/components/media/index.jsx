import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Media as MediaRS } from 'reactstrap';
import './styles.scss';

const Media = ({ className, hover, hoverOutline, ...attributes }) => {
  const classes = classNames(
    className,
    {
      'media-hover': hover,
      'media-hover-outline': hoverOutline,
    },
  );

  return <MediaRS {...attributes} className={classes} />;
};

Media.propTypes = {
  className: PropTypes.string,
  hover: PropTypes.bool,
  hoverOutline: PropTypes.bool,
};

Media.defaultProps = {
  className: '',
  hover: false,
  hoverOutline: false,
};

export default Media;
