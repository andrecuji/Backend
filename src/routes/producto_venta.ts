import { Request, Response, Application, Router } from "express";
import { Producto_ventaController } from '../controllers/producto_venta.controller';

export class Producto_ventaRoutes {
    public producto_ventaController: Producto_ventaController =  new Producto_ventaController();

    public routes(app: Application): void {
        app.route("/productos_ventas").get(this.producto_ventaController.getAllProducto_venta);
        app.route("/producto_venta/:id").get(this.producto_ventaController.getOneProducto_venta);
        app.route("/producto_venta").post(this.producto_ventaController.createProducto_venta);
        app.route("/producto_venta/:id").patch(this.producto_ventaController.updateProducto_venta);
        app.route("/producto_venta/ocultar/:id").patch(this.producto_ventaController.ocultarProducto_venta);
        app.route("/producto_venta/eliminar/:id").delete(this.producto_ventaController.deleteProducto_venta);
    }
}