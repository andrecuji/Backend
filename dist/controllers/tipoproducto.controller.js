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
exports.TipoproductoController = void 0;
const Tipoproducto_1 = require("../models/Tipoproducto");
class TipoproductoController {
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send('hola, metodo test para Tipoproducto');
            }
            catch (error) {
            }
        });
    }
    getAllTipoproducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tipoproducto = yield Tipoproducto_1.Tipoproducto.findAll(
                // {
                //       where: {activo: true}
                //  }
                ); // select * from ventas;
                res.status(200).json({ tipoproducto });
            }
            catch (error) {
            }
        });
    }
    getOneTipoproducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: idParam } = req.params;
            try {
                const tipoproducto = yield Tipoproducto_1.Tipoproducto.findOne({
                    where: {
                        id: idParam,
                    }
                });
                if (tipoproducto) {
                    res.status(200).json(tipoproducto);
                }
                else
                    return res.status(300).json({ msg: "El Tipo Producto no existe" });
            }
            catch (error) {
                res.status(500).json({ msg: "Error Internal" });
            }
        });
    }
    createTipoproducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            try {
                let body = {
                    name
                };
                const tipoproducto = yield Tipoproducto_1.Tipoproducto.create(Object.assign({}, body));
                res.status(200).json({ tipoproducto });
            }
            catch (error) {
            }
        });
    }
    updateTipoproducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: pk } = req.params;
            const { id, name } = req.body;
            try {
                let body = {
                    name
                };
                const tipoproductoExist = yield Tipoproducto_1.Tipoproducto.findByPk(pk);
                // const userExist: UsuarioI | null = await Usuario.findOne(
                //     {
                //         where: { id: pk}
                //     }
                // );
                if (!tipoproductoExist)
                    return res.status(500).json({ msg: "El Tipo Producto No existe" });
                yield Tipoproducto_1.Tipoproducto.update(body, {
                    where: { id: pk }
                }); // select update from usuarios where id=pk
            }
            catch (error) {
            }
            const tipoproducto = yield Tipoproducto_1.Tipoproducto.findByPk(pk);
            if (tipoproducto)
                return res.status(200).json({ tipoproducto });
        });
    }
    deleteTipoproducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: pk } = req.params;
            try {
                const tipoproductoExist = yield Tipoproducto_1.Tipoproducto.findByPk(pk);
                if (!tipoproductoExist)
                    return res.status(500).json({ msg: "El Tipo Producto No existe" });
                yield Tipoproducto_1.Tipoproducto.destroy({
                    where: { id: pk }
                });
                res.status(200).json({ msg: "Tipo Producto Eliminado" });
            }
            catch (error) {
            }
        });
    }
}
exports.TipoproductoController = TipoproductoController;
