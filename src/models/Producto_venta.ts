import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Producto } from "./Producto";
import { Venta } from "./Venta";

export class Producto_venta extends Model {
  public cantidad!: number;
  public precio!: number;
  public total!: number;
  public producto_id!: number;
  public venta_id!: number;
  public activo!: boolean;
}

export interface Producto_ventaI {
    cantidad: number;
    precio: number;
    total: number;
    producto_id: number;
    venta_id: number;
    activo?: boolean;
}

Producto_venta.init(
  {
    
    cantidad: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    total: {
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
    tableName: "productos_ventas",
    sequelize: database,
    timestamps: true
  }
);

Producto_venta.belongsTo(Producto, {foreignKey: 'producto_id'})
Producto.hasMany(Producto_venta, {foreignKey: 'producto_id'})

Producto_venta.belongsTo(Venta, {foreignKey: 'venta_id'})
Venta.hasMany(Producto_venta, {foreignKey: 'venta_id'})