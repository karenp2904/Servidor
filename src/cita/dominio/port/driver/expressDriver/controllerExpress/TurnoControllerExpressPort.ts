import { Request , Response} from "express"

export default interface TurnoControllerExpressPort{
    obtenerTurnos(req: Request, res: Response):void
    obtenerTurno(req: Request, res: Response):void
    modificarCola(req: Request, res: Response):void
    finalizarTurno(req: Request, res: Response):void



}