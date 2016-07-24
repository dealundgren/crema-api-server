const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: process.env.PORT || 3000,
    db: process.env.DATABASE_URL || 'postgres://postgres@localhost/crema',
    logLevel: process.env.LOG_LEVEL || 'dev',
    secret: process.env.SECRET || 'Get Ready 4 a Sompop quiz!',
    googleKey: process.env.GOOGLE_API_KEY || 'AIzaSyAgoDqDGR7W2kzvwgUQ8Uk55JNtg36MXDE'
  },
  production: {
    port: process.env.PORT || 80,
    db: process.env.DATABASE_URL || 'postgres://postgres@localhost/crema',
    logLevel: process.env.LOG_LEVEL || 'tiny',
    secret: process.env.SECRET || 'Get Ready 4 a Sompop quiz!'
  }
};

module.exports = config[env];
