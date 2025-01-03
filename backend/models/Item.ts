import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

export class Item extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,  // Ensure price is positive
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'items',
    timestamps: true,  // Automatically handle `createdAt` and `updatedAt`
  }
);
