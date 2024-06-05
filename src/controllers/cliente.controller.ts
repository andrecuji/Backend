import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Cliente, ClienteI } from '../models/Cliente';

export class ClienteController {

    public async getAllCliente(req: Request, res:Response){
        try {
            const cliente: ClienteI[] = await Cliente.findAll(
                {
                 
                   where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({cliente})
        } catch (error) {

        }
    }

    public async getOneCliente(req: Request, res:Response){
       // const { id: idParam } = req.params
        try {
            const cliente:ClienteI | null = await Cliente.findOne(
                {
                    where: { 
                        id: req.params.id,
                        activo: true
                    }
                }
            )
            if (cliente){
                res.status(200).json(cliente)
            } else return  res.status(300).json({msg: "El Cliente no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async createCliente(req: Request, res:Response){
        const {
            nombre,
            direccion,
            telefono,
            correo,
            password
        } = req.body;

        try {
            let body:ClienteI = {
                nombre,
                direccion,
                telefono,
                correo,
                password,
            } 

            const cliente:ClienteI = await Cliente.create({...body});
            res.status(200).json({cliente});

        } catch (error) {

        }

    }

    public async updateCliente(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
                nombre,
                direccion,
                telefono,
                correo,
                password,

        }= req.body

        try {
            let body:ClienteI = {
                nombre,
                direccion,
                telefono,
                correo,
                password,
                
            } 

            //const clienteExist: ClienteI | null = await Cliente.findByPk(pk);
            const clienteExist: ClienteI | null = await Cliente.findOne(
             {
                  where: { id: pk , 
                    activo: true}
             }
           );

            if(!clienteExist) return res.status(500).json({msg:"El Cliente No existe"})
            await Cliente.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk



        } catch (error) {

        }
        const cliente: ClienteI | null = await Cliente.findByPk(pk);
        if(cliente) return res.status(200).json({cliente})

    }

    

    public async ocultarCliente(req: Request, res:Response){
            const { id:pk } = req.params;
            try {
                const clienteExist: ClienteI | null = await Cliente.findByPk(pk);
                if(!clienteExist) return res.status(500).json({msg:"El Cliente No existe"})
                await Cliente.update(
                    {activo: false},
                    {
                        where: {id:pk}
                    }
                    
                )
                res.status(200).json({msg:"Cliente Eliminada"})
            } catch (error) {
    
            }

    } 

    public async deleteCliente(req: Request, res:Response){
        const { id:pk } = req.params;
        try {
            const clienteExist: ClienteI | null = await Cliente.findByPk(pk);
            if(!clienteExist) return res.status(500).json({msg:"El Cliente No existe"})
            await Cliente.destroy(
                {
                    where: {id:pk}
                }
                
            )
            res.status(200).json({msg:"Cliente Eliminada"})
        } catch (error) {

        }
    }






}
