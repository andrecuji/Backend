"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto_venta = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
const Producto_1 = require("./Producto");
const Venta_1 = require("./Venta");
class Producto_venta extends sequelize_1.Model {
}
exports.Producto_venta = Producto_venta;
Producto_venta.init({
    cantidad: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
}, {
    tableName: "productos_ventas",
    sequelize: db_1.database,
    timestamps: false
});
Producto_venta.belongsTo(Producto_1.Producto, { foreignKey: 'producto_id' });
Producto_1.Producto.hasMany(Producto_venta, { foreignKey: 'producto_id' });
Producto_venta.belongsTo(Venta_1.Venta, { foreignKey: 'venta_id' });
Venta_1.Venta.hasMany(Producto_venta, { foreignKey: 'venta_id' });
