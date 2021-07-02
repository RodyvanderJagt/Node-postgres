// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'api',
      user:     'me',
      password: 'password'
    },
    migrations: {
      directory: __dirname + '/migrations'
    }
  }
};
