import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

export class Item extends Model {
  public id!: number;
  public name!: string;
  public description?: string;
  public price!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Name is required' },
        len: { args: [1, 100], msg: 'Name must be between 1 and 100 characters' },
      },
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        len: { args: [0, 500], msg: 'Description must not exceed 500 characters' },
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: { msg: 'Price must be a valid number' },
        min: { args: [0.01], msg: 'Price must be greater than 0' },
      },
    },
  },
  {
    sequelize,
    modelName: 'Item',
    tableName: 'items',
  }
);
