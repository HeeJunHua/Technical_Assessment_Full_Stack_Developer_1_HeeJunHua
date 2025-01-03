// config/database.ts
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost', // or your MySQL host
  port: 3306, // MySQL port
  username: 'root',
  password: '',
  database: 'items_db',
  models: [__dirname + '/../models'], // Auto-load models from the models directory
});

export default sequelize;
