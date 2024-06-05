"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoRoutes = void 0;
const producto_controller_1 = require("../controllers/producto.controller");
class ProductoRoutes {
    constructor() {
        this.productoController = new producto_controller_1.ProductoController();
    }
    routes(app) {
        app.route("/productos/test").get(this.productoController.test);
        app.route("/productos").get(this.productoController.getAllProducto);
        app.route("/producto/:id").get(this.productoController.getOneProducto);
        app.route("/producto").post(this.productoController.createProducto);
        app.route("/producto/:id").put(this.productoController.updateProducto);
        app.route("/producto/:id").delete(this.productoController.deleteProducto);
    }
}
exports.ProductoRoutes = ProductoRoutes;
