import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { EmailContext } from '../contexts/EmailContext';
import MessageViewer from '../components/partials/MessageViewer';

const email = {
    subject: 'Black Friday!',
    body: 'So many sales!',

};

test('view an email', () => {
    const { container } = render(
        <EmailContext.Provider value={{
            currentEmail: email
        }}>
            <MessageViewer />
        </EmailContext.Provider>
    );

    expect(
        container.querySelector('h2').textContent
    ).toEqual(email.subject);

    expect(
        container.querySelector('h2 + div').textContent
    ).toEqual(email.body);
});

test('back button', () => {
    const mockCallback = jest.fn();
    const { container } = render(
        <EmailContext.Provider value={{
            currentEmail: email,
            onSelectEmail: mockCallback
        }}>
            <MessageViewer />
        </EmailContext.Provider>
    );
    userEvent.click(container.querySelector('button'));
    expect(mockCallback).toBeCalledWith(null);

});