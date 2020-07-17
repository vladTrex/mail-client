import React from 'react';

import Header from './partials/Header';
import MessageList from './partials/MessageList';

const MainPage = ({ onLogout }) => (
  <main>
    <Header onLogout={onLogout} />
    <MessageList />
  </main>
);

export default MainPage;