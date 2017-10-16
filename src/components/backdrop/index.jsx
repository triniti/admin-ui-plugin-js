import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Backdrop = ({ handleClick }) => <div className={'tri-backdrop'} onClick={handleClick} />;

Backdrop.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Backdrop;
