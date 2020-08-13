import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { UserProvider } from './contexts/UserContext';
import { EmailProvider } from './contexts/EmailContext';
import { NotificationProvider } from './contexts/NotificationContext';

ReactDOM.render(
    <React.StrictMode>
        <NotificationProvider>
            <EmailProvider>
                <UserProvider>
                    <App/>
                </UserProvider>
            </EmailProvider>
        </NotificationProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
