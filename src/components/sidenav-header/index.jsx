import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';

import './styles.scss';

const toggleSideWrapper = () => {
    const sideNavWrapper = document.getElementById('sidenav');
    if (sideNavWrapper.classList.contains('offcanvas-left')) {
        sideNavWrapper.classList.remove('offcanvas-left');
    } else {
        sideNavWrapper.classList.add('offcanvas-left');
    }
};

const SidenavHeader = ({ title }) => (
    <div className="sidenav-header">
        {title &&
        <h3 className="sidenav-header-title">{title}</h3>
        }
        <Button outline color="hover" className="sidenav-toggler" onClick={this.toggleSideWrapper} id="sidenav-toggler">
            <Icon imgSrc="angle-left" alt="close"/>
        </Button>
    </div>
);

SidenavHeader.propTypes = {
    title: PropTypes.string,
};

SidenavHeader.defaultProps = {
    title: '',
};

export default SidenavHeader;
