"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioUseCase {
    usuarioService;
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    validarCredenciales = async (usuario, contraseña) => {
        try {
            const esValido = await this.usuarioService.validarLogin(usuario, contraseña);
            return esValido;
        }
        catch (error) {
            console.error('Error en validarCredenciales:', error);
            return false;
        }
    };
}
exports.default = UsuarioUseCase;
