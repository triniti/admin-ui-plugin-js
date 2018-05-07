import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

const UserNavOpener = ({ onClick }) => (
  <button className="btn-usernav" onClick={onClick}>
    {/* fixme:: create notification component, get unread numbers from redux stroe */}
    <Icon imgSrc="user" id="user" className="mr-0" />
    <div className="badge-usernav">3</div>
  </button>
);

UserNavOpener.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UserNavOpener;
