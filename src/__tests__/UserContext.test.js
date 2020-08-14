import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { UserConsumer, UserProvider } from '../contexts/UserContext';
import { FAKE_USER } from '../api';

test('default value is undefined', () => {
    let actualValue = 'replace me';

    render(
        <UserConsumer>
            {value => (actualValue = value)}
        </UserConsumer>
    );
});

test('initial user is FAKE_USER', () => {
    const { container } = render(
        <UserProvider>
            <UserConsumer>
                {({ user }) => <div>{user.username}</div>}
            </UserConsumer>
        </UserProvider>
    );

    expect(container.textContent).toEqual(FAKE_USER.username);
});

test('onLogin sets the user', () => {
    const { container } = render(
        <UserProvider>
            <UserConsumer>
                {({ user, onLogin }) => (
                    <div>
                        <span>{user.username}</span>
                        <button
                            onClick={() => onLogin({ username: 'erin' })}
                        />
                    </div>
                )}
            </UserConsumer>
        </UserProvider>
    );
    userEvent.click(container.querySelector('button'));
    expect(
        container.querySelector('span').textContent
    ).toEqual('erin');
});

test('onLogout clears the user', () => {
    const { container } = render(
        <UserProvider>
            <UserConsumer>
                {({ user, onLogout }) => (
                    <div>
                        <span>{(user === null).toString()}</span>
                        <button onClick={() => onLogout()} />
                    </div>
                )}
            </UserConsumer>
        </UserProvider>
    );
    userEvent.click(container.querySelector('button'));
    expect(
        container.querySelector('span').textContent
    ).toEqual('true');
});
