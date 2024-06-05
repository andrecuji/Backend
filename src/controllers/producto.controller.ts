import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Producto, ProductoI } from '../models/Producto';

export class ProductoController {

    public async getAllProducto(req: Request, res:Response){
        try {
            const producto: ProductoI[] = await Producto.findAll(
                {
                 
                   where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({producto})
        } catch (error) {

        }
    }


    public async getOneProducto(req: Request, res:Response){
        // const { id: idParam } = req.params
         try {
             const producto:ProductoI | null = await Producto.findOne(
                 {
                     where: { 
                         id: req.params.id,
                         activo: true
                     }
                 }
             )
             if (producto){
                 res.status(200).json(producto)
             } else return  res.status(300).json({msg: "El producto no existe"})
 
         } catch (error) {
             res.status(500).json({msg: "Error Internal"})
         }
     }
    public async createProducto(req: Request, res:Response){
        const {
            nombre,
            marca,
            precio,
            stock,
            cantidad,
            tipoproducto_id
        } = req.body;

        try {
            let body:ProductoI = {
                nombre,
                marca,
                precio,
                stock,
                cantidad,
                tipoproducto_id
            } 

            const producto:ProductoI = await Producto.create({...body});
            res.status(200).json({producto});

        } catch (error) {

        }

    }

    public async updateProducto(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            nombre,
                marca,
                precio,
                stock,
                cantidad,
                tipoproducto_id
        }= req.body

        try {
            let body:ProductoI = {
                nombre,
                marca,
                precio,
                stock,
                cantidad,
                tipoproducto_id
            } 

           // const productoExist: ProductoI | null = await Producto.findByPk(pk);
            const productoExist: ProductoI | null = await Producto.findOne(
                {
                    where: { id: pk,
                        activo: true
                    }
                }
            );

            if(!productoExist) return res.status(500).json({msg:"El Prodcuto No existe"})
            await Producto.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk



        } catch (error) {

        }
        const producto: ProductoI | null = await Producto.findByPk(pk);
        if(producto) return res.status(200).json({producto})

    }

    public async ocultarProducto(req: Request, res:Response){
        const { id:pk } = req.params;
        try {
            const productoExist: ProductoI | null = await Producto.findByPk(pk);
            if(!productoExist) return res.status(500).json({msg:"El Producto No existe"})
            await Producto.update(
                {activo: false},
                {
                    where: {id:pk}
                }
                
            )
            res.status(200).json({msg:"Producto Eliminado"})
        } catch (error) {

        }
    }

    public async deleteProducto(req: Request, res:Response){
        const { id:pk } = req.params;
        try {
            const productoExist: ProductoI | null = await Producto.findByPk(pk);
            if(!productoExist) return res.status(500).json({msg:"El Producto No existe"})
            await Producto.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Producto Eliminada"})
        } catch (error) {

        }

    } 
}