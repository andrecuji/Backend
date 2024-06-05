import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Tipoproducto } from "./Tipoproducto";

export class Producto extends Model {
  public nombre!: string;
  public marca!: string;
  public precio!: number;
  public stock!: number;
  public cantidad!: number;
  public tipoproducto_id!: number;
  public activo!: boolean;

}

export interface ProductoI {
     nombre: string;
     marca: string;
     precio: number;
     stock: number;
     cantidad: number;
     tipoproducto_id: number;
      activo?: boolean;
}

Producto.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },


    marca: {
        type: DataTypes.STRING,
        allowNull: false
      },

    precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    stock: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    cantidad: {
      type: DataTypes.FLOAT,
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
    tableName: "productos",
    sequelize: database,
    timestamps: true
  }
);

Producto.belongsTo(Tipoproducto, {foreignKey: 'tipoproducto_id'});
Tipoproducto.hasMany(Producto, {foreignKey: 'tipoproducto_id'});