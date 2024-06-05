import { Model, DataTypes } from "sequelize";
import bcryptjs from "bcryptjs";
import { database } from "../database/db";

export class Cliente extends Model {
  public nombre!: string;
  public direccion!: string;
  public telefono!: string;
  public correo!: string;
  public password!: string;
  public activo!: boolean;
}

export interface ClienteI {
    nombre: string;
    direccion: string;
    telefono: string;
    correo: string;
    password: string;
    activo?: boolean;
  
}

Cliente.init(
  {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
      },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
      },
    password: {
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
    tableName: "clientes",
    sequelize: database,
    timestamps: true,

    hooks: {
      beforeValidate(cliente) {
        if (typeof cliente.nombre === "string") cliente.nombre = cliente.nombre.toUpperCase();
        if (typeof cliente.correo === "string") cliente.correo = cliente.correo.toLowerCase();
     },


     beforeCreate : async (cliente: Cliente) => {
      cliente.password  = await bcryptjs.hash(cliente.password, 8);
      },

      beforeUpdate: async (cliente:Cliente) => {
        if (cliente.changed("password")) {
          cliente.password = await bcryptjs.hash(cliente.password,8)
        }
        },
   


    },
}
);
