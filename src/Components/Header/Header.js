import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <div className="title">
                <h1>My Bangla Dramma Team Selection</h1>
                <h1>Total Budget: <span>10000 Dollers</span></h1>
            </div>
            
        </div>
    );
};

export default Header;