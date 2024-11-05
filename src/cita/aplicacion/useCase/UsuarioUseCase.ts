import UsuarioServicePort from "../../dominio/port/driver/serviceDriver/UsuarioServicePort";
import UsuarioUseCasePort from "../../dominio/port/driver/useCaseDriver/UsuarioUseCasePort";

export default class UsuarioUseCase implements UsuarioUseCasePort{

    constructor(private readonly usuarioService: UsuarioServicePort) {}

    public validarCredenciales = async (usuario: string, contraseña: string): Promise<boolean> => {
        try {
            const esValido = await this.usuarioService.validarLogin(usuario, contraseña);
            return esValido;
        } catch (error) {
            console.error('Error en validarCredenciales:', error);
            return false;
        }
    }

}
