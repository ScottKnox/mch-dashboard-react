import React from 'react';
import '../css/Header.css';
import Logo from '../images/seal.svg';

function Header() {
    return (
        <header id="header">
            <img id="logo" alt="logo" src={Logo} />
            <h2>MHC Data Manager</h2>
        </header>
    );
}

export default Header;