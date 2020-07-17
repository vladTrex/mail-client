import React, { Component, Fragment } from 'react';

// import { FAKE_USER } from './api';
import Login from './components/Login';
import './App.css';
import MainPage from './components/MainPage';

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
                {currentUser ? (
                    <Fragment>
                        <h3>Logged in</h3>
                        <MainPage onLogout={this.handleLogout}/>
                    </Fragment>
                ) : (
                    <Login onLogin={this.handleLogin}/>
                )}
            </div>
        );
    }
}

export default App;