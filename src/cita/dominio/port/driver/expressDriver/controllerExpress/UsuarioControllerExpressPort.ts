import { Request , Response} from "express"

export default interface UsuarioControllerExpressPort{
    validarCredenciales(req: Request, res: Response):void
}