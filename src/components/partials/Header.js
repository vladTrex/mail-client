import React from 'react';

import { UserConsumer } from '../../contexts/UserContext';

const Header = () => (
    <UserConsumer>
        {({ onLogout }) => (
            <header>
                <h2>My Mail</h2>
                <button onClick={onLogout}>Logout</button>
            </header>
        )}
    </UserConsumer>

);

export default Header;