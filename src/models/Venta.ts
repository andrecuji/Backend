import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Cliente } from "./Cliente";

export class Venta extends Model {
  public fecha!: Date;
  public subtotal!: number;
  public impuestos!: number;
  public descuentos!: number;
  public total!: number;
  public cliente_id!: number;
  public activo!: boolean;
}

export interface VentaI {
    fecha: Date;
    subtotal: number;
    impuestos: number;
    descuentos: number;
    total: number;
    cliente_id: number;
    activo?: boolean;
}

Venta.init(
  {
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },

    subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    impuestos: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    descuentos: {
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
    createAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
    updateAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      }
  },
  {
    tableName: "ventas",
    sequelize: database,
    timestamps: true,
  }
);

Cliente.hasMany(Venta, {foreignKey: 'cliente_id'});
Venta.belongsTo(Cliente, {foreignKey: 'cliente_id'});