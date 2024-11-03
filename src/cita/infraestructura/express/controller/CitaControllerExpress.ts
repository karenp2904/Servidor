import { Request, Response } from 'express'

import CitaControllerExpressPort from '../../../dominio/port/driver/expressDriver/controllerExpress/CitaControllerExpressPort'
import CitaUseCase from '../../../aplicacion/useCase/CitaUseCase'

export default class CitaControllerExpress implements CitaControllerExpressPort {

    
    constructor(private readonly citaUseCase: CitaUseCase){}

    public obtenerCita(req: Request, res: Response): void {
        const citaa= req.body
        const respuesta= this.citaUseCase.buscarCita(citaa)
        res.status(200).json({ message: 'Cita', data: respuesta })
    }


    public agendarCita(req: Request, res: Response): void {
        const citaAgendar= req.body
        const respuesta= this.citaUseCase.agendarCita(citaAgendar)
        res.status(200).json({ message: 'agendarCita', data: respuesta })
    }

    public cancelarCita(req: Request, res: Response): void {
        const citaCancelar= req.body
        const respuesta= this.citaUseCase.eliminarCita(citaCancelar)
        res.status(200).json({ message: 'eliminarCita', data: respuesta })
    }
    
    public modificarCita(req: Request, res: Response): void {
        const citaModificar= req.body
        const respuesta= this.citaUseCase.modificarCita(citaModificar)
        res.status(200).json({ message: 'modificarCita', data: respuesta })
    }





}