import { Request, Response } from 'express'

import CitaControllerExpressPort from '../../../dominio/port/driver/expressDriver/controllerExpress/CitaControllerExpressPort'
import CitaUseCasePort from '../../../dominio/port/driver/useCaseDriver/CitaUseCasePort'
import AgenteUseCasePort from '../../../dominio/port/driver/useCaseDriver/AgenteUseCasePort'
import AdminUseCasePort from '../../../dominio/port/driver/useCaseDriver/AdminUseCasePort'

export default class CitaControllerExpress implements CitaControllerExpressPort {

    
    constructor(
        private readonly citaUseCase: CitaUseCasePort,
        private readonly agenteUseCase: AgenteUseCasePort,
        private readonly adminUseCase: AdminUseCasePort,

    ){}

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

    public completarCita(req: Request, res: Response): void {
        const citaModificar= req.body
        const respuesta= this.agenteUseCase.completarCita(citaModificar)
        res.status(200).json({ message: 'modificarCita', data: respuesta })
    }


    public citasAsistencia(_req: Request, res: Response): void {
        const respuesta= this.adminUseCase.listaCitasConAsistencia()
        res.status(200).json({ message: 'modificarCita', data: respuesta })
    }

    public citasNoAsistencia(_req: Request, res: Response): void {
        const respuesta= this.adminUseCase.listaCitasSinAsistencia()
        res.status(200).json({ message: 'modificarCita', data: respuesta })
    }





}