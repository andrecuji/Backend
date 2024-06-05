"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
class Cliente extends sequelize_1.Model {
}
exports.Cliente = Cliente;
Cliente.init({
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "clientes",
    sequelize: db_1.database,
    timestamps: false
});
