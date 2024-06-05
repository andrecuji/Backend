import { Request, Response, Application, Router } from "express";
import { TipoproductoController } from '../controllers/tipoproducto.controller';

export class TipoproductoRoutes {
    public tipoproductoController: TipoproductoController =  new TipoproductoController();

    public routes(app: Application): void {
        app.route("/tipoproductos").get(this.tipoproductoController.getAllTipoproducto);
        app.route("/tipoproducto/:id").get(this.tipoproductoController.getOneTipoproducto);
        app.route("/tipoproducto").post(this.tipoproductoController.createTipoproducto);
        app.route("/tipoproducto/:id").patch(this.tipoproductoController.updateTipoproducto);
        app.route("/tipoproducto/ocultar/:id").patch(this.tipoproductoController.ocultarTipoproducto);
        app.route("/tipoproducto/eliminar/:id").delete(this.tipoproductoController.deleteTipoproducto);

    }
}

