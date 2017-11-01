import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import iconSave from './save.svg';

const SaveButton = ({ handleClick }) => (
  <Button
    size="sm"
    onClick={handleClick}
    className="mb-0"
    action="save"
  >
    <img src={iconSave} alt="save" />Save
  </Button>
);


SaveButton.propTypes = {
  handleClick: PropTypes.func,
};

export default SaveButton;
