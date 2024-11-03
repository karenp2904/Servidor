import { Request , Response} from "express"

export default interface ClienteControllerExpressPort{
    obtenerCliente(req: Request, res: Response):void
}