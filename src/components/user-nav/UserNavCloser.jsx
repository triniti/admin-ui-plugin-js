import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import iconClose from './close.svg';

const UserNavCloser = ({ handleClick }) => (
  <Button
    outline
    color="hover"
    size="sm"
    onClick={handleClick}
  >
    <img src={iconClose} alt="close" />
  </Button>
);


UserNavCloser.propTypes = {
  handleClick: PropTypes.func,
};

export default UserNavCloser;
