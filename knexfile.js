// Update with your config settings.

module.exports = {
    development: {
        client: 'pg',
        connection: process.env.DATABASE_URL || 'postgres://localhost:5432/bandstuff'
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }
};
