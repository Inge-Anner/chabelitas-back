if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    require('dotenv').config()
  }
  
  module.exports = {
    dev: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      pool: {
        min: 0,
        max: 1,
        idle: 1000,
      },
    },
    test: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      pool: {
        min: 0,
        max: 1,
        idle: 1000,
      },
    },
    production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      pool: {
        min: 0,
        max: 1,
        idle: 1000,
      },
    },
  };
  