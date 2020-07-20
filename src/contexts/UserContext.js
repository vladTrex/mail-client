import React, { createContext, Component } from 'react';

const { Provider, Consumer } = createContext();

class UserProvider extends Component {
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
            <Provider value={{
                user: currentUser,
                onLogin: this.handleLogin,
                onLogout: this.handleLogout
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { UserProvider, Consumer as UserConsumer };