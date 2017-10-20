import React from 'react';
import PropTypes from 'prop-types';

const UserNavOpener = ({ handleClick }) => (
  <button className="btn-usernav" onClick={handleClick}>
    {/* fixme:: create notification component, get unread numbers from redux stroe */}
    <div className="badge-usernav">3</div>
  </button>
);

UserNavOpener.propTypes = {
  handleClick: PropTypes.func,
};

export default UserNavOpener;
