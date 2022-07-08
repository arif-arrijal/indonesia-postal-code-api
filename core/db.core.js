const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true, 
          rejectUnauthorized: false
        }
    },
});

db.authenticate()
    .then(function () {
        console.log("INFO - Database connected.");
    })
    .catch(function (err) {
        console.log("ERROR - Unable to connect to the database:", err);
    });

module.exports = {
    db
}