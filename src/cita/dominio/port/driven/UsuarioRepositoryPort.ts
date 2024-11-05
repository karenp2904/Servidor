import UsuarioDatabaseAtributtes from "../../types/UsuarioDatabaseAttributes";
import Repository from "../repository/RepositoryInterface";

export default interface UsuarioRepositoryPort extends Repository<string, UsuarioDatabaseAtributtes> {
    validarUsuario:(username: string, password: string)=>Promise<boolean>
}