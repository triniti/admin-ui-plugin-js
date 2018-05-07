import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';

const UserNavCloser = ({ onClick }) => (
  <Button
    outline
    color="hover"
    size="sm"
    onClick={onClick}
    className="mb-0 ml-auto pr-3"
  >
    <Icon imgSrc="close" id="close" className="mr-0" />
  </Button>
);


UserNavCloser.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UserNavCloser;
