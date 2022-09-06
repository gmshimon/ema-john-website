import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {

        })
    }
    return (
        <nav className="header-container">
            <img src={logo} alt="" />
            <div>
                <Link to="/home">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {user?<span onClick={handleSignOut}>Sign Out</span>:<Link to="/login">login</Link>}
            </div>
        </nav>
    );
};

export default Header;