import React, { Component, Fragment } from 'react';

// import { FAKE_USER } from './api';
import Login from './components/Login';
import './App.css';
import MainPage from './components/MainPage';
import { UserConsumer } from './contexts/UserContext';

class App extends Component {
    render() {
        return (
            <div style={{ padding: 10 }}>
                <UserConsumer>
                    {({ user }) => (user ? <Fragment>
                        <h3>Logged in</h3>
                        <MainPage/>
                    </Fragment> : <Login/>)}
                </UserConsumer>
            </div>
        );
    }
}

export default App;