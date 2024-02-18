import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
  dialectModule: require('pg'),
  logging: false
});

export default sequelize;
