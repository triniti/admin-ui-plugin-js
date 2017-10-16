// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const CardsContainer = ({ styleName, children }) => (
  <div className="cards-container">{children}</div>
);

CardsContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CardsContainer;
