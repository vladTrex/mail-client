export const FAKE_USER = {
    firstName: 'Dave',
    lastName: 'Ceddia',
    username: 'dave',
    avatar:
        'https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b?s=32'
};

export const FAKE_EMAILS = [
    {
        id: 0,
        subject: 'Hey Dave',
        body: 'Yo, just wanted to say hey.'
    },
    {
        id: 1,
        subject: 'React is great',
        body: 'I thought I should let you know.'
    },
    {
        id: 2,
        subject: 'REQUEST FOR ASSISTANCE',
        body:
            'If you send me your bank account number I will reward you with $10 million whole US dollars.'
    }
];

FAKE_EMAILS.forEach(
    email => (email.preview = email.body.substr(0, 46))
);

export function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'dave' && password === 'secret') {
                resolve(FAKE_USER);
            } else {
                reject({ message: 'Invalid username or password' });
            }
        }, 300);
    });
}

export function fetchEmails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(FAKE_EMAILS);
        }, 300);
    });
}