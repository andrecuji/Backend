import {  Request, Response } from 'express';
//import { where } from 'sequelize/types';

import { Venta, VentaI } from '../models/Venta';

export class VentaController {

    public async getAllVenta(req: Request, res:Response){
        try {
            const venta: VentaI[] = await Venta.findAll(
                {
                 
                   where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({venta})
        } catch (error) {

        }
    
    }


    public async getOneVenta(req: Request, res:Response){
        // const { id: idParam } = req.params
         try {
             const venta:VentaI | null = await Venta.findOne(
                 {
                     where: { 
                         id: req.params.id,
                         activo: true
                     }
                 }
             )
             if (venta){
                 res.status(200).json(venta)
             } else return  res.status(300).json({msg: "La venta no existe"})
 
         } catch (error) {
             res.status(500).json({msg: "Error Internal"})
         }
     }

    public async createVenta(req: Request, res:Response){
        const {
            fecha,
            subtotal,  
            impuestos,
            descuentos,
            total,
            cliente_id,
        } = req.body;

        try {
            let body:VentaI = {
                fecha,
                subtotal,  
                impuestos,
                descuentos,
                total,
                cliente_id,
            } 

            const venta:VentaI = await Venta.create({...body});
            res.status(200).json({venta});

        } catch (error: any) {
            console.error(error); // Imprime el error en la consola del servidor
            res.status(500).json({ msg: "Error Internal", error: error.message });
        }
        
}

    public async updateVenta(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            fecha,
            subtotal,  
            impuestos,
            descuentos,
            total,
            cliente_id
        }= req.body

        try {
            let body:VentaI = {
                fecha,
                subtotal,  
                impuestos,
                descuentos,
                total,
                cliente_id
            } 

            //const ventaExist: VentaI | null = await Venta.findByPk(pk);
            const ventaExist: VentaI | null = await Venta.findOne(
                {
                    where: { id: pk,
                    activo: true}
                }
            );

            if(!ventaExist) return res.status(500).json({msg:"La Venta No existe"})
            await Venta.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk



        } catch (error) {

        }
        const venta: VentaI | null = await Venta.findByPk(pk);
        if(venta) return res.status(200).json({venta})

    }


    public async ocultarVenta(req: Request, res:Response){
        const { id:pk } = req.params;
        try {
            const ventaExist: VentaI | null = await Venta.findByPk(pk);
            if(!ventaExist) return res.status(500).json({msg:"La venta no existe"})
            await Venta.update(
                {activo: false},
                {
                    where: {id:pk}
                }
                
            )
            res.status(200).json({msg:"Venta Eliminada"})
        } catch (error: any) {
            console.error(error); // Imprime el error en la consola del servidor
            res.status(500).json({ msg: "Error Internal", error: error.message });
        }

}


    public async deleteVenta(req: Request, res:Response){
        const { id:pk } = req.params;
        try {
            const ventaExist: VentaI | null = await Venta.findByPk(pk);
            if(!ventaExist) return res.status(500).json({msg:"La Venta No existe"})
            await Venta.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Venta Eliminada"})
        } catch (error) {

        }

    } 










}
