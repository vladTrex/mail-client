import React from 'react';

import { EmailConsumer } from '../contexts/EmailContext';

import Header from './partials/Header';
import MessageList from './partials/MessageList';
import MessageViewer from './partials/MessageViewer';

const MainPage = () => (
    <EmailConsumer>
        {({ currentEmail }) => (
            <main>
                <Header/>
                {currentEmail ? <MessageViewer/> : <MessageList/>}
            </main>
        )}
    </EmailConsumer>
);

export default MainPage;