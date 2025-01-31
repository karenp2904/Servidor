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

    public async obtenerCita(req: Request, res: Response):  Promise<void> {
        const {numerocita}= req.body
        const respuesta= await this.citaUseCase.buscarCita(numerocita)
        res.status(200).json({ message: 'Cita', data: respuesta })
    }


    public async agendarCita(req: Request, res: Response): Promise<void> {
        try {
            const citaAgendar = req.body;
    
            console.log(req.body)
            if (!citaAgendar.numeroCita || !citaAgendar.fecha || !citaAgendar.hora) {
                res.status(400).json({ message: 'Faltan datos requeridos para agendar la cita' });
                return;
            }
    
            const respuesta = await this.citaUseCase.agendarCita(citaAgendar, citaAgendar.cliente);
    
            res.status(200).json({ message: 'Cita agendada con éxito', data: respuesta });
        } catch (error) {
            console.error('Error al agendar cita:', error);
            // Responde con un error en caso de que algo falle
            res.status(500).json({ message: 'Error al agendar la cita', error: error });
        }
    }
    

    public async cancelarCita(req: Request, res: Response):  Promise<void> {
        const {numerocita}= req.body
        const respuesta= await this.citaUseCase.eliminarCita(numerocita)
        res.status(200).json({ message: 'eliminarCita', data: respuesta })
    }
    
    public async modificarCita(req: Request, res: Response):  Promise<void> {
        const citaModificar= req.body
        const respuesta= await this.citaUseCase.modificarCita(citaModificar)
        res.status(200).json({ message: 'modificarCita', data: respuesta })
    }

    public async completarCita(req: Request, res: Response):  Promise<void> {
        const citaModificar= req.body
        console.log(citaModificar)
        const respuesta= await this.agenteUseCase.completarCita(citaModificar)
        res.status(200).json({ message: 'modificarCita', data: respuesta })
    }


    public async citasAsistencia(_req: Request, res: Response):  Promise<void> {
        const respuesta= await this.adminUseCase.listaCitasConAsistencia()
        console.log(respuesta)
        console.log('en asistencia')
        res.status(200).json({ message: 'citaAsistencia', data: respuesta })
    }

    public async citasNoAsistencia(_req: Request, res: Response):  Promise<void> {
        const respuesta= await this.adminUseCase.listaCitasSinAsistencia()
        console.log('en no asistencia')
        console.log(respuesta)
        res.status(200).json({ message: 'citaNoAsistencia', data: respuesta })
    }





}