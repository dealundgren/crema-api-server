const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: process.env.PORT || 3000,
    db: process.env.DATABASE_URL || 'postgres://postgres@localhost/crema',
    logLevel: process.env.LOG_LEVEL || 'dev'
  },
  production: {
    port: process.env.PORT || 80,
    db: process.env.DATABASE_URL || 'postgres://postgres@localhost/crema',
    logLevel: process.env.LOG_LEVEL || 'tiny'
  }
};

module.exports = config[env];