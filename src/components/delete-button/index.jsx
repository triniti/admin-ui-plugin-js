import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import iconDelete from './delete.svg';
import './styles.scss';

const DeleteButton = ({ handleClick }) => (
  <Button
    size="sm"
    onClick={handleClick}
    className="mb-0"
    action="delete"
  >
    <img src={iconDelete} alt="delete" />Delete
  </Button>
);


DeleteButton.propTypes = {
  handleClick: PropTypes.func,
};

export default DeleteButton;
