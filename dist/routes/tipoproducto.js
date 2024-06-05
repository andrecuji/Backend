"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoproductoRoutes = void 0;
const tipoproducto_controller_1 = require("../controllers/tipoproducto.controller");
class TipoproductoRoutes {
    constructor() {
        this.tipoproductoController = new tipoproducto_controller_1.TipoproductoController();
    }
    routes(app) {
        app.route("/tipoproductos/test").get(this.tipoproductoController.test);
        app.route("/tipoproductos").get(this.tipoproductoController.getAllTipoproducto);
        app.route("/tipoproducto/:id").get(this.tipoproductoController.getOneTipoproducto);
        app.route("/tipoproducto").post(this.tipoproductoController.createTipoproducto);
        app.route("/tipoproducto/:id").put(this.tipoproductoController.updateTipoproducto);
        app.route("/tipoproducto/:id").delete(this.tipoproductoController.deleteTipoproducto);
    }
}
exports.TipoproductoRoutes = TipoproductoRoutes;
