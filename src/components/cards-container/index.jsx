// react
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const CardsContainer = ({ className, children }) => (
  <div className={classnames('cards-container', className)}>{children}</div>
);

CardsContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CardsContainer;
