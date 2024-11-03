import UsuarioUseCasePort from "../../dominio/port/driver/useCaseDriver/UsuarioUseCasePort";

export default class UsuarioUseCase implements UsuarioUseCasePort{

    public validarCredenciales = (usuario: string, contraseña: string) :boolean=> {
        return true;
    } 

}
