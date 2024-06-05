import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Tipoproducto, TipoproductoI } from '../models/Tipoproducto';

export class TipoproductoController {

    public async getAllTipoproducto(req: Request, res:Response){
        try {
            const tipoproducto: TipoproductoI[] = await Tipoproducto.findAll(
                {
                 
                   where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({tipoproducto})
        } catch (error) {

        }
    }
    
    public async getOneTipoproducto(req: Request, res:Response){
       // const { id: idParam } = req.params
       try {
        const tipoproducto:TipoproductoI | null = await Tipoproducto.findOne(
            {
                where: { 
                    id: req.params.id,
                    activo: true
                }
            }
        )
        if (tipoproducto){
            res.status(200).json(tipoproducto)
        } else return  res.status(300).json({msg: "Tipo de producto no existe"})

    } catch (error) {
        res.status(500).json({msg: "Error Internal"})
    }
}

    public async createTipoproducto(req: Request, res:Response){
        const {
           nombre
        } = req.body;

        try {
            let body:TipoproductoI = {
                nombre
            } 

            const tipoproducto:TipoproductoI = await Tipoproducto.create({...body});
            res.status(200).json({tipoproducto});

        } catch (error) {

        }

    }

    public async updateTipoproducto(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            nombre
        }= req.body

        try {
            let body:TipoproductoI = {
                nombre
            } 

            //const tipoproductoExist: TipoproductoI | null = await Tipoproducto.findByPk(pk);
            const tipoproductoExist: TipoproductoI | null = await Tipoproducto.findOne(
                {
                    where: { id: pk}
                }
            );

            if(!tipoproductoExist) return res.status(500).json({msg:"El Tipo Producto No existe"})
            await Tipoproducto.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk



        } catch (error) {

        }
        const tipoproducto: TipoproductoI | null = await Tipoproducto.findByPk(pk);
        if(tipoproducto) return res.status(200).json({tipoproducto})

    }

    public async ocultarTipoproducto(req: Request, res:Response){
        const { id:pk } = req.params;
        try {
            const tipoproductoExist: TipoproductoI | null = await Tipoproducto.findByPk(pk);
            if(!tipoproductoExist) return res.status(500).json({msg:"El tipo de este producto no existe"})
            await Tipoproducto.update(
                {activo: false},
                {
                    where: {id:pk}
                }
                
            )
            res.status(200).json({msg:"Tipo producto Eliminado"})
        } catch (error) {

        }

}

    public async deleteTipoproducto(req: Request, res:Response){
        const { id:pk } = req.params;
        try {
            const tipoproductoExist: TipoproductoI | null = await Tipoproducto.findByPk(pk);
            if(!tipoproductoExist) return res.status(500).json({msg:"El Tipo Producto No existe"})
            await Tipoproducto.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Tipo Producto Eliminado"})
        } catch (error) {

        }

    } 


}