import { Request, Response } from 'express'
import UsuarioControllerExpressPort from '../../../dominio/port/driver/expressDriver/controllerExpress/UsuarioControllerExpressPort';
import UsuarioUseCasePort from '../../../dominio/port/driver/useCaseDriver/UsuarioUseCasePort';


export default class UsuarioControllerExpress implements UsuarioControllerExpressPort {

    constructor(private readonly userUseCase: UsuarioUseCasePort ){}


    public async validarCredenciales(req: Request, res: Response): Promise<void> {
        try {
            const { usuario, password } = req.body; 
            const credencialesValidas = await this.userUseCase.validarCredenciales(usuario, password); 
            console.log(credencialesValidas)
            if (credencialesValidas) {
                res.status(200).json({ message: 'Credenciales válidas', data: credencialesValidas });
            } else {
                res.status(401).json({ message: 'Credenciales inválidas' });
            }
        } catch (error) {
            console.error('Error en validarCredenciales:', error);
            res.status(500).json({ message: 'Error al validar credenciales' });
        }
    }
    


}