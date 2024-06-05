"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const cliente_1 = require("./cliente");
const venta_1 = require("./venta");
const tipoproducto_1 = require("./tipoproducto");
const producto_1 = require("./producto");
const producto_venta_1 = require("./producto_venta");
class Routes {
    constructor() {
        this.clienteRoutes = new cliente_1.ClienteRoutes();
        this.ventaRoutes = new venta_1.VentaRoutes();
        this.tipoproductoRoutes = new tipoproducto_1.TipoproductoRoutes();
        this.productoRoutes = new producto_1.ProductoRoutes();
        this.producto_ventaRoutes = new producto_venta_1.Producto_ventaRoutes();
    }
}
exports.Routes = Routes;
