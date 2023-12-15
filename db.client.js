const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://postgre_partiel_user:jRXyGJmGNx9LSs9bR7WLwEx9z130OsB7@dpg-clu2k521hbls73e8ouvg-a/postgre_partiel', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;
