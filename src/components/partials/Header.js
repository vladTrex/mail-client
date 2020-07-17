import React from 'react';

const Header = ({ onLogout }) => (
    <header>
        <h2>My Mail</h2>
        <button onClick={onLogout}>Logout</button>
    </header>
);

export default Header;