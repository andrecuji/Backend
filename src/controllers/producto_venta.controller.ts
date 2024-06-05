import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Producto_venta, Producto_ventaI } from '../models/Producto_venta';

export class Producto_ventaController {

    public async getAllProducto_venta(req: Request, res:Response){
        try {
            const producto_venta: Producto_ventaI[] = await Producto_venta.findAll(
                {
                 
                   where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({producto_venta})
        } catch (error) {

        }
    }

    public async getOneProducto_venta(req: Request, res:Response){
        //const { id: idParam } = req.params
        try {
            const producto_venta:Producto_ventaI | null = await Producto_venta.findOne(
                {
                    where: { 
                        id: req.params.id,
                        activo: true
                    }
                }
            )
            if (producto_venta){
                res.status(200).json(producto_venta)
            } else return  res.status(300).json({msg: "El Producto Venta no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async createProducto_venta(req: Request, res:Response){
        const {
            cantidad,
            precio,
            total,
            producto_id,
            venta_id,
        } = req.body;

        try {
            let body:Producto_ventaI = {
                cantidad,
            precio,
            total,
            producto_id,
            venta_id,
            } 

            const producto_venta:Producto_ventaI = await Producto_venta.create({...body});
            res.status(200).json({producto_venta});

        } catch (error) {

        }

    }

    public async updateProducto_venta(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            cantidad,
            precio,
            total,
            producto_id,
            venta_id,
        }= req.body

        try {
            let body:Producto_ventaI = {
                cantidad,
                precio,
                total,
                producto_id,
                venta_id,
            } 

            //const producto_ventaExist: Producto_ventaI | null = await Producto_venta.findByPk(pk);
            const producto_ventaExist: Producto_ventaI | null = await Producto_venta.findOne(
                {
                    where: { id: pk,
                        activo: true}
                }
            );

            if(!producto_ventaExist) return res.status(500).json({msg:"El Prodcuto Venta No existe"})
            await Producto_venta.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk



        } catch (error) {

        }
        const producto_venta: Producto_ventaI | null = await Producto_venta.findByPk(pk);
        if(producto_venta) return res.status(200).json({producto_venta})

    }

    public async ocultarProducto_venta(req: Request, res:Response){
        const { id:pk } = req.params;
        try {
            const producto_ventaExist: Producto_ventaI | null = await Producto_venta.findByPk(pk);
            if(!producto_ventaExist) return res.status(500).json({msg:"La venta de este producto No existe"})
            await Producto_venta.update(
                {activo: false},
                {
                    where: {id:pk}
                }
                
            )
            res.status(200).json({msg:"Venta del producto Eliminada"})
        } catch (error) {

        }

    }

    public async deleteProducto_venta(req: Request, res:Response){
        const { id:pk } = req.params;
        try {
            const producto_ventaExist: Producto_ventaI | null = await Producto_venta.findByPk(pk);
            if(!producto_ventaExist) return res.status(500).json({msg:"El Producto Venta No existe"})
            await Producto_venta.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Producto Venta Eliminada"})
        } catch (error) {

        }

    }


}