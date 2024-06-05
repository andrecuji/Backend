import { Request, Response, Application, Router } from "express";
import { VentaController } from '../controllers/venta.controller';

export class VentaRoutes {
    public ventaController: VentaController =  new VentaController();

    public routes(app: Application): void {
        app.route("/ventas").get(this.ventaController.getAllVenta);
        app.route("/venta/:id").get(this.ventaController.getOneVenta);
        app.route("/venta").post(this.ventaController.createVenta);
        app.route("/venta/:id").patch(this.ventaController.updateVenta);
        app.route("/venta/ocultar/:id").patch(this.ventaController.ocultarVenta);
        app.route("/venta/eliminar/:id").delete(this.ventaController.deleteVenta);
        
    }
}
