// config/database.ts
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost', 
  port: 3306, 
  username: 'root',
  password: '',
  database: 'items_db',
  models: [__dirname + '/../models'],
});

export default sequelize;
