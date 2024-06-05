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
exports.Producto_ventaController = void 0;
const Producto_venta_1 = require("../models/Producto_venta");
class Producto_ventaController {
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send('hola, metodo test para Producto_venta');
            }
            catch (error) {
            }
        });
    }
    getAllProducto_venta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const producto_venta = yield Producto_venta_1.Producto_venta.findAll(
                // {
                //     where: {activo: true}
                // }
                ); // select * from Producto_venta;
                res.status(200).json({ producto_venta });
            }
            catch (error) {
            }
        });
    }
    getOneProducto_venta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: idParam } = req.params;
            try {
                const producto_venta = yield Producto_venta_1.Producto_venta.findOne({
                    where: {
                        id: idParam,
                    }
                });
                if (producto_venta) {
                    res.status(200).json(producto_venta);
                }
                else
                    return res.status(300).json({ msg: "El Producto Venta no existe" });
            }
            catch (error) {
                res.status(500).json({ msg: "Error Internal" });
            }
        });
    }
    createProducto_venta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cantidad, precio, total, producto_id, venta_id, } = req.body;
            try {
                let body = {
                    cantidad,
                    precio,
                    total,
                    producto_id,
                    venta_id,
                };
                const producto_venta = yield Producto_venta_1.Producto_venta.create(Object.assign({}, body));
                res.status(200).json({ producto_venta });
            }
            catch (error) {
            }
        });
    }
    updateProducto_venta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: pk } = req.params;
            const { id, cantidad, precio, total, producto_id, venta_id, } = req.body;
            try {
                let body = {
                    cantidad,
                    precio,
                    total,
                    producto_id,
                    venta_id,
                };
                const producto_ventaExist = yield Producto_venta_1.Producto_venta.findByPk(pk);
                // const userExist: UsuarioI | null = await Usuario.findOne(
                //     {
                //         where: { id: pk}
                //     }
                // );
                if (!producto_ventaExist)
                    return res.status(500).json({ msg: "El Prodcuto Venta No existe" });
                yield Producto_venta_1.Producto_venta.update(body, {
                    where: { id: pk }
                }); // select update from usuarios where id=pk
            }
            catch (error) {
            }
            const producto_venta = yield Producto_venta_1.Producto_venta.findByPk(pk);
            if (producto_venta)
                return res.status(200).json({ producto_venta });
        });
    }
    deleteProducto_venta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: pk } = req.params;
            try {
                const producto_ventaExist = yield Producto_venta_1.Producto_venta.findByPk(pk);
                if (!producto_ventaExist)
                    return res.status(500).json({ msg: "El Producto Venta No existe" });
                yield Producto_venta_1.Producto_venta.destroy({
                    where: { id: pk }
                });
                res.status(200).json({ msg: "Producto Venta Eliminada" });
            }
            catch (error) {
            }
        });
    }
}
exports.Producto_ventaController = Producto_ventaController;
