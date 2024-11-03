import { Request, Response } from 'express'
import ClienteUseCase from '../../../aplicacion/useCase/ClienteUseCase';
import ClienteControllerExpressPort from '../../../dominio/port/driver/expressDriver/controllerExpress/ClienteControllerExpressPort';

export default class ClienteControllerExpress implements ClienteControllerExpressPort {

    constructor(private readonly clienteUseCase: ClienteUseCase){}

    public obtenerCliente(req: Request, res: Response): void {
        try {
            const numerCita= req.body
            const respuesta = this.clienteUseCase.obtenerClientePorCita(numerCita); 
            res.status(200).json({ message: 'Cliente', data: respuesta });
        } catch (error) {
            console.error('Error en obtenerCliente:', error);
            res.status(500).json({ message: 'Error al obtenerCliente ', error: error });
        }
    }

}