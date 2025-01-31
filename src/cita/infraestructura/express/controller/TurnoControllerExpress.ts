import { Request, Response } from 'express'

import TurnoControllerExpressPort from "../../../dominio/port/driver/expressDriver/controllerExpress/TurnoControllerExpressPort"
import ColaCitaUseCasePort from '../../../dominio/port/driver/useCaseDriver/ColaCitaUseCasePort'
import AgenteUseCasePort from '../../../dominio/port/driver/useCaseDriver/AgenteUseCasePort'

export default class TurnoControllerExpress implements TurnoControllerExpressPort {

    
    constructor(
        private readonly colaUseCase: ColaCitaUseCasePort,
        private agenteUseCase: AgenteUseCasePort

    ){}

    public async obtenerTurnos(_req: Request, res: Response): Promise<void> {
        try {
            const respuesta = await this.colaUseCase.listaTurnos();
            res.status(200).json({ message: 'Cita', data: respuesta });
        } catch (error) {
            console.error("Error al obtener los turnos:", error);
            res.status(500).json({ message: 'Error al obtener los turnos', error: error });
        }
    }
    

    public async obtenerTurno(req: Request, res: Response):  Promise<void> {
        const {numerocita}= req.body
        const respuesta= await this.colaUseCase.obtenerTurno(numerocita)
        res.status(200).json({ message: 'Cita', data: respuesta })
    }

    public async obtenerTurnoId(req: Request, res: Response):  Promise<void> {
        const {idTurno}= req.body
        const respuesta= await this.colaUseCase.obtenerTurnoId(idTurno)
        res.status(200).json({ message: 'Cita', data: respuesta })
    }

    public async  modificarCola(req: Request, res: Response):  Promise<void> {
        try {
            const { turnos } = req.body;
            const respuesta = await this.agenteUseCase.modificarCola(turnos);
    
            // Responder según el resultado
            if (respuesta) {
                res.status(200).json({ message: 'Cita modificada exitosamente.', data: respuesta });
            } else {
                res.status(500).json({ message: 'Error al modificar la cola de turnos.' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error interno en el servidor.', error: error });
        }
    }

    public async finalizarTurno(req: Request, res: Response):  Promise<void> {
            const {numerocita}= req.body
            const respuesta= await this.agenteUseCase.eliminarTurno(numerocita)
            res.status(200).json({ message: 'Cita', data: respuesta })
    }
    

}