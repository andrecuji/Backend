"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
const Cliente_1 = require("./Cliente");
class Venta extends sequelize_1.Model {
}
exports.Venta = Venta;
Venta.init({
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    subtotal: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    impuestos: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    descuentos: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
}, {
    tableName: "ventas",
    sequelize: db_1.database,
    timestamps: false
});
Cliente_1.Cliente.hasMany(Venta, { foreignKey: 'cliente_id' });
Venta.belongsTo(Cliente_1.Cliente, { foreignKey: 'cliente_id' });
