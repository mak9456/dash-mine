const express = require('express');
const Sequelize = require('sequelize');
const config = require('./config/database');
const app = express();
const apiRouter = require('./routes/index');
const PORT = 3000;

app.use('/api/v1', apiRouter)
app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    else
        console.log("Error occurred, server can't start", error);
}
);

// const sequelize = new Sequelize(config['development'].database, config['development'].username, config['development'].password, {dialect: config['development'].dialect});
//const sequelize = new Sequelize('dash_mine_db', 'root', 'password', { dialect: 'mysql' });


// sequelize.authenticate()
//     .then(() => {
//         console.error('Server running:');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//         sequelize.close()
//     });