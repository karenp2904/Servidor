import { Request, Response } from 'express'
import ClienteControllerExpressPort from '../../../dominio/port/driver/expressDriver/controllerExpress/ClienteControllerExpressPort';
import ClienteUseCasePort from '../../../dominio/port/driver/useCaseDriver/ClienteUseCasePort';

export default class ClienteControllerExpress implements ClienteControllerExpressPort {

    constructor(private readonly clienteUseCase: ClienteUseCasePort){}

    public async obtenerCliente(req: Request, res: Response): Promise<void> {
        try {
            const {numerocita}= req.body
            const respuesta = await this.clienteUseCase.obtenerClientePorCita(numerocita); 
            res.status(200).json({ message: 'Cliente', data: respuesta });
        } catch (error) {
            console.error('Error en obtenerCliente:', error);
            res.status(500).json({ message: 'Error al obtenerCliente ', error: error });
        }
    }

}