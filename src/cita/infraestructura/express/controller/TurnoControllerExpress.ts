import { Request, Response } from 'express'

import TurnoControllerExpressPort from "../../../dominio/port/driver/expressDriver/controllerExpress/TurnoControllerExpressPort"
import ColaCitaUseCasePort from '../../../dominio/port/driver/useCaseDriver/ColaCitaUseCasePort'
import AgenteUseCasePort from '../../../dominio/port/driver/useCaseDriver/AgenteUseCasePort'

export default class TurnoControllerExpress implements TurnoControllerExpressPort {

    
    constructor(
        private readonly colaUseCase: ColaCitaUseCasePort,
        private agenteUseCase: AgenteUseCasePort

    ){}

    public obtenerTurnos(_req: Request, res: Response): void {
        const respuesta= this.colaUseCase.listaTurnos()
        res.status(200).json({ message: 'Cita', data: respuesta }) 
    }

    public obtenerTurno(req: Request, res: Response): void {
        const numerCita= req.body
        const respuesta= this.colaUseCase.obtenerTurno(numerCita)
        res.status(200).json({ message: 'Cita', data: respuesta })
    }

    public modificarCola(req: Request, res: Response): void {
    const citas= req.body
        const respuesta= this.agenteUseCase.modificarCola(citas)
        res.status(200).json({ message: 'Cita', data: respuesta })
    }

    public finalizarTurno(req: Request, res: Response): void {
        const citas= req.body
            const respuesta= this.agenteUseCase.eliminarTurno(citas)
            res.status(200).json({ message: 'Cita', data: respuesta })
    }
    

}