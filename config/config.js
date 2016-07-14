const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: process.env.PORT || 3000,
    db: process.env.DATABASE_URL || 'postgres://postgres@localhost/crema'
  },
  production: {
    port: process.env.PORT || 80,
    db: process.env.DATABASE_URL || 'postgres://postgres@localhost/crema'
  }
};

module.exports = config[env];