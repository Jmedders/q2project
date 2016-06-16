// Update with your config settings.

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost:5432/bandstuff'
    },
    production: {
        client: 'pg',
        connection: 'postgres://yjvlmlpwrwfwqq:H0KpbVVXldpzF67opTyx4gEF4q@ec2-107-20-198-81.compute-1.amazonaws.com:5432/df3ul42l5gtiob'
    }
};
