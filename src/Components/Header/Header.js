import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className="header-container">
            <img src={logo} alt="" />
            <div>
                <Link to="/home">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">login</Link>
            </div>
        </nav>
    );
};

export default Header;