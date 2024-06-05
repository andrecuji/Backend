"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaController = void 0;
const Venta_1 = require("../models/Venta");
class VentaController {
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send('hola, metodo test para Venta');
            }
            catch (error) {
            }
        });
    }
    getAllVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const venta = yield Venta_1.Venta.findAll(
                // {
                //where: {activo: true}
                //}
                ); // select * from ventas;
                res.status(200).json({ venta });
            }
            catch (error) {
            }
        });
    }
    getOneVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: idParam } = req.params;
            try {
                const venta = yield Venta_1.Venta.findOne({
                    where: {
                        id: idParam,
                    }
                });
                if (venta) {
                    res.status(200).json(venta);
                }
                else
                    return res.status(300).json({ msg: "La Venta no existe" });
            }
            catch (error) {
                res.status(500).json({ msg: "Error Internal" });
            }
        });
    }
    createVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fecha, subtotal, impuestos, descuentos, total, cliente_id } = req.body;
            try {
                let body = {
                    fecha,
                    subtotal,
                    impuestos,
                    descuentos,
                    total,
                    cliente_id
                };
                const venta = yield Venta_1.Venta.create(Object.assign({}, body));
                res.status(200).json({ venta });
            }
            catch (error) {
            }
        });
    }
    updateVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: pk } = req.params;
            const { id, fecha, subtotal, impuestos, descuentos, total, cliente_id } = req.body;
            try {
                let body = {
                    fecha,
                    subtotal,
                    impuestos,
                    descuentos,
                    total,
                    cliente_id
                };
                const ventaExist = yield Venta_1.Venta.findByPk(pk);
                // const userExist: UsuarioI | null = await Usuario.findOne(
                //     {
                //         where: { id: pk}
                //     }
                // );
                if (!ventaExist)
                    return res.status(500).json({ msg: "La Venta No existe" });
                yield Venta_1.Venta.update(body, {
                    where: { id: pk }
                }); // select update from usuarios where id=pk
            }
            catch (error) {
            }
            const venta = yield Venta_1.Venta.findByPk(pk);
            if (venta)
                return res.status(200).json({ venta });
        });
    }
    deleteVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: pk } = req.params;
            try {
                const ventaExist = yield Venta_1.Venta.findByPk(pk);
                if (!ventaExist)
                    return res.status(500).json({ msg: "La Venta No existe" });
                yield Venta_1.Venta.destroy({
                    where: { id: pk }
                });
                res.status(200).json({ msg: "Venta Eliminada" });
            }
            catch (error) {
            }
        });
    }
}
exports.VentaController = VentaController;
