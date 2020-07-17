import React, { Component, Fragment } from 'react';

// import { FAKE_USER } from './api';
import Login from './components/Login';
import './App.css';
import MainPage from './components/MainPage';
import UserContext from './contexts/UserContext';

class App extends Component {
    state = {
        currentUser: null,
    };

    handleLogin = (user) => {
        this.setState({ currentUser: user });
    };

    handleLogout = () => {
        this.setState({ currentUser: null });
    };

    render() {
        const { currentUser } = this.state;

        return (
            <div style={{ padding: 10 }}>
                <UserContext.Provider value={{
                    user: currentUser,
                    onLogin: this.handleLogin,
                    onLogout: this.handleLogout
                }}>
                    {currentUser ? (
                        <Fragment>
                            <h3>Logged in</h3>
                            <MainPage/>
                        </Fragment>
                    ) : (
                        <Login />
                    )}
                </UserContext.Provider>
            </div>
        );
    }
}

export default App;