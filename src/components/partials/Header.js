import React from 'react';

import UserContext from '../../contexts/UserContext';

const Header = () => (
    <UserContext.Consumer>
        {({ onLogout }) => (
            <header>
                <h2>My Mail</h2>
                <button onClick={onLogout}>Logout</button>
            </header>
        )}
    </UserContext.Consumer>

);

export default Header;