"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioControllerExpress {
    userUseCase;
    constructor(userUseCase) {
        this.userUseCase = userUseCase;
    }
    async validarCredenciales(req, res) {
        try {
            const { usuario, password } = req.body;
            const credencialesValidas = await this.userUseCase.validarCredenciales(usuario, password);
            console.log(credencialesValidas);
            if (credencialesValidas) {
                res.status(200).json({ message: 'Credenciales válidas', data: credencialesValidas });
            }
            else {
                res.status(401).json({ message: 'Credenciales inválidas' });
            }
        }
        catch (error) {
            console.error('Error en validarCredenciales:', error);
            res.status(500).json({ message: 'Error al validar credenciales' });
        }
    }
}
exports.default = UsuarioControllerExpress;
