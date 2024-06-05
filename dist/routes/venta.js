"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaRoutes = void 0;
const venta_controller_1 = require("../controllers/venta.controller");
class VentaRoutes {
    constructor() {
        this.ventaController = new venta_controller_1.VentaController();
    }
    routes(app) {
        app.route("/ventas/test").get(this.ventaController.test);
        app.route("/ventas").get(this.ventaController.getAllVenta);
        app.route("/venta/:id").get(this.ventaController.getOneVenta);
        app.route("/venta").post(this.ventaController.createVenta);
        app.route("/venta/:id").put(this.ventaController.updateVenta);
        app.route("/venta/:id").delete(this.ventaController.deleteVenta);
    }
}
exports.VentaRoutes = VentaRoutes;
