import UsuarioServicePort from "../../dominio/port/driver/serviceDriver/UsuarioServicePort";

export default class UsuarioService implements UsuarioServicePort{
    
    validarLogin=(usuario: string, contraseña: string) : Promise<boolean>=>{

    };
}
