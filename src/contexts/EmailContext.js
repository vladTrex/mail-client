import React, { createContext, Component } from 'react';

import { fetchEmails } from '../api';

const { Provider, Consumer } = createContext();

class EmailProvider extends Component {
    state = {
        emails: [],
        currentEmail: null,
        error: null,
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true, error: null });

        fetchEmails()
            .then(emails => this.setState({ loading: false, emails }))
            .catch(error => this.setState({ loading: false, error }));
    }

    handleSelectEmail = email => {
        this.setState({ currentEmail: email });
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                onSelectEmail: this.handleSelectEmail
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { EmailProvider, Consumer as EmailConsumer };