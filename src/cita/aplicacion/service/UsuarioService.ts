import UsuarioRepositoryPort from "../../dominio/port/driven/UsuarioRepositoryPort";
import UsuarioServicePort from "../../dominio/port/driver/serviceDriver/UsuarioServicePort";

export default class UsuarioService implements UsuarioServicePort{
    constructor(private readonly userRepository: UsuarioRepositoryPort) {}
    public validarLogin = async (usuario: string, contraseña: string): Promise<boolean> => {
        try {
            const userDataValidate= await this.userRepository.validarUsuario(usuario,contraseña);
            return userDataValidate;
        } catch (error) {
            console.error("Error al validar el login:", error);
            return false;
        }
    };
}
