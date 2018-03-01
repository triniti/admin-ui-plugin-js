import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../../src/components';
import './styles.scss';


const IconList = ({ iconName, ...attributes }) => ([
    <div className="iconlist-item-wrapper">
        <Icon imgSrc={iconName} {...attributes} size="lg" />
        <div className="iconlist-item-text">{iconName}</div>
    </div>
]);

IconList.propTypes = {
  iconName: PropTypes.string,
};

export default IconList;