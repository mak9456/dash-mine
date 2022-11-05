module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'dash_mine_db',
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    logging: function (str) {
      debug(str);
    }
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false
  }
}
