"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
const Tipoproducto_1 = require("./Tipoproducto");
class Producto extends sequelize_1.Model {
}
exports.Producto = Producto;
Producto.init({
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    stock: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    cantidad: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
}, {
    tableName: "productos",
    sequelize: db_1.database,
    timestamps: false
});
Producto.belongsTo(Tipoproducto_1.Tipoproducto, { foreignKey: 'tipoproducto_id' });
Tipoproducto_1.Tipoproducto.hasMany(Producto, { foreignKey: 'tipoproducto_id' });
