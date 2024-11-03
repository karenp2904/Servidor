import { Request, Response } from 'express'

import ColaCitasUseCase from "../../../aplicacion/useCase/ColaCitasUseCase"
import TurnoControllerExpressPort from "../../../dominio/port/driver/expressDriver/controllerExpress/TurnoControllerExpressPort"

export default class TurnoControllerExpress implements TurnoControllerExpressPort {

    
    constructor(private readonly colaUseCase: ColaCitasUseCase){}

    public obtenerTurnos(_req: Request, res: Response): void {
        const respuesta= this.colaUseCase.listaCitas()
        res.status(200).json({ message: 'Cita', data: respuesta }) 
    }

    public obtenerTurno(req: Request, res: Response): void {
        const numerCita= req.body
        const respuesta= this.colaUseCase.obtenerTurno(numerCita)
        res.status(200).json({ message: 'Cita', data: respuesta })
    }

    public modificarCola(req: Request, res: Response): void {
    const citas= req.body
        const respuesta= this.colaUseCase.modificarCola(citas)
        res.status(200).json({ message: 'Cita', data: respuesta })
    }

}