import { Request, Response } from 'express'
import UsuarioControllerExpressPort from '../../../dominio/port/driver/expressDriver/controllerExpress/UsuarioControllerExpressPort';
import UsuarioUseCase from '../../../aplicacion/useCase/UsuarioUseCase';


export default class UsuarioControllerExpress implements UsuarioControllerExpressPort {

    constructor(private readonly userUseCase: UsuarioUseCase ){}


    public validarCredenciales(req: Request, res: Response): void {
        try {
            const { usuario, password } = req.body; 
            const respuesta = this.userUseCase.validarCredenciales(usuario, password); 
            res.status(200).json({ message: 'Credenciales validadas', data: respuesta });
        } catch (error) {
            console.error('Error en validarCredenciales:', error);
            res.status(500).json({ message: 'Error al validar credenciales', error: error });
        }
    }


}