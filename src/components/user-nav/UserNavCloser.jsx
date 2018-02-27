import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';

const UserNavCloser = ({ handleClick }) => (
  <Button
    outline
    color="hover"
    size="sm"
    onClick={handleClick}
    className="mb-0 ml-auto pr-3"
  >
    <Icon imgSrc="close" id="close" className="mr-0" />
  </Button>
);


UserNavCloser.propTypes = {
  handleClick: PropTypes.func,
};

export default UserNavCloser;
