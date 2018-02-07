import React from 'react';
import PropTypes from 'prop-types';
import { NavbarToggler, NavbarBrand } from '../';
import './styles.scss';


const MobileNav = ({ handleToggle, title }) => (
  <div className="navbar-main-mobile">
    <NavbarToggler className="hidden-lg-up" onClick={handleToggle} />
    <NavbarBrand href="/" className="navbar-main-brand">
        <span className="sr-only">{title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1170 280">
            <g className="svg-logo-fill"><path d="M829.9 79.6c-4.3 0-8 3.7-8 8v78.1l-65.5-82.8c-1.4-2.2-3.7-3.3-6.4-3.3-4.3 0-8 3.7-8 8v103.9c0 4.3 3.7 8 8 8s8-3.7 8-8v-77.7l65.3 82.3c1.4 2.1 4 3.5 6.6 3.5 4.3 0 8-3.7 8-8v-104c0-4.3-3.7-8-8-8zM587.5 189.8c0-1.8-.5-3.4-1.7-4.9L563 157.3l3.6-.8c16.3-4.9 26-18.1 26-38.4 0-23.2-16.3-38.6-39.6-38.6h-39.2c-4.5 0-8.2 3.7-8.2 8.2v102.1c0 4.5 3.7 8.2 8.2 8.2 4.5 0 8.2-3.7 8.2-8.2v-32.1h19.8l31.3 37.4c1.3 1.7 3.9 2.9 6.3 2.9 4.4 0 8.1-3.7 8.1-8.2zm-65.6-45.9V93.7h30.8c14.5 0 24 10.4 24 24.5 0 14.9-6.4 25.6-23.5 25.6h-31.3zM395.3 199.5c4.5 0 8.2-3.7 8.2-8.2V94.9h33.8c3.8 0 6.9-3.1 6.9-6.9s-3.1-6.9-6.9-6.9h-84c-3.8 0-6.9 3.1-6.9 6.9s3.1 6.9 6.9 6.9h33.8v96.4c0 4.5 3.7 8.2 8.2 8.2zM663 79.6c-4.5 0-8.2 3.7-8.2 8.2v103.5c0 4.5 3.7 8.2 8.2 8.2 4.5 0 8.2-3.7 8.2-8.2V87.8c0-4.5-3.7-8.2-8.2-8.2zM913.8 79.6c-4.5 0-8.2 3.7-8.2 8.2v103.5c0 4.5 3.7 8.2 8.2 8.2s8.2-3.7 8.2-8.2V87.8c0-4.5-3.7-8.2-8.2-8.2zM1034 199.5c4.5 0 8.2-3.7 8.2-8.2V94.9h33.8c3.8 0 6.9-3.1 6.9-6.9s-3.1-6.9-6.9-6.9h-84c-3.8 0-6.9 3.1-6.9 6.9s3.1 6.9 6.9 6.9h33.8v96.4c0 4.5 3.7 8.2 8.2 8.2zM1152.7 79.6c-4.5 0-8.2 3.7-8.2 8.2v103.5c0 4.5 3.7 8.2 8.2 8.2 4.5 0 8.2-3.7 8.2-8.2V87.8c0-4.5-3.7-8.2-8.2-8.2z"/></g><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="70.263" y1="17.454" x2="261.902" y2="209.093"><stop offset="0" stopColor="#12dbdb"/><stop offset="1" stopColor="#0fb6e3"/></linearGradient><path fill="url(#a)" d="M213.7 80.1H67.9c-4.5 0-7.9 3.4-7.9 7.8 0 4.3 3.6 7.8 7.9 7.8h145.8c4.2 0 7.6-3.5 7.6-7.8-.1-4.4-3.3-7.8-7.6-7.8z"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="53.138" y1="34.579" x2="244.777" y2="226.218"><stop offset="0" stopColor="#12dbdb"/><stop offset="1" stopColor="#0fb6e3"/></linearGradient><path fill="url(#b)" d="M156.3 108.3c-4.3 0-7.8 3.6-7.8 7.9v100.2c0 4.4 3.5 7.9 7.8 7.9 4.5 0 7.9-3.5 7.9-7.9v-92.6h49.4c4.2 0 7.6-3.3 7.6-7.6 0-4.5-3.3-7.9-7.6-7.9h-57.3z"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="31.281" y1="56.496" x2="222.92" y2="248.135"><stop offset="0" stopColor="#12dbdb"/><stop offset="1" stopColor="#0fb6e3"/></linearGradient><path fill="url(#c)" d="M16.7 193.9c1.3 2.4 3.8 4 6.7 4 4.2 0 7.6-3.4 7.6-7.6 0-1.2-.3-2.3-.8-3.3-6.7-15.4-10.1-31.4-10.1-47.7 0-30.7 11.6-60 32.6-82.5 20.3-21.7 47.6-35 77-37.7.7-.2 1.3-.4 2-.8 3.7-2.1 5-6.7 2.9-10.4-1.4-2.5-4-3.9-6.7-3.9-33 3.1-63.5 17.9-86.2 42.2-23.6 25.2-36.6 58.2-36.6 93 0 18.9 3.9 37.3 11.6 54.7z"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="106.571" y1="-18.854" x2="298.21" y2="172.785"><stop offset="0" stopColor="#12dbdb"/><stop offset="1" stopColor="#0fb6e3"/></linearGradient><path fill="url(#d)" d="M239.8 46.6c-22.7-24.3-53.1-39.3-86-42.5-1.1.1-2.2.4-3.2 1-3.8 2.1-5.1 6.8-3 10.6 1.2 2.1 3.1 3.2 5.3 3.6 29.1 3 56 16.4 76.1 37.9 20.8 22.4 32.3 51.5 32.3 82.1 0 16.9-3.2 32.9-9.6 47.7-.5 1-.8 2.1-.8 3.3 0 2.9 1.6 5.3 3.9 6.6l.2.1c1.1.5 2.2.9 3.5.9 2.9 0 5.4-1.6 6.7-4 7.4-16.8 11.1-35.1 11.1-54.7.1-34.5-12.9-67.3-36.5-92.6z"/><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="23.126" y1="64.591" x2="214.765" y2="256.23"><stop offset="0" stopColor="#12dbdb"/><stop offset="1" stopColor="#0fb6e3"/></linearGradient><path fill="url(#e)" d="M124.9 224.4c4.5 0 7.9-3.5 7.9-7.9V116.3c0-4.5-3.5-7.9-7.9-7.9h-57c-4.5 0-7.9 3.5-7.9 7.9 0 4.2 3.5 7.6 7.9 7.6h49v92.6c0 4.3 3.7 7.9 8 7.9z"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="7.223" y1="80.495" x2="198.862" y2="272.134"><stop offset="0" stopColor="#12dbdb"/><stop offset="1" stopColor="#0fb6e3"/></linearGradient><path fill="url(#f)" d="M246 205.6c-2.5 0-4.8 1.2-6.2 3.1-22.7 32.1-59.3 51.2-98.6 51.2s-76-19.1-98.7-51.3c-1.4-1.9-3.7-3.1-6.2-3.1-4.3 0-7.5 3.4-7.5 7.7 0 1.1.3 2.2.7 3.2C55 253.2 96.5 275 141.2 275c44.8 0 86.4-22 111.9-58.9.3-.9.6-1.8.6-2.8-.1-4.3-3.4-7.7-7.7-7.7z"/>
        </svg>
    </NavbarBrand>
    <span className="navbar-main-spacer" />
  </div>
);

MobileNav.propTypes = {
  handleToggle: PropTypes.func,
  title: PropTypes.string,
};

export default MobileNav;
