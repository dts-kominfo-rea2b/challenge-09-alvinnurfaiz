// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <header>
            <h1 className="top-title">Call A Friend</h1>
            <h3 className="subtitle">Your Friendly Contact App</h3>
        </header>
    )
}


export default Header;