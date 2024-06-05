"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto_ventaRoutes = void 0;
const producto_venta_controller_1 = require("../controllers/producto_venta.controller");
class Producto_ventaRoutes {
    constructor() {
        this.producto_ventaController = new producto_venta_controller_1.Producto_ventaController();
    }
    routes(app) {
        app.route("/productos_ventas/test").get(this.producto_ventaController.test);
        app.route("/productos_ventas").get(this.producto_ventaController.getAllProducto_venta);
        app.route("/producto_venta/:id").get(this.producto_ventaController.getOneProducto_venta);
        app.route("/producto_venta").post(this.producto_ventaController.createProducto_venta);
        app.route("/producto_venta/:id").put(this.producto_ventaController.updateProducto_venta);
        app.route("/producto_venta/:id").delete(this.producto_ventaController.deleteProducto_venta);
    }
}
exports.Producto_ventaRoutes = Producto_ventaRoutes;
