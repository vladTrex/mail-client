import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { UserProvider } from './contexts/UserContext';
import { EmailProvider } from './contexts/EmailContext';

ReactDOM.render(
    <React.StrictMode>
        <EmailProvider>
            <UserProvider>
                <App/>
            </UserProvider>
        </EmailProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
