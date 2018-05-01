import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Backdrop = ({ onClick }) => <div className="tri-backdrop" onClick={onClick} />;

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
