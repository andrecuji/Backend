"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tipoproducto = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
class Tipoproducto extends sequelize_1.Model {
}
exports.Tipoproducto = Tipoproducto;
Tipoproducto.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: "tipoproductos",
    sequelize: db_1.database,
    timestamps: false
});
