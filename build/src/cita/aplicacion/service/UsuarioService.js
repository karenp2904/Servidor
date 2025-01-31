"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    validarLogin = async (usuario, contraseña) => {
        try {
            const userDataValidate = await this.userRepository.validarUsuario(usuario, contraseña);
            return userDataValidate;
        }
        catch (error) {
            console.error("Error al validar el login:", error);
            return false;
        }
    };
}
exports.default = UsuarioService;
