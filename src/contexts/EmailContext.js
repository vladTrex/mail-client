import React, { createContext, Component } from 'react';

import { fetchEmails, fetchLatestEmails } from '../api';
import { withNotifier } from './NotificationContext';

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

        this.refreshInterval = setInterval(this.refresh, 7000);
    }

    componentWillUnmount() {
        clearInterval(this.refreshInterval);
    }

    handleSelectEmail = email => {
        this.setState({ currentEmail: email });
    }

    refresh = () => {
        if (!this.state.loading) {
            fetchLatestEmails().then(emails => {
                if (emails.length > 0) {
                    this.setState(state => ({
                        emails: state.emails.concat(emails)
                    }));
                    // notify!
                    this.props.notify(
                        `${emails.length} more emails arrived`
                    );
                }
            });
        }
    };

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

const Wrapped = withNotifier(EmailProvider);

export { Wrapped as EmailProvider, Consumer as EmailConsumer };