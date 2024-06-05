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
exports.ProductoController = void 0;
const Producto_1 = require("../models/Producto");
class ProductoController {
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send('hola, metodo test para Producto');
            }
            catch (error) {
            }
        });
    }
    getAllProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const producto = yield Producto_1.Producto.findAll(
                //{
                //   where: {activo: true}
                //}
                ); // select * from producto;
                res.status(200).json({ producto });
            }
            catch (error) {
            }
        });
    }
    getOneProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: idParam } = req.params;
            try {
                const producto = yield Producto_1.Producto.findOne({
                    where: {
                        id: idParam,
                    }
                });
                if (producto) {
                    res.status(200).json(producto);
                }
                else
                    return res.status(300).json({ msg: "El Producto no existe" });
            }
            catch (error) {
                res.status(500).json({ msg: "Error Internal" });
            }
        });
    }
    createProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, marca, precio, stock, cantidad, tipoproducto_id } = req.body;
            try {
                let body = {
                    nombre,
                    marca,
                    precio,
                    stock,
                    cantidad,
                    tipoproducto_id
                };
                const producto = yield Producto_1.Producto.create(Object.assign({}, body));
                res.status(200).json({ producto });
            }
            catch (error) {
            }
        });
    }
    updateProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: pk } = req.params;
            const { id, nombre, marca, precio, stock, cantidad, tipoproducto_id } = req.body;
            try {
                let body = {
                    nombre,
                    marca,
                    precio,
                    stock,
                    cantidad,
                    tipoproducto_id
                };
                const productoExist = yield Producto_1.Producto.findByPk(pk);
                // const userExist: UsuarioI | null = await Usuario.findOne(
                //     {
                //         where: { id: pk}
                //     }
                // );
                if (!productoExist)
                    return res.status(500).json({ msg: "El Prodcuto No existe" });
                yield Producto_1.Producto.update(body, {
                    where: { id: pk }
                }); // select update from usuarios where id=pk
            }
            catch (error) {
            }
            const producto = yield Producto_1.Producto.findByPk(pk);
            if (producto)
                return res.status(200).json({ producto });
        });
    }
    deleteProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: pk } = req.params;
            try {
                const productoExist = yield Producto_1.Producto.findByPk(pk);
                if (!productoExist)
                    return res.status(500).json({ msg: "El Producto No existe" });
                yield Producto_1.Producto.destroy({
                    where: { id: pk }
                });
                res.status(200).json({ msg: "Producto Eliminada" });
            }
            catch (error) {
            }
        });
    }
}
exports.ProductoController = ProductoController;
