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
exports.ClienteController = void 0;
const Cliente_1 = require("../models/Cliente");
class ClienteController {
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send('hola, metodo test para Cliente');
            }
            catch (error) {
            }
        });
    }
    getAllCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cliente = yield Cliente_1.Cliente.findAll(
                // {
                //   where: {activo: true}
                //}
                ); // select * from clientes;
                res.status(200).json({ cliente });
            }
            catch (error) {
            }
        });
    }
    getOneCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: idParam } = req.params;
            try {
                const cliente = yield Cliente_1.Cliente.findOne({
                    where: {
                        id: idParam,
                    }
                });
                if (cliente) {
                    res.status(200).json(cliente);
                }
                else
                    return res.status(300).json({ msg: "El Cliente no existe" });
            }
            catch (error) {
                res.status(500).json({ msg: "Error Internal" });
            }
        });
    }
    createCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, direccion, telefono, correo, password } = req.body;
            try {
                let body = {
                    nombre,
                    direccion,
                    telefono,
                    correo,
                    password
                };
                const cliente = yield Cliente_1.Cliente.create(Object.assign({}, body));
                res.status(200).json({ cliente });
            }
            catch (error) {
            }
        });
    }
    updateCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: pk } = req.params;
            const { id, nombre, direccion, telefono, correo, password } = req.body;
            try {
                let body = {
                    nombre,
                    direccion,
                    telefono,
                    correo,
                    password
                };
                const clienteExist = yield Cliente_1.Cliente.findByPk(pk);
                // const userExist: UsuarioI | null = await Usuario.findOne(
                //     {
                //         where: { id: pk}
                //     }
                // );
                if (!clienteExist)
                    return res.status(500).json({ msg: "El Cliente No existe" });
                yield Cliente_1.Cliente.update(body, {
                    where: { id: pk }
                }); // select update from usuarios where id=pk
            }
            catch (error) {
            }
            const cliente = yield Cliente_1.Cliente.findByPk(pk);
            if (cliente)
                return res.status(200).json({ cliente });
        });
    }
    deleteCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: pk } = req.params;
            try {
                const clienteExist = yield Cliente_1.Cliente.findByPk(pk);
                if (!clienteExist)
                    return res.status(500).json({ msg: "El Cliente No existe" });
                yield Cliente_1.Cliente.destroy({
                    where: { id: pk }
                });
                res.status(200).json({ msg: "Cliente Eliminada" });
            }
            catch (error) {
            }
        });
    }
}
exports.ClienteController = ClienteController;
