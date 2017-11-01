import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import iconBack from './back.svg';

const BackButton = ({ handleClick }) => (
  <Button
    size="sm"
    onClick={handleClick}
    className="mb-0"
    action="back"
  >
    <img src={iconBack} alt="back" />Back
  </Button>
);


BackButton.propTypes = {
  handleClick: PropTypes.func,
};

export default BackButton;
