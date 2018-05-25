import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Media as MediaRS } from 'reactstrap';
import './styles.scss';

const Media = ({ aspectRatio, className, hover, hoverOutline, ...attributes }) => {
  const classes = classNames(
    className,
    {
      'aspect-ratio': aspectRatio,
      'media-hover-outline': hoverOutline,
    },
    { [`media-hover-${hover}`]: !!hover },
    { [`aspect-ratio-${aspectRatio}`]: !!aspectRatio },
  );

  return <MediaRS {...attributes} className={classes} />;
};

Media.propTypes = {
  aspectRatio: PropTypes.string,
  className: PropTypes.string,
  hover: PropTypes.string,
  hoverOutline: PropTypes.bool, /* deprecated use hover="outline" */
};

Media.defaultProps = {
  aspectRatio: '',
  className: '',
  hover: '',
  hoverOutline: false,
};

export default Media;
