import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <nav className="header-container">
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order Overview</a>
                <a href="/login">login</a>
            </div>
        </nav>
    );
};

export default Header;