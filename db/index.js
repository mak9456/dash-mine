const Sequelize = require('sequelize');
const config = require('../config/database');
const sequelize = new Sequelize(config['development'].database, config['development'].username, config['development'].password, config);

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    sequelize.close()
  }
