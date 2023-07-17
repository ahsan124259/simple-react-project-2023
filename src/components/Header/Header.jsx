import React from 'react';
import logo from '../../images/logo.svg';
import './header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo}></img>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;