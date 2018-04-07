import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SweetAlert from 'sweetalert2';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {

};

const Swal = (props) => {
  const {
    className,
    cssModule,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'sweetalert2-container',
  ), cssModule);

  return (
      <SweetAlert {...attributes}  className={classes}/>
    );
};


Swal.propTypes = propTypes;
Swal.defaultProps = defaultProps;

export default Swal;



