import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Tipoproducto extends Model {
  public nombre!: string;
  public activo!: boolean;

}

export interface TipoproductoI {
    nombre: string;
    activo?: boolean;

}

Tipoproducto.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },

    createadAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },

    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  },
  {
    tableName: "tipoproductos",
    sequelize: database,
    timestamps: true
  }
);
