import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  split: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
  size: '',

};

const MainContent = (props) => {
  const {
    className,
    cssModule,
    size,
    split,
    children,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'main-content',
    split ? 'main-content-split' : false,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
    {size && !split &&
      <div className={`max-width max-width-${size}`}>
        {children}
      </div>
    }
    {!size && split &&
      <div className={`main-content-column`}>
        {children}
      </div>
    }
    {!size || !split && children}
    </Tag>
  );
};

MainContent.propTypes = propTypes;
MainContent.defaultProps = defaultProps;

export default MainContent;
