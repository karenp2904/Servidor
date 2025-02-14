import { Request , Response} from "express"

export default interface CitaControllerExpressPort{
    agendarCita(req: Request, res: Response):void
    cancelarCita(req: Request, res: Response):void
    modificarCita(req: Request, res: Response):void
    obtenerCita(req: Request, res: Response):void
    completarCita(req: Request, res: Response):void

    citasAsistencia(req: Request, res: Response):void
    citasNoAsistencia(req: Request, res: Response):void

}