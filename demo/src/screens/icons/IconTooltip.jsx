import React from 'react';
import PropTypes from 'prop-types';
import { Icon, UncontrolledTooltip } from '../../../../src/components';

const IconTooltip = ({ iconName, size }) => ([
    <Icon imgSrc={iconName} id={iconName + '-tooltip'} size={size} />,
    <UncontrolledTooltip placement="top" target={iconName + '-tooltip'}>{size && <span>size="{size}"</span>} {!size && <span>{iconName}</span>}</UncontrolledTooltip>,
]);

IconTooltip.propTypes = {
  iconName: PropTypes.string,
  size: PropTypes.string,
};

export default IconTooltip;